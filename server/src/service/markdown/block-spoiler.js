module.exports = function block_sp(md) {
  function spoilerBlock(state, startLine, endLine, silent) {
    const spoilerOpen = '[spoiler]';
    const spoilerClose = '[/spoiler]';

    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    let lineText = state.src.slice(pos, max);

    // Check if the line starts with [spoiler]
    if (!lineText.startsWith(spoilerOpen)) {
      return false;
    }

    // If we are asked not to output, just continue (used by markdown-it internals)
    if (silent) {
      return false;
    }

    // Now we search for the ending tag [/spoiler]
    let nextLine = startLine;
    let found = false;
    let contentLines = [];

    // Start collecting content after [spoiler] on the same line (if any)
    let initialContent = lineText.slice(spoilerOpen.length).trim();
    if (initialContent.includes(spoilerClose)) {
      // Edge case: closing tag on the same line
      const endPos = initialContent.indexOf(spoilerClose);
      const inner = initialContent.slice(0, endPos);
      contentLines.push(inner);
      found = true;
      state.line = startLine + 1;
    } else {
      // Otherwise, gather lines until we find [/spoiler]
      for (;;) {
        nextLine++;
        if (nextLine >= endLine) {
          // reached end without finding [/spoiler]
          return false;
        }

        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);

        const endPos = lineText.indexOf(spoilerClose);
        if (endPos !== -1) {
          // found the end tag
          contentLines.push(lineText.slice(0, endPos));
          state.line = nextLine + 1;
          found = true;
          break;
        }

        // just a regular line inside the spoiler block
        contentLines.push(lineText);
      }
    }

    if (!found) {
      // no closing tag found
      return false;
    }

    // Now we have all content between [spoiler] and [/spoiler].
    // Let's create the tokens.
    const tokenOpen = state.push('spoiler_block_open', 'details', 1);
    tokenOpen.markup = spoilerOpen;

    const summary = state.push('spoiler_block_summary', 'summary', 0);
    summary.markup = 'summary';
    summary.content = 'Spoiler';

    // Process the captured content as markdown blocks
    state.md.block.parse(contentLines.join('\n'), state.md, state.env, state.tokens);

    const tokenClose = state.push('spoiler_block_close', 'details', -1);
    tokenClose.markup = spoilerClose;

    return true;
  }

  md.block.ruler.before('paragraph', 'spoiler_block', spoilerBlock, {
      alt: ['paragraph', 'reference', 'blockquote', 'list']
    });
  
    // Updated renderers
    md.renderer.rules.spoiler_block_open = function () {
      return '<details><summary>Spoiler</summary>\n<article>\n';
    };
  
    md.renderer.rules.spoiler_block_close = function () {
      return '</article>\n</details>\n';
    };
  
    md.renderer.rules.spoiler_block_summary = function () {
      return '';
    };
};

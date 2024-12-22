(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";.cropt-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none;pointer-events:none}.cropt-container .cr-image,.cropt-container .cr-overlay{-webkit-user-select:none;user-select:none}.cropt-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;height:320px}.cropt-container .cr-boundary,.cropt-container .cr-slider-wrap{width:320px}.cropt-container .cr-viewport{position:absolute;box-sizing:border-box;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px #00000080;z-index:0}.cropt-container .cr-vp-circle{border-radius:50%}.cropt-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.cropt-container .cr-slider-wrap{margin:15px auto}.cropt-container .cr-slider{width:100%}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Poppins,Helvetica Neue,Helvetica,Arial,sans-serif;background:#09090b;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#4f46e5;text-decoration:none}a:hover{color:#4f46e5;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#27272a;color:#d4d4d8;border:1px solid #27272a;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:1px solid #4f46e5;border-radius:8px;background-color:#4f46e5;cursor:pointer;color:#fff}.primary:hover{transition-duration:.4s;background-color:#6366f1}.primary:active,.primary.active{background-color:#4f46e5}.primary:disabled{background-color:#6366f1;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#18181b}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#18181b;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border-radius:8px;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#18181b;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-banned,a.operate-banned,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#18181b}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#09090b}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#4f46e5;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#4f46e5!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#4f46e5}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#4f46e5;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.shinigami:hover a #shinigami,.account-item.shinigami.bind a #shinigami{--color-shinigami-1: #000;--color-shinigami-2: #fff}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}.cropt-container .cr-boundary{width:300px;height:300px;margin:0}.cropt-container .cr-slider-wrap{width:300px;margin:15px 0}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var T1 = Object.defineProperty;
var ka = (e) => {
  throw TypeError(e);
};
var I1 = (e, t, n) => t in e ? T1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var nt = (e, t, n) => I1(e, typeof t != "symbol" ? t + "" : t, n), zo = (e, t, n) => t.has(e) || ka("Cannot " + n);
var te = (e, t, n) => (zo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), cn = (e, t, n) => t.has(e) ? ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qr = (e, t, n, r) => (zo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), z = (e, t, n) => (zo(e, t, "access private method"), n);
function _1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yc = { exports: {} }, go = {}, wc = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr = Symbol.for("react.element"), $1 = Symbol.for("react.portal"), M1 = Symbol.for("react.fragment"), F1 = Symbol.for("react.strict_mode"), b1 = Symbol.for("react.profiler"), A1 = Symbol.for("react.provider"), z1 = Symbol.for("react.context"), D1 = Symbol.for("react.forward_ref"), U1 = Symbol.for("react.suspense"), B1 = Symbol.for("react.memo"), V1 = Symbol.for("react.lazy"), Ca = Symbol.iterator;
function H1(e) {
  return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Sc = Object.assign, Ec = {};
function Vn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ec, this.updater = n || xc;
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kc() {
}
kc.prototype = Vn.prototype;
function kl(e, t, n) {
  this.props = e, this.context = t, this.refs = Ec, this.updater = n || xc;
}
var Cl = kl.prototype = new kc();
Cl.constructor = kl;
Sc(Cl, Vn.prototype);
Cl.isPureReactComponent = !0;
var Na = Array.isArray, Cc = Object.prototype.hasOwnProperty, Nl = { current: null }, Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Cc.call(t, r) && !Nc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Vr, type: e, key: o, ref: s, props: i, _owner: Nl.current };
}
function K1(e, t) {
  return { $$typeof: Vr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function W1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ja = /\/+/g;
function Do(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? W1("" + e.key) : t.toString(36);
}
function Ei(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Vr:
        case $1:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + Do(s, 0) : r, Na(i) ? (n = "", e != null && (n = e.replace(ja, "$&/") + "/"), Ei(i, t, n, "", function(u) {
    return u;
  })) : i != null && (jl(i) && (i = K1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ja, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Na(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var l = r + Do(o, a);
    s += Ei(o, t, n, l, i);
  }
  else if (l = H1(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done; ) o = o.value, l = r + Do(o, a++), s += Ei(o, t, n, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ei(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ei(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Q1(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null }, ki = { transition: null }, Y1 = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ki, ReactCurrentOwner: Nl };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: ei, forEach: function(e, t, n) {
  ei(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ei(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ei(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = Vn;
M.Fragment = M1;
M.Profiler = b1;
M.PureComponent = kl;
M.StrictMode = F1;
M.Suspense = U1;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1;
M.act = Pc;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Nl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Cc.call(t, l) && !Nc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Vr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: z1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: A1, _context: e }, e.Consumer = e;
};
M.createElement = jc;
M.createFactory = function(e) {
  var t = jc.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: D1, render: e };
};
M.isValidElement = jl;
M.lazy = function(e) {
  return { $$typeof: V1, _payload: { _status: -1, _result: e }, _init: Q1 };
};
M.memo = function(e, t) {
  return { $$typeof: B1, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = ki.transition;
  ki.transition = {};
  try {
    e();
  } finally {
    ki.transition = t;
  }
};
M.unstable_act = Pc;
M.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
M.useContext = function(e) {
  return xe.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
M.useId = function() {
  return xe.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return xe.current.useRef(e);
};
M.useState = function(e) {
  return xe.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return xe.current.useTransition();
};
M.version = "18.3.1";
wc.exports = M;
var k = wc.exports;
const vo = /* @__PURE__ */ Lo(k), gs = /* @__PURE__ */ _1({
  __proto__: null,
  default: vo
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1 = k, G1 = Symbol.for("react.element"), J1 = Symbol.for("react.fragment"), Z1 = Object.prototype.hasOwnProperty, q1 = X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, e0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Z1.call(t, r) && !e0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: G1, type: e, key: o, ref: s, props: i, _owner: q1.current };
}
go.Fragment = J1;
go.jsx = Rc;
go.jsxs = Rc;
yc.exports = go;
var p = yc.exports, Oc = { exports: {} }, _e = {}, Tc = { exports: {} }, Ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(j, I) {
    var T = j.length;
    j.push(I);
    e: for (; 0 < T; ) {
      var D = T - 1 >>> 1, G = j[D];
      if (0 < i(G, I)) j[D] = I, j[T] = G, T = D;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var I = j[0], T = j.pop();
    if (T !== I) {
      j[0] = T;
      e: for (var D = 0, G = j.length, un = G >>> 1; D < un; ) {
        var Ut = 2 * (D + 1) - 1, Ao = j[Ut], Bt = Ut + 1, Zr = j[Bt];
        if (0 > i(Ao, T)) Bt < G && 0 > i(Zr, Ao) ? (j[D] = Zr, j[Bt] = T, D = Bt) : (j[D] = Ao, j[Ut] = T, D = Ut);
        else if (Bt < G && 0 > i(Zr, T)) j[D] = Zr, j[Bt] = T, D = Bt;
        else break e;
      }
    }
    return I;
  }
  function i(j, I) {
    var T = j.sortIndex - I.sortIndex;
    return T !== 0 ? T : j.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, L = !1, y = !1, x = !1, w = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= j) r(u), I.sortIndex = I.expirationTime, t(l, I);
      else break;
      I = n(u);
    }
  }
  function g(j) {
    if (x = !1, v(j), !y) if (n(l) !== null) y = !0, Xe(S);
    else {
      var I = n(u);
      I !== null && ht(g, I.startTime - j);
    }
  }
  function S(j, I) {
    y = !1, x && (x = !1, h(P), P = -1), L = !0;
    var T = f;
    try {
      for (v(I), d = n(l); d !== null && (!(d.expirationTime > I) || j && !A()); ) {
        var D = d.callback;
        if (typeof D == "function") {
          d.callback = null, f = d.priorityLevel;
          var G = D(d.expirationTime <= I);
          I = e.unstable_now(), typeof G == "function" ? d.callback = G : d === n(l) && r(l), v(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var un = !0;
      else {
        var Ut = n(u);
        Ut !== null && ht(g, Ut.startTime - I), un = !1;
      }
      return un;
    } finally {
      d = null, f = T, L = !1;
    }
  }
  var E = !1, C = null, P = -1, _ = 5, O = -1;
  function A() {
    return !(e.unstable_now() - O < _);
  }
  function ee() {
    if (C !== null) {
      var j = e.unstable_now();
      O = j;
      var I = !0;
      try {
        I = C(!0, j);
      } finally {
        I ? fe() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var fe;
  if (typeof m == "function") fe = function() {
    m(ee);
  };
  else if (typeof MessageChannel < "u") {
    var ve = new MessageChannel(), H = ve.port2;
    ve.port1.onmessage = ee, fe = function() {
      H.postMessage(null);
    };
  } else fe = function() {
    w(ee, 0);
  };
  function Xe(j) {
    C = j, E || (E = !0, fe());
  }
  function ht(j, I) {
    P = w(function() {
      j(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    y || L || (y = !0, Xe(S));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(j) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = f;
    }
    var T = f;
    f = I;
    try {
      return j();
    } finally {
      f = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, I) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var T = f;
    f = j;
    try {
      return I();
    } finally {
      f = T;
    }
  }, e.unstable_scheduleCallback = function(j, I, T) {
    var D = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? D + T : D) : T = D, j) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = T + G, j = { id: c++, callback: I, priorityLevel: j, startTime: T, expirationTime: G, sortIndex: -1 }, T > D ? (j.sortIndex = T, t(u, j), n(l) === null && j === n(u) && (x ? (h(P), P = -1) : x = !0, ht(g, T - D))) : (j.sortIndex = G, t(l, j), y || L || (y = !0, Xe(S))), j;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(j) {
    var I = f;
    return function() {
      var T = f;
      f = I;
      try {
        return j.apply(this, arguments);
      } finally {
        f = T;
      }
    };
  };
})(Ic);
Tc.exports = Ic;
var t0 = Tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n0 = k, Ie = t0;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _c = /* @__PURE__ */ new Set(), xr = {};
function rn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (xr[e] = t, e = 0; e < t.length; e++) _c.add(t[e]);
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vs = Object.prototype.hasOwnProperty, r0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pa = {}, Ra = {};
function i0(e) {
  return vs.call(Ra, e) ? !0 : vs.call(Pa, e) ? !1 : r0.test(e) ? Ra[e] = !0 : (Pa[e] = !0, !1);
}
function o0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function s0(e, t, n, r) {
  if (t === null || typeof t > "u" || o0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Se(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pl = /[\-:]([a-z])/g;
function Rl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pl,
    Rl
  );
  ce[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pl, Rl);
  ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pl, Rl);
  ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ol(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (s0(t, n, i, r) && (n = null), r || i === null ? i0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ti = Symbol.for("react.element"), hn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), Tl = Symbol.for("react.strict_mode"), ys = Symbol.for("react.profiler"), $c = Symbol.for("react.provider"), Mc = Symbol.for("react.context"), Il = Symbol.for("react.forward_ref"), ws = Symbol.for("react.suspense"), xs = Symbol.for("react.suspense_list"), _l = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), Fc = Symbol.for("react.offscreen"), Oa = Symbol.iterator;
function Qn(e) {
  return e === null || typeof e != "object" ? null : (e = Oa && e[Oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Uo;
function lr(e) {
  if (Uo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Uo = t && t[1] || "";
  }
  return `
` + Uo + e;
}
var Bo = !1;
function Vo(e, t) {
  if (!e || Bo) return "";
  Bo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || i[s] !== o[a]) {
              var l = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Bo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function l0(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vo(e.type, !1), e;
    case 11:
      return e = Vo(e.type.render, !1), e;
    case 1:
      return e = Vo(e.type, !0), e;
    default:
      return "";
  }
}
function Ss(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case hn:
      return "Portal";
    case ys:
      return "Profiler";
    case Tl:
      return "StrictMode";
    case ws:
      return "Suspense";
    case xs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Mc:
      return (e.displayName || "Context") + ".Consumer";
    case $c:
      return (e._context.displayName || "Context") + ".Provider";
    case Il:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case _l:
      return t = e.displayName || null, t !== null ? t : Ss(e.type) || "Memo";
    case gt:
      t = e._payload, e = e._init;
      try {
        return Ss(e(t));
      } catch {
      }
  }
  return null;
}
function a0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ss(t);
    case 8:
      return t === Tl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function bc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function u0(e) {
  var t = bc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ni(e) {
  e._valueTracker || (e._valueTracker = u0(e));
}
function Ac(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = bc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ai(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Es(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zc(e, t) {
  t = t.checked, t != null && Ol(e, "checked", t, !1);
}
function ks(e, t) {
  zc(e, t);
  var n = _t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Cs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Cs(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ia(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Cs(e, t, n) {
  (t !== "number" || Ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function Pn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ns(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _a(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Dc(e, t) {
  var n = _t(t.value), r = _t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function js(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ri, Bc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ri = ri || document.createElement("div"), ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ri.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, c0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
  c0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e];
  });
});
function Vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px";
}
function Hc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Vc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var d0 = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ps(e, t) {
  if (t) {
    if (d0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Rs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Os = null;
function $l(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ts = null, Rn = null, On = null;
function Ma(e) {
  if (e = Wr(e)) {
    if (typeof Ts != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = Eo(t), Ts(e.stateNode, e.type, t));
  }
}
function Kc(e) {
  Rn ? On ? On.push(e) : On = [e] : Rn = e;
}
function Wc() {
  if (Rn) {
    var e = Rn, t = On;
    if (On = Rn = null, Ma(e), t) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Yc() {
}
var Ho = !1;
function Xc(e, t, n) {
  if (Ho) return e(t, n);
  Ho = !0;
  try {
    return Qc(e, t, n);
  } finally {
    Ho = !1, (Rn !== null || On !== null) && (Yc(), Wc());
  }
}
function Er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Is = !1;
if (ut) try {
  var Yn = {};
  Object.defineProperty(Yn, "passive", { get: function() {
    Is = !0;
  } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
} catch {
  Is = !1;
}
function f0(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var fr = !1, zi = null, Di = !1, _s = null, p0 = { onError: function(e) {
  fr = !0, zi = e;
} };
function h0(e, t, n, r, i, o, s, a, l) {
  fr = !1, zi = null, f0.apply(p0, arguments);
}
function m0(e, t, n, r, i, o, s, a, l) {
  if (h0.apply(this, arguments), fr) {
    if (fr) {
      var u = zi;
      fr = !1, zi = null;
    } else throw Error(N(198));
    Di || (Di = !0, _s = u);
  }
}
function on(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fa(e) {
  if (on(e) !== e) throw Error(N(188));
}
function L0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Fa(i), e;
        if (o === r) return Fa(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          s = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            s = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Jc(e) {
  return e = L0(e), e !== null ? Zc(e) : null;
}
function Zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qc = Ie.unstable_scheduleCallback, ba = Ie.unstable_cancelCallback, g0 = Ie.unstable_shouldYield, v0 = Ie.unstable_requestPaint, J = Ie.unstable_now, y0 = Ie.unstable_getCurrentPriorityLevel, Ml = Ie.unstable_ImmediatePriority, ed = Ie.unstable_UserBlockingPriority, Ui = Ie.unstable_NormalPriority, w0 = Ie.unstable_LowPriority, td = Ie.unstable_IdlePriority, yo = null, et = null;
function x0(e) {
  if (et && typeof et.onCommitFiberRoot == "function") try {
    et.onCommitFiberRoot(yo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : k0, S0 = Math.log, E0 = Math.LN2;
function k0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (S0(e) / E0 | 0) | 0;
}
var ii = 64, oi = 4194304;
function ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? r = ur(a) : (o &= s, o !== 0 && (r = ur(o)));
  } else s = n & ~i, s !== 0 ? r = ur(s) : o !== 0 && (r = ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function C0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function N0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - We(o), a = 1 << s, l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = C0(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function $s(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function nd() {
  var e = ii;
  return ii <<= 1, !(ii & 4194240) && (ii = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function j0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - We(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Fl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var b = 0;
function rd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var id, bl, od, sd, ld, Ms = !1, si = [], kt = null, Ct = null, Nt = null, kr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), yt = [], P0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Aa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Wr(t), t !== null && bl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function R0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return kt = Xn(kt, e, t, n, r, i), !0;
    case "dragenter":
      return Ct = Xn(Ct, e, t, n, r, i), !0;
    case "mouseover":
      return Nt = Xn(Nt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return kr.set(o, Xn(kr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Cr.set(o, Xn(Cr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ad(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gc(n), t !== null) {
          e.blockedOn = t, ld(e.priority, function() {
            od(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Os = r, n.target.dispatchEvent(r), Os = null;
    } else return t = Wr(n), t !== null && bl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  Ci(e) && n.delete(t);
}
function O0() {
  Ms = !1, kt !== null && Ci(kt) && (kt = null), Ct !== null && Ci(Ct) && (Ct = null), Nt !== null && Ci(Nt) && (Nt = null), kr.forEach(za), Cr.forEach(za);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ms || (Ms = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, O0)));
}
function Nr(e) {
  function t(i) {
    return Gn(i, e);
  }
  if (0 < si.length) {
    Gn(si[0], e);
    for (var n = 1; n < si.length; n++) {
      var r = si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kt !== null && Gn(kt, e), Ct !== null && Gn(Ct, e), Nt !== null && Gn(Nt, e), kr.forEach(t), Cr.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && (n = yt[0], n.blockedOn === null); ) ad(n), n.blockedOn === null && yt.shift();
}
var Tn = pt.ReactCurrentBatchConfig, Vi = !0;
function T0(e, t, n, r) {
  var i = b, o = Tn.transition;
  Tn.transition = null;
  try {
    b = 1, Al(e, t, n, r);
  } finally {
    b = i, Tn.transition = o;
  }
}
function I0(e, t, n, r) {
  var i = b, o = Tn.transition;
  Tn.transition = null;
  try {
    b = 4, Al(e, t, n, r);
  } finally {
    b = i, Tn.transition = o;
  }
}
function Al(e, t, n, r) {
  if (Vi) {
    var i = Fs(e, t, n, r);
    if (i === null) ts(e, t, r, Hi, n), Aa(e, r);
    else if (R0(i, e, t, n, r)) r.stopPropagation();
    else if (Aa(e, r), t & 4 && -1 < P0.indexOf(e)) {
      for (; i !== null; ) {
        var o = Wr(i);
        if (o !== null && id(o), o = Fs(e, t, n, r), o === null && ts(e, t, r, Hi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var Hi = null;
function Fs(e, t, n, r) {
  if (Hi = null, e = $l(r), e = Kt(e), e !== null) if (t = on(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Gc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hi = e, null;
}
function ud(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (y0()) {
        case Ml:
          return 1;
        case ed:
          return 4;
        case Ui:
        case w0:
          return 16;
        case td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null, zl = null, Ni = null;
function cd() {
  if (Ni) return Ni;
  var e, t = zl, n = t.length, r, i = "value" in xt ? xt.value : xt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return Ni = i.slice(e, 1 < r ? 1 - r : void 0);
}
function ji(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function li() {
  return !0;
}
function Da() {
  return !1;
}
function $e(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? li : Da, this.isPropagationStopped = Da, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = li);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = li);
  }, persist: function() {
  }, isPersistent: li }), t;
}
var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Dl = $e(Hn), Kr = Y({}, Hn, { view: 0, detail: 0 }), _0 = $e(Kr), Wo, Qo, Jn, wo = Y({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ul, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Wo = e.screenX - Jn.screenX, Qo = e.screenY - Jn.screenY) : Qo = Wo = 0, Jn = e), Wo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Qo;
} }), Ua = $e(wo), $0 = Y({}, wo, { dataTransfer: 0 }), M0 = $e($0), F0 = Y({}, Kr, { relatedTarget: 0 }), Yo = $e(F0), b0 = Y({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), A0 = $e(b0), z0 = Y({}, Hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), D0 = $e(z0), U0 = Y({}, Hn, { data: 0 }), Ba = $e(U0), B0 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, V0 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, H0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function K0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = H0[e]) ? !!t[e] : !1;
}
function Ul() {
  return K0;
}
var W0 = Y({}, Kr, { key: function(e) {
  if (e.key) {
    var t = B0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? V0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ul, charCode: function(e) {
  return e.type === "keypress" ? ji(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Q0 = $e(W0), Y0 = Y({}, wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Va = $e(Y0), X0 = Y({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ul }), G0 = $e(X0), J0 = Y({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Z0 = $e(J0), q0 = Y({}, wo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ep = $e(q0), tp = [9, 13, 27, 32], Bl = ut && "CompositionEvent" in window, pr = null;
ut && "documentMode" in document && (pr = document.documentMode);
var np = ut && "TextEvent" in window && !pr, dd = ut && (!Bl || pr && 8 < pr && 11 >= pr), Ha = " ", Ka = !1;
function fd(e, t) {
  switch (e) {
    case "keyup":
      return tp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function rp(e, t) {
  switch (e) {
    case "compositionend":
      return pd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ka = !0, Ha);
    case "textInput":
      return e = t.data, e === Ha && Ka ? null : e;
    default:
      return null;
  }
}
function ip(e, t) {
  if (Ln) return e === "compositionend" || !Bl && fd(e, t) ? (e = cd(), Ni = zl = xt = null, Ln = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var op = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!op[e.type] : t === "textarea";
}
function hd(e, t, n, r) {
  Kc(r), t = Ki(t, "onChange"), 0 < t.length && (n = new Dl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, jr = null;
function sp(e) {
  Cd(e, 0);
}
function xo(e) {
  var t = yn(e);
  if (Ac(t)) return e;
}
function lp(e, t) {
  if (e === "change") return t;
}
var md = !1;
if (ut) {
  var Xo;
  if (ut) {
    var Go = "oninput" in document;
    if (!Go) {
      var Qa = document.createElement("div");
      Qa.setAttribute("oninput", "return;"), Go = typeof Qa.oninput == "function";
    }
    Xo = Go;
  } else Xo = !1;
  md = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  hr && (hr.detachEvent("onpropertychange", Ld), jr = hr = null);
}
function Ld(e) {
  if (e.propertyName === "value" && xo(jr)) {
    var t = [];
    hd(t, jr, e, $l(e)), Xc(sp, t);
  }
}
function ap(e, t, n) {
  e === "focusin" ? (Ya(), hr = t, jr = n, hr.attachEvent("onpropertychange", Ld)) : e === "focusout" && Ya();
}
function up(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xo(jr);
}
function cp(e, t) {
  if (e === "click") return xo(t);
}
function dp(e, t) {
  if (e === "input" || e === "change") return xo(t);
}
function fp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ye = typeof Object.is == "function" ? Object.is : fp;
function Pr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!vs.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Xa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ga(e, t) {
  var n = Xa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xa(n);
  }
}
function gd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function vd() {
  for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ai(e.document);
  }
  return t;
}
function Vl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function pp(e) {
  var t = vd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ga(n, o);
        var s = Ga(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var hp = ut && "documentMode" in document && 11 >= document.documentMode, gn = null, bs = null, mr = null, As = !1;
function Ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  As || gn == null || gn !== Ai(r) || (r = gn, "selectionStart" in r && Vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && Pr(mr, r) || (mr = r, r = Ki(bs, "onSelect"), 0 < r.length && (t = new Dl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function ai(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vn = { animationend: ai("Animation", "AnimationEnd"), animationiteration: ai("Animation", "AnimationIteration"), animationstart: ai("Animation", "AnimationStart"), transitionend: ai("Transition", "TransitionEnd") }, Jo = {}, yd = {};
ut && (yd = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
function So(e) {
  if (Jo[e]) return Jo[e];
  if (!vn[e]) return e;
  var t = vn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in yd) return Jo[e] = t[n];
  return e;
}
var wd = So("animationend"), xd = So("animationiteration"), Sd = So("animationstart"), Ed = So("transitionend"), kd = /* @__PURE__ */ new Map(), Za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  kd.set(e, t), rn(t, [e]);
}
for (var Zo = 0; Zo < Za.length; Zo++) {
  var qo = Za[Zo], mp = qo.toLowerCase(), Lp = qo[0].toUpperCase() + qo.slice(1);
  Ft(mp, "on" + Lp);
}
Ft(wd, "onAnimationEnd");
Ft(xd, "onAnimationIteration");
Ft(Sd, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Ed, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gp = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, m0(r, t, void 0, e), e.currentTarget = null;
}
function Cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
        qa(i, a, u), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
        qa(i, a, u), o = l;
      }
    }
  }
  if (Di) throw e = _s, Di = !1, _s = null, e;
}
function B(e, t) {
  var n = t[Vs];
  n === void 0 && (n = t[Vs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Nd(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), Nd(n, e, r, t);
}
var ui = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[ui]) {
    e[ui] = !0, _c.forEach(function(n) {
      n !== "selectionchange" && (gp.has(n) || es(n, !1, e), es(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ui] || (t[ui] = !0, es("selectionchange", !1, t));
  }
}
function Nd(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var i = T0;
      break;
    case 4:
      i = I0;
      break;
    default:
      i = Al;
  }
  n = i.bind(null, t, n, e), i = void 0, !Is || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function ts(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = Kt(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Xc(function() {
    var u = o, c = $l(n), d = [];
    e: {
      var f = kd.get(e);
      if (f !== void 0) {
        var L = Dl, y = e;
        switch (e) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            L = Q0;
            break;
          case "focusin":
            y = "focus", L = Yo;
            break;
          case "focusout":
            y = "blur", L = Yo;
            break;
          case "beforeblur":
          case "afterblur":
            L = Yo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            L = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            L = M0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            L = G0;
            break;
          case wd:
          case xd:
          case Sd:
            L = A0;
            break;
          case Ed:
            L = Z0;
            break;
          case "scroll":
            L = _0;
            break;
          case "wheel":
            L = ep;
            break;
          case "copy":
          case "cut":
          case "paste":
            L = D0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            L = Va;
        }
        var x = (t & 4) !== 0, w = !x && e === "scroll", h = x ? f !== null ? f + "Capture" : null : f;
        x = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var g = v.stateNode;
          if (v.tag === 5 && g !== null && (v = g, h !== null && (g = Er(m, h), g != null && x.push(Or(m, g, v)))), w) break;
          m = m.return;
        }
        0 < x.length && (f = new L(f, y, null, n, c), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", f && n !== Os && (y = n.relatedTarget || n.fromElement) && (Kt(y) || y[ct])) break e;
        if ((L || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, L ? (y = n.relatedTarget || n.toElement, L = u, y = y ? Kt(y) : null, y !== null && (w = on(y), y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (L = null, y = u), L !== y)) {
          if (x = Ua, g = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = Va, g = "onPointerLeave", h = "onPointerEnter", m = "pointer"), w = L == null ? f : yn(L), v = y == null ? f : yn(y), f = new x(g, m + "leave", L, n, c), f.target = w, f.relatedTarget = v, g = null, Kt(c) === u && (x = new x(h, m + "enter", y, n, c), x.target = v, x.relatedTarget = w, g = x), w = g, L && y) t: {
            for (x = L, h = y, m = 0, v = x; v; v = dn(v)) m++;
            for (v = 0, g = h; g; g = dn(g)) v++;
            for (; 0 < m - v; ) x = dn(x), m--;
            for (; 0 < v - m; ) h = dn(h), v--;
            for (; m--; ) {
              if (x === h || h !== null && x === h.alternate) break t;
              x = dn(x), h = dn(h);
            }
            x = null;
          }
          else x = null;
          L !== null && eu(d, f, L, x, !1), y !== null && w !== null && eu(d, w, y, x, !0);
        }
      }
      e: {
        if (f = u ? yn(u) : window, L = f.nodeName && f.nodeName.toLowerCase(), L === "select" || L === "input" && f.type === "file") var S = lp;
        else if (Wa(f)) if (md) S = dp;
        else {
          S = up;
          var E = ap;
        }
        else (L = f.nodeName) && L.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = cp);
        if (S && (S = S(e, u))) {
          hd(d, S, n, c);
          break e;
        }
        E && E(e, f, u), e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Cs(f, "number", f.value);
      }
      switch (E = u ? yn(u) : window, e) {
        case "focusin":
          (Wa(E) || E.contentEditable === "true") && (gn = E, bs = u, mr = null);
          break;
        case "focusout":
          mr = bs = gn = null;
          break;
        case "mousedown":
          As = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          As = !1, Ja(d, n, c);
          break;
        case "selectionchange":
          if (hp) break;
        case "keydown":
        case "keyup":
          Ja(d, n, c);
      }
      var C;
      if (Bl) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Ln ? fd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (dd && n.locale !== "ko" && (Ln || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ln && (C = cd()) : (xt = c, zl = "value" in xt ? xt.value : xt.textContent, Ln = !0)), E = Ki(u, P), 0 < E.length && (P = new Ba(P, e, null, n, c), d.push({ event: P, listeners: E }), C ? P.data = C : (C = pd(n), C !== null && (P.data = C)))), (C = np ? rp(e, n) : ip(e, n)) && (u = Ki(u, "onBeforeInput"), 0 < u.length && (c = new Ba("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = C));
    }
    Cd(d, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Er(e, n), o != null && r.unshift(Or(e, o, i)), o = Er(e, t), o != null && r.push(Or(e, o, i))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Er(n, o), l != null && s.unshift(Or(n, l, a))) : i || (l = Er(n, o), l != null && s.push(Or(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var vp = /\r\n?/g, yp = /\u0000|\uFFFD/g;
function tu(e) {
  return (typeof e == "string" ? e : "" + e).replace(vp, `
`).replace(yp, "");
}
function ci(e, t, n) {
  if (t = tu(t), tu(e) !== t && n) throw Error(N(425));
}
function Wi() {
}
var zs = null, Ds = null;
function Us(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bs = typeof setTimeout == "function" ? setTimeout : void 0, wp = typeof clearTimeout == "function" ? clearTimeout : void 0, nu = typeof Promise == "function" ? Promise : void 0, xp = typeof queueMicrotask == "function" ? queueMicrotask : typeof nu < "u" ? function(e) {
  return nu.resolve(null).then(e).catch(Sp);
} : Bs;
function Sp(e) {
  setTimeout(function() {
    throw e;
  });
}
function ns(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Nr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + Kn, Tr = "__reactProps$" + Kn, ct = "__reactContainer$" + Kn, Vs = "__reactEvents$" + Kn, Ep = "__reactListeners$" + Kn, kp = "__reactHandles$" + Kn;
function Kt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ct] || n[Ze]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ru(e); e !== null; ) {
        if (n = e[Ze]) return n;
        e = ru(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Wr(e) {
  return e = e[Ze] || e[ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Eo(e) {
  return e[Tr] || null;
}
var Hs = [], wn = -1;
function bt(e) {
  return { current: e };
}
function V(e) {
  0 > wn || (e.current = Hs[wn], Hs[wn] = null, wn--);
}
function U(e, t) {
  wn++, Hs[wn] = e.current, e.current = t;
}
var $t = {}, ge = bt($t), Ce = bt(!1), Gt = $t;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function Qi() {
  V(Ce), V(ge);
}
function iu(e, t, n) {
  if (ge.current !== $t) throw Error(N(168));
  U(ge, t), U(Ce, n);
}
function jd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, a0(e) || "Unknown", i));
  return Y({}, n, r);
}
function Yi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, Gt = ge.current, U(ge, e), U(Ce, Ce.current), !0;
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = jd(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, V(Ce), V(ge), U(ge, e)) : V(Ce), U(Ce, n);
}
var ot = null, ko = !1, rs = !1;
function Pd(e) {
  ot === null ? ot = [e] : ot.push(e);
}
function Cp(e) {
  ko = !0, Pd(e);
}
function At() {
  if (!rs && ot !== null) {
    rs = !0;
    var e = 0, t = b;
    try {
      var n = ot;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ot = null, ko = !1;
    } catch (i) {
      throw ot !== null && (ot = ot.slice(e + 1)), qc(Ml, At), i;
    } finally {
      b = t, rs = !1;
    }
  }
  return null;
}
var xn = [], Sn = 0, Xi = null, Gi = 0, Me = [], Fe = 0, Jt = null, st = 1, lt = "";
function Vt(e, t) {
  xn[Sn++] = Gi, xn[Sn++] = Xi, Xi = e, Gi = t;
}
function Rd(e, t, n) {
  Me[Fe++] = st, Me[Fe++] = lt, Me[Fe++] = Jt, Jt = e;
  var r = st;
  e = lt;
  var i = 32 - We(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - We(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, st = 1 << 32 - We(t) + i | n << i | r, lt = o + e;
  } else st = 1 << o | n << i | r, lt = e;
}
function Hl(e) {
  e.return !== null && (Vt(e, 1), Rd(e, 1, 0));
}
function Kl(e) {
  for (; e === Xi; ) Xi = xn[--Sn], xn[Sn] = null, Gi = xn[--Sn], xn[Sn] = null;
  for (; e === Jt; ) Jt = Me[--Fe], Me[Fe] = null, lt = Me[--Fe], Me[Fe] = null, st = Me[--Fe], Me[Fe] = null;
}
var Te = null, Re = null, K = !1, Ke = null;
function Od(e, t) {
  var n = Ae(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, Re = jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: st, overflow: lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ae(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Te = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ws(e) {
  if (K) {
    var t = Re;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Ks(e)) throw Error(N(418));
        t = jt(n.nextSibling);
        var r = Te;
        t && su(e, t) ? Od(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Te = e);
      }
    } else {
      if (Ks(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, K = !1, Te = e;
    }
  }
}
function lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function di(e) {
  if (e !== Te) return !1;
  if (!K) return lu(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Us(e.type, e.memoizedProps)), t && (t = Re)) {
    if (Ks(e)) throw Td(), Error(N(418));
    for (; t; ) Od(e, t), t = jt(t.nextSibling);
  }
  if (lu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Te ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Td() {
  for (var e = Re; e; ) e = jt(e.nextSibling);
}
function An() {
  Re = Te = null, K = !1;
}
function Wl(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
var Np = pt.ReactCurrentBatchConfig;
function Zn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var a = i.refs;
        s === null ? delete a[o] : a[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function fi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function au(e) {
  var t = e._init;
  return t(e._payload);
}
function Id(e) {
  function t(h, m) {
    if (e) {
      var v = h.deletions;
      v === null ? (h.deletions = [m], h.flags |= 16) : v.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function i(h, m) {
    return h = Tt(h, m), h.index = 0, h.sibling = null, h;
  }
  function o(h, m, v) {
    return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < m ? (h.flags |= 2, m) : v) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, v, g) {
    return m === null || m.tag !== 6 ? (m = cs(v, h.mode, g), m.return = h, m) : (m = i(m, v), m.return = h, m);
  }
  function l(h, m, v, g) {
    var S = v.type;
    return S === mn ? c(h, m, v.props.children, g, v.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === gt && au(S) === m.type) ? (g = i(m, v.props), g.ref = Zn(h, m, v), g.return = h, g) : (g = $i(v.type, v.key, v.props, null, h.mode, g), g.ref = Zn(h, m, v), g.return = h, g);
  }
  function u(h, m, v, g) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = ds(v, h.mode, g), m.return = h, m) : (m = i(m, v.children || []), m.return = h, m);
  }
  function c(h, m, v, g, S) {
    return m === null || m.tag !== 7 ? (m = Xt(v, h.mode, g, S), m.return = h, m) : (m = i(m, v), m.return = h, m);
  }
  function d(h, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = cs("" + m, h.mode, v), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ti:
          return v = $i(m.type, m.key, m.props, null, h.mode, v), v.ref = Zn(h, null, m), v.return = h, v;
        case hn:
          return m = ds(m, h.mode, v), m.return = h, m;
        case gt:
          var g = m._init;
          return d(h, g(m._payload), v);
      }
      if (ar(m) || Qn(m)) return m = Xt(m, h.mode, v, null), m.return = h, m;
      fi(h, m);
    }
    return null;
  }
  function f(h, m, v, g) {
    var S = m !== null ? m.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return S !== null ? null : a(h, m, "" + v, g);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ti:
          return v.key === S ? l(h, m, v, g) : null;
        case hn:
          return v.key === S ? u(h, m, v, g) : null;
        case gt:
          return S = v._init, f(
            h,
            m,
            S(v._payload),
            g
          );
      }
      if (ar(v) || Qn(v)) return S !== null ? null : c(h, m, v, g, null);
      fi(h, v);
    }
    return null;
  }
  function L(h, m, v, g, S) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return h = h.get(v) || null, a(m, h, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ti:
          return h = h.get(g.key === null ? v : g.key) || null, l(m, h, g, S);
        case hn:
          return h = h.get(g.key === null ? v : g.key) || null, u(m, h, g, S);
        case gt:
          var E = g._init;
          return L(h, m, v, E(g._payload), S);
      }
      if (ar(g) || Qn(g)) return h = h.get(v) || null, c(m, h, g, S, null);
      fi(m, g);
    }
    return null;
  }
  function y(h, m, v, g) {
    for (var S = null, E = null, C = m, P = m = 0, _ = null; C !== null && P < v.length; P++) {
      C.index > P ? (_ = C, C = null) : _ = C.sibling;
      var O = f(h, C, v[P], g);
      if (O === null) {
        C === null && (C = _);
        break;
      }
      e && C && O.alternate === null && t(h, C), m = o(O, m, P), E === null ? S = O : E.sibling = O, E = O, C = _;
    }
    if (P === v.length) return n(h, C), K && Vt(h, P), S;
    if (C === null) {
      for (; P < v.length; P++) C = d(h, v[P], g), C !== null && (m = o(C, m, P), E === null ? S = C : E.sibling = C, E = C);
      return K && Vt(h, P), S;
    }
    for (C = r(h, C); P < v.length; P++) _ = L(C, h, P, v[P], g), _ !== null && (e && _.alternate !== null && C.delete(_.key === null ? P : _.key), m = o(_, m, P), E === null ? S = _ : E.sibling = _, E = _);
    return e && C.forEach(function(A) {
      return t(h, A);
    }), K && Vt(h, P), S;
  }
  function x(h, m, v, g) {
    var S = Qn(v);
    if (typeof S != "function") throw Error(N(150));
    if (v = S.call(v), v == null) throw Error(N(151));
    for (var E = S = null, C = m, P = m = 0, _ = null, O = v.next(); C !== null && !O.done; P++, O = v.next()) {
      C.index > P ? (_ = C, C = null) : _ = C.sibling;
      var A = f(h, C, O.value, g);
      if (A === null) {
        C === null && (C = _);
        break;
      }
      e && C && A.alternate === null && t(h, C), m = o(A, m, P), E === null ? S = A : E.sibling = A, E = A, C = _;
    }
    if (O.done) return n(
      h,
      C
    ), K && Vt(h, P), S;
    if (C === null) {
      for (; !O.done; P++, O = v.next()) O = d(h, O.value, g), O !== null && (m = o(O, m, P), E === null ? S = O : E.sibling = O, E = O);
      return K && Vt(h, P), S;
    }
    for (C = r(h, C); !O.done; P++, O = v.next()) O = L(C, h, P, O.value, g), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? P : O.key), m = o(O, m, P), E === null ? S = O : E.sibling = O, E = O);
    return e && C.forEach(function(ee) {
      return t(h, ee);
    }), K && Vt(h, P), S;
  }
  function w(h, m, v, g) {
    if (typeof v == "object" && v !== null && v.type === mn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ti:
          e: {
            for (var S = v.key, E = m; E !== null; ) {
              if (E.key === S) {
                if (S = v.type, S === mn) {
                  if (E.tag === 7) {
                    n(h, E.sibling), m = i(E, v.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === gt && au(S) === E.type) {
                  n(h, E.sibling), m = i(E, v.props), m.ref = Zn(h, E, v), m.return = h, h = m;
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            v.type === mn ? (m = Xt(v.props.children, h.mode, g, v.key), m.return = h, h = m) : (g = $i(v.type, v.key, v.props, null, h.mode, g), g.ref = Zn(h, m, v), g.return = h, h = g);
          }
          return s(h);
        case hn:
          e: {
            for (E = v.key; m !== null; ) {
              if (m.key === E) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                n(h, m.sibling), m = i(m, v.children || []), m.return = h, h = m;
                break e;
              } else {
                n(h, m);
                break;
              }
              else t(h, m);
              m = m.sibling;
            }
            m = ds(v, h.mode, g), m.return = h, h = m;
          }
          return s(h);
        case gt:
          return E = v._init, w(h, m, E(v._payload), g);
      }
      if (ar(v)) return y(h, m, v, g);
      if (Qn(v)) return x(h, m, v, g);
      fi(h, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(h, m.sibling), m = i(m, v), m.return = h, h = m) : (n(h, m), m = cs(v, h.mode, g), m.return = h, h = m), s(h)) : n(h, m);
  }
  return w;
}
var zn = Id(!0), _d = Id(!1), Ji = bt(null), Zi = null, En = null, Ql = null;
function Yl() {
  Ql = En = Zi = null;
}
function Xl(e) {
  var t = Ji.current;
  V(Ji), e._currentValue = t;
}
function Qs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  Zi = e, Ql = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), e.firstContext = null);
}
function De(e) {
  var t = e._currentValue;
  if (Ql !== e) if (e = { context: e, memoizedValue: t, next: null }, En === null) {
    if (Zi === null) throw Error(N(308));
    En = e, Zi.dependencies = { lanes: 0, firstContext: e };
  } else En = En.next = e;
  return t;
}
var Wt = null;
function Gl(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function $d(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Gl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, dt(e, r);
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Jl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Md(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, dt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Gl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, dt(e, n);
}
function Pi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fl(e, n);
  }
}
function uu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function qi(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? o = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var d = i.baseState;
    s = 0, c = u = l = null, a = o;
    do {
      var f = a.lane, L = a.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: L,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, x = a;
          switch (f = t, L = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                d = y.call(L, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, f = typeof y == "function" ? y.call(L, d, f) : y, f == null) break e;
              d = Y({}, d, f);
              break e;
            case 2:
              vt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a));
      } else L = { eventTime: L, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = L, l = d) : c = c.next = L, s |= f;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    qt |= s, e.lanes = s, e.memoizedState = d;
  }
}
function cu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(N(191, i));
      i.call(r);
    }
  }
}
var Qr = {}, tt = bt(Qr), Ir = bt(Qr), _r = bt(Qr);
function Qt(e) {
  if (e === Qr) throw Error(N(174));
  return e;
}
function Zl(e, t) {
  switch (U(_r, t), U(Ir, e), U(tt, Qr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : js(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = js(t, e);
  }
  V(tt), U(tt, t);
}
function Dn() {
  V(tt), V(Ir), V(_r);
}
function Fd(e) {
  Qt(_r.current);
  var t = Qt(tt.current), n = js(t, e.type);
  t !== n && (U(Ir, e), U(tt, n));
}
function ql(e) {
  Ir.current === e && (V(tt), V(Ir));
}
var W = bt(0);
function eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var is = [];
function ea() {
  for (var e = 0; e < is.length; e++) is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var Ri = pt.ReactCurrentDispatcher, os = pt.ReactCurrentBatchConfig, Zt = 0, Q = null, ne = null, oe = null, to = !1, Lr = !1, $r = 0, jp = 0;
function pe() {
  throw Error(N(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, i, o) {
  if (Zt = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ri.current = e === null || e.memoizedState === null ? Tp : Ip, e = n(r, i), Lr) {
    o = 0;
    do {
      if (Lr = !1, $r = 0, 25 <= o) throw Error(N(301));
      o += 1, oe = ne = null, t.updateQueue = null, Ri.current = _p, e = n(r, i);
    } while (Lr);
  }
  if (Ri.current = no, t = ne !== null && ne.next !== null, Zt = 0, oe = ne = Q = null, to = !1, t) throw Error(N(300));
  return e;
}
function ra() {
  var e = $r !== 0;
  return $r = 0, e;
}
function Je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? Q.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Ue() {
  if (ne === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? Q.memoizedState : oe.next;
  if (t !== null) oe = t, ne = e;
  else {
    if (e === null) throw Error(N(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, oe === null ? Q.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function Mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ne, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = s = null, l = null, u = o;
    do {
      var c = u.lane;
      if ((Zt & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, Q.lanes |= c, qt |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? s = r : l.next = a, Ye(r, t.memoizedState) || (ke = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Q.lanes |= o, qt |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ls(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    Ye(o, t.memoizedState) || (ke = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function bd() {
}
function Ad(e, t) {
  var n = Q, r = Ue(), i = t(), o = !Ye(r.memoizedState, i);
  if (o && (r.memoizedState = i, ke = !0), r = r.queue, ia(Ud.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fr(9, Dd.bind(null, n, r, i, t), void 0, null), se === null) throw Error(N(349));
    Zt & 30 || zd(n, t, i);
  }
  return i;
}
function zd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Dd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Bd(t) && Vd(e);
}
function Ud(e, t, n) {
  return n(function() {
    Bd(t) && Vd(e);
  });
}
function Bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Vd(e) {
  var t = dt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function du(e) {
  var t = Je();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Op.bind(null, Q, e), [t.memoizedState, e];
}
function Fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Hd() {
  return Ue().memoizedState;
}
function Oi(e, t, n, r) {
  var i = Je();
  Q.flags |= e, i.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Co(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (o = s.destroy, r !== null && ta(r, s.deps)) {
      i.memoizedState = Fr(t, n, o, r);
      return;
    }
  }
  Q.flags |= e, i.memoizedState = Fr(1 | t, n, o, r);
}
function fu(e, t) {
  return Oi(8390656, 8, e, t);
}
function ia(e, t) {
  return Co(2048, 8, e, t);
}
function Kd(e, t) {
  return Co(4, 2, e, t);
}
function Wd(e, t) {
  return Co(4, 4, e, t);
}
function Qd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Yd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Co(4, 4, Qd.bind(null, t, e), n);
}
function oa() {
}
function Xd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Jd(e, t, n) {
  return Zt & 21 ? (Ye(n, t) || (n = nd(), Q.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ke = !0), e.memoizedState = n);
}
function Pp(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = os.transition;
  os.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, os.transition = r;
  }
}
function Zd() {
  return Ue().memoizedState;
}
function Rp(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qd(e)) ef(t, n);
  else if (n = $d(e, t, n, r), n !== null) {
    var i = we();
    Qe(n, e, r, i), tf(n, t, r);
  }
}
function Op(e, t, n) {
  var r = Ot(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qd(e)) ef(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, a = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = a, Ye(a, s)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Gl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = $d(e, t, i, r), n !== null && (i = we(), Qe(n, e, r, i), tf(n, t, r));
  }
}
function qd(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function ef(e, t) {
  Lr = to = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function tf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fl(e, n);
  }
}
var no = { readContext: De, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Tp = { readContext: De, useCallback: function(e, t) {
  return Je().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: De, useEffect: fu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Oi(
    4194308,
    4,
    Qd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Oi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Oi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Je();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Je();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Rp.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Je();
  return e = { current: e }, t.memoizedState = e;
}, useState: du, useDebugValue: oa, useDeferredValue: function(e) {
  return Je().memoizedState = e;
}, useTransition: function() {
  var e = du(!1), t = e[0];
  return e = Pp.bind(null, e[1]), Je().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, i = Je();
  if (K) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(N(349));
    Zt & 30 || zd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, fu(Ud.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Fr(9, Dd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Je(), t = se.identifierPrefix;
  if (K) {
    var n = lt, r = st;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = jp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ip = {
  readContext: De,
  useCallback: Xd,
  useContext: De,
  useEffect: ia,
  useImperativeHandle: Yd,
  useInsertionEffect: Kd,
  useLayoutEffect: Wd,
  useMemo: Gd,
  useReducer: ss,
  useRef: Hd,
  useState: function() {
    return ss(Mr);
  },
  useDebugValue: oa,
  useDeferredValue: function(e) {
    var t = Ue();
    return Jd(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = ss(Mr)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: bd,
  useSyncExternalStore: Ad,
  useId: Zd,
  unstable_isNewReconciler: !1
}, _p = { readContext: De, useCallback: Xd, useContext: De, useEffect: ia, useImperativeHandle: Yd, useInsertionEffect: Kd, useLayoutEffect: Wd, useMemo: Gd, useReducer: ls, useRef: Hd, useState: function() {
  return ls(Mr);
}, useDebugValue: oa, useDeferredValue: function(e) {
  var t = Ue();
  return ne === null ? t.memoizedState = e : Jd(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = ls(Mr)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: bd, useSyncExternalStore: Ad, useId: Zd, unstable_isNewReconciler: !1 };
function Ve(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ys(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = Ot(e), o = at(r, i);
  o.payload = t, n != null && (o.callback = n), t = Pt(e, o, i), t !== null && (Qe(t, e, i, r), Pi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = Ot(e), o = at(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Pt(e, o, i), t !== null && (Qe(t, e, i, r), Pi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = Ot(e), i = at(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Pt(e, i, r), t !== null && (Qe(t, e, r, n), Pi(t, e, r));
} };
function pu(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(i, o) : !0;
}
function nf(e, t, n) {
  var r = !1, i = $t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = De(o) : (i = Ne(t) ? Gt : ge.current, r = t.contextTypes, o = (r = r != null) ? bn(e, i) : $t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = No, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function hu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function Xs(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Jl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = De(o) : (o = Ne(t) ? Gt : ge.current, i.context = bn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ys(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && No.enqueueReplaceState(i, i.state, null), qi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t) {
  try {
    var n = "", r = t;
    do
      n += l0(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function as(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var $p = typeof WeakMap == "function" ? WeakMap : Map;
function rf(e, t, n) {
  n = at(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    io || (io = !0, sl = r), Gs(e, t);
  }, n;
}
function of(e, t, n) {
  n = at(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Gs(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Gs(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $p();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Yp.bind(null, e, t, n), t.then(e, e));
}
function Lu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1), t.tag = 2, Pt(n, t, 1))), n.lanes |= 1), e);
}
var Mp = pt.ReactCurrentOwner, ke = !1;
function ye(e, t, n, r) {
  t.child = e === null ? _d(t, null, n, r) : zn(t, e.child, n, r);
}
function vu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return In(t, i), r = na(e, t, n, r, o, i), n = ra(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ft(e, t, i)) : (K && n && Hl(t), t.flags |= 1, ye(e, t, r, i), t.child);
}
function yu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !pa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, sf(e, t, o, r, i)) : (e = $i(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return ft(e, t, i);
  }
  return t.flags |= 1, e = Tt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function sf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (ke = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ke = !0);
    else return t.lanes = e.lanes, ft(e, t, i);
  }
  return Js(e, t, n, r, i);
}
function lf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Cn, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(Cn, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(Cn, Pe), Pe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(Cn, Pe), Pe |= r;
  return ye(e, t, i, n), t.child;
}
function af(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Js(e, t, n, r, i) {
  var o = Ne(n) ? Gt : ge.current;
  return o = bn(t, o), In(t, i), n = na(e, t, n, r, o, i), r = ra(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ft(e, t, i)) : (K && r && Hl(t), t.flags |= 1, ye(e, t, n, i), t.child);
}
function wu(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    Yi(t);
  } else o = !1;
  if (In(t, i), t.stateNode === null) Ti(e, t), nf(t, n, r), Xs(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = De(u) : (u = Ne(n) ? Gt : ge.current, u = bn(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && hu(t, s, r, u), vt = !1;
    var f = t.memoizedState;
    s.state = f, qi(t, r, s, i), l = t.memoizedState, a !== r || f !== l || Ce.current || vt ? (typeof c == "function" && (Ys(t, n, c, r), l = t.memoizedState), (a = vt || pu(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Md(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ve(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = De(l) : (l = Ne(n) ? Gt : ge.current, l = bn(t, l));
    var L = n.getDerivedStateFromProps;
    (c = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && hu(t, s, r, l), vt = !1, f = t.memoizedState, s.state = f, qi(t, r, s, i);
    var y = t.memoizedState;
    a !== d || f !== y || Ce.current || vt ? (typeof L == "function" && (Ys(t, n, L, r), y = t.memoizedState), (u = vt || pu(t, n, u, r, f, y, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Zs(e, t, n, r, o, i);
}
function Zs(e, t, n, r, i, o) {
  af(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ou(t, n, !1), ft(e, t, o);
  r = t.stateNode, Mp.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, a, o)) : ye(e, t, a, o), t.memoizedState = r.state, i && ou(t, n, !0), t.child;
}
function uf(e) {
  var t = e.stateNode;
  t.pendingContext ? iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iu(e, t.context, !1), Zl(e, t.containerInfo);
}
function xu(e, t, n, r, i) {
  return An(), Wl(i), t.flags |= 256, ye(e, t, n, r), t.child;
}
var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function el(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cf(e, t, n) {
  var r = t.pendingProps, i = W.current, o = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(W, i & 1), e === null)
    return Ws(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ro(s, r, 0, null), e = Xt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = el(n), t.memoizedState = qs, e) : sa(t, s));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Fp(e, t, s, r, a, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Tt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Tt(a, o) : (o = Xt(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? el(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = qs, r;
  }
  return o = e.child, e = o.sibling, r = Tt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sa(e, t) {
  return t = Ro({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function pi(e, t, n, r) {
  return r !== null && Wl(r), zn(t, e.child, null, n), e = sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Fp(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = as(Error(N(422))), pi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Ro({ mode: "visible", children: r.children }, i, 0, null), o = Xt(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && zn(t, e.child, null, s), t.child.memoizedState = el(s), t.memoizedState = qs, o);
  if (!(t.mode & 1)) return pi(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(N(419)), r = as(o, r, void 0), pi(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, ke || a) {
    if (r = se, r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, dt(e, i), Qe(r, e, i, -1));
    }
    return fa(), r = as(Error(N(421))), pi(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xp.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Re = jt(i.nextSibling), Te = t, K = !0, Ke = null, e !== null && (Me[Fe++] = st, Me[Fe++] = lt, Me[Fe++] = Jt, st = e.id, lt = e.overflow, Jt = t), t = sa(t, r.children), t.flags |= 4096, t);
}
function Su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qs(e.return, t, n);
}
function us(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function df(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (ye(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
      else if (e.tag === 19) Su(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (U(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && eo(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), us(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && eo(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      us(t, !0, n, null, o);
      break;
    case "together":
      us(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ti(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function bp(e, t, n) {
  switch (t.tag) {
    case 3:
      uf(t), An();
      break;
    case 5:
      Fd(t);
      break;
    case 1:
      Ne(t.type) && Yi(t);
      break;
    case 4:
      Zl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Ji, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? cf(e, t, n) : (U(W, W.current & 1), e = ft(e, t, n), e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return df(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, lf(e, t, n);
  }
  return ft(e, t, n);
}
var ff, tl, pf, hf;
ff = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
tl = function() {
};
pf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Qt(tt.current);
    var o = null;
    switch (n) {
      case "input":
        i = Es(e, i), r = Es(e, r), o = [];
        break;
      case "select":
        i = Y({}, i, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Ns(e, i), r = Ns(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wi);
    }
    Ps(n, r);
    var s;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xr.hasOwnProperty(u) ? (l != null && u === "onScroll" && B("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!K) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ap(e, t, n) {
  var r = t.pendingProps;
  switch (Kl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Ne(t.type) && Qi(), he(t), null;
    case 3:
      return r = t.stateNode, Dn(), V(Ce), V(ge), ea(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (di(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ke !== null && (ul(Ke), Ke = null))), tl(e, t), he(t), null;
    case 5:
      ql(t);
      var i = Qt(_r.current);
      if (n = t.type, e !== null && t.stateNode != null) pf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return he(t), null;
        }
        if (e = Qt(tt.current), di(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ze] = t, r[Tr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < cr.length; i++) B(cr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Ta(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              _a(r, o), B("invalid", r);
          }
          Ps(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var a = o[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ci(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ci(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : xr.hasOwnProperty(s) && a != null && s === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              ni(r), Ia(r, o, !0);
              break;
            case "textarea":
              ni(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ze] = t, e[Tr] = r, ff(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Rs(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < cr.length; i++) B(cr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                Ta(e, r), i = Es(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Y({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                _a(e, r), i = Ns(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ps(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "style" ? Hc(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Bc(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Sr(e, l) : typeof l == "number" && Sr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? l != null && o === "onScroll" && B("scroll", e) : l != null && Ol(e, o, l, s));
            }
            switch (n) {
              case "input":
                ni(e), Ia(e, r, !1);
                break;
              case "textarea":
                ni(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Pn(e, !!r.multiple, o, !1) : r.defaultValue != null && Pn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Wi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) hf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = Qt(_r.current), Qt(tt.current), di(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (o = r.nodeValue !== n) && (e = Te, e !== null)) switch (e.tag) {
            case 3:
              ci(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ci(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (V(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Re !== null && t.mode & 1 && !(t.flags & 128)) Td(), An(), t.flags |= 98560, o = !1;
        else if (o = di(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(N(317));
            o[Ze] = t;
          } else An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else Ke !== null && (ul(Ke), Ke = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? re === 0 && (re = 3) : fa())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return Dn(), tl(e, t), e === null && Rr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Xl(t.type._context), he(t), null;
    case 17:
      return Ne(t.type) && Qi(), he(t), null;
    case 19:
      if (V(W), o = t.memoizedState, o === null) return he(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) qn(o, !1);
      else {
        if (re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = eo(e), s !== null) {
            for (t.flags |= 128, qn(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > Bn && (t.flags |= 128, r = !0, qn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = eo(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !K) return he(t), null;
        } else 2 * J() - o.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, qn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = W.current, U(W, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function zp(e, t) {
  switch (Kl(t), t.tag) {
    case 1:
      return Ne(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), V(Ce), V(ge), ea(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ql(t), null;
    case 13:
      if (V(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        An();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(W), null;
    case 4:
      return Dn(), null;
    case 10:
      return Xl(t.type._context), null;
    case 22:
    case 23:
      return da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hi = !1, Le = !1, Dp = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function nl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Eu = !1;
function Up(e, t) {
  if (zs = Vi, e = vd(), Vl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var L; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (L = d.firstChild) !== null; )
            f = d, d = L;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === i && (a = s), f === o && ++c === r && (l = s), (L = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = L;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ds = { focusedElem: e, selectionRange: n }, Vi = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, w = y.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ve(t.type, x), w);
            h.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(N(163));
      }
    } catch (g) {
      X(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return y = Eu, Eu = !1, y;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && nl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function jo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function mf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, mf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[Tr], delete t[Vs], delete t[Ep], delete t[kp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Lf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wi));
  else if (r !== 4 && (e = e.child, e !== null)) for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), e = e.sibling;
}
function ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ol(e, t, n), e = e.sibling; e !== null; ) ol(e, t, n), e = e.sibling;
}
var le = null, He = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) gf(e, t, n), n = n.sibling;
}
function gf(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function") try {
    et.onCommitFiberUnmount(yo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Le || kn(n, t);
    case 6:
      var r = le, i = He;
      le = null, mt(e, t, n), le = r, He = i, le !== null && (He ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (He ? (e = le, n = n.stateNode, e.nodeType === 8 ? ns(e.parentNode, n) : e.nodeType === 1 && ns(e, n), Nr(e)) : ns(le, n.stateNode));
      break;
    case 4:
      r = le, i = He, le = n.stateNode.containerInfo, He = !0, mt(e, t, n), le = r, He = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && nl(n, t, s), i = i.next;
        } while (i !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (!Le && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        X(n, t, a);
      }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, mt(e, t, n), Le = r) : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function Cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dp()), t.forEach(function(r) {
      var i = Gp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            le = a.stateNode, He = !1;
            break e;
          case 3:
            le = a.stateNode.containerInfo, He = !0;
            break e;
          case 4:
            le = a.stateNode.containerInfo, He = !0;
            break e;
        }
        a = a.return;
      }
      if (le === null) throw Error(N(160));
      gf(o, s, i), le = null, He = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      X(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vf(t, e), t = t.sibling;
}
function vf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Be(t, e), Ge(e), r & 4) {
        try {
          gr(3, e, e.return), jo(3, e);
        } catch (x) {
          X(e, e.return, x);
        }
        try {
          gr(5, e, e.return);
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 1:
      Be(t, e), Ge(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (Be(t, e), Ge(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Sr(i, "");
        } catch (x) {
          X(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && o.type === "radio" && o.name != null && zc(i, o), Rs(a, s);
          var u = Rs(a, o);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], d = l[s + 1];
            c === "style" ? Hc(i, d) : c === "dangerouslySetInnerHTML" ? Bc(i, d) : c === "children" ? Sr(i, d) : Ol(i, c, d, u);
          }
          switch (a) {
            case "input":
              ks(i, o);
              break;
            case "textarea":
              Dc(i, o);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var L = o.value;
              L != null ? Pn(i, !!o.multiple, L, !1) : f !== !!o.multiple && (o.defaultValue != null ? Pn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Pn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Tr] = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Be(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Be(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (x) {
        X(e, e.return, x);
      }
      break;
    case 4:
      Be(t, e), Ge(e);
      break;
    case 13:
      Be(t, e), Ge(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ua = J())), r & 4 && Cu(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (u = Le) || c, Be(t, e), Le = u) : Be(t, e), Ge(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (R = e, c = e.child; c !== null; ) {
          for (d = R = c; R !== null; ) {
            switch (f = R, L = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, f, f.return);
                break;
              case 1:
                kn(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    X(r, n, x);
                  }
                }
                break;
              case 5:
                kn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ju(d);
                  continue;
                }
            }
            L !== null ? (L.return = f, R = L) : ju(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Vc("display", s));
              } catch (x) {
                X(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (x) {
              X(e, e.return, x);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Be(t, e), Ge(e), r & 4 && Cu(e);
      break;
    case 21:
      break;
    default:
      Be(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Sr(i, ""), r.flags &= -33);
          var o = ku(e);
          ol(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = ku(e);
          il(e, a, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      X(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bp(e, t, n) {
  R = e, yf(e);
}
function yf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || hi;
      if (!s) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || Le;
        a = hi;
        var u = Le;
        if (hi = s, (Le = l) && !u) for (R = i; R !== null; ) s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? Pu(i) : l !== null ? (l.return = s, R = l) : Pu(i);
        for (; o !== null; ) R = o, yf(o), o = o.sibling;
        R = i, hi = a, Le = u;
      }
      Nu(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, R = o) : Nu(e);
  }
}
function Nu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Le || jo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && cu(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              cu(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && Nr(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(N(163));
        }
        Le || t.flags & 512 && rl(t);
      } catch (f) {
        X(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function ju(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Pu(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jo(4, t);
          } catch (l) {
            X(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              X(t, i, l);
            }
          }
          var o = t.return;
          try {
            rl(t);
          } catch (l) {
            X(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rl(t);
          } catch (l) {
            X(t, s, l);
          }
      }
    } catch (l) {
      X(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, R = a;
      break;
    }
    R = t.return;
  }
}
var Vp = Math.ceil, ro = pt.ReactCurrentDispatcher, la = pt.ReactCurrentOwner, ze = pt.ReactCurrentBatchConfig, F = 0, se = null, Z = null, ue = 0, Pe = 0, Cn = bt(0), re = 0, br = null, qt = 0, Po = 0, aa = 0, vr = null, Ee = null, ua = 0, Bn = 1 / 0, it = null, io = !1, sl = null, Rt = null, mi = !1, St = null, oo = 0, yr = 0, ll = null, Ii = -1, _i = 0;
function we() {
  return F & 6 ? J() : Ii !== -1 ? Ii : Ii = J();
}
function Ot(e) {
  return e.mode & 1 ? F & 2 && ue !== 0 ? ue & -ue : Np.transition !== null ? (_i === 0 && (_i = nd()), _i) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ud(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < yr) throw yr = 0, ll = null, Error(N(185));
  Hr(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Po |= n), re === 4 && wt(e, ue)), je(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Bn = J() + 500, ko && At()));
}
function je(e, t) {
  var n = e.callbackNode;
  N0(e, t);
  var r = Bi(e, e === se ? ue : 0);
  if (r === 0) n !== null && ba(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ba(n), t === 1) e.tag === 0 ? Cp(Ru.bind(null, e)) : Pd(Ru.bind(null, e)), xp(function() {
      !(F & 6) && At();
    }), n = null;
    else {
      switch (rd(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = ed;
          break;
        case 16:
          n = Ui;
          break;
        case 536870912:
          n = td;
          break;
        default:
          n = Ui;
      }
      n = jf(n, wf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function wf(e, t) {
  if (Ii = -1, _i = 0, F & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = Bi(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = so(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Sf();
    (se !== e || ue !== t) && (it = null, Bn = J() + 500, Yt(e, t));
    do
      try {
        Wp();
        break;
      } catch (a) {
        xf(e, a);
      }
    while (!0);
    Yl(), ro.current = o, F = i, Z !== null ? t = 0 : (se = null, ue = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (i = $s(e), i !== 0 && (r = i, t = al(e, i))), t === 1) throw n = br, Yt(e, 0), wt(e, r), je(e, J()), n;
    if (t === 6) wt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Hp(i) && (t = so(e, r), t === 2 && (o = $s(e), o !== 0 && (r = o, t = al(e, o))), t === 1)) throw n = br, Yt(e, 0), wt(e, r), je(e, J()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Ht(e, Ee, it);
          break;
        case 3:
          if (wt(e, r), (r & 130023424) === r && (t = ua + 500 - J(), 10 < t)) {
            if (Bi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Bs(Ht.bind(null, e, Ee, it), t);
            break;
          }
          Ht(e, Ee, it);
          break;
        case 4:
          if (wt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - We(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bs(Ht.bind(null, e, Ee, it), r);
            break;
          }
          Ht(e, Ee, it);
          break;
        case 5:
          Ht(e, Ee, it);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return je(e, J()), e.callbackNode === n ? wf.bind(null, e) : null;
}
function al(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = so(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && ul(t)), e;
}
function ul(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function Hp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Ye(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function wt(e, t) {
  for (t &= ~aa, t &= ~Po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ru(e) {
  if (F & 6) throw Error(N(327));
  _n();
  var t = Bi(e, 0);
  if (!(t & 1)) return je(e, J()), null;
  var n = so(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $s(e);
    r !== 0 && (t = r, n = al(e, r));
  }
  if (n === 1) throw n = br, Yt(e, 0), wt(e, t), je(e, J()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, Ee, it), je(e, J()), null;
}
function ca(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Bn = J() + 500, ko && At());
  }
}
function en(e) {
  St !== null && St.tag === 0 && !(F & 6) && _n();
  var t = F;
  F |= 1;
  var n = ze.transition, r = b;
  try {
    if (ze.transition = null, b = 1, e) return e();
  } finally {
    b = r, ze.transition = n, F = t, !(F & 6) && At();
  }
}
function da() {
  Pe = Cn.current, V(Cn);
}
function Yt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wp(n)), Z !== null) for (n = Z.return; n !== null; ) {
    var r = n;
    switch (Kl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qi();
        break;
      case 3:
        Dn(), V(Ce), V(ge), ea();
        break;
      case 5:
        ql(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        V(W);
        break;
      case 19:
        V(W);
        break;
      case 10:
        Xl(r.type._context);
        break;
      case 22:
      case 23:
        da();
    }
    n = n.return;
  }
  if (se = e, Z = e = Tt(e.current, null), ue = Pe = t, re = 0, br = null, aa = Po = qt = 0, Ee = vr = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++) if (n = Wt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    Wt = null;
  }
  return e;
}
function xf(e, t) {
  do {
    var n = Z;
    try {
      if (Yl(), Ri.current = no, to) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        to = !1;
      }
      if (Zt = 0, oe = ne = Q = null, Lr = !1, $r = 0, la.current = null, n === null || n.return === null) {
        re = 1, br = t, Z = null;
        break;
      }
      e: {
        var o = e, s = n.return, a = n, l = t;
        if (t = ue, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var L = Lu(s);
          if (L !== null) {
            L.flags &= -257, gu(L, s, a, o, t), L.mode & 1 && mu(o, u, t), t = L, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              mu(o, u, t), fa();
              break e;
            }
            l = Error(N(426));
          }
        } else if (K && a.mode & 1) {
          var w = Lu(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), gu(w, s, a, o, t), Wl(Un(l, a));
            break e;
          }
        }
        o = l = Un(l, a), re !== 4 && (re = 2), vr === null ? vr = [o] : vr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var h = rf(o, l, t);
              uu(o, h);
              break e;
            case 1:
              a = l;
              var m = o.type, v = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Rt === null || !Rt.has(v)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = of(o, a, t);
                uu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      kf(n);
    } catch (S) {
      t = S, Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sf() {
  var e = ro.current;
  return ro.current = no, e === null ? no : e;
}
function fa() {
  (re === 0 || re === 3 || re === 2) && (re = 4), se === null || !(qt & 268435455) && !(Po & 268435455) || wt(se, ue);
}
function so(e, t) {
  var n = F;
  F |= 2;
  var r = Sf();
  (se !== e || ue !== t) && (it = null, Yt(e, t));
  do
    try {
      Kp();
      break;
    } catch (i) {
      xf(e, i);
    }
  while (!0);
  if (Yl(), F = n, ro.current = r, Z !== null) throw Error(N(261));
  return se = null, ue = 0, re;
}
function Kp() {
  for (; Z !== null; ) Ef(Z);
}
function Wp() {
  for (; Z !== null && !g0(); ) Ef(Z);
}
function Ef(e) {
  var t = Nf(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? kf(e) : Z = t, la.current = null;
}
function kf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = zp(n, t), n !== null) {
        n.flags &= 32767, Z = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, Z = null;
        return;
      }
    } else if (n = Ap(n, t, Pe), n !== null) {
      Z = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Ht(e, t, n) {
  var r = b, i = ze.transition;
  try {
    ze.transition = null, b = 1, Qp(e, t, n, r);
  } finally {
    ze.transition = i, b = r;
  }
  return null;
}
function Qp(e, t, n, r) {
  do
    _n();
  while (St !== null);
  if (F & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (j0(e, o), e === se && (Z = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mi || (mi = !0, jf(Ui, function() {
    return _n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = ze.transition, ze.transition = null;
    var s = b;
    b = 1;
    var a = F;
    F |= 4, la.current = null, Up(e, n), vf(n, e), pp(Ds), Vi = !!zs, Ds = zs = null, e.current = n, Bp(n), v0(), F = a, b = s, ze.transition = o;
  } else e.current = n;
  if (mi && (mi = !1, St = e, oo = i), o = e.pendingLanes, o === 0 && (Rt = null), x0(n.stateNode), je(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (io) throw io = !1, e = sl, sl = null, e;
  return oo & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === ll ? yr++ : (yr = 0, ll = e) : yr = 0, At(), null;
}
function _n() {
  if (St !== null) {
    var e = rd(oo), t = ze.transition, n = b;
    try {
      if (ze.transition = null, b = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, oo = 0, F & 6) throw Error(N(331));
        var i = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var o = R, s = o.child;
          if (R.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, R = d;
                  else for (; R !== null; ) {
                    c = R;
                    var f = c.sibling, L = c.return;
                    if (mf(c), c === u) {
                      R = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = L, R = f;
                      break;
                    }
                    R = L;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var w = x.sibling;
                    x.sibling = null, x = w;
                  } while (x !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, R = s;
          else e: for (; R !== null; ) {
            if (o = R, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                gr(9, o, o.return);
            }
            var h = o.sibling;
            if (h !== null) {
              h.return = o.return, R = h;
              break e;
            }
            R = o.return;
          }
        }
        var m = e.current;
        for (R = m; R !== null; ) {
          s = R;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) v.return = s, R = v;
          else e: for (s = m; R !== null; ) {
            if (a = R, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  jo(9, a);
              }
            } catch (S) {
              X(a, a.return, S);
            }
            if (a === s) {
              R = null;
              break e;
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, R = g;
              break e;
            }
            R = a.return;
          }
        }
        if (F = i, At(), et && typeof et.onPostCommitFiberRoot == "function") try {
          et.onPostCommitFiberRoot(yo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      b = n, ze.transition = t;
    }
  }
  return !1;
}
function Ou(e, t, n) {
  t = Un(n, t), t = rf(e, t, 1), e = Pt(e, t, 1), t = we(), e !== null && (Hr(e, 1, t), je(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Ou(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ou(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
        e = Un(n, e), e = of(t, e, 1), t = Pt(t, e, 1), e = we(), t !== null && (Hr(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Yp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (re === 4 || re === 3 && (ue & 130023424) === ue && 500 > J() - ua ? Yt(e, 0) : aa |= n), je(e, t);
}
function Cf(e, t) {
  t === 0 && (e.mode & 1 ? (t = oi, oi <<= 1, !(oi & 130023424) && (oi = 4194304)) : t = 1);
  var n = we();
  e = dt(e, t), e !== null && (Hr(e, t, n), je(e, n));
}
function Xp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Cf(e, n);
}
function Gp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Cf(e, n);
}
var Nf;
Nf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ce.current) ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ke = !1, bp(e, t, n);
    ke = !!(e.flags & 131072);
  }
  else ke = !1, K && t.flags & 1048576 && Rd(t, Gi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ti(e, t), e = t.pendingProps;
      var i = bn(t, ge.current);
      In(t, n), i = na(null, t, r, e, i, n);
      var o = ra();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, Yi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Jl(t), i.updater = No, t.stateNode = i, i._reactInternals = t, Xs(t, r, e, n), t = Zs(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Hl(t), ye(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ti(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Zp(r), e = Ve(r, e), i) {
          case 0:
            t = Js(null, t, r, e, n);
            break e;
          case 1:
            t = wu(null, t, r, e, n);
            break e;
          case 11:
            t = vu(null, t, r, e, n);
            break e;
          case 14:
            t = yu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), Js(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), wu(e, t, r, i, n);
    case 3:
      e: {
        if (uf(t), e === null) throw Error(N(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Md(e, t), qi(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Un(Error(N(423)), t), t = xu(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Un(Error(N(424)), t), t = xu(e, t, r, n, i);
          break e;
        } else for (Re = jt(t.stateNode.containerInfo.firstChild), Te = t, K = !0, Ke = null, n = _d(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (An(), r === i) {
            t = ft(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Fd(t), e === null && Ws(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Us(r, i) ? s = null : o !== null && Us(r, o) && (t.flags |= 32), af(e, t), ye(e, t, s, n), t.child;
    case 6:
      return e === null && Ws(t), null;
    case 13:
      return cf(e, t, n);
    case 4:
      return Zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : ye(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), vu(e, t, r, i, n);
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, U(Ji, r._currentValue), r._currentValue = s, o !== null) if (Ye(o.value, s)) {
          if (o.children === i.children && !Ce.current) {
            t = ft(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            s = o.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = at(-1, n & -n), l.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Qs(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(N(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Qs(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        ye(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, In(t, n), i = De(i), r = r(i), t.flags |= 1, ye(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ve(r, t.pendingProps), i = Ve(r.type, i), yu(e, t, r, i, n);
    case 15:
      return sf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), Ti(e, t), t.tag = 1, Ne(r) ? (e = !0, Yi(t)) : e = !1, In(t, n), nf(t, r, i), Xs(t, r, i, n), Zs(null, t, r, !0, e, n);
    case 19:
      return df(e, t, n);
    case 22:
      return lf(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function jf(e, t) {
  return qc(e, t);
}
function Jp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ae(e, t, n, r) {
  return new Jp(e, t, n, r);
}
function pa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Zp(e) {
  if (typeof e == "function") return pa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Il) return 11;
    if (e === _l) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ae(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $i(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") pa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case mn:
      return Xt(n.children, i, o, t);
    case Tl:
      s = 8, i |= 8;
      break;
    case ys:
      return e = Ae(12, n, t, i | 2), e.elementType = ys, e.lanes = o, e;
    case ws:
      return e = Ae(13, n, t, i), e.elementType = ws, e.lanes = o, e;
    case xs:
      return e = Ae(19, n, t, i), e.elementType = xs, e.lanes = o, e;
    case Fc:
      return Ro(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case $c:
          s = 10;
          break e;
        case Mc:
          s = 9;
          break e;
        case Il:
          s = 11;
          break e;
        case _l:
          s = 14;
          break e;
        case gt:
          s = 16, r = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = Ae(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Xt(e, t, n, r) {
  return e = Ae(7, e, r, t), e.lanes = n, e;
}
function Ro(e, t, n, r) {
  return e = Ae(22, e, r, t), e.elementType = Fc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function cs(e, t, n) {
  return e = Ae(6, e, null, t), e.lanes = n, e;
}
function ds(e, t, n) {
  return t = Ae(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function qp(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ko(0), this.expirationTimes = Ko(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ko(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ha(e, t, n, r, i, o, s, a, l) {
  return e = new qp(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ae(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jl(o), e;
}
function eh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Pf(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return jd(e, n, t);
  }
  return t;
}
function Rf(e, t, n, r, i, o, s, a, l) {
  return e = ha(n, r, !0, e, i, o, s, a, l), e.context = Pf(null), n = e.current, r = we(), i = Ot(n), o = at(r, i), o.callback = t ?? null, Pt(n, o, i), e.current.lanes = i, Hr(e, i, r), je(e, r), e;
}
function Oo(e, t, n, r) {
  var i = t.current, o = we(), s = Ot(i);
  return n = Pf(n), t.context === null ? t.context = n : t.pendingContext = n, t = at(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pt(i, t, s), e !== null && (Qe(e, i, s, o), Pi(e, i, s)), s;
}
function lo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function th() {
  return null;
}
var Of = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function La(e) {
  this._internalRoot = e;
}
To.prototype.render = La.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Oo(e, t, null, null);
};
To.prototype.unmount = La.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function() {
      Oo(null, e, null, null);
    }), t[ct] = null;
  }
};
function To(e) {
  this._internalRoot = e;
}
To.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++) ;
    yt.splice(n, 0, e), n === 0 && ad(e);
  }
};
function ga(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Io(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Iu() {
}
function nh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = lo(s);
        o.call(u);
      };
    }
    var s = Rf(t, r, e, 0, null, !1, !1, "", Iu);
    return e._reactRootContainer = s, e[ct] = s.current, Rr(e.nodeType === 8 ? e.parentNode : e), en(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = lo(l);
      a.call(u);
    };
  }
  var l = ha(e, 0, !1, null, null, !1, !1, "", Iu);
  return e._reactRootContainer = l, e[ct] = l.current, Rr(e.nodeType === 8 ? e.parentNode : e), en(function() {
    Oo(t, l, n, r);
  }), l;
}
function _o(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = lo(s);
        a.call(l);
      };
    }
    Oo(t, s, e, i);
  } else s = nh(n, t, e, i, r);
  return lo(s);
}
id = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (Fl(t, n | 1), je(t, J()), !(F & 6) && (Bn = J() + 500, At()));
      }
      break;
    case 13:
      en(function() {
        var r = dt(e, 1);
        if (r !== null) {
          var i = we();
          Qe(r, e, 1, i);
        }
      }), ma(e, 1);
  }
};
bl = function(e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = we();
      Qe(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
od = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = dt(e, t);
    if (n !== null) {
      var r = we();
      Qe(n, e, t, r);
    }
    ma(e, t);
  }
};
sd = function() {
  return b;
};
ld = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
Ts = function(e, t, n) {
  switch (t) {
    case "input":
      if (ks(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Eo(r);
            if (!i) throw Error(N(90));
            Ac(r), ks(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dc(e, n);
      break;
    case "select":
      t = n.value, t != null && Pn(e, !!n.multiple, t, !1);
  }
};
Qc = ca;
Yc = en;
var rh = { usingClientEntryPoint: !1, Events: [Wr, yn, Eo, Kc, Wc, ca] }, er = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ih = { bundleType: er.bundleType, version: er.version, rendererPackageName: er.rendererPackageName, rendererConfig: er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Jc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: er.findFiberByHostInstance || th, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Li.isDisabled && Li.supportsFiber) try {
    yo = Li.inject(ih), et = Li;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rh;
_e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ga(t)) throw Error(N(200));
  return eh(e, t, null, n);
};
_e.createRoot = function(e, t) {
  if (!ga(e)) throw Error(N(299));
  var n = !1, r = "", i = Of;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ha(e, 1, !1, null, null, n, !1, r, i), e[ct] = t.current, Rr(e.nodeType === 8 ? e.parentNode : e), new La(t);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Jc(t), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return en(e);
};
_e.hydrate = function(e, t, n) {
  if (!Io(t)) throw Error(N(200));
  return _o(null, e, t, !0, n);
};
_e.hydrateRoot = function(e, t, n) {
  if (!ga(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Of;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Rf(t, null, e, 1, n ?? null, i, !1, o, s), e[ct] = t.current, Rr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new To(t);
};
_e.render = function(e, t, n) {
  if (!Io(t)) throw Error(N(200));
  return _o(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function(e) {
  if (!Io(e)) throw Error(N(40));
  return e._reactRootContainer ? (en(function() {
    _o(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ct] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = ca;
_e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Io(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return _o(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Tf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tf);
    } catch (e) {
      console.error(e);
    }
}
Tf(), Oc.exports = _e;
var oh = Oc.exports, If, _u = oh;
If = _u.createRoot, _u.hydrateRoot;
var _f = { exports: {} }, $f = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr = k;
function sh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lh = typeof Object.is == "function" ? Object.is : sh, ah = Yr.useSyncExternalStore, uh = Yr.useRef, ch = Yr.useEffect, dh = Yr.useMemo, fh = Yr.useDebugValue;
$f.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var o = uh(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = dh(function() {
    function l(L) {
      if (!u) {
        if (u = !0, c = L, L = r(L), i !== void 0 && s.hasValue) {
          var y = s.value;
          if (i(y, L)) return d = y;
        }
        return d = L;
      }
      if (y = d, lh(c, L)) return y;
      var x = r(L);
      return i !== void 0 && i(y, x) ? y : (c = L, d = x);
    }
    var u = !1, c, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, i]);
  var a = ah(e, o[0], o[1]);
  return ch(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), fh(a), a;
};
_f.exports = $f;
var ph = _f.exports, Oe = (
  // prettier-ignore
  // @ts-ignore
  "default" in gs ? vo : gs
), $u = Symbol.for("react-redux-context"), Mu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function hh() {
  if (!Oe.createContext)
    return {};
  const e = Mu[$u] ?? (Mu[$u] = /* @__PURE__ */ new Map());
  let t = e.get(Oe.createContext);
  return t || (t = Oe.createContext(
    null
  ), e.set(Oe.createContext, t)), t;
}
var Mt = /* @__PURE__ */ hh(), mh = () => {
  throw new Error("uSES not initialized!");
};
function va(e = Mt) {
  return function() {
    return Oe.useContext(e);
  };
}
var Mf = /* @__PURE__ */ va(), Ff = mh, Lh = (e) => {
  Ff = e;
}, gh = (e, t) => e === t;
function vh(e = Mt) {
  const t = e === Mt ? Mf : va(e), n = (r, i = {}) => {
    const { equalityFn: o = gh, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i, {
      store: a,
      subscription: l,
      getServerState: u,
      stabilityCheck: c,
      identityFunctionCheck: d
    } = t();
    Oe.useRef(!0);
    const f = Oe.useCallback(
      {
        [r.name](y) {
          return r(y);
        }
      }[r.name],
      [r, c, s.stabilityCheck]
    ), L = Ff(
      l.addNestedSub,
      a.getState,
      u || a.getState,
      f,
      o
    );
    return Oe.useDebugValue(L), L;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zt = /* @__PURE__ */ vh();
function yh(e) {
  e();
}
function wh() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      yh(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = t = {
        callback: n,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Fu = {
  notify() {
  },
  get: () => []
};
function xh(e, t) {
  let n, r = Fu, i = 0, o = !1;
  function s(x) {
    c();
    const w = r.subscribe(x);
    let h = !1;
    return () => {
      h || (h = !0, w(), d());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return o;
  }
  function c() {
    i++, n || (n = e.subscribe(l), r = wh());
  }
  function d() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Fu);
  }
  function f() {
    o || (o = !0, c());
  }
  function L() {
    o && (o = !1, d());
  }
  const y = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: L,
    getListeners: () => r
  };
  return y;
}
var Sh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Eh = typeof navigator < "u" && navigator.product === "ReactNative", kh = Sh || Eh ? Oe.useLayoutEffect : Oe.useEffect;
function Ch({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = Oe.useMemo(() => {
    const u = xh(e);
    return {
      store: e,
      subscription: u,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), a = Oe.useMemo(() => e.getState(), [e]);
  kh(() => {
    const { subscription: u } = s;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || Mt;
  return /* @__PURE__ */ Oe.createElement(l.Provider, { value: s }, n);
}
var Nh = Ch;
function bf(e = Mt) {
  const t = e === Mt ? Mf : (
    // @ts-ignore
    va(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var jh = /* @__PURE__ */ bf();
function Ph(e = Mt) {
  const t = e === Mt ? jh : bf(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Xr = /* @__PURE__ */ Ph();
Lh(ph.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ar.apply(this, arguments);
}
var Et;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Et || (Et = {}));
const bu = "popstate";
function Rh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: o,
      search: s,
      hash: a
    } = r.location;
    return cl(
      "",
      {
        pathname: o,
        search: s,
        hash: a
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ao(i);
  }
  return Th(t, n, null, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Af(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Oh() {
  return Math.random().toString(36).substr(2, 8);
}
function Au(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function cl(e, t, n, r) {
  return n === void 0 && (n = null), Ar({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Wn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Oh()
  });
}
function ao(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Th(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, s = i.history, a = Et.Pop, l = null, u = c();
  u == null && (u = 0, s.replaceState(Ar({}, s.state, {
    idx: u
  }), ""));
  function c() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function d() {
    a = Et.Pop;
    let w = c(), h = w == null ? null : w - u;
    u = w, l && l({
      action: a,
      location: x.location,
      delta: h
    });
  }
  function f(w, h) {
    a = Et.Push;
    let m = cl(x.location, w, h);
    u = c() + 1;
    let v = Au(m, u), g = x.createHref(m);
    try {
      s.pushState(v, "", g);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError")
        throw S;
      i.location.assign(g);
    }
    o && l && l({
      action: a,
      location: x.location,
      delta: 1
    });
  }
  function L(w, h) {
    a = Et.Replace;
    let m = cl(x.location, w, h);
    u = c();
    let v = Au(m, u), g = x.createHref(m);
    s.replaceState(v, "", g), o && l && l({
      action: a,
      location: x.location,
      delta: 0
    });
  }
  function y(w) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href, m = typeof w == "string" ? w : ao(w);
    return m = m.replace(/ $/, "%20"), q(h, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, h);
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(bu, d), l = w, () => {
        i.removeEventListener(bu, d), l = null;
      };
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let h = y(w);
      return {
        pathname: h.pathname,
        search: h.search,
        hash: h.hash
      };
    },
    push: f,
    replace: L,
    go(w) {
      return s.go(w);
    }
  };
  return x;
}
var zu;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(zu || (zu = {}));
function Ih(e, t, n) {
  return n === void 0 && (n = "/"), _h(e, t, n, !1);
}
function _h(e, t, n, r) {
  let i = typeof t == "string" ? Wn(t) : t, o = ya(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = zf(e);
  $h(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Kh(o);
    a = Vh(s[l], u, r);
  }
  return a;
}
function zf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    l.relativePath.startsWith("/") && (q(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
    let u = It([r, l.relativePath]), c = n.concat(l);
    o.children && o.children.length > 0 && (q(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), zf(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: Uh(u, o.index),
      routesMeta: c
    });
  };
  return e.forEach((o, s) => {
    var a;
    if (o.path === "" || !((a = o.path) != null && a.includes("?")))
      i(o, s);
    else
      for (let l of Df(o.path))
        i(o, s, l);
  }), t;
}
function Df(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = Df(r.join("/")), a = [];
  return a.push(...s.map((l) => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function $h(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Bh(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Mh = /^:[\w-]+$/, Fh = 3, bh = 2, Ah = 1, zh = 10, Dh = -2, Du = (e) => e === "*";
function Uh(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Du) && (r += Dh), t && (r += bh), n.filter((i) => !Du(i)).reduce((i, o) => i + (Mh.test(o) ? Fh : o === "" ? Ah : zh), r);
}
function Bh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Vh(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, o = "/", s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a], u = a === r.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", d = Uu({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, c), f = l.route;
    if (!d && u && n && !r[r.length - 1].route.index && (d = Uu({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: !1
    }, c)), !d)
      return null;
    Object.assign(i, d.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: It([o, d.pathname]),
      pathnameBase: Xh(It([o, d.pathnameBase])),
      route: f
    }), d.pathnameBase !== "/" && (o = It([o, d.pathnameBase]));
  }
  return s;
}
function Uu(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Hh(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let {
        paramName: f,
        isOptional: L
      } = c;
      if (f === "*") {
        let x = a[d] || "";
        s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[d];
      return L && !y ? u[f] = void 0 : u[f] = (y || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function Hh(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Af(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
    paramName: a,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Kh(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Af(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ya(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Wh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Wn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Qh(n, t) : t,
    search: Gh(r),
    hash: Jh(i)
  };
}
function Qh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function fs(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Yh(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Uf(e, t) {
  let n = Yh(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Bf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Wn(e) : (i = Ar({}, e), q(!i.pathname || !i.pathname.includes("?"), fs("?", "pathname", "search", i)), q(!i.pathname || !i.pathname.includes("#"), fs("#", "pathname", "hash", i)), q(!i.search || !i.search.includes("#"), fs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (s == null)
    a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), d -= 1;
      i.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = Wh(i, a), u = s && s !== "/" && s.endsWith("/"), c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"), Xh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Gh = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Jh = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Zh(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Vf = ["post", "put", "patch", "delete"];
new Set(Vf);
const qh = ["get", ...Vf];
new Set(qh);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zr.apply(this, arguments);
}
const wa = /* @__PURE__ */ k.createContext(null), e2 = /* @__PURE__ */ k.createContext(null), sn = /* @__PURE__ */ k.createContext(null), $o = /* @__PURE__ */ k.createContext(null), ln = /* @__PURE__ */ k.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Hf = /* @__PURE__ */ k.createContext(null);
function t2(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Gr() || q(!1);
  let {
    basename: r,
    navigator: i
  } = k.useContext(sn), {
    hash: o,
    pathname: s,
    search: a
  } = Wf(e, {
    relative: n
  }), l = s;
  return r !== "/" && (l = s === "/" ? r : It([r, s])), i.createHref({
    pathname: l,
    search: a,
    hash: o
  });
}
function Gr() {
  return k.useContext($o) != null;
}
function Mo() {
  return Gr() || q(!1), k.useContext($o).location;
}
function Kf(e) {
  k.useContext(sn).static || k.useLayoutEffect(e);
}
function Jr() {
  let {
    isDataRoute: e
  } = k.useContext(ln);
  return e ? h2() : n2();
}
function n2() {
  Gr() || q(!1);
  let e = k.useContext(wa), {
    basename: t,
    future: n,
    navigator: r
  } = k.useContext(sn), {
    matches: i
  } = k.useContext(ln), {
    pathname: o
  } = Mo(), s = JSON.stringify(Uf(i, n.v7_relativeSplatPath)), a = k.useRef(!1);
  return Kf(() => {
    a.current = !0;
  }), k.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), !a.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let d = Bf(u, JSON.parse(s), o, c.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : It([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c);
  }, [t, r, s, o, e]);
}
function Wf(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = k.useContext(sn), {
    matches: i
  } = k.useContext(ln), {
    pathname: o
  } = Mo(), s = JSON.stringify(Uf(i, r.v7_relativeSplatPath));
  return k.useMemo(() => Bf(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function r2(e, t) {
  return i2(e, t);
}
function i2(e, t, n, r) {
  Gr() || q(!1);
  let {
    navigator: i
  } = k.useContext(sn), {
    matches: o
  } = k.useContext(ln), s = o[o.length - 1], a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Mo(), c;
  if (t) {
    var d;
    let w = typeof t == "string" ? Wn(t) : t;
    l === "/" || (d = w.pathname) != null && d.startsWith(l) || q(!1), c = w;
  } else
    c = u;
  let f = c.pathname || "/", L = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    L = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = Ih(e, {
    pathname: L
  }), x = u2(y && y.map((w) => Object.assign({}, w, {
    params: Object.assign({}, a, w.params),
    pathname: It([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? l : It([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), o, n, r);
  return t && x ? /* @__PURE__ */ k.createElement($o.Provider, {
    value: {
      location: zr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: Et.Pop
    }
  }, x) : x;
}
function o2() {
  let e = p2(), t = Zh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ k.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ k.createElement("pre", {
    style: i
  }, n) : null, null);
}
const s2 = /* @__PURE__ */ k.createElement(o2, null);
class l2 extends k.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ k.createElement(ln.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ k.createElement(Hf.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function a2(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = k.useContext(wa);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ k.createElement(ln.Provider, {
    value: t
  }, r);
}
function u2(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let s = e, a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
    c >= 0 || q(!1), s = s.slice(0, Math.min(s.length, c + 1));
  }
  let l = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
        let {
          loaderData: f,
          errors: L
        } = n, y = d.route.loader && f[d.route.id] === void 0 && (!L || L[d.route.id] === void 0);
        if (d.route.lazy || y) {
          l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let L, y = !1, x = null, w = null;
    n && (L = a && d.route.id ? a[d.route.id] : void 0, x = d.route.errorElement || s2, l && (u < 0 && f === 0 ? (y = !0, w = null) : u === f && (y = !0, w = d.route.hydrateFallbackElement || null)));
    let h = t.concat(s.slice(0, f + 1)), m = () => {
      let v;
      return L ? v = x : y ? v = w : d.route.Component ? v = /* @__PURE__ */ k.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c, /* @__PURE__ */ k.createElement(a2, {
        match: d,
        routeContext: {
          outlet: c,
          matches: h,
          isDataRoute: n != null
        },
        children: v
      });
    };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? /* @__PURE__ */ k.createElement(l2, {
      location: n.location,
      revalidation: n.revalidation,
      component: x,
      error: L,
      children: m(),
      routeContext: {
        outlet: null,
        matches: h,
        isDataRoute: !0
      }
    }) : m();
  }, null);
}
var Qf = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Qf || {}), uo = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(uo || {});
function c2(e) {
  let t = k.useContext(wa);
  return t || q(!1), t;
}
function d2(e) {
  let t = k.useContext(e2);
  return t || q(!1), t;
}
function f2(e) {
  let t = k.useContext(ln);
  return t || q(!1), t;
}
function Yf(e) {
  let t = f2(), n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function p2() {
  var e;
  let t = k.useContext(Hf), n = d2(uo.UseRouteError), r = Yf(uo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function h2() {
  let {
    router: e
  } = c2(Qf.UseNavigateStable), t = Yf(uo.UseNavigateStable), n = k.useRef(!1);
  return Kf(() => {
    n.current = !0;
  }), k.useCallback(function(i, o) {
    o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, zr({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function rt(e) {
  q(!1);
}
function m2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Et.Pop,
    navigator: o,
    static: s = !1,
    future: a
  } = e;
  Gr() && q(!1);
  let l = t.replace(/^\/*/, "/"), u = k.useMemo(() => ({
    basename: l,
    navigator: o,
    static: s,
    future: zr({
      v7_relativeSplatPath: !1
    }, a)
  }), [l, a, o, s]);
  typeof r == "string" && (r = Wn(r));
  let {
    pathname: c = "/",
    search: d = "",
    hash: f = "",
    state: L = null,
    key: y = "default"
  } = r, x = k.useMemo(() => {
    let w = ya(c, l);
    return w == null ? null : {
      location: {
        pathname: w,
        search: d,
        hash: f,
        state: L,
        key: y
      },
      navigationType: i
    };
  }, [l, c, d, f, L, y, i]);
  return x == null ? null : /* @__PURE__ */ k.createElement(sn.Provider, {
    value: u
  }, /* @__PURE__ */ k.createElement($o.Provider, {
    children: n,
    value: x
  }));
}
function L2(e) {
  let {
    children: t,
    location: n
  } = e;
  return r2(dl(t), n);
}
new Promise(() => {
});
function dl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return k.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ k.isValidElement(r))
      return;
    let o = [...t, i];
    if (r.type === k.Fragment) {
      n.push.apply(n, dl(r.props.children, o));
      return;
    }
    r.type !== rt && q(!1), !r.props.index || !r.props.children || q(!1);
    let s = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = dl(r.props.children, o)), n.push(s);
  }), n;
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fl.apply(this, arguments);
}
function g2(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function v2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function y2(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !v2(e);
}
const w2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], x2 = "6";
try {
  window.__reactRouterVersion = x2;
} catch {
}
const S2 = "startTransition", Bu = gs[S2];
function E2(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, o = k.useRef();
  o.current == null && (o.current = Rh({
    window: i,
    v5Compat: !0
  }));
  let s = o.current, [a, l] = k.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: u
  } = r || {}, c = k.useCallback((d) => {
    u && Bu ? Bu(() => l(d)) : l(d);
  }, [l, u]);
  return k.useLayoutEffect(() => s.listen(c), [s, c]), /* @__PURE__ */ k.createElement(m2, {
    basename: t,
    children: n,
    location: a.location,
    navigationType: a.action,
    navigator: s,
    future: r
  });
}
const k2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", C2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, be = /* @__PURE__ */ k.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: o,
    replace: s,
    state: a,
    target: l,
    to: u,
    preventScrollReset: c,
    unstable_viewTransition: d
  } = t, f = g2(t, w2), {
    basename: L
  } = k.useContext(sn), y, x = !1;
  if (typeof u == "string" && C2.test(u) && (y = u, k2))
    try {
      let v = new URL(window.location.href), g = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u), S = ya(g.pathname, L);
      g.origin === v.origin && S != null ? u = S + g.search + g.hash : x = !0;
    } catch {
    }
  let w = t2(u, {
    relative: i
  }), h = N2(u, {
    replace: s,
    state: a,
    target: l,
    preventScrollReset: c,
    relative: i,
    unstable_viewTransition: d
  });
  function m(v) {
    r && r(v), v.defaultPrevented || h(v);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ k.createElement("a", fl({}, f, {
      href: y || w,
      onClick: x || o ? r : m,
      ref: n,
      target: l
    }))
  );
});
var Vu;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Vu || (Vu = {}));
var Hu;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Hu || (Hu = {}));
function N2(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    unstable_viewTransition: a
  } = t === void 0 ? {} : t, l = Jr(), u = Mo(), c = Wf(e, {
    relative: s
  });
  return k.useCallback((d) => {
    if (y2(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : ao(u) === ao(c);
      l(e, {
        replace: f,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: a
      });
    }
  }, [u, l, c, r, i, n, e, o, s, a]);
}
var j2 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const P2 = /* @__PURE__ */ Lo(j2);
var R2 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ku(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (P2[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var r = e.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? e.slice(4, r) : "" };
  }
  for (var i = new RegExp(R2), o = null; (o = i.exec(e)) !== null; ) if (o[0].trim()) if (o[1]) {
    var s = o[1].trim(), a = [s, ""];
    s.indexOf("=") > -1 && (a = s.split("=")), t.attrs[a[0]] = a[1], i.lastIndex--;
  } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
  return t;
}
var O2 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, T2 = /^\s*$/, I2 = /* @__PURE__ */ Object.create(null);
function Xf(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var r = [];
        for (var i in n) r.push(i + '="' + n[i] + '"');
        return r.length ? " " + r.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Xf, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var _2 = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = I2);
  var n, r = [], i = [], o = -1, s = !1;
  if (e.indexOf("<") !== 0) {
    var a = e.indexOf("<");
    r.push({ type: "text", content: a === -1 ? e : e.substring(0, a) });
  }
  return e.replace(O2, function(l, u) {
    if (s) {
      if (l !== "</" + n.name + ">") return;
      s = !1;
    }
    var c, d = l.charAt(1) !== "/", f = l.startsWith("<!--"), L = u + l.length, y = e.charAt(L);
    if (f) {
      var x = Ku(l);
      return o < 0 ? (r.push(x), r) : ((c = i[o]).children.push(x), r);
    }
    if (d && (o++, (n = Ku(l)).type === "tag" && t.components[n.name] && (n.type = "component", s = !0), n.voidElement || s || !y || y === "<" || n.children.push({ type: "text", content: e.slice(L, e.indexOf("<", L)) }), o === 0 && r.push(n), (c = i[o - 1]) && c.children.push(n), i[o] = n), (!d || n.voidElement) && (o > -1 && (n.voidElement || n.name === l.slice(2, -1)) && (o--, n = o === -1 ? r : i[o]), !s && y !== "<" && y)) {
      c = o === -1 ? r : i[o].children;
      var w = e.indexOf("<", L), h = e.slice(L, w === -1 ? void 0 : w);
      T2.test(h) && (h = " "), (w > -1 && o + c.length >= 0 || h !== " ") && c.push({ type: "text", content: h });
    }
  }), r;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + Xf("", n);
  }, "");
} };
function Mi() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Wu = {};
function co() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Wu[t[0]] || (typeof t[0] == "string" && (Wu[t[0]] = /* @__PURE__ */ new Date()), Mi(...t));
}
const Gf = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Qu(e, t, n) {
  e.loadNamespaces(t, Gf(e, n));
}
function Yu(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, Gf(e, r));
}
function $2(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (a, l) => {
    const u = t.services.backendConnector.state[`${a}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function M2(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (co("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (i, o) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !o(i.isLanguageChangingTo, e)) return !1;
    }
  }) : $2(e, t, n);
}
const F2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, b2 = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, A2 = (e) => b2[e], z2 = (e) => e.replace(F2, A2);
let pl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: z2
};
function D2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  pl = {
    ...pl,
    ...e
  };
}
function Jf() {
  return pl;
}
let Zf;
function U2(e) {
  Zf = e;
}
function xa() {
  return Zf;
}
function ps(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function hs(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? Nn(t) : t;
}
function B2(e) {
  return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every((t) => k.isValidElement(t));
}
function Nn(e) {
  return Array.isArray(e) ? e : [e];
}
function V2(e, t) {
  const n = {
    ...t
  };
  return n.props = Object.assign(e.props, t.props), n;
}
function qf(e, t) {
  if (!e) return "";
  let n = "";
  const r = Nn(e), i = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return r.forEach((o, s) => {
    if (typeof o == "string")
      n += `${o}`;
    else if (k.isValidElement(o)) {
      const a = Object.keys(o.props).length, l = i.indexOf(o.type) > -1, u = o.props.children;
      if (!u && l && a === 0)
        n += `<${o.type}/>`;
      else if (!u && (!l || a !== 0))
        n += `<${s}></${s}>`;
      else if (o.props.i18nIsDynamicList)
        n += `<${s}></${s}>`;
      else if (l && a === 1 && typeof u == "string")
        n += `<${o.type}>${u}</${o.type}>`;
      else {
        const c = qf(u, t);
        n += `<${s}>${c}</${s}>`;
      }
    } else if (o === null)
      Mi("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof o == "object") {
      const {
        format: a,
        ...l
      } = o, u = Object.keys(l);
      if (u.length === 1) {
        const c = a ? `${u[0]}, ${a}` : u[0];
        n += `{{${c}}}`;
      } else
        Mi("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o);
    } else
      Mi("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o);
  }), n;
}
function H2(e, t, n, r, i, o) {
  if (t === "") return [];
  const s = r.transKeepBasicHtmlNodesFor || [], a = t && new RegExp(s.map((w) => `<${w}`).join("|")).test(t);
  if (!e && !a && !o) return [t];
  const l = {};
  function u(w) {
    Nn(w).forEach((m) => {
      typeof m != "string" && (ps(m) ? u(hs(m)) : typeof m == "object" && !k.isValidElement(m) && Object.assign(l, m));
    });
  }
  u(e);
  const c = _2.parse(`<0>${t}</0>`), d = {
    ...l,
    ...i
  };
  function f(w, h, m) {
    const v = hs(w), g = y(v, h.children, m);
    return B2(v) && g.length === 0 || w.props && w.props.i18nIsDynamicList ? v : g;
  }
  function L(w, h, m, v, g) {
    w.dummy ? (w.children = h, m.push(k.cloneElement(w, {
      key: v
    }, g ? void 0 : h))) : m.push(...k.Children.map([w], (S) => {
      const E = {
        ...S.props
      };
      return delete E.i18nIsDynamicList, k.createElement(S.type, {
        ...E,
        key: v,
        ref: S.ref
      }, g ? null : h);
    }));
  }
  function y(w, h, m) {
    const v = Nn(w);
    return Nn(h).reduce((S, E, C) => {
      const P = E.children && E.children[0] && E.children[0].content && n.services.interpolator.interpolate(E.children[0].content, d, n.language);
      if (E.type === "tag") {
        let _ = v[parseInt(E.name, 10)];
        m.length === 1 && !_ && (_ = m[0][E.name]), _ || (_ = {});
        const O = Object.keys(E.attrs).length !== 0 ? V2({
          props: E.attrs
        }, _) : _, A = k.isValidElement(O), ee = A && ps(E, !0) && !E.voidElement, fe = a && typeof O == "object" && O.dummy && !A, ve = typeof e == "object" && e !== null && Object.hasOwnProperty.call(e, E.name);
        if (typeof O == "string") {
          const H = n.services.interpolator.interpolate(O, d, n.language);
          S.push(H);
        } else if (ps(O) || ee) {
          const H = f(O, E, m);
          L(O, H, S, C);
        } else if (fe) {
          const H = y(v, E.children, m);
          L(O, H, S, C);
        } else if (Number.isNaN(parseFloat(E.name)))
          if (ve) {
            const H = f(O, E, m);
            L(O, H, S, C, E.voidElement);
          } else if (r.transSupportBasicHtmlNodes && s.indexOf(E.name) > -1)
            if (E.voidElement)
              S.push(k.createElement(E.name, {
                key: `${E.name}-${C}`
              }));
            else {
              const H = y(v, E.children, m);
              S.push(k.createElement(E.name, {
                key: `${E.name}-${C}`
              }, H));
            }
          else if (E.voidElement)
            S.push(`<${E.name} />`);
          else {
            const H = y(v, E.children, m);
            S.push(`<${E.name}>${H}</${E.name}>`);
          }
        else if (typeof O == "object" && !A) {
          const H = E.children[0] ? P : null;
          H && S.push(H);
        } else
          L(O, P, S, C, E.children.length !== 1 || !P);
      } else if (E.type === "text") {
        const _ = r.transWrapTextNodes, O = o ? r.unescape(n.services.interpolator.interpolate(E.content, d, n.language)) : n.services.interpolator.interpolate(E.content, d, n.language);
        _ ? S.push(k.createElement(_, {
          key: `${E.name}-${C}`
        }, O)) : S.push(O);
      }
      return S;
    }, []);
  }
  const x = y([{
    dummy: !0,
    children: e || []
  }], c, Nn(e || []));
  return hs(x[0]);
}
function K2(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: a,
    defaults: l,
    components: u,
    ns: c,
    i18n: d,
    t: f,
    shouldUnescape: L,
    ...y
  } = e;
  const x = d || xa();
  if (!x)
    return co("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  const w = f || x.t.bind(x) || ((ee) => ee), h = {
    ...Jf(),
    ...x.options && x.options.react
  };
  let m = c || w.ns || x.options && x.options.defaultNS;
  m = typeof m == "string" ? [m] : m || ["translation"];
  const v = qf(t, h), g = l || v || h.transEmptyNodeValue || i, {
    hashTransKey: S
  } = h, E = i || (S ? S(v || g) : v || g);
  x.options && x.options.interpolation && x.options.interpolation.defaultVariables && (a = a && Object.keys(a).length > 0 ? {
    ...a,
    ...x.options.interpolation.defaultVariables
  } : {
    ...x.options.interpolation.defaultVariables
  });
  const C = a || n !== void 0 || !t ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, P = {
    ...s,
    context: o || s.context,
    count: n,
    ...a,
    ...C,
    defaultValue: g,
    ns: m
  }, _ = E ? w(E, P) : g;
  u && Object.keys(u).forEach((ee) => {
    const fe = u[ee];
    if (typeof fe.type == "function" || !fe.props || !fe.props.children || _.indexOf(`${ee}/>`) < 0 && _.indexOf(`${ee} />`) < 0) return;
    function ve() {
      return k.createElement(k.Fragment, null, fe);
    }
    u[ee] = k.createElement(ve);
  });
  const O = H2(u || t, _, x, h, P, L), A = r !== void 0 ? r : h.defaultTransParent;
  return A ? k.createElement(A, y, O) : O;
}
const W2 = {
  type: "3rdParty",
  init(e) {
    D2(e.options.react), U2(e);
  }
}, e1 = k.createContext();
class Q2 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function tr(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: a,
    defaults: l,
    components: u,
    ns: c,
    i18n: d,
    t: f,
    shouldUnescape: L,
    ...y
  } = e;
  const {
    i18n: x,
    defaultNS: w
  } = k.useContext(e1) || {}, h = d || x || xa(), m = f || h && h.t.bind(h);
  return K2({
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s,
    values: a,
    defaults: l,
    components: u,
    ns: c || m && m.ns || w || h && h.options && h.options.defaultNS,
    i18n: h,
    t: f,
    shouldUnescape: L,
    ...y
  });
}
const Y2 = (e, t) => {
  const n = k.useRef();
  return k.useEffect(() => {
    n.current = e;
  }, [e, t]), n.current;
};
function t1(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function X2(e, t, n, r) {
  return k.useCallback(t1(e, t, n, r), [e, t, n, r]);
}
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: i
  } = k.useContext(e1) || {}, o = n || r || xa();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Q2()), !o) {
    co("You will need to pass in an i18next instance by using initReactI18next");
    const g = (E, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, S = [g, {}, !1];
    return S.t = g, S.i18n = {}, S.ready = !1, S;
  }
  o.options.react && o.options.react.wait !== void 0 && co("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Jf(),
    ...o.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: l
  } = s;
  let u = i || o.options && o.options.defaultNS;
  u = typeof u == "string" ? [u] : u || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(u);
  const c = (o.isInitialized || o.initializedStoreOnce) && u.every((g) => M2(g, o, s)), d = X2(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l), f = () => d, L = () => t1(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l), [y, x] = k.useState(f);
  let w = u.join();
  t.lng && (w = `${t.lng}${w}`);
  const h = Y2(w), m = k.useRef(!0);
  k.useEffect(() => {
    const {
      bindI18n: g,
      bindI18nStore: S
    } = s;
    m.current = !0, !c && !a && (t.lng ? Yu(o, t.lng, u, () => {
      m.current && x(L);
    }) : Qu(o, u, () => {
      m.current && x(L);
    })), c && h && h !== w && m.current && x(L);
    function E() {
      m.current && x(L);
    }
    return g && o && o.on(g, E), S && o && o.store.on(S, E), () => {
      m.current = !1, g && o && g.split(" ").forEach((C) => o.off(C, E)), S && o && S.split(" ").forEach((C) => o.store.off(C, E));
    };
  }, [o, w]), k.useEffect(() => {
    m.current && c && x(f);
  }, [o, l, c]);
  const v = [y, o, c];
  if (v.t = y, v.i18n = o, v.ready = c, c || !c && !a) return v;
  throw new Promise((g) => {
    t.lng ? Yu(o, t.lng, u, () => g()) : Qu(o, u, () => g());
  });
}
const G2 = "Management", J2 = "Comment", Z2 = "Login", q2 = "Logout", em = "Register", tm = "Email", nm = "Password", rm = "Nickname", im = "Personal Website", om = "Setting", sm = "Profile", lm = "Homepage", am = "All", um = "Mine", cm = "Approved", dm = "Waiting", fm = "Spam", pm = "Sticky", hm = "Edit", mm = "Reply", Lm = "Action", gm = "Filter", vm = "Author", ym = "Content", wm = "Username", xm = "Submit", Sm = "Cancel", Em = "At", km = "Migration", Cm = "Exporting…", Nm = "Under verification", jm = "Administrator", Pm = "Guest", Rm = "User", Om = "Role", gi = {
  management: G2,
  comment: J2,
  login: Z2,
  logout: q2,
  register: em,
  email: tm,
  password: nm,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: rm,
  website: im,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: om,
  profile: sm,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: lm,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: am,
  mine: um,
  approved: cm,
  "approved button": "Approved",
  waiting: dm,
  spam: fm,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: pm,
  edit: hm,
  reply: mm,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: Lm,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: gm,
  author: vm,
  content: ym,
  username: wm,
  submit: xm,
  cancel: Sm,
  at: Em,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: km,
  exporting: Cm,
  export: "Export",
  import: "Import",
  "import success": "Import Success",
  "import clear data confirm": "Notice! All current data will be overwrited by importing data, do you really want to continue?",
  "importing {{importedLength}}/{{maxLength}}": "Importing {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Comment data index relationship reconstruction",
  "index updating {{importedLength}}/{{maxLength}}": "Index updating {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Please input avatar URL",
  "change avatar": "Change avatar",
  "minimum 6 characters required": "Minimum 6 characters required!",
  "close 2fa confirm": "Two-step verification can greatly improve the security of your account. Are you sure to turn it off?",
  "two factor auth": "Two-step verification",
  "enable 2fa": "Enable Two-step verification",
  "disable 2fa": "Disable Two-step verification",
  "2fa description 1": 'Two-step verification, as can be seen from the name, "two-step" is the focus of 2FA, and 2FA in a broad sense refers to providing a variety of solutions to complete user authorization authentication.',
  "2fa description 2": "After enabling two-step verification, to log in to the background of the system, in addition to the user name and password, additional tokens must be provided, which can greatly improve the security of the system.",
  "next step": "Next Step",
  "download 2fa app": "Download Two-step verification app",
  "open app and scan qrcode": "Open the Two-step verification app and scan the QR code below",
  "input 2fa code": "Input Two-step verification code",
  "2fa code": "Two-step verification code",
  "forgot password": "Forgot Password",
  "get new password": "Get a new password",
  "you will receive an email which contains a link to create new password": "You'll receive an email which contains a link to create new password.",
  "find password success! please go to your mailbox to reset it!": "The reset password email has been sent successfully, please check it in your mailbox!",
  "find password error! try again later": "Failed to send reset password email, please try again later!",
  "set administrator": "Set Admin",
  "set guest": "Set Guest",
  "set label": "Set Label",
  verify: Nm,
  administrator: jm,
  guest: Pm,
  user: Rm,
  "manage users": "Manage Users",
  role: Om,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, Tm = "管理", Im = "评论", _m = "登录", $m = "登出", Mm = "用户注册", Fm = "邮箱", bm = "密码", Am = "昵称", zm = "个人网站", Dm = "个人设置", Um = "个人资料", Bm = "个人主页地址", Vm = "所有", Hm = "我的", Km = "已通过", Wm = "待审核", Qm = "垃圾", Ym = "置顶评论", Xm = "编辑", Gm = "回复", Jm = "操作", Zm = "筛选", qm = "作者", eL = "内容", tL = "用户名", nL = "提交", rL = "取消", iL = "于", oL = "导入导出", sL = "导出中...", lL = "待认证", aL = "管理员", uL = "普通用户", cL = "用户", dL = "角色", Xu = {
  management: Tm,
  comment: Im,
  login: _m,
  logout: $m,
  register: Mm,
  email: Fm,
  password: bm,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: Am,
  website: zm,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: Dm,
  profile: Um,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: Bm,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: Vm,
  mine: Hm,
  approved: Km,
  "approved button": "通过",
  waiting: Wm,
  spam: Qm,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: Ym,
  edit: Xm,
  reply: Gm,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: Jm,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: Zm,
  author: qm,
  content: eL,
  username: tL,
  submit: nL,
  cancel: rL,
  at: iL,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: oL,
  exporting: sL,
  export: "导出",
  import: "导入",
  "import success": "导入成功",
  "import clear data confirm": "注意！导入数据会覆盖当前所有数据，请确认是否继续操作？",
  "importing {{importedLength}}/{{maxLength}}": "开始导入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "评论数据索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "请输入 URL",
  "change avatar": "修改头像",
  "minimum 6 characters required": "请输入 6 位验证码",
  "close 2fa confirm": "两步验证可以大大提升账户的安全性，确定关闭吗？",
  "two factor auth": "两步验证",
  "enable 2fa": "开启两步验证",
  "disable 2fa": "关闭两步验证",
  "2fa description 1": "两步验证，对应的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。从名字可以看出， 「两步」是 2FA 的重点，广义的 2FA 是指提供多种方案完成用户权限鉴定。",
  "2fa description 2": "开启两步验证后，登录系统后台，除了要提供用户名和密码外，还要提供额外的 Token，这样可以大大提高系统的安全性。",
  "next step": "下一步",
  "download 2fa app": "下载对应的应用",
  "open app and scan qrcode": "打开两步验证的应用，扫描下面的二维码",
  "input 2fa code": "填写 6 位验证码",
  "2fa code": "两步验证码",
  "forgot password": "忘记密码",
  "get new password": "获取新密码",
  "you will receive an email which contains a link to create new password": "您会收到一封包含创建新密码链接的电子邮件。",
  "find password success! please go to your mailbox to reset it!": "重置密码邮件发送成功，请去邮箱中查收！",
  "find password error! try again later": "重置密码邮件发送失败，请稍后再试！",
  "set administrator": "成为管理员",
  "set guest": "成为普通用户",
  "set label": "设置专属标签",
  verify: lL,
  administrator: aL,
  guest: uL,
  user: cL,
  "manage users": "管理用户",
  role: dL,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, fL = "管理", pL = "留言", hL = "登入", mL = "登出", LL = "使用者註冊", gL = "信箱", vL = "密碼", yL = "暱稱", wL = "個人網站", xL = "個人設定", SL = "個人資料", EL = "個人首頁網址", kL = "所有", CL = "我的", NL = "已通過", jL = "待審核", PL = "垃圾", RL = "置頂留言", OL = "編輯", TL = "回覆", IL = "動作", _L = "篩選", $L = "作者", ML = "內容", FL = "使用者名稱", bL = "送出", AL = "取消", zL = "於", DL = "匯入匯出", UL = "匯出中...", BL = "待認證", VL = "管理員", HL = "使用者", KL = "使用者", WL = "角色", QL = {
  management: fL,
  comment: pL,
  login: hL,
  logout: mL,
  register: LL,
  email: gL,
  password: vL,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: yL,
  website: wL,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: xL,
  profile: SL,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: EL,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: kL,
  mine: CL,
  approved: NL,
  "approved button": "通過",
  waiting: jL,
  spam: PL,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: RL,
  edit: OL,
  reply: TL,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: IL,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: _L,
  author: $L,
  content: ML,
  username: FL,
  submit: bL,
  cancel: AL,
  at: zL,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: DL,
  exporting: UL,
  export: "匯出",
  import: "匯入",
  "import success": "匯入成功",
  "import clear data confirm": "注意！匯入資料會覆蓋目前所有資料，請確認是否繼續？",
  "importing {{importedLength}}/{{maxLength}}": "開始導入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "留言資料索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "請輸入頭像 URL",
  "change avatar": "修改頭像",
  "minimum 6 characters required": "請輸入 6 位驗證碼",
  "close 2fa confirm": "兩步驟驗證可以大大提升帳戶的安全性，確定關閉嗎？",
  "two factor auth": "兩步驟驗證",
  "enable 2fa": "開啟兩步驟驗證",
  "disable 2fa": "關閉兩步驟驗證",
  "2fa description 1": "兩步驟驗證，對應的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。從名字可以看出， 「兩步驟」是 2FA 的重點，廣義的 2FA 是指提供多種方法完成使用者身分識別。",
  "2fa description 2": "開啟兩步驟驗證後，登入系統後台時，除了要提供使用者名稱和密碼外，還要提供額外的 Token，這樣可以大大提高系統的安全性。",
  "next step": "下一步",
  "download 2fa app": "下載對應的應用",
  "open app and scan qrcode": "打開兩步驟驗證的應用程式，掃描下面的QR Code",
  "input 2fa code": "填寫 6 位驗證碼",
  "2fa code": "兩步驟驗證碼",
  "forgot password": "忘記密碼",
  "get new password": "取得新密碼",
  "you will receive an email which contains a link to create new password": "您會收到一封包含建立新密碼連結的電子郵件。",
  "find password success! please go to your mailbox to reset it!": "重設密碼郵件發送成功，請到信箱中確認！",
  "find password error! try again later": "重設密碼郵件發送失敗，請稍後再試！",
  "set administrator": "成為管理員",
  "set guest": "成為使用者",
  "set label": "設定專屬標籤",
  verify: BL,
  administrator: VL,
  guest: HL,
  user: KL,
  "manage users": "使用者管理",
  role: WL,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, YL = [
  {
    label: "中文简体",
    value: "zh-CN",
    alias: ["zh-CN", "zh-cn"]
  },
  {
    label: "中文繁體",
    value: "zh-TW",
    alias: ["zh-TW"]
  },
  {
    label: "English",
    value: "en-US",
    alias: ["en", "en-US", "jp", "jp-JP"]
  }
], XL = {
  "zh-cn": { translations: Xu },
  "zh-CN": { translations: Xu },
  en: { translations: gi },
  "en-US": { translations: gi },
  "zh-TW": { translations: QL },
  jp: { translations: gi },
  "jp-JP": { translations: gi }
};
function an() {
  const e = Xr(), t = Jr(), n = zt((l) => l.user), { t: r, i18n: i } = Dt(), [o, s] = k.useState(null);
  k.useMemo(() => {
    const l = YL.find(
      (u) => u.alias.includes(i.language)
    );
    return (l == null ? void 0 : l.value) ?? "";
  }, [i.language]), k.useEffect(() => {
    !(n != null && n.email) || !(n != null && n.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((l) => l.json()).then((l) => {
      n.__version !== l.version && s(l.version);
    });
  }, [n == null ? void 0 : n.email]);
  const a = function(l) {
    l.preventDefault(), e.user.logout(), t("/ui/login");
  };
  return [
    /* @__PURE__ */ p.jsxs("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (n == null ? void 0 : n.type) === "administrator" ? /* @__PURE__ */ p.jsx("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ p.jsxs("ul", { className: "root", children: [
        /* @__PURE__ */ p.jsx("li", { className: "parent", children: /* @__PURE__ */ p.jsx(be, { to: "/ui", children: r("management") }) }),
        /* @__PURE__ */ p.jsxs("ul", { className: "child", children: [
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(be, { to: "/ui", children: r("comment") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(be, { to: "/ui/user", children: r("user") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(be, { to: "/ui/migration", children: r("migration") }) })
        ] })
      ] }) }) : null,
      /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
        n != null && n.type ? /* @__PURE__ */ p.jsx(be, { to: "/ui/profile", className: "author", children: n.display_name }) : null,
        n != null && n.type ? /* @__PURE__ */ p.jsx("a", { className: "exit", href: "#", onClick: a, children: r("logout") }) : null
      ] })
    ] }, "header")
  ];
}
function GL() {
  const { t: e } = Dt(), t = Xr(), n = Jr(), r = zt((u) => u.user), [i, o] = k.useState(!1), [s, a] = k.useState(!1);
  k.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const l = async function(u) {
    u.preventDefault(), o(!1);
    const c = u.target.email.value;
    if (!c)
      return o(e("please input email"));
    try {
      a(!0), await t.user.forgot({
        email: c
      }), alert(e("find password success! please go to your mailbox to reset it!")), n("/ui/login");
    } catch {
      o(e("find password error! try again later"));
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: l, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          ),
          /* @__PURE__ */ p.jsx("p", { className: "description", style: { textAlign: "left" }, children: e(
            "you will receive an email which contains a link to create new password"
          ) })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("get new password")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(be, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(be, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
const JL = (e) => /* @__PURE__ */ k.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), ZL = (e) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...e }, /* @__PURE__ */ k.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ k.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), qL = (e) => /* @__PURE__ */ k.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), e3 = (e) => /* @__PURE__ */ k.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ k.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ k.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), t3 = (e) => /* @__PURE__ */ k.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), n3 = (e) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...e }, /* @__PURE__ */ k.createElement("path", { fill: "var(--color-1, #808080)", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ k.createElement("path", { fill: "var(--color-2, #808080)", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ k.createElement("path", { fill: "var(--color-3, #808080)", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ k.createElement("path", { fill: "var(--color-4, #808080)", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), r3 = (e) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 100, height: 100, viewBox: "0 0 127 115", id: "shinigami", ...e }, /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", { d: "M 74.96,6.01 L 81.77,6.32 L 85.92,6.86 L 87.92,7.31 L 91.89,8.36 L 93.92,9.10 L 98.04,10.73 L 100.27,11.80 L 105.99,14.91 L 109.79,17.27 L 111.31,18.34 L 112.74,19.36 L 113.29,19.80 L 114.27,20.61 L 114.54,20.90 L 114.92,21.40 L 114.85,21.50 L 114.50,21.58 L 114.00,21.43 L 107.94,19.93 L 104.11,19.28 L 102.28,19.13 L 98.70,18.95 L 97.00,19.03 L 93.66,19.32 L 92.07,19.64 L 88.90,20.27 L 94.15,23.27 L 100.07,27.34 L 103.76,30.58 L 105.44,32.41 L 108.67,36.21 L 110.07,38.27 L 112.70,42.49 L 113.76,44.71 L 114.87,47.09 L 115.48,48.50 L 115.74,49.14 L 116.62,51.58 L 116.90,52.78 L 117.37,55.24 L 117.52,56.73 L 117.64,58.28 L 117.70,59.17 L 117.79,61.03 L 117.84,62.10 L 117.83,67.72 L 117.59,71.28 L 117.35,72.97 L 116.79,76.31 L 116.39,77.90 L 115.49,81.02 L 114.91,82.52 L 113.68,85.47 L 112.93,86.88 L 111.34,89.66 L 110.42,91.00 L 108.48,93.64 L 107.37,94.91 L 105.06,97.43 L 103.77,98.65 L 99.03,102.73 L 95.86,105.03 L 94.25,106.00 L 91.00,107.80 L 89.31,108.53 L 85.88,109.88 L 84.07,110.41 L 82.04,110.94 L 80.92,111.15 L 78.61,111.52 L 77.38,111.65 L 72.30,112.01 L 69.69,111.96 L 64.48,111.72 L 62.08,111.38 L 59.72,111.00 L 58.63,110.75 L 56.53,110.22 L 55.61,109.91 L 51.28,108.18 L 48.48,106.83 L 47.14,106.06 L 44.49,104.47 L 43.23,103.58 L 40.75,101.76 L 39.59,100.77 L 37.31,98.75 L 36.25,97.67 L 34.19,95.46 L 33.25,94.30 L 31.44,91.93 L 30.64,90.70 L 29.10,88.19 L 28.44,86.89 L 27.59,85.23 L 27.12,84.34 L 26.92,83.99 L 26.21,82.87 L 25.94,82.65 L 25.43,82.42 L 25.18,82.59 L 24.65,83.09 L 24.30,83.55 L 23.69,84.70 L 23.40,85.64 L 23.31,86.20 L 23.18,87.37 L 23.17,88.04 L 23.20,89.45 L 23.27,90.25 L 23.48,93.60 L 23.49,94.38 L 23.47,94.63 L 23.42,95.00 L 23.37,95.00 L 22.80,94.53 L 22.27,93.79 L 21.94,93.26 L 21.27,92.11 L 20.91,91.44 L 20.17,90.03 L 19.81,89.28 L 18.38,86.22 L 17.86,84.90 L 17.39,83.64 L 17.24,83.13 L 17.01,82.23 L 17.01,81.96 L 17.24,80.70 L 17.60,79.70 L 17.87,79.15 L 19.15,76.91 L 19.96,75.96 L 21.68,73.69 L 22.50,72.29 L 22.73,71.63 L 23.08,70.33 L 23.08,69.71 L 22.94,68.48 L 22.69,67.87 L 22.05,66.65 L 21.54,66.03 L 20.38,64.78 L 19.60,64.13 L 17.91,62.80 L 16.85,62.10 L 14.59,60.65 L 13.25,59.87 L 9.37,57.43 L 8.39,56.74 L 8.05,56.47 L 7.49,55.99 L 7.41,55.86 L 7.32,54.88 L 7.40,53.70 L 7.51,52.92 L 7.75,51.24 L 7.93,50.27 L 8.32,48.26 L 8.56,47.20 L 9.07,44.99 L 9.36,43.79 L 9.49,43.31 L 9.73,42.43 L 9.84,42.11 L 10.04,41.53 L 10.13,41.36 L 10.45,40.92 L 10.60,41.08 L 10.89,41.63 L 11.05,42.21 L 11.61,43.77 L 12.15,45.02 L 12.49,45.72 L 14.01,48.69 L 14.93,50.27 L 16.84,53.43 L 17.81,54.86 L 18.77,56.25 L 19.23,56.86 L 20.13,58.03 L 20.54,58.50 L 21.50,59.57 L 22.00,60.08 L 22.18,60.21 L 22.49,60.40 L 22.57,60.36 L 22.68,60.19 L 22.67,59.96 L 22.58,59.39 L 22.46,58.95 L 22.18,57.95 L 21.96,57.28 L 21.47,55.81 L 21.15,54.88 L 20.45,52.91 L 20.02,51.71 L 18.39,46.36 L 17.93,44.55 L 17.75,43.74 L 17.44,42.20 L 17.36,41.61 L 17.11,39.26 L 17.12,38.22 L 17.24,37.88 L 17.56,37.31 L 17.87,37.12 L 18.60,36.80 L 19.13,36.66 L 21.69,36.21 L 23.67,36.01 L 24.50,36.01 L 26.14,35.85 L 26.97,35.52 L 27.32,35.18 L 27.98,34.39 L 28.32,33.75 L 29.01,32.29 L 29.44,31.25 L 30.66,28.84 L 31.74,27.15 L 32.39,26.28 L 35.27,22.74 L 37.02,21.00 L 40.68,17.60 L 42.64,16.11 L 46.62,13.29 L 48.58,12.26 L 54.79,9.44 L 58.96,8.00 L 61.10,7.49 L 65.45,6.61 L 67.74,6.37 L 72.43,6.01 M 33.94,75.66 L 33.78,75.82 L 33.83,76.85 L 34.39,78.07 L 34.92,78.94 L 36.16,80.85 L 37.03,82.06 L 38.93,84.63 L 40.12,86.15 L 43.03,89.83 L 44.79,92.03 L 45.53,92.93 L 46.90,94.58 L 47.37,95.12 L 47.80,95.62 L 47.95,95.78 L 48.21,96.05 L 48.27,96.09 L 48.78,96.78 L 48.91,97.34 L 48.84,97.59 L 49.02,98.89 L 49.48,100.13 L 49.82,100.75 L 50.59,101.93 L 50.99,102.34 L 51.77,103.00 L 52.04,103.00 L 52.76,102.87 L 52.95,102.58 L 52.88,102.27 L 52.62,101.53 L 52.32,100.92 L 51.58,99.53 L 51.01,98.52 L 49.61,95.81 L 49.28,95.08 L 49.17,94.81 L 49.01,94.34 L 49.01,94.24 L 48.73,93.72 L 48.34,93.50 L 48.08,93.50 L 47.19,93.23 L 46.56,92.84 L 46.33,92.59 L 46.09,92.14 L 46.39,92.19 L 46.75,92.40 L 47.63,92.63 L 48.00,92.44 L 48.00,92.18 L 47.58,91.07 L 46.97,90.38 L 46.59,90.11 L 45.80,89.66 L 45.43,89.58 L 44.73,89.55 L 44.50,89.76 L 44.16,89.87 L 44.27,89.48 L 44.49,89.10 L 44.82,88.23 L 44.60,88.13 L 44.27,88.33 L 43.57,88.29 L 43.32,87.73 L 43.36,87.24 L 43.07,86.09 L 42.54,85.70 L 42.18,85.77 L 41.42,85.65 L 41.36,85.22 L 41.58,84.87 L 41.81,84.20 L 41.57,84.15 L 41.27,84.33 L 40.57,84.29 L 40.32,83.73 L 40.36,83.24 L 40.06,82.06 L 39.46,81.73 L 39.00,81.83 L 38.15,81.86 L 38.02,81.64 L 38.22,81.45 L 38.34,80.93 L 38.24,80.41 L 38.11,80.07 L 37.42,78.59 L 36.85,77.79 L 35.88,76.58 L 35.30,76.01 L 35.04,75.85 L 34.54,75.60 L 34.33,75.59 M 94.28,27.80 L 94.19,28.01 L 94.30,28.28 L 94.64,28.95 L 94.97,29.46 L 95.77,30.61 L 96.35,31.37 L 97.75,33.55 L 98.61,35.24 L 99.00,36.20 L 99.76,38.23 L 100.11,39.37 L 100.77,41.74 L 101.07,43.06 L 101.64,45.79 L 101.89,47.29 L 102.37,50.40 L 102.58,52.10 L 102.98,55.59 L 103.14,57.49 L 103.45,61.39 L 103.58,63.50 L 103.79,68.32 L 103.82,71.06 L 103.76,72.22 L 103.60,74.42 L 103.43,75.35 L 103.04,77.11 L 102.75,77.86 L 102.08,79.27 L 101.64,79.88 L 100.67,81.04 L 100.06,81.56 L 98.75,82.57 L 97.95,83.05 L 96.25,84.01 L 95.25,84.50 L 92.86,85.76 L 91.46,86.60 L 90.89,86.99 L 89.87,87.73 L 89.56,88.03 L 89.06,88.58 L 89.05,88.75 L 88.72,89.63 L 88.27,90.00 L 88.00,90.00 L 87.13,90.35 L 87.02,90.92 L 87.19,91.37 L 87.69,92.40 L 88.17,93.07 L 89.29,94.54 L 90.08,95.43 L 91.47,97.17 L 92.11,98.18 L 92.31,98.63 L 92.60,99.49 L 92.63,99.89 L 92.60,100.67 L 92.48,101.06 L 92.22,101.91 L 92.18,102.17 L 92.16,102.59 L 92.27,102.65 L 92.58,102.67 L 92.88,102.55 L 93.59,102.22 L 94.12,101.94 L 96.06,100.67 L 97.47,99.55 L 98.22,98.88 L 101.28,95.93 L 102.79,94.20 L 105.75,90.62 L 107.01,88.81 L 108.22,87.01 L 108.74,86.14 L 109.71,84.44 L 110.08,83.65 L 112.57,77.19 L 113.73,72.87 L 114.05,70.71 L 114.54,66.40 L 114.54,64.26 L 114.36,60.00 L 114.03,57.91 L 113.20,53.76 L 112.54,51.74 L 111.06,47.73 L 110.08,45.79 L 107.96,41.97 L 106.66,40.15 L 103.91,36.56 L 102.30,34.87 L 99.77,32.29 L 98.28,30.84 L 97.65,30.26 L 96.47,29.19 L 96.00,28.81 L 95.15,28.16 L 94.86,27.99 L 94.37,27.75 M 29.51,77.19 L 29.18,77.46 L 29.09,77.67 L 28.91,78.71 L 29.08,79.48 L 29.58,81.17 L 30.05,82.19 L 31.11,84.34 L 31.82,85.51 L 33.33,87.91 L 34.22,89.15 L 36.07,91.62 L 37.08,92.81 L 39.15,95.16 L 40.22,96.22 L 42.39,98.24 L 43.48,99.07 L 44.83,100.08 L 45.44,100.52 L 46.63,101.32 L 47.13,101.63 L 48.03,102.16 L 48.34,102.30 L 48.85,102.49 L 48.91,102.42 L 48.88,101.75 L 48.51,101.11 L 48.18,100.78 L 47.35,99.56 L 47.00,98.64 L 47.00,98.27 L 46.83,97.72 L 46.55,97.18 L 46.34,96.82 L 45.32,95.21 L 44.60,94.17 L 43.02,91.97 L 42.10,90.75 L 40.19,88.24 L 39.19,86.97 L 37.18,84.45 L 36.22,83.29 L 34.33,81.04 L 33.51,80.12 L 31.97,78.43 L 31.41,77.89 L 30.88,77.41 L 30.69,77.27 L 30.34,77.05 L 30.25,77.04 M 52.21,94.45 L 52.24,95.26 L 52.65,96.07 L 53.00,96.50 L 53.73,97.26 L 54.05,97.45 L 54.65,97.69 L 54.79,97.55 L 54.76,96.74 L 54.35,95.93 L 54.00,95.50 L 52.95,94.55 L 52.35,94.31 M 35.63,56.33 L 35.40,56.85 L 35.31,57.31 L 35.15,58.36 L 35.10,59.09 L 35.02,60.69 L 35.02,61.69 L 34.71,64.84 L 34.50,65.65 L 34.38,65.94 L 34.12,66.42 L 33.98,66.51 L 33.70,66.98 L 33.71,67.45 L 33.80,67.76 L 34.04,68.42 L 34.25,68.80 L 34.72,69.61 L 35.05,70.06 L 36.35,72.39 L 36.59,73.04 L 36.63,73.30 L 36.65,73.75 L 36.58,73.88 L 36.49,74.73 L 36.66,75.16 L 36.83,75.46 L 37.22,76.12 L 37.53,76.57 L 38.21,77.54 L 38.68,78.17 L 39.71,79.53 L 40.37,80.38 L 41.79,82.22 L 42.68,83.34 L 44.56,85.73 L 45.69,87.17 L 46.89,88.67 L 47.43,89.30 L 48.47,90.49 L 48.93,90.97 L 49.83,91.86 L 50.23,92.20 L 51.01,92.80 L 51.37,93.00 L 52.05,93.34 L 52.37,93.41 L 52.99,93.49 L 53.29,93.43 L 54.42,92.98 L 54.98,92.42 L 55.65,90.75 L 55.37,89.39 L 54.89,88.62 L 53.70,87.02 L 52.77,86.15 L 50.71,84.37 L 49.36,83.45 L 44.78,79.67 L 42.43,76.95 L 41.54,75.38 L 40.70,73.76 L 40.34,72.87 L 39.65,71.05 L 39.36,70.04 L 38.81,67.97 L 38.58,66.83 L 38.13,64.46 L 37.94,63.15 L 37.46,60.27 L 37.13,58.72 L 36.96,58.13 L 36.63,57.09 L 36.48,56.76 L 36.17,56.22 L 36.02,56.15 L 35.75,56.14 M 64.09,46.78 L 63.48,47.00 L 62.24,47.54 L 61.61,47.91 L 60.35,48.73 L 59.73,49.24 L 57.26,51.50 L 56.16,52.93 L 54.08,55.95 L 53.30,57.65 L 52.05,60.69 L 51.49,62.45 L 51.34,63.33 L 51.10,65.10 L 51.08,66.10 L 51.10,68.22 L 51.18,69.53 L 51.41,72.14 L 51.63,73.64 L 51.80,74.29 L 52.17,75.54 L 52.44,76.11 L 53.03,77.20 L 53.43,77.71 L 54.32,78.73 L 54.89,79.24 L 56.12,80.27 L 56.90,80.82 L 58.55,81.94 L 59.56,82.56 L 61.70,83.87 L 62.98,84.62 L 65.03,85.79 L 65.99,86.32 L 67.85,87.31 L 68.64,87.71 L 70.13,88.43 L 70.66,88.65 L 71.58,89.00 L 71.76,89.00 L 72.90,88.75 L 73.98,88.36 L 74.65,88.08 L 76.06,87.45 L 76.84,87.07 L 78.44,86.27 L 79.28,85.83 L 82.66,83.96 L 84.18,83.02 L 85.64,82.09 L 86.27,81.66 L 87.45,80.81 L 87.89,80.44 L 90.56,77.72 L 92.05,75.75 L 92.58,74.83 L 93.45,73.08 L 93.56,72.44 L 93.61,71.84 L 93.55,71.64 L 93.34,71.28 L 93.13,71.21 L 92.32,70.16 L 91.98,68.90 L 91.97,68.17 L 91.90,66.69 L 91.75,66.24 L 91.55,66.31 L 91.07,66.64 L 90.64,67.13 L 90.17,67.67 L 89.88,68.02 L 89.25,68.78 L 88.87,69.25 L 87.22,71.08 L 86.24,71.95 L 85.76,72.23 L 84.79,72.71 L 84.27,72.83 L 83.17,73.00 L 82.53,73.00 L 79.86,72.58 L 79.09,72.30 L 78.78,72.13 L 78.23,71.77 L 78.06,71.58 L 77.56,70.61 L 77.37,69.79 L 77.34,69.32 L 77.40,67.30 L 77.66,66.18 L 78.32,63.93 L 78.84,62.89 L 80.00,60.91 L 83.15,57.75 L 79.83,54.29 L 76.97,51.72 L 74.85,50.18 L 73.73,49.52 L 71.46,48.28 L 70.30,47.79 L 68.00,46.92 L 66.88,46.66 L 65.25,46.57 M 90.75,70.49 L 90.70,70.85 L 90.53,71.76 L 90.38,72.50 L 89.38,75.76 L 88.39,77.59 L 87.66,78.41 L 86.04,80.02 L 84.90,80.82 L 83.72,81.64 L 83.03,82.06 L 81.59,82.92 L 80.76,83.38 L 78.67,84.56 L 77.80,85.03 L 76.19,85.89 L 75.52,86.21 L 74.26,86.78 L 73.72,86.95 L 72.70,87.23 L 72.22,87.26 L 71.30,87.25 L 70.83,87.15 L 69.88,86.87 L 69.35,86.62 L 68.25,86.08 L 67.60,85.71 L 66.22,84.91 L 65.39,84.41 L 62.43,82.62 L 60.73,81.54 L 60.00,81.04 L 58.61,80.08 L 58.02,79.63 L 56.92,78.75 L 56.46,78.34 L 54.89,76.73 L 54.41,75.94 L 53.62,74.36 L 53.43,73.50 L 52.78,70.50 L 56.08,74.40 L 57.84,76.21 L 59.33,77.57 L 60.18,78.26 L 63.73,81.04 L 65.37,82.08 L 71.35,85.86 L 75.40,83.79 L 80.44,81.00 L 83.21,79.22 L 84.33,78.34 L 86.39,76.60 L 87.17,75.72 L 88.58,73.97 L 89.07,73.07 L 90.16,71.09 L 90.58,70.40 L 90.66,70.36 M 31.05,68.79 L 30.63,69.01 L 29.72,69.53 L 29.17,69.88 L 28.03,70.65 L 27.41,71.10 L 24.84,73.05 L 23.63,74.09 L 22.46,75.13 L 21.95,75.63 L 20.98,76.61 L 20.62,77.05 L 18.78,79.73 L 18.36,80.57 L 18.23,80.93 L 18.04,81.60 L 18.04,81.83 L 18.11,82.18 L 18.21,82.19 L 18.46,82.12 L 18.64,81.94 L 19.03,81.49 L 19.27,81.13 L 19.76,80.34 L 20.03,79.83 L 21.18,78.13 L 22.22,76.91 L 22.85,76.29 L 25.55,73.84 L 26.98,72.92 L 28.93,71.58 L 30.07,70.73 L 30.53,70.36 L 31.35,69.65 L 31.60,69.38 L 32.00,68.90 L 32.00,68.78 L 31.63,68.61 M 34.63,76.20 L 34.93,76.51 L 35.12,76.73 L 35.96,77.81 L 36.41,78.50 L 37.14,79.68 L 37.34,80.09 L 37.63,80.79 L 37.62,80.92 L 37.49,81.04 L 37.26,80.86 L 36.71,80.31 L 36.28,79.75 L 35.27,78.35 L 34.74,77.50 L 34.56,77.15 L 34.26,76.51 L 34.21,76.31 L 34.20,76.00 L 34.33,76.00 M 59.80,58.38 L 61.07,58.98 L 61.66,59.42 L 62.82,60.39 L 63.34,60.98 L 64.34,62.21 L 64.75,62.89 L 65.52,64.30 L 65.80,65.03 L 66.28,66.50 L 66.40,67.23 L 66.53,68.67 L 66.45,69.35 L 66.18,70.66 L 65.87,71.24 L 65.42,71.89 L 65.11,72.14 L 64.43,72.59 L 64.02,72.74 L 62.23,73.14 L 61.21,73.06 L 59.12,72.70 L 58.12,72.24 L 56.19,71.16 L 55.45,70.35 L 54.11,68.50 L 53.48,67.16 L 53.29,66.48 L 53.00,65.10 L 52.97,64.42 L 52.98,63.07 L 53.11,62.45 L 53.42,61.23 L 53.69,60.69 L 54.29,59.68 L 54.69,59.28 L 55.56,58.56 L 56.08,58.34 L 57.20,58.00 L 57.85,58.00 M 84.91,64.77 L 84.56,64.95 L 82.99,65.90 L 82.16,66.55 L 80.55,67.89 L 79.96,68.53 L 79.43,69.15 L 79.26,69.41 L 79.00,69.91 L 79.00,70.09 L 79.23,70.74 L 79.59,70.88 L 80.46,71.04 L 81.01,70.95 L 82.16,70.66 L 82.72,70.37 L 83.80,69.71 L 84.19,69.25 L 85.64,67.43 L 86.26,66.47 L 86.42,66.10 L 86.61,65.42 L 86.56,65.17 L 86.35,64.72 L 86.10,64.56 L 85.50,64.56 M 57.88,64.57 L 57.16,65.32 L 57.02,65.94 L 57.11,66.30 L 57.40,67.07 L 57.72,67.52 L 58.46,68.46 L 59.00,69.00 L 60.18,70.04 L 60.76,70.36 L 61.89,70.88 L 62.37,70.93 L 63.26,70.90 L 63.55,70.68 L 64.00,70.09 L 64.00,69.57 L 63.79,68.82 L 63.45,68.25 L 63.22,67.95 L 62.09,66.70 L 61.40,66.13 L 59.98,65.09 L 59.35,64.79 L 58.75,64.54 L 58.50,64.50 L 58.03,64.48 M 64.71,19.14 L 64.20,19.18 L 62.33,19.41 L 61.48,19.72 L 59.78,20.49 L 58.73,21.17 L 57.64,21.91 L 57.00,22.36 L 55.66,23.34 L 54.85,23.93 L 49.87,28.08 L 47.06,30.93 L 45.90,32.44 L 43.72,35.50 L 42.85,37.13 L 41.24,40.48 L 40.62,42.28 L 40.05,44.43 L 39.72,46.09 L 39.59,47.01 L 39.15,50.88 L 39.07,52.94 L 39.00,57.08 L 39.11,59.00 L 39.25,60.88 L 39.35,61.75 L 39.59,63.41 L 39.75,64.12 L 39.88,64.67 L 39.95,64.83 L 40.07,65.08 L 40.13,65.09 L 40.24,65.02 L 40.30,64.87 L 40.40,64.48 L 40.45,64.16 L 40.56,63.43 L 40.61,62.93 L 40.70,61.85 L 40.75,61.18 L 40.85,59.74 L 40.90,58.87 L 41.00,57.05 L 41.05,56.00 L 41.40,50.54 L 41.71,47.54 L 41.90,46.31 L 42.31,44.02 L 42.56,43.10 L 43.10,41.40 L 43.42,40.73 L 44.84,38.14 L 45.69,36.90 L 46.00,36.59 L 46.28,36.33 L 46.39,36.29 L 46.57,36.27 L 46.62,36.35 L 46.67,36.59 L 46.64,36.81 L 46.54,37.33 L 46.43,37.70 L 46.32,38.30 L 46.39,38.44 L 46.50,38.39 L 46.76,38.18 L 46.96,37.95 L 47.40,37.40 L 47.69,37.00 L 50.86,33.06 L 53.40,30.26 L 54.72,28.93 L 57.35,26.35 L 58.55,25.30 L 59.71,24.31 L 60.23,23.91 L 61.23,23.17 L 61.65,22.91 L 63.33,22.04 L 64.68,21.47 L 65.41,21.21 L 68.45,20.25 L 69.75,20.03 L 74.50,19.24 L 68.00,19.13 L 65.90,19.12 M 69.98,9.20 L 67.26,9.47 L 66.00,9.68 L 63.56,10.15 L 62.47,10.47 L 57.44,12.21 L 53.88,13.66 L 52.30,14.39 L 50.78,15.11 L 50.13,15.45 L 48.90,16.10 L 48.44,16.38 L 47.62,16.90 L 47.40,17.10 L 47.11,17.44 L 47.20,17.53 L 47.83,17.49 L 48.68,17.28 L 49.27,17.09 L 50.55,16.67 L 51.29,16.39 L 52.85,15.81 L 53.69,15.47 L 60.33,13.30 L 65.07,12.19 L 67.31,11.83 L 69.51,11.52 L 70.53,11.42 L 72.50,11.26 L 73.36,11.25 L 74.98,11.27 L 75.63,11.36 L 76.82,11.57 L 77.21,11.76 L 78.25,12.34 L 78.44,12.60 L 78.24,12.69 L 77.66,12.82 L 77.04,12.86 L 75.56,12.92 L 74.46,12.93 L 67.79,13.55 L 63.27,14.46 L 61.02,15.13 L 56.56,16.61 L 54.41,17.53 L 50.18,19.48 L 48.22,20.59 L 44.39,22.92 L 42.70,24.19 L 39.45,26.78 L 38.11,28.15 L 35.61,30.93 L 34.71,32.35 L 33.86,33.78 L 33.53,34.49 L 32.94,35.92 L 32.75,36.63 L 31.59,41.00 L 26.29,41.00 L 24.27,41.04 L 23.18,41.13 L 22.76,41.23 L 22.00,41.47 L 21.73,41.66 L 21.27,42.11 L 21.15,42.43 L 20.96,43.16 L 20.96,43.65 L 21.03,44.71 L 21.15,45.40 L 21.44,46.87 L 21.66,47.78 L 22.15,49.73 L 22.46,50.90 L 23.12,53.16 L 23.56,54.47 L 23.77,55.01 L 24.18,56.02 L 24.37,56.40 L 24.73,57.07 L 24.88,57.27 L 25.16,57.57 L 25.27,57.57 L 25.45,57.48 L 25.50,57.27 L 25.56,56.74 L 25.53,56.31 L 25.44,55.32 L 25.33,54.64 L 25.34,51.56 L 25.87,49.81 L 26.37,49.14 L 27.51,47.94 L 28.27,47.58 L 29.92,47.05 L 30.90,47.08 L 32.36,47.28 L 32.54,47.40 L 32.52,47.46 L 32.40,47.60 L 32.23,47.67 L 31.08,48.52 L 30.37,49.42 L 30.05,50.01 L 29.45,51.25 L 29.19,51.97 L 28.71,53.45 L 28.53,54.25 L 27.96,57.54 L 27.95,59.14 L 28.00,60.71 L 28.11,61.43 L 28.38,62.82 L 28.61,63.42 L 29.14,64.59 L 29.40,64.79 L 29.65,64.92 L 29.78,64.89 L 30.03,64.75 L 30.16,64.58 L 30.42,64.17 L 30.55,63.86 L 30.81,63.16 L 30.95,62.71 L 31.22,61.73 L 31.37,61.13 L 31.66,59.86 L 31.81,59.12 L 33.40,53.89 L 34.10,52.20 L 34.45,51.46 L 35.17,50.08 L 35.51,49.57 L 37.28,46.63 L 37.69,45.79 L 37.82,45.46 L 38.02,44.87 L 38.02,44.71 L 38.20,43.68 L 38.47,42.78 L 38.67,42.25 L 39.64,39.96 L 40.29,38.66 L 41.68,36.03 L 42.44,34.78 L 43.97,32.38 L 44.69,31.45 L 46.33,29.66 L 47.83,28.21 L 48.72,27.43 L 52.54,24.18 L 54.46,22.78 L 56.76,21.11 L 58.05,20.20 L 58.62,19.83 L 60.74,18.60 L 61.81,18.21 L 62.91,17.87 L 63.52,17.73 L 64.81,17.48 L 65.57,17.37 L 67.18,17.16 L 68.15,17.06 L 70.21,16.86 L 71.46,16.75 L 76.24,16.42 L 79.93,16.25 L 81.86,16.21 L 85.74,16.14 L 87.60,16.14 L 91.22,16.17 L 92.76,16.22 L 97.08,16.32 L 99.54,16.32 L 100.50,16.28 L 102.19,16.20 L 102.67,16.13 L 103.09,16.05 L 103.19,16.01 L 103.32,15.92 L 103.26,15.86 L 102.41,15.35 L 101.37,14.85 L 100.67,14.53 L 99.15,13.88 L 98.28,13.52 L 96.46,12.78 L 95.50,12.42 L 91.75,11.20 L 89.04,10.52 L 87.61,10.24 L 81.73,9.33 L 78.73,9.15 L 72.75,8.99 M 10.88,48.08 L 10.42,48.38 L 10.26,48.83 L 10.01,49.92 L 10.02,50.75 L 10.20,52.99 L 10.59,54.21 L 11.03,54.82 L 12.08,56.09 L 12.97,56.89 L 13.92,57.73 L 14.51,58.22 L 15.75,59.25 L 16.50,59.86 L 17.87,60.96 L 18.51,61.44 L 19.75,62.37 L 20.28,62.74 L 21.26,63.42 L 21.61,63.63 L 22.22,63.96 L 22.33,63.96 L 22.25,63.52 L 21.80,62.82 L 21.41,62.30 L 20.53,61.17 L 19.96,60.48 L 18.74,59.04 L 18.04,58.25 L 14.25,53.53 L 13.30,52.14 L 12.97,51.58 L 12.43,50.56 L 12.35,50.25 L 11.65,48.54 L 11.12,48.03 M 83.48,23.18 L 83.67,23.63 L 84.13,24.16 L 84.51,24.52 L 85.34,25.27 L 85.86,25.70 L 86.98,26.60 L 87.61,27.07 L 90.12,29.16 L 91.60,30.63 L 92.26,31.43 L 93.53,33.08 L 94.08,33.98 L 95.15,35.84 L 95.61,36.87 L 96.50,39.00 L 96.89,40.19 L 97.63,42.64 L 97.95,44.01 L 98.56,46.85 L 98.82,48.42 L 99.33,51.69 L 99.55,53.50 L 100.14,57.57 L 100.34,58.75 L 100.43,59.22 L 100.61,60.07 L 100.68,60.33 L 101.00,61.23 L 101.18,61.47 L 101.54,61.80 L 101.67,61.66 L 101.81,61.24 L 101.85,60.74 L 101.84,60.40 L 101.76,58.77 L 101.63,57.66 L 101.33,55.28 L 101.12,53.91 L 100.66,51.06 L 100.39,49.57 L 99.82,46.55 L 99.52,45.09 L 98.89,42.20 L 98.58,40.90 L 97.96,38.43 L 97.67,37.46 L 97.10,35.70 L 96.85,35.19 L 95.77,33.49 L 94.74,32.18 L 94.12,31.48 L 91.37,28.58 L 89.89,27.26 L 88.42,25.97 L 87.73,25.42 L 86.38,24.38 L 85.80,24.00 L 84.72,23.34 L 84.32,23.20 L 83.63,23.03 Z", fill: "var(--color-shinigami-1, #09090b)" }), /* @__PURE__ */ k.createElement("path", { d: "M 60.00,113.44 L 59.11,113.24 L 56.98,112.64 L 55.89,112.32 L 53.58,111.52 L 52.43,111.11 L 50.20,110.21 L 47.27,108.88 L 46.42,108.45 L 44.57,107.31 L 43.63,106.70 L 41.66,105.28 L 39.68,103.80 L 35.80,100.37 L 34.87,99.50 L 33.14,97.76 L 32.30,96.90 L 30.85,95.23 L 30.17,94.41 L 29.08,92.91 L 27.97,90.93 L 27.69,90.26 L 27.16,89.26 L 26.90,88.82 L 26.42,88.28 L 26.20,88.06 L 25.81,87.92 L 25.64,87.90 L 25.37,88.14 L 25.25,88.30 L 25.13,88.88 L 25.08,89.20 L 25.13,90.07 L 25.18,90.54 L 25.42,91.67 L 26.04,93.61 L 26.25,94.15 L 26.48,95.01 L 26.56,95.42 L 26.55,96.10 L 26.52,96.42 L 26.25,97.01 L 25.55,97.88 L 25.08,98.35 L 24.33,98.77 L 24.14,98.82 L 23.75,98.75 L 23.55,98.68 L 23.11,98.33 L 22.88,98.12 L 22.33,97.46 L 22.05,97.09 L 21.36,96.09 L 21.00,95.54 L 20.13,94.14 L 18.57,91.56 L 17.99,90.61 L 17.06,88.85 L 16.62,88.00 L 15.97,86.43 L 15.67,85.66 L 15.29,84.23 L 15.13,83.52 L 15.03,82.20 L 15.01,81.54 L 15.17,80.28 L 15.29,79.66 L 15.73,78.44 L 15.99,77.83 L 16.70,76.60 L 18.07,74.73 L 18.92,73.70 L 20.15,71.58 L 20.40,71.08 L 20.70,70.22 L 20.82,69.25 L 20.78,69.01 L 20.18,68.23 L 19.81,67.81 L 18.68,66.76 L 18.06,66.22 L 16.55,65.04 L 14.00,63.25 L 12.79,62.46 L 10.83,61.17 L 9.92,60.56 L 8.48,59.57 L 7.82,59.10 L 6.84,58.31 L 6.41,57.92 L 5.81,57.22 L 5.55,56.87 L 5.25,56.15 L 5.13,55.79 L 5.07,54.96 L 5.05,54.52 L 5.14,53.49 L 5.36,51.58 L 5.60,49.55 L 6.34,45.88 L 6.75,44.14 L 7.75,41.25 L 8.01,40.59 L 8.55,39.48 L 8.82,38.95 L 9.39,38.14 L 9.67,37.77 L 10.25,37.29 L 11.09,37.00 L 11.74,37.00 L 12.54,37.55 L 13.05,39.25 L 13.06,39.81 L 13.50,41.59 L 13.76,42.53 L 14.45,44.43 L 14.62,44.88 L 14.96,45.64 L 15.12,45.99 L 15.41,46.49 L 15.54,46.70 L 15.73,46.83 L 15.88,46.50 L 15.88,46.36 L 15.82,45.76 L 15.78,45.41 L 15.65,44.47 L 15.04,41.00 L 14.90,40.28 L 14.73,39.04 L 14.67,38.46 L 14.66,37.47 L 14.67,37.01 L 14.85,36.25 L 14.96,35.90 L 15.34,35.34 L 15.55,35.08 L 16.16,34.69 L 16.49,34.52 L 17.35,34.28 L 17.81,34.18 L 18.93,34.06 L 20.95,34.00 L 22.12,34.00 L 23.70,33.92 L 24.40,33.83 L 25.36,33.35 L 25.81,33.03 L 26.59,31.84 L 26.80,31.49 L 27.25,30.59 L 28.04,28.92 L 28.40,28.14 L 29.43,26.45 L 29.99,25.59 L 31.35,23.81 L 32.77,22.01 L 36.34,18.39 L 38.19,16.62 L 42.21,13.43 L 43.22,12.69 L 45.23,11.36 L 48.17,9.69 L 49.63,8.96 L 52.64,7.68 L 54.17,7.07 L 57.30,6.04 L 60.45,5.07 L 66.93,3.90 L 68.55,3.67 L 71.80,3.41 L 73.42,3.32 L 76.64,3.33 L 78.24,3.37 L 81.39,3.65 L 86.00,4.39 L 87.58,4.72 L 91.04,5.77 L 92.80,6.34 L 96.47,7.79 L 98.32,8.55 L 101.98,10.26 L 103.79,11.15 L 107.23,13.01 L 108.89,13.96 L 111.88,15.85 L 113.30,16.79 L 115.62,18.59 L 116.67,19.46 L 118.10,21.03 L 118.39,21.41 L 118.77,22.09 L 119.00,23.01 L 119.00,23.60 L 118.74,24.35 L 118.55,24.66 L 117.77,24.88 L 117.29,24.92 L 115.79,24.61 L 115.36,24.50 L 114.33,24.19 L 112.50,23.58 L 111.04,23.08 L 107.62,22.27 L 105.89,21.91 L 102.56,21.46 L 101.78,21.37 L 100.37,21.28 L 99.70,21.25 L 98.60,21.28 L 98.10,21.31 L 97.43,21.48 L 97.00,21.88 L 97.00,22.19 L 97.27,22.67 L 97.92,23.00 L 98.14,23.00 L 98.94,23.44 L 99.39,23.73 L 100.57,24.65 L 101.19,25.15 L 102.62,26.43 L 103.36,27.11 L 104.92,28.63 L 106.49,30.18 L 109.51,33.50 L 110.22,34.31 L 111.45,35.83 L 112.90,37.84 L 113.95,39.48 L 115.79,43.12 L 116.66,44.99 L 118.09,48.98 L 118.75,51.00 L 119.73,55.18 L 120.64,61.50 L 120.76,63.04 L 120.77,66.11 L 120.74,67.63 L 120.44,70.66 L 120.25,72.17 L 119.66,75.15 L 119.33,76.62 L 118.46,79.53 L 117.99,80.96 L 116.85,83.77 L 116.25,85.17 L 114.87,87.86 L 114.15,89.20 L 112.53,91.77 L 111.69,93.04 L 109.85,95.46 L 108.90,96.65 L 106.86,98.91 L 105.81,100.01 L 103.58,102.09 L 102.44,103.10 L 100.02,104.97 L 98.80,105.87 L 96.23,107.52 L 94.92,108.32 L 92.20,109.72 L 90.83,110.40 L 87.97,111.55 L 86.53,112.09 L 83.57,112.96 L 79.00,113.94 L 77.98,114.10 L 76.17,114.36 L 75.30,114.49 L 73.72,114.66 L 72.19,114.81 L 69.47,114.84 L 68.11,114.80 L 65.23,114.44 L 64.47,114.32 L 62.80,114.01 L 61.94,113.85 M 84.07,110.41 L 85.88,109.88 L 89.31,108.53 L 91.00,107.80 L 94.25,106.00 L 95.86,105.03 L 99.03,102.73 L 103.77,98.65 L 105.06,97.43 L 107.37,94.91 L 108.48,93.64 L 110.42,91.00 L 111.34,89.66 L 112.93,86.88 L 113.68,85.47 L 114.91,82.52 L 115.49,81.02 L 116.39,77.90 L 116.79,76.31 L 117.35,72.97 L 117.59,71.28 L 117.83,67.72 L 117.84,62.10 L 117.79,61.03 L 117.70,59.17 L 117.64,58.28 L 117.52,56.73 L 117.37,55.24 L 116.90,52.78 L 116.62,51.58 L 115.74,49.14 L 115.48,48.50 L 114.87,47.09 L 113.76,44.71 L 112.70,42.49 L 110.07,38.27 L 108.67,36.21 L 105.44,32.41 L 103.76,30.58 L 100.07,27.34 L 94.15,23.27 L 88.90,20.27 L 92.07,19.64 L 93.66,19.32 L 97.00,19.03 L 98.70,18.95 L 102.28,19.13 L 104.11,19.28 L 107.94,19.93 L 114.00,21.43 L 114.50,21.58 L 114.85,21.50 L 114.92,21.40 L 114.54,20.90 L 114.27,20.61 L 113.29,19.80 L 112.74,19.36 L 111.31,18.34 L 109.79,17.27 L 105.99,14.91 L 100.27,11.80 L 98.04,10.73 L 93.92,9.10 L 91.89,8.36 L 87.92,7.31 L 85.92,6.86 L 81.77,6.32 L 74.96,6.01 L 72.43,6.01 L 67.74,6.37 L 65.45,6.61 L 61.10,7.49 L 58.96,8.00 L 54.79,9.44 L 48.58,12.26 L 46.62,13.29 L 42.64,16.11 L 40.68,17.60 L 37.02,21.00 L 35.27,22.74 L 32.39,26.28 L 31.74,27.15 L 30.66,28.84 L 29.44,31.25 L 29.01,32.29 L 28.32,33.75 L 27.98,34.39 L 27.32,35.18 L 26.97,35.52 L 26.14,35.85 L 24.50,36.01 L 23.67,36.01 L 21.69,36.21 L 19.13,36.66 L 18.60,36.80 L 17.87,37.12 L 17.56,37.31 L 17.24,37.88 L 17.12,38.22 L 17.11,39.26 L 17.36,41.61 L 17.44,42.20 L 17.75,43.74 L 17.93,44.55 L 18.39,46.36 L 20.02,51.71 L 20.45,52.91 L 21.15,54.88 L 21.47,55.81 L 21.96,57.28 L 22.18,57.95 L 22.46,58.95 L 22.58,59.39 L 22.67,59.96 L 22.68,60.19 L 22.57,60.36 L 22.49,60.40 L 22.18,60.21 L 22.00,60.08 L 21.50,59.57 L 20.54,58.50 L 20.13,58.03 L 19.23,56.86 L 18.77,56.25 L 17.81,54.86 L 16.84,53.43 L 14.93,50.27 L 14.01,48.69 L 12.49,45.72 L 12.15,45.02 L 11.61,43.77 L 11.05,42.21 L 10.89,41.63 L 10.60,41.08 L 10.45,40.92 L 10.13,41.36 L 10.04,41.53 L 9.84,42.11 L 9.73,42.43 L 9.49,43.31 L 9.36,43.79 L 9.07,44.99 L 8.56,47.20 L 8.32,48.26 L 7.93,50.27 L 7.75,51.24 L 7.51,52.92 L 7.40,53.70 L 7.32,54.88 L 7.41,55.86 L 7.49,55.99 L 8.05,56.47 L 8.39,56.74 L 9.37,57.43 L 13.25,59.87 L 14.59,60.65 L 16.85,62.10 L 17.91,62.80 L 19.60,64.13 L 20.38,64.78 L 21.54,66.03 L 22.05,66.65 L 22.69,67.87 L 22.94,68.48 L 23.08,69.71 L 23.08,70.33 L 22.73,71.63 L 22.50,72.29 L 21.68,73.69 L 19.96,75.96 L 19.15,76.91 L 17.87,79.15 L 17.60,79.70 L 17.24,80.70 L 17.01,81.96 L 17.01,82.23 L 17.24,83.13 L 17.39,83.64 L 17.86,84.90 L 18.38,86.22 L 19.81,89.28 L 20.17,90.03 L 20.91,91.44 L 21.27,92.11 L 21.94,93.26 L 22.27,93.79 L 22.80,94.53 L 23.37,95.00 L 23.42,95.00 L 23.47,94.63 L 23.49,94.38 L 23.48,93.60 L 23.27,90.25 L 23.20,89.45 L 23.17,88.04 L 23.18,87.37 L 23.31,86.20 L 23.40,85.64 L 23.69,84.70 L 24.30,83.55 L 24.65,83.09 L 25.18,82.59 L 25.43,82.42 L 25.94,82.65 L 26.21,82.87 L 26.92,83.99 L 27.12,84.34 L 27.59,85.23 L 28.44,86.89 L 29.10,88.19 L 30.64,90.70 L 31.44,91.93 L 33.25,94.30 L 34.19,95.46 L 36.25,97.67 L 37.31,98.75 L 39.59,100.77 L 40.75,101.76 L 43.23,103.58 L 44.49,104.47 L 47.14,106.06 L 48.48,106.83 L 51.28,108.18 L 55.61,109.91 L 56.53,110.22 L 58.63,110.75 L 59.72,111.00 L 62.08,111.38 L 64.48,111.72 L 69.69,111.96 L 72.30,112.01 L 77.38,111.65 L 78.61,111.52 L 80.92,111.15 L 82.04,110.94 M 43.48,99.07 L 42.39,98.24 L 40.22,96.22 L 39.15,95.16 L 37.08,92.81 L 36.07,91.62 L 34.22,89.15 L 33.33,87.91 L 31.82,85.51 L 31.11,84.34 L 30.05,82.19 L 29.58,81.17 L 29.08,79.48 L 28.91,78.71 L 29.09,77.67 L 29.18,77.46 L 29.51,77.19 L 30.25,77.04 L 30.34,77.05 L 30.69,77.27 L 30.88,77.41 L 31.41,77.89 L 31.97,78.43 L 33.51,80.12 L 34.33,81.04 L 36.22,83.29 L 37.18,84.45 L 39.19,86.97 L 40.19,88.24 L 42.10,90.75 L 43.02,91.97 L 44.60,94.17 L 45.32,95.21 L 46.34,96.82 L 46.55,97.18 L 46.83,97.72 L 47.00,98.27 L 47.00,98.64 L 47.35,99.56 L 48.18,100.78 L 48.51,101.11 L 48.88,101.75 L 48.91,102.42 L 48.85,102.49 L 48.34,102.30 L 48.03,102.16 L 47.13,101.63 L 46.63,101.32 L 45.44,100.52 L 44.83,100.08 M 49.82,100.75 L 49.48,100.13 L 49.02,98.89 L 48.84,97.59 L 48.91,97.34 L 48.78,96.78 L 48.27,96.09 L 48.21,96.05 L 47.95,95.78 L 47.80,95.62 L 47.37,95.12 L 46.90,94.58 L 45.53,92.93 L 44.79,92.03 L 43.03,89.83 L 40.12,86.15 L 38.93,84.63 L 37.03,82.06 L 36.16,80.85 L 34.92,78.94 L 34.39,78.07 L 33.83,76.85 L 33.78,75.82 L 33.94,75.66 L 34.33,75.59 L 34.54,75.60 L 35.04,75.85 L 35.30,76.01 L 35.88,76.58 L 36.85,77.79 L 37.42,78.59 L 38.11,80.07 L 38.24,80.41 L 38.34,80.93 L 38.22,81.45 L 38.02,81.64 L 38.15,81.86 L 39.00,81.83 L 39.46,81.73 L 40.06,82.06 L 40.36,83.24 L 40.32,83.73 L 40.57,84.29 L 41.27,84.33 L 41.57,84.15 L 41.81,84.20 L 41.58,84.87 L 41.36,85.22 L 41.42,85.65 L 42.18,85.77 L 42.54,85.70 L 43.07,86.09 L 43.36,87.24 L 43.32,87.73 L 43.57,88.29 L 44.27,88.33 L 44.60,88.13 L 44.82,88.23 L 44.49,89.10 L 44.27,89.48 L 44.16,89.87 L 44.50,89.76 L 44.73,89.55 L 45.43,89.58 L 45.80,89.66 L 46.59,90.11 L 46.97,90.38 L 47.58,91.07 L 48.00,92.18 L 48.00,92.44 L 47.63,92.63 L 46.75,92.40 L 46.39,92.19 L 46.09,92.14 L 46.33,92.59 L 46.56,92.84 L 47.19,93.23 L 48.08,93.50 L 48.34,93.50 L 48.73,93.72 L 49.01,94.24 L 49.01,94.34 L 49.17,94.81 L 49.28,95.08 L 49.61,95.81 L 51.01,98.52 L 51.58,99.53 L 52.32,100.92 L 52.62,101.53 L 52.88,102.27 L 52.95,102.58 L 52.76,102.87 L 52.04,103.00 L 51.77,103.00 L 50.99,102.34 L 50.59,101.93 M 36.41,78.50 L 35.96,77.81 L 35.12,76.73 L 34.93,76.51 L 34.63,76.20 L 34.33,76.00 L 34.20,76.00 L 34.21,76.31 L 34.26,76.51 L 34.56,77.15 L 34.74,77.50 L 35.27,78.35 L 36.28,79.75 L 36.71,80.31 L 37.26,80.86 L 37.49,81.04 L 37.62,80.92 L 37.63,80.79 L 37.34,80.09 L 37.14,79.68 M 92.48,101.06 L 92.60,100.67 L 92.63,99.89 L 92.60,99.49 L 92.31,98.63 L 92.11,98.18 L 91.47,97.17 L 90.08,95.43 L 89.29,94.54 L 88.17,93.07 L 87.69,92.40 L 87.19,91.37 L 87.02,90.92 L 87.13,90.35 L 88.00,90.00 L 88.27,90.00 L 88.72,89.63 L 89.05,88.75 L 89.06,88.58 L 89.56,88.03 L 89.87,87.73 L 90.89,86.99 L 91.46,86.60 L 92.86,85.76 L 95.25,84.50 L 96.25,84.01 L 97.95,83.05 L 98.75,82.57 L 100.06,81.56 L 100.67,81.04 L 101.64,79.88 L 102.08,79.27 L 102.75,77.86 L 103.04,77.11 L 103.43,75.35 L 103.60,74.42 L 103.76,72.22 L 103.82,71.06 L 103.79,68.32 L 103.58,63.50 L 103.45,61.39 L 103.14,57.49 L 102.98,55.59 L 102.58,52.10 L 102.37,50.40 L 101.89,47.29 L 101.64,45.79 L 101.07,43.06 L 100.77,41.74 L 100.11,39.37 L 99.76,38.23 L 99.00,36.20 L 98.61,35.24 L 97.75,33.55 L 96.35,31.37 L 95.77,30.61 L 94.97,29.46 L 94.64,28.95 L 94.30,28.28 L 94.19,28.01 L 94.28,27.80 L 94.37,27.75 L 94.86,27.99 L 95.15,28.16 L 96.00,28.81 L 96.47,29.19 L 97.65,30.26 L 98.28,30.84 L 99.77,32.29 L 102.30,34.87 L 103.91,36.56 L 106.66,40.15 L 107.96,41.97 L 110.08,45.79 L 111.06,47.73 L 112.54,51.74 L 113.20,53.76 L 114.03,57.91 L 114.36,60.00 L 114.54,64.26 L 114.54,66.40 L 114.05,70.71 L 113.73,72.87 L 112.57,77.19 L 110.08,83.65 L 109.71,84.44 L 108.74,86.14 L 108.22,87.01 L 107.01,88.81 L 105.75,90.62 L 102.79,94.20 L 101.28,95.93 L 98.22,98.88 L 97.47,99.55 L 96.06,100.67 L 94.12,101.94 L 93.59,102.22 L 92.88,102.55 L 92.58,102.67 L 92.27,102.65 L 92.16,102.59 L 92.18,102.17 L 92.22,101.91 M 53.00,96.50 L 52.65,96.07 L 52.24,95.26 L 52.21,94.45 L 52.35,94.31 L 52.95,94.55 L 54.00,95.50 L 54.35,95.93 L 54.76,96.74 L 54.79,97.55 L 54.65,97.69 L 54.05,97.45 L 53.73,97.26 M 45.69,87.17 L 44.56,85.73 L 42.68,83.34 L 41.79,82.22 L 40.37,80.38 L 39.71,79.53 L 38.68,78.17 L 38.21,77.54 L 37.53,76.57 L 37.22,76.12 L 36.83,75.46 L 36.66,75.16 L 36.49,74.73 L 36.58,73.88 L 36.65,73.75 L 36.63,73.30 L 36.59,73.04 L 36.35,72.39 L 35.05,70.06 L 34.72,69.61 L 34.25,68.80 L 34.04,68.42 L 33.80,67.76 L 33.71,67.45 L 33.70,66.98 L 33.98,66.51 L 34.12,66.42 L 34.38,65.94 L 34.50,65.65 L 34.71,64.84 L 35.02,61.69 L 35.02,60.69 L 35.10,59.09 L 35.15,58.36 L 35.31,57.31 L 35.40,56.85 L 35.63,56.33 L 35.75,56.14 L 36.02,56.15 L 36.17,56.22 L 36.48,56.76 L 36.63,57.09 L 36.96,58.13 L 37.13,58.72 L 37.46,60.27 L 37.94,63.15 L 38.13,64.46 L 38.58,66.83 L 38.81,67.97 L 39.36,70.04 L 39.65,71.05 L 40.34,72.87 L 40.70,73.76 L 41.54,75.38 L 42.43,76.95 L 44.78,79.67 L 49.36,83.45 L 50.71,84.37 L 52.77,86.15 L 53.70,87.02 L 54.89,88.62 L 55.37,89.39 L 55.65,90.75 L 54.98,92.42 L 54.42,92.98 L 53.29,93.43 L 52.99,93.49 L 52.37,93.41 L 52.05,93.34 L 51.37,93.00 L 51.01,92.80 L 50.23,92.20 L 49.83,91.86 L 48.93,90.97 L 48.47,90.49 L 47.43,89.30 L 46.89,88.67 M 62.98,84.62 L 61.70,83.87 L 59.56,82.56 L 58.55,81.94 L 56.90,80.82 L 56.12,80.27 L 54.89,79.24 L 54.32,78.73 L 53.43,77.71 L 53.03,77.20 L 52.44,76.11 L 52.17,75.54 L 51.80,74.29 L 51.63,73.64 L 51.41,72.14 L 51.18,69.53 L 51.10,68.22 L 51.08,66.10 L 51.10,65.10 L 51.34,63.33 L 51.49,62.45 L 52.05,60.69 L 53.30,57.65 L 54.08,55.95 L 56.16,52.93 L 57.26,51.50 L 59.73,49.24 L 60.35,48.73 L 61.61,47.91 L 62.24,47.54 L 63.48,47.00 L 64.09,46.78 L 65.25,46.57 L 66.88,46.66 L 68.00,46.92 L 70.30,47.79 L 71.46,48.28 L 73.73,49.52 L 74.85,50.18 L 76.97,51.72 L 79.83,54.29 L 83.15,57.75 L 80.72,60.18 L 80.00,60.91 L 78.84,62.89 L 78.32,63.93 L 77.66,66.18 L 77.40,67.30 L 77.34,69.32 L 77.37,69.79 L 77.56,70.61 L 78.06,71.58 L 78.23,71.77 L 78.78,72.13 L 79.09,72.30 L 79.86,72.58 L 82.53,73.00 L 83.17,73.00 L 84.27,72.83 L 84.79,72.71 L 85.76,72.23 L 86.24,71.95 L 87.22,71.08 L 88.87,69.25 L 89.25,68.78 L 89.88,68.02 L 90.17,67.67 L 90.64,67.13 L 91.07,66.64 L 91.55,66.31 L 91.75,66.24 L 91.90,66.69 L 91.97,68.17 L 91.98,68.90 L 92.32,70.16 L 93.13,71.21 L 93.34,71.28 L 93.55,71.64 L 93.61,71.84 L 93.56,72.44 L 93.45,73.08 L 92.58,74.83 L 92.05,75.75 L 90.56,77.72 L 87.89,80.44 L 87.45,80.81 L 86.27,81.66 L 85.64,82.09 L 84.18,83.02 L 82.66,83.96 L 79.28,85.83 L 78.44,86.27 L 76.84,87.07 L 76.06,87.45 L 74.65,88.08 L 73.98,88.36 L 72.90,88.75 L 71.76,89.00 L 71.58,89.00 L 70.66,88.65 L 70.13,88.43 L 68.64,87.71 L 67.85,87.31 L 65.99,86.32 L 65.03,85.79 M 80.76,83.38 L 81.59,82.92 L 83.03,82.06 L 83.72,81.64 L 84.90,80.82 L 86.04,80.02 L 87.66,78.41 L 88.39,77.59 L 89.38,75.76 L 90.38,72.50 L 90.53,71.76 L 90.70,70.85 L 90.75,70.49 L 90.66,70.36 L 90.58,70.40 L 90.16,71.09 L 89.07,73.07 L 88.58,73.97 L 87.17,75.72 L 86.39,76.60 L 84.33,78.34 L 83.21,79.22 L 80.44,81.00 L 75.40,83.79 L 71.35,85.86 L 65.37,82.08 L 63.73,81.04 L 60.18,78.26 L 59.33,77.57 L 57.84,76.21 L 56.08,74.40 L 52.78,70.50 L 53.43,73.50 L 53.62,74.36 L 54.41,75.94 L 54.89,76.73 L 56.46,78.34 L 56.92,78.75 L 58.02,79.63 L 58.61,80.08 L 60.00,81.04 L 60.73,81.54 L 62.43,82.62 L 65.39,84.41 L 66.22,84.91 L 67.60,85.71 L 68.25,86.08 L 69.35,86.62 L 69.88,86.87 L 70.83,87.15 L 71.30,87.25 L 72.22,87.26 L 72.70,87.23 L 73.72,86.95 L 74.26,86.78 L 75.52,86.21 L 76.19,85.89 L 77.80,85.03 L 78.67,84.56 M 65.87,71.24 L 66.18,70.66 L 66.45,69.35 L 66.53,68.67 L 66.40,67.23 L 66.28,66.50 L 65.80,65.03 L 65.52,64.30 L 64.75,62.89 L 64.34,62.21 L 63.34,60.98 L 62.82,60.39 L 61.66,59.42 L 61.07,58.98 L 59.80,58.38 L 57.85,58.00 L 57.20,58.00 L 56.08,58.34 L 55.56,58.56 L 54.69,59.28 L 54.29,59.68 L 53.69,60.69 L 53.42,61.23 L 53.11,62.45 L 52.98,63.07 L 52.97,64.42 L 53.00,65.10 L 53.29,66.48 L 53.48,67.16 L 54.11,68.50 L 55.45,70.35 L 56.19,71.16 L 58.12,72.24 L 59.12,72.70 L 61.21,73.06 L 62.23,73.14 L 64.02,72.74 L 64.43,72.59 L 65.11,72.14 L 65.42,71.89 M 18.04,81.83 L 18.04,81.60 L 18.23,80.93 L 18.36,80.57 L 18.78,79.73 L 20.62,77.05 L 20.98,76.61 L 21.95,75.63 L 22.46,75.13 L 23.63,74.09 L 24.84,73.05 L 27.41,71.10 L 28.03,70.65 L 29.17,69.88 L 29.72,69.53 L 30.63,69.01 L 31.05,68.79 L 31.63,68.61 L 32.00,68.78 L 32.00,68.90 L 31.60,69.38 L 31.35,69.65 L 30.53,70.36 L 30.07,70.73 L 28.93,71.58 L 26.98,72.92 L 25.55,73.84 L 22.85,76.29 L 22.22,76.91 L 21.18,78.13 L 20.03,79.83 L 19.76,80.34 L 19.27,81.13 L 19.03,81.49 L 18.64,81.94 L 18.46,82.12 L 18.21,82.19 L 18.11,82.18 M 79.00,70.09 L 79.00,69.91 L 79.26,69.41 L 79.43,69.15 L 79.96,68.53 L 80.55,67.89 L 82.16,66.55 L 82.99,65.90 L 84.56,64.95 L 84.91,64.77 L 85.50,64.56 L 86.10,64.56 L 86.35,64.72 L 86.56,65.17 L 86.61,65.42 L 86.42,66.10 L 86.26,66.47 L 85.64,67.43 L 84.19,69.25 L 83.80,69.71 L 82.72,70.37 L 82.16,70.66 L 81.01,70.95 L 80.46,71.04 L 79.59,70.88 L 79.23,70.74 M 39.75,64.12 L 39.59,63.41 L 39.35,61.75 L 39.25,60.88 L 39.11,59.00 L 39.00,57.08 L 39.07,52.94 L 39.15,50.88 L 39.59,47.01 L 39.72,46.09 L 40.05,44.43 L 40.62,42.28 L 41.24,40.48 L 42.85,37.13 L 43.72,35.50 L 45.90,32.44 L 47.06,30.93 L 49.87,28.08 L 54.85,23.93 L 55.66,23.34 L 57.00,22.36 L 57.64,21.91 L 58.73,21.17 L 59.78,20.49 L 61.48,19.72 L 62.33,19.41 L 64.20,19.18 L 64.71,19.14 L 65.90,19.12 L 68.00,19.13 L 74.50,19.24 L 69.75,20.03 L 68.45,20.25 L 65.41,21.21 L 64.68,21.47 L 63.33,22.04 L 61.65,22.91 L 61.23,23.17 L 60.23,23.91 L 59.71,24.31 L 58.55,25.30 L 57.35,26.35 L 54.72,28.93 L 53.40,30.26 L 50.86,33.06 L 47.69,37.00 L 47.40,37.40 L 46.96,37.95 L 46.76,38.18 L 46.50,38.39 L 46.39,38.44 L 46.32,38.30 L 46.43,37.70 L 46.54,37.33 L 46.64,36.81 L 46.67,36.59 L 46.62,36.35 L 46.57,36.27 L 46.39,36.29 L 46.28,36.33 L 46.00,36.59 L 45.69,36.90 L 44.84,38.14 L 43.42,40.73 L 43.10,41.40 L 42.56,43.10 L 42.31,44.02 L 41.90,46.31 L 41.71,47.54 L 41.40,50.54 L 41.05,56.00 L 41.00,57.05 L 40.90,58.87 L 40.85,59.74 L 40.75,61.18 L 40.70,61.85 L 40.61,62.93 L 40.56,63.43 L 40.45,64.16 L 40.40,64.48 L 40.30,64.87 L 40.24,65.02 L 40.13,65.09 L 40.07,65.08 L 39.95,64.83 L 39.88,64.67 M 28.61,63.42 L 28.38,62.82 L 28.11,61.43 L 28.00,60.71 L 27.95,59.14 L 27.96,57.54 L 28.53,54.25 L 28.71,53.45 L 29.19,51.97 L 29.45,51.25 L 30.05,50.01 L 30.37,49.42 L 31.08,48.52 L 32.23,47.67 L 32.40,47.60 L 32.52,47.46 L 32.54,47.40 L 32.36,47.28 L 30.90,47.08 L 29.92,47.05 L 28.27,47.58 L 27.51,47.94 L 26.37,49.14 L 25.87,49.81 L 25.34,51.56 L 25.33,54.64 L 25.44,55.32 L 25.53,56.31 L 25.56,56.74 L 25.50,57.27 L 25.45,57.48 L 25.27,57.57 L 25.16,57.57 L 24.88,57.27 L 24.73,57.07 L 24.37,56.40 L 24.18,56.02 L 23.77,55.01 L 23.56,54.47 L 23.12,53.16 L 22.46,50.90 L 22.15,49.73 L 21.66,47.78 L 21.44,46.87 L 21.15,45.40 L 21.03,44.71 L 20.96,43.65 L 20.96,43.16 L 21.15,42.43 L 21.27,42.11 L 21.73,41.66 L 22.00,41.47 L 22.76,41.23 L 23.18,41.13 L 24.27,41.04 L 26.29,41.00 L 31.59,41.00 L 32.75,36.63 L 32.94,35.92 L 33.53,34.49 L 33.86,33.78 L 34.71,32.35 L 35.61,30.93 L 38.11,28.15 L 39.45,26.78 L 42.70,24.19 L 44.39,22.92 L 48.22,20.59 L 50.18,19.48 L 54.41,17.53 L 56.56,16.61 L 61.02,15.13 L 63.27,14.46 L 67.79,13.55 L 74.46,12.93 L 75.56,12.92 L 77.04,12.86 L 77.66,12.82 L 78.24,12.69 L 78.44,12.60 L 78.25,12.34 L 77.21,11.76 L 76.82,11.57 L 75.63,11.36 L 74.98,11.27 L 73.36,11.25 L 72.50,11.26 L 70.53,11.42 L 69.51,11.52 L 67.31,11.83 L 65.07,12.19 L 60.33,13.30 L 53.69,15.47 L 52.85,15.81 L 51.29,16.39 L 50.55,16.67 L 49.27,17.09 L 48.68,17.28 L 47.83,17.49 L 47.20,17.53 L 47.11,17.44 L 47.40,17.10 L 47.62,16.90 L 48.44,16.38 L 48.90,16.10 L 50.13,15.45 L 50.78,15.11 L 52.30,14.39 L 53.88,13.66 L 57.44,12.21 L 62.47,10.47 L 63.56,10.15 L 66.00,9.68 L 67.26,9.47 L 69.98,9.20 L 72.75,8.99 L 78.73,9.15 L 81.73,9.33 L 87.61,10.24 L 89.04,10.52 L 91.75,11.20 L 95.50,12.42 L 96.46,12.78 L 98.28,13.52 L 99.15,13.88 L 100.67,14.53 L 101.37,14.85 L 102.41,15.35 L 103.26,15.86 L 103.32,15.92 L 103.19,16.01 L 103.09,16.05 L 102.67,16.13 L 102.19,16.20 L 100.50,16.28 L 99.54,16.32 L 97.08,16.32 L 92.76,16.22 L 91.22,16.17 L 87.60,16.14 L 85.74,16.14 L 81.86,16.21 L 79.93,16.25 L 76.24,16.42 L 71.46,16.75 L 70.21,16.86 L 68.15,17.06 L 67.18,17.16 L 65.57,17.37 L 64.81,17.48 L 63.52,17.73 L 62.91,17.87 L 61.81,18.21 L 60.74,18.60 L 58.62,19.83 L 58.05,20.20 L 56.76,21.11 L 54.46,22.78 L 52.54,24.18 L 48.72,27.43 L 47.83,28.21 L 46.33,29.66 L 44.69,31.45 L 43.97,32.38 L 42.44,34.78 L 41.68,36.03 L 40.29,38.66 L 39.64,39.96 L 38.67,42.25 L 38.47,42.78 L 38.20,43.68 L 38.02,44.71 L 38.02,44.87 L 37.82,45.46 L 37.69,45.79 L 37.28,46.63 L 35.51,49.57 L 35.17,50.08 L 34.45,51.46 L 34.10,52.20 L 33.40,53.89 L 31.81,59.12 L 31.66,59.86 L 31.37,61.13 L 31.22,61.73 L 30.95,62.71 L 30.81,63.16 L 30.55,63.86 L 30.42,64.17 L 30.16,64.58 L 30.03,64.75 L 29.78,64.89 L 29.65,64.92 L 29.40,64.79 L 29.14,64.59 M 16.50,59.86 L 15.75,59.25 L 14.51,58.22 L 13.92,57.73 L 12.97,56.89 L 12.08,56.09 L 11.03,54.82 L 10.59,54.21 L 10.20,52.99 L 10.02,50.75 L 10.01,49.92 L 10.26,48.83 L 10.42,48.38 L 10.88,48.08 L 11.12,48.03 L 11.65,48.54 L 12.35,50.25 L 12.43,50.56 L 12.97,51.58 L 13.30,52.14 L 14.25,53.53 L 18.04,58.25 L 18.74,59.04 L 19.96,60.48 L 20.53,61.17 L 21.41,62.30 L 21.80,62.82 L 22.25,63.52 L 22.33,63.96 L 22.22,63.96 L 21.61,63.63 L 21.26,63.42 L 20.28,62.74 L 19.75,62.37 L 18.51,61.44 L 17.87,60.96 M 100.68,60.33 L 100.61,60.07 L 100.43,59.22 L 100.34,58.75 L 100.14,57.57 L 99.55,53.50 L 99.33,51.69 L 98.82,48.42 L 98.56,46.85 L 97.95,44.01 L 97.63,42.64 L 96.89,40.19 L 96.50,39.00 L 95.61,36.87 L 95.15,35.84 L 94.08,33.98 L 93.53,33.08 L 92.26,31.43 L 91.60,30.63 L 90.12,29.16 L 87.61,27.07 L 86.98,26.60 L 85.86,25.70 L 85.34,25.27 L 84.51,24.52 L 84.13,24.16 L 83.67,23.63 L 83.48,23.18 L 83.63,23.03 L 84.32,23.20 L 84.72,23.34 L 85.80,24.00 L 86.38,24.38 L 87.73,25.42 L 88.42,25.97 L 89.89,27.26 L 91.37,28.58 L 94.12,31.48 L 94.74,32.18 L 95.77,33.49 L 96.85,35.19 L 97.10,35.70 L 97.67,37.46 L 97.96,38.43 L 98.58,40.90 L 98.89,42.20 L 99.52,45.09 L 99.82,46.55 L 100.39,49.57 L 100.66,51.06 L 101.12,53.91 L 101.33,55.28 L 101.63,57.66 L 101.76,58.77 L 101.84,60.40 L 101.85,60.74 L 101.81,61.24 L 101.67,61.66 L 101.54,61.80 L 101.18,61.47 L 101.00,61.23 M 59.00,69.00 L 58.46,68.46 L 57.72,67.52 L 57.40,67.07 L 57.11,66.30 L 57.02,65.94 L 57.16,65.32 L 57.88,64.57 L 58.03,64.48 L 58.50,64.50 L 58.75,64.54 L 59.35,64.79 L 59.98,65.09 L 61.40,66.13 L 62.09,66.70 L 63.22,67.95 L 63.45,68.25 L 63.79,68.82 L 64.00,69.57 L 64.00,70.09 L 63.55,70.68 L 63.26,70.90 L 62.37,70.93 L 61.89,70.88 L 60.76,70.36 L 60.18,70.04 Z", fill: "var(--color-shinigami-2, #808080)" }))), i3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: qL,
  github: JL,
  google: n3,
  qq: t3,
  shinigami: r3,
  twitter: ZL,
  weibo: e3
}, Symbol.toStringTag, { value: "Module" })), Fi = {}, Gu = (e) => {
  const t = document.querySelector(`script[src="${e}"]`);
  if (t)
    return Fi[e] = {
      loading: !1,
      error: null,
      scriptEl: t
    };
};
function n1({
  src: e,
  checkForExisting: t = !1,
  ...n
}) {
  let r = e ? Fi[e] : void 0;
  !r && t && e && Ju && (r = Gu(e));
  const [i, o] = k.useState(
    r ? r.loading : !!e
  ), [s, a] = k.useState(r ? r.error : null), [l, u] = k.useState(!1);
  return k.useEffect(() => {
    if (!Ju || !e || l || s) return;
    r = Fi[e], !r && t && (r = Gu(e));
    let c;
    r ? c = r.scriptEl : (c = document.createElement("script"), c.src = e, Object.keys(n).forEach((L) => {
      c[L] === void 0 ? c.setAttribute(L, n[L]) : c[L] = n[L];
    }), r = Fi[e] = {
      loading: !0,
      error: null,
      scriptEl: c
    });
    const d = () => {
      r && (r.loading = !1), o(!1), u(!0);
    }, f = (L) => {
      r && (r.error = L), a(L);
    };
    return c.addEventListener("load", d), c.addEventListener("error", f), document.body.appendChild(c), () => {
      c.removeEventListener("load", d), c.removeEventListener("error", f);
    };
  }, [e]), [i, s];
}
const Ju = typeof window < "u" && typeof window.document < "u";
function o3({
  sitekey: e,
  hideDefaultBadge: t = !1,
  checkForExisting: n = !0
}) {
  const [r, i] = k.useState();
  return k.useEffect(() => {
    s3 && t && l3(".grecaptcha-badge { visibility: hidden; }");
  }, [t]), n1({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${e}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    }),
    checkForExisting: n
  }), k.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    });
  }, []), (o) => new Promise((s, a) => {
    r ? s(r.execute(e, { action: o })) : a(new Error("Recaptcha script not available"));
  });
}
const s3 = typeof window < "u" && typeof window.document < "u", l3 = (e) => {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const n = t.sheet;
  n && n.insertRule(e, n.cssRules.length);
};
function a3({ sitekey: e, checkForExisting: t = !0 }) {
  const [n, r] = k.useState();
  return n1({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      r(window.turnstile);
    }),
    async: !1,
    checkForExisting: t
  }), k.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      r(window.turnstile);
    });
  }, []), (i) => new Promise((o, s) => {
    if (!n)
      return s(new Error("Turnstile script not available"));
    n.render(".captcha-container", {
      sitekey: e,
      action: i,
      callback: o
    });
  });
}
function r1(e) {
  const t = o3(e), n = a3(e);
  return window.turnstileKey ? n : window.recaptchaV3Key ? t : () => {
  };
}
const u3 = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class fo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || u3, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new fo(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new fo(this.logger, t);
  }
}
var qe = new fo();
class Fo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [a, l] = s;
      for (let u = 0; u < l; u++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [a, l] = s;
      for (let u = 0; u < l; u++)
        a.apply(a, [t, ...r]);
    });
  }
}
function nr() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Zu(e) {
  return e == null ? "" : "" + e;
}
function c3(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const d3 = /###/g;
function wr(e, t, n) {
  function r(a) {
    return a && a.indexOf("###") > -1 ? a.replace(d3, ".") : a;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < o.length - 1; ) {
    if (i()) return {};
    const a = r(o[s]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++s;
  }
  return i() ? {} : {
    obj: e,
    k: r(o[s])
  };
}
function qu(e, t, n) {
  const {
    obj: r,
    k: i
  } = wr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1], s = t.slice(0, t.length - 1), a = wr(e, s, Object);
  for (; a.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), a = wr(e, s, Object), a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = n;
}
function f3(e, t, n, r) {
  const {
    obj: i,
    k: o
  } = wr(e, t, Object);
  i[o] = i[o] || [], i[o].push(n);
}
function po(e, t) {
  const {
    obj: n,
    k: r
  } = wr(e, t);
  if (n)
    return n[r];
}
function p3(e, t, n) {
  const r = po(e, n);
  return r !== void 0 ? r : po(t, n);
}
function i1(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : i1(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function fn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var h3 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function m3(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => h3[t]) : e;
}
class L3 {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const g3 = [" ", ",", "?", "!", ";"], v3 = new L3(20);
function y3(e, t, n) {
  t = t || "", n = n || "";
  const r = g3.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = v3.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function hl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, a = "";
    for (let l = o; l < r.length; ++l)
      if (l !== o && (a += n), a += r[l], s = i[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    i = s;
  }
  return i;
}
function ho(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class ec extends Fo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && o ? a.push(...r.split(o)) : a.push(r)));
    const l = po(this.data, a);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), l || !s || typeof r != "string" ? l : hl(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), i = n, n = a[1]), this.addNamespaces(n), qu(this.data, a, i), o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), i = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = po(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? i1(l, r, o) : l = {
      ...l,
      ...r
    }, qu(this.data, a, l), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var o1 = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((o) => {
      this.processors[o] && (t = this.processors[o].process(t, n, r, i));
    }), t;
  }
};
const tc = {};
class mo extends Fo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), c3(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = qe.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !y3(t, r, i);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: o
        };
      const u = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), t = u.join(i);
    }
    return typeof o == "string" && (o = [o]), {
      key: t,
      namespaces: o
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], n), l = a[a.length - 1], u = n.lng || this.language, c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const g = n.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${l}${g}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${g}${s}`;
      }
      return i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const L = d && d.usedKey || s, y = d && d.exactUsedKey || s, x = Object.prototype.toString.apply(f), w = ["[object Number]", "[object Function]", "[object RegExp]"], h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, m = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (m && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && w.indexOf(x) < 0 && !(typeof h == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const g = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(L, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (d.res = g, d.usedParams = this.getUsedParamsDetails(n), d) : g;
      }
      if (o) {
        const g = Array.isArray(f), S = g ? [] : {}, E = g ? y : L;
        for (const C in f)
          if (Object.prototype.hasOwnProperty.call(f, C)) {
            const P = `${E}${o}${C}`;
            S[C] = this.translate(P, {
              ...n,
              joinArrays: !1,
              ns: a
            }), S[C] === P && (S[C] = f[C]);
          }
        f = S;
      }
    } else if (m && typeof h == "string" && Array.isArray(f))
      f = f.join(h), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let g = !1, S = !1;
      const E = n.count !== void 0 && typeof n.count != "string", C = mo.hasDefaultValue(n), P = E ? this.pluralResolver.getSuffix(u, n.count, n) : "", _ = n.ordinal && E ? this.pluralResolver.getSuffix(u, n.count, {
        ordinal: !1
      }) : "", O = E && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), A = O && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${P}`] || n[`defaultValue${_}`] || n.defaultValue;
      !this.isValidLookup(f) && C && (g = !0, f = A), this.isValidLookup(f) || (S = !0, f = s);
      const fe = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, ve = C && A !== f && this.options.updateMissing;
      if (S || g || ve) {
        if (this.logger.log(ve ? "updateKey" : "missingKey", u, l, s, ve ? A : f), o) {
          const j = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          j && j.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let H = [];
        const Xe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Xe && Xe[0])
          for (let j = 0; j < Xe.length; j++)
            H.push(Xe[j]);
        else this.options.saveMissingTo === "all" ? H = this.languageUtils.toResolveHierarchy(n.lng || this.language) : H.push(n.lng || this.language);
        const ht = (j, I, T) => {
          const D = C && T !== f ? T : fe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(j, l, I, D, ve, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(j, l, I, D, ve, n), this.emit("missingKey", j, l, I, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? H.forEach((j) => {
          const I = this.pluralResolver.getSuffixes(j, n);
          O && n[`defaultValue${this.options.pluralSeparator}zero`] && I.indexOf(`${this.options.pluralSeparator}zero`) < 0 && I.push(`${this.options.pluralSeparator}zero`), I.forEach((T) => {
            ht([j], s + T, n[`defaultValue${T}`] || A);
          });
        }) : ht(H, s, A));
      }
      f = this.extendTranslation(f, t, n, d, r), S && f === s && this.options.appendNamespaceToMissingKey && (f = `${l}:${s}`), (S || g) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, g ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return i ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language, r), u) {
        const f = t.match(this.interpolator.nestingRegexp), L = f && f.length;
        c < L && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var f = arguments.length, L = new Array(f), y = 0; y < f; y++)
          L[y] = arguments[y];
        return o && o[0] === L[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${L[0]} in key: ${n[0]}`), null) : s.translate(...L, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = typeof a == "string" ? [a] : a;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = o1.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, a;
    return typeof t == "string" && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(l, n), c = u.key;
      i = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", L = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), y = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", x = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((w) => {
        this.isValidLookup(r) || (a = w, !tc[`${x[0]}-${w}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (tc[`${x[0]}-${w}`] = !0, this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((h) => {
          if (this.isValidLookup(r)) return;
          s = h;
          const m = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(m, c, h, w, n);
          else {
            let g;
            f && (g = this.pluralResolver.getSuffix(h, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (m.push(c + g), n.ordinal && g.indexOf(E) === 0 && m.push(c + g.replace(E, this.options.pluralSeparator)), L && m.push(c + S)), y) {
              const C = `${c}${this.options.contextSeparator}${n.context}`;
              m.push(C), f && (m.push(C + g), n.ordinal && g.indexOf(E) === 0 && m.push(C + g.replace(E, this.options.pluralSeparator)), L && m.push(C + S));
            }
          }
          let v;
          for (; v = m.pop(); )
            this.isValidLookup(r) || (o = v, r = this.getResource(h, w, v, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of n)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function ms(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class nc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = qe.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = ho(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = ho(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((i) => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ms(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ms(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = ms(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
let w3 = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], x3 = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const S3 = ["v1", "v2", "v3"], E3 = ["v4"], rc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function k3() {
  const e = {};
  return w3.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: x3[t.fc]
      };
    });
  }), e;
}
class C3 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = qe.create("pluralResolver"), (!this.options.compatibilityJSON || E3.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = k3();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ho(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i, o) => rc[i] - rc[o]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map((i) => this.getSuffix(t, i, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
    const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !S3.includes(this.options.compatibilityJSON);
  }
}
function ic(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = p3(e, t, n);
  return !o && i && typeof n == "string" && (o = hl(e, n, r), o === void 0 && (o = hl(t, n, r))), o;
}
class N3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = qe.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: L,
      nestingSuffix: y,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: w,
      maxReplaces: h,
      alwaysFormat: m
    } = t.interpolation;
    this.escape = n !== void 0 ? n : m3, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? fn(o) : s || "{{", this.suffix = a ? fn(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? fn(f) : L || fn("$t("), this.nestingSuffix = y ? fn(y) : x || fn(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = h || 1e3, this.alwaysFormat = m !== void 0 ? m : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    let o, s, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(y) {
      return y.replace(/\$/g, "$$$$");
    }
    const c = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const m = ic(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(m, void 0, r, {
          ...i,
          ...n,
          interpolationkey: y
        }) : m;
      }
      const x = y.split(this.formatSeparator), w = x.shift().trim(), h = x.join(this.formatSeparator).trim();
      return this.format(ic(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure), h, r, {
        ...i,
        ...n,
        interpolationkey: w
      });
    };
    this.resetRegExp();
    const d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, f = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (y) => u(y)
    }, {
      regex: this.regexp,
      safeValue: (y) => this.escapeValue ? u(this.escape(y)) : u(y)
    }].forEach((y) => {
      for (a = 0; o = y.regex.exec(t); ) {
        const x = o[1].trim();
        if (s = c(x), s === void 0)
          if (typeof d == "function") {
            const h = d(t, o, i);
            s = typeof h == "string" ? h : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, x))
            s = "";
          else if (f) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`), s = "";
        else typeof s != "string" && !this.useRawValueToEscape && (s = Zu(s));
        const w = y.safeValue(s);
        if (t = t.replace(o[0], w), f ? (y.regex.lastIndex += s.length, y.regex.lastIndex -= o[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, s);
      const L = f.match(/'/g), y = f.match(/"/g);
      (L && L.length % 2 === 0 && !y || y.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), u && (s = {
          ...u,
          ...s
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, x), `${l}${c}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
    }
    for (; i = this.nestingRegexp.exec(t); ) {
      let l = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        i[1] = c.shift(), l = c, u = !0;
      }
      if (o = n(a.call(this, i[1].trim(), s), s), o && i[0] === t && typeof o != "string") return o;
      typeof o != "string" && (o = Zu(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), o = ""), u && (o = l.reduce((c, d) => this.format(c, d, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), t = t.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function j3(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [a, ...l] = s.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function pn(e) {
  const t = {};
  return function(r, i, o) {
    const s = i + JSON.stringify(o);
    let a = t[s];
    return a || (a = e(ho(i), o), t[s] = a), a(r);
  };
}
class P3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = qe.create("formatter"), this.options = t, this.formats = {
      number: pn((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: pn((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: pn((n, r) => {
        const i = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: pn((n, r) => {
        const i = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: pn((n, r) => {
        const i = new Intl.ListFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = pn(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = j3(l);
      if (this.formats[u]) {
        let d = a;
        try {
          const f = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, L = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[u](a, L, {
            ...c,
            ...i,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
function R3(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class O3 extends Fo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = qe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {}, s = {}, a = {}, l = {};
    return t.forEach((u) => {
      let c = !0;
      n.forEach((d) => {
        const f = `${u}|${d}`;
        !r.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, c = !1, s[f] === void 0 && (s[f] = !0), o[f] === void 0 && (o[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), c || (a[u] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), o = i[0], s = i[1];
    n && this.emit("failedLoading", o, s, n), r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((l) => {
      f3(l.loaded, [o], s), R3(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((d) => {
          a[u][d] === void 0 && (a[u][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(u, c);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a), this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...s,
          isUpdate: o
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(t, n, r, i, l) : c = u(t, n, r, i), c && typeof c.then == "function" ? c.then((d) => a(null, d)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
        else
          u(t, n, r, i, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function oc() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function sc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function vi() {
}
function T3(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Dr extends Fo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = sc(t), this.services = {}, this.logger = qe, this.modules = {
      external: []
    }, T3(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = oc();
    this.options = {
      ...i,
      ...this.options,
      ...sc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? typeof c == "function" ? new c() : c : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? qe.init(o(this.modules.logger), this.options) : qe.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = P3);
      const d = new nc(this.options);
      this.store = new ec(this.options.resources, this.options);
      const f = this.services;
      f.logger = qe, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new C3(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (f.formatter = o(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new N3(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new O3(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(L) {
        for (var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
          x[w - 1] = arguments[w];
        t.emit(L, ...x);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new mo(this.services, this.options), this.translator.on("*", function(L) {
        for (var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
          x[w - 1] = arguments[w];
        t.emit(L, ...x);
      }), this.modules.external.forEach((L) => {
        L.init && L.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = vi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments), t;
      };
    });
    const l = nr(), u = () => {
      const c = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const i = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const o = [], s = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
        });
      };
      i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => s(l)), this.options.preload && this.options.preload.forEach((a) => s(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = nr();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = vi), this.services.backendConnector.reload(t, n, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && o1.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = nr();
    this.emit("languageChanging", t);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, s = (l, u) => {
      u ? (o(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      !t && !l && this.services.languageDetector && (l = []);
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        s(c, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), i;
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function(s, a) {
      let l;
      if (typeof a != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
          c[d - 2] = arguments[d];
        l = i.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const f = i.options.keySeparator || ".";
      let L;
      return l.keyPrefix && Array.isArray(s) ? L = s.map((y) => `${l.keyPrefix}${f}${y}`) : L = l.keyPrefix ? `${l.keyPrefix}${f}${s}` : s, i.t(L, l);
    };
    return typeof t == "string" ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)));
  }
  loadNamespaces(t, n) {
    const r = nr();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = nr();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [], o = t.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new nc(oc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Dr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new Dr(i);
    return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new ec(this.store.data, i), o.services.resourceStore = o.store), o.translator = new mo(o.services, i), o.translator.on("*", function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      o.emit(a, ...u);
    }), o.init(i, n), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const de = Dr.createInstance();
de.createInstance = Dr.createInstance;
de.createInstance;
de.dir;
de.init;
de.loadResources;
de.reloadResources;
de.use;
de.changeLanguage;
de.getFixedT;
de.t;
de.exists;
de.setDefaultNamespace;
de.hasLoadedNamespace;
de.loadNamespaces;
de.loadLanguages;
async function ae(e, t = {}) {
  typeof e == "object" ? t = e : typeof e == "string" && (t.url = e), t.headers || (t.headers = {}), t.body && !(t.body instanceof FormData) && (t.headers["Content-Type"] = "application/json", t.body = JSON.stringify(t.body));
  let n = window.TOKEN || sessionStorage.getItem("TOKEN");
  n || (n = localStorage.getItem("TOKEN")), n && (t.headers.Authorization = `Bearer ${n}`);
  let r = window.serverURL;
  if (!r) {
    const l = location.pathname.match(/(.*?\/)ui/);
    r = l ? l[1] : "/";
  }
  const i = t.url.includes("?") ? "&" : "?", o = await fetch(
    `${r}${t.url}${i}lang=${de.language}`,
    t
  );
  if (!o.ok) {
    if (o.status === 401)
      throw new Error(401);
    let l;
    try {
      l = await o.json();
    } catch {
    }
    throw new Error(`${o.status}: ${(l == null ? void 0 : l.errmsg) || o.statusText}`);
  }
  const s = await o.json();
  if (s.errno !== 0)
    throw new Error(s.errmsg);
  return { __version: o.headers.get("x-waline-version"), ...s.data };
}
function I3(e) {
  const t = e ? `?email=${encodeURIComponent(e)}` : "";
  return ae({ url: "token/2fa" + t, method: "GET" });
}
function _3(e) {
  return ae({ url: "user", method: "PUT", body: e });
}
function $3({ page: e }) {
  return ae({
    url: `user?page=${e}`,
    method: "GET"
  });
}
function rr({ id: e, ...t }) {
  return ae({ url: `user/${e}`, method: "PUT", body: t });
}
function M3() {
  const { t: e } = Dt(), t = Xr(), n = Jr(), r = zt((h) => h.user), [i, o] = k.useState(!1), [s, a] = k.useState(!1), [l, u] = k.useState(!1), c = r1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), d = location.pathname.match(/(.*?\/)ui/), f = d && d[1] ? d[1] : "/";
  k.useEffect(() => {
    if (!r || !r.email)
      return;
    const h = new URLSearchParams(location.search), m = r.type === "administrator", v = m ? "/ui/profile" : "/ui", g = m && h.get("redirect") ? h.get("redirect") : v;
    console.log(g), n(g.replace(/\/+/g, "/"));
  }, [r]);
  const L = async function(h) {
    h.preventDefault(), a(!1), o(!0);
    const m = h.target.email.value, v = h.target.password.value, g = h.target.code ? h.target.code.value : "", S = h.target.remember.checked;
    if (!m)
      return a(e("please input email"));
    if (!v)
      return a(e("please input password"));
    if (h.target.code && !g)
      return a(e("please input 2fa code"));
    const E = await c("login");
    try {
      await t.user.login({
        email: m,
        password: v,
        code: g,
        remember: S,
        recaptchaV3: window.recaptchaV3Key ? E : void 0,
        turnstile: window.turnstileKey ? E : void 0
      });
    } catch (C) {
      a(C.message || e("email or password error"));
    } finally {
      o(!1);
    }
  }, y = async (h) => {
    const m = h.target.value;
    if (!m)
      return;
    const v = await I3(m);
    u(v.enable);
  };
  let x = window.serverURL;
  if (!x) {
    const h = location.pathname.match(/(.*?\/)ui/);
    x = h ? h[1] : "/";
  }
  const w = ["google"];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: s ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: s ? /* @__PURE__ */ p.jsx("li", { children: s }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: L, style: { minWidth: "300px" }, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100",
              onBlur: y
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        l && /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "code", className: "sr-only", children: e("2fa code") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "code",
              name: "code",
              className: "text-l w-100",
              placeholder: e("2fa code")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            className: "btn btn-l w-100 primary",
            disabled: i,
            children: e("login")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ p.jsxs("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "checkbox",
                name: "remember",
                className: "checkbox",
                id: "remember"
              }
            ),
            " ",
            e("remember me")
          ] }),
          /* @__PURE__ */ p.jsx("span", { className: "right forgot-password", children: /* @__PURE__ */ p.jsx(be, { to: "/ui/forgot", children: e("forgot password") }) })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || w).map((h) => /* @__PURE__ */ p.jsx(
        "a",
        {
          href: `${x}oauth${window.ALLOW_SOCIALS ? "/" + h + "?" : `?type=${h}`}&redirect=${f}ui/profile`,
          children: vo.createElement(i3[h])
        },
        h
      )) }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(be, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(be, { to: "/ui/register", children: e("register") })
      ] })
    ] }) })
  ] });
}
var s1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var a in o)
        t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(s1);
var F3 = s1.exports;
const ml = /* @__PURE__ */ Lo(F3);
var l1 = { exports: {} }, a1 = { exports: {} };
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
    // Bit-wise rotation left
    rotl: function(n, r) {
      return n << r | n >>> 32 - r;
    },
    // Bit-wise rotation right
    rotr: function(n, r) {
      return n << 32 - r | n >>> r;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number)
        return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
      for (var r = 0; r < n.length; r++)
        n[r] = t.endian(n[r]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var r = []; n > 0; n--)
        r.push(Math.floor(Math.random() * 256));
      return r;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(n) {
      for (var r = [], i = 0, o = 0; i < n.length; i++, o += 8)
        r[o >>> 5] |= n[i] << 24 - o % 32;
      return r;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(n) {
      for (var r = [], i = 0; i < n.length * 32; i += 8)
        r.push(n[i >>> 5] >>> 24 - i % 32 & 255);
      return r;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(n) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push((n[i] >>> 4).toString(16)), r.push((n[i] & 15).toString(16));
      return r.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(n) {
      for (var r = [], i = 0; i < n.length; i += 2)
        r.push(parseInt(n.substr(i, 2), 16));
      return r;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(n) {
      for (var r = [], i = 0; i < n.length; i += 3)
        for (var o = n[i] << 16 | n[i + 1] << 8 | n[i + 2], s = 0; s < 4; s++)
          i * 8 + s * 6 <= n.length * 8 ? r.push(e.charAt(o >>> 6 * (3 - s) & 63)) : r.push("=");
      return r.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(n) {
      n = n.replace(/[^A-Z0-9+\/]/ig, "");
      for (var r = [], i = 0, o = 0; i < n.length; o = ++i % 4)
        o != 0 && r.push((e.indexOf(n.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(n.charAt(i)) >>> 6 - o * 2);
      return r;
    }
  };
  a1.exports = t;
})();
var b3 = a1.exports, Ll = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return Ll.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(Ll.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(e.charCodeAt(n) & 255);
      return t;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
      return t.join("");
    }
  }
}, lc = Ll;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var A3 = function(e) {
  return e != null && (u1(e) || z3(e) || !!e._isBuffer);
};
function u1(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function z3(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && u1(e.slice(0, 0));
}
(function() {
  var e = b3, t = lc.utf8, n = A3, r = lc.bin, i = function(o, s) {
    o.constructor == String ? s && s.encoding === "binary" ? o = r.stringToBytes(o) : o = t.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
    for (var a = e.bytesToWords(o), l = o.length * 8, u = 1732584193, c = -271733879, d = -1732584194, f = 271733878, L = 0; L < a.length; L++)
      a[L] = (a[L] << 8 | a[L] >>> 24) & 16711935 | (a[L] << 24 | a[L] >>> 8) & 4278255360;
    a[l >>> 5] |= 128 << l % 32, a[(l + 64 >>> 9 << 4) + 14] = l;
    for (var y = i._ff, x = i._gg, w = i._hh, h = i._ii, L = 0; L < a.length; L += 16) {
      var m = u, v = c, g = d, S = f;
      u = y(u, c, d, f, a[L + 0], 7, -680876936), f = y(f, u, c, d, a[L + 1], 12, -389564586), d = y(d, f, u, c, a[L + 2], 17, 606105819), c = y(c, d, f, u, a[L + 3], 22, -1044525330), u = y(u, c, d, f, a[L + 4], 7, -176418897), f = y(f, u, c, d, a[L + 5], 12, 1200080426), d = y(d, f, u, c, a[L + 6], 17, -1473231341), c = y(c, d, f, u, a[L + 7], 22, -45705983), u = y(u, c, d, f, a[L + 8], 7, 1770035416), f = y(f, u, c, d, a[L + 9], 12, -1958414417), d = y(d, f, u, c, a[L + 10], 17, -42063), c = y(c, d, f, u, a[L + 11], 22, -1990404162), u = y(u, c, d, f, a[L + 12], 7, 1804603682), f = y(f, u, c, d, a[L + 13], 12, -40341101), d = y(d, f, u, c, a[L + 14], 17, -1502002290), c = y(c, d, f, u, a[L + 15], 22, 1236535329), u = x(u, c, d, f, a[L + 1], 5, -165796510), f = x(f, u, c, d, a[L + 6], 9, -1069501632), d = x(d, f, u, c, a[L + 11], 14, 643717713), c = x(c, d, f, u, a[L + 0], 20, -373897302), u = x(u, c, d, f, a[L + 5], 5, -701558691), f = x(f, u, c, d, a[L + 10], 9, 38016083), d = x(d, f, u, c, a[L + 15], 14, -660478335), c = x(c, d, f, u, a[L + 4], 20, -405537848), u = x(u, c, d, f, a[L + 9], 5, 568446438), f = x(f, u, c, d, a[L + 14], 9, -1019803690), d = x(d, f, u, c, a[L + 3], 14, -187363961), c = x(c, d, f, u, a[L + 8], 20, 1163531501), u = x(u, c, d, f, a[L + 13], 5, -1444681467), f = x(f, u, c, d, a[L + 2], 9, -51403784), d = x(d, f, u, c, a[L + 7], 14, 1735328473), c = x(c, d, f, u, a[L + 12], 20, -1926607734), u = w(u, c, d, f, a[L + 5], 4, -378558), f = w(f, u, c, d, a[L + 8], 11, -2022574463), d = w(d, f, u, c, a[L + 11], 16, 1839030562), c = w(c, d, f, u, a[L + 14], 23, -35309556), u = w(u, c, d, f, a[L + 1], 4, -1530992060), f = w(f, u, c, d, a[L + 4], 11, 1272893353), d = w(d, f, u, c, a[L + 7], 16, -155497632), c = w(c, d, f, u, a[L + 10], 23, -1094730640), u = w(u, c, d, f, a[L + 13], 4, 681279174), f = w(f, u, c, d, a[L + 0], 11, -358537222), d = w(d, f, u, c, a[L + 3], 16, -722521979), c = w(c, d, f, u, a[L + 6], 23, 76029189), u = w(u, c, d, f, a[L + 9], 4, -640364487), f = w(f, u, c, d, a[L + 12], 11, -421815835), d = w(d, f, u, c, a[L + 15], 16, 530742520), c = w(c, d, f, u, a[L + 2], 23, -995338651), u = h(u, c, d, f, a[L + 0], 6, -198630844), f = h(f, u, c, d, a[L + 7], 10, 1126891415), d = h(d, f, u, c, a[L + 14], 15, -1416354905), c = h(c, d, f, u, a[L + 5], 21, -57434055), u = h(u, c, d, f, a[L + 12], 6, 1700485571), f = h(f, u, c, d, a[L + 3], 10, -1894986606), d = h(d, f, u, c, a[L + 10], 15, -1051523), c = h(c, d, f, u, a[L + 1], 21, -2054922799), u = h(u, c, d, f, a[L + 8], 6, 1873313359), f = h(f, u, c, d, a[L + 15], 10, -30611744), d = h(d, f, u, c, a[L + 6], 15, -1560198380), c = h(c, d, f, u, a[L + 13], 21, 1309151649), u = h(u, c, d, f, a[L + 4], 6, -145523070), f = h(f, u, c, d, a[L + 11], 10, -1120210379), d = h(d, f, u, c, a[L + 2], 15, 718787259), c = h(c, d, f, u, a[L + 9], 21, -343485551), u = u + m >>> 0, c = c + v >>> 0, d = d + g >>> 0, f = f + S >>> 0;
    }
    return e.endian([u, c, d, f]);
  };
  i._ff = function(o, s, a, l, u, c, d) {
    var f = o + (s & a | ~s & l) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._gg = function(o, s, a, l, u, c, d) {
    var f = o + (s & l | a & ~l) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._hh = function(o, s, a, l, u, c, d) {
    var f = o + (s ^ a ^ l) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._ii = function(o, s, a, l, u, c, d) {
    var f = o + (a ^ (s | ~l)) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._blocksize = 16, i._digestsize = 16, l1.exports = function(o, s) {
    if (o == null)
      throw new Error("Illegal argument " + o);
    var a = e.wordsToBytes(i(o, s));
    return s && s.asBytes ? a : s && s.asString ? r.bytesToString(a) : e.bytesToHex(a);
  };
})();
var D3 = l1.exports;
const U3 = /* @__PURE__ */ Lo(D3);
function c1(e = "", t = "") {
  return t || (typeof e != "string" && (e = ""), `https://sdn.geekzu.org/avatar/${U3(e)}?s=40&r=G&d=`);
}
function B3(e) {
  return window.SITE_URL ? window.SITE_URL + e : e;
}
function V3(e) {
  let t;
  typeof e == "number" ? t = new Date(e) : t = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(e) ? e.replace(/-/g, "/") : e
  );
  const n = (o) => o < 10 ? "0" + o : o, r = [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-"), i = [t.getHours(), t.getMinutes(), t.getSeconds()].map(n).join(":");
  return r + " " + i;
}
function d1({ current: e, total: t, onChange: n }) {
  return t < 1 ? null : /* @__PURE__ */ p.jsxs("ul", { className: "typecho-pager", children: [
    e > 1 ? /* @__PURE__ */ p.jsx("li", { className: "prev", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e - 1), children: "«" }) }) : null,
    e > 4 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(1), children: "1" }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) })
    ] }) : null,
    [
      e - 3,
      e - 2,
      e - 1,
      e,
      e + 1,
      e + 2,
      e + 3
    ].filter((r) => r > 0 && r <= t).map((r) => /* @__PURE__ */ p.jsx("li", { className: ml({ current: r === e }), children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(r), children: r }) }, r)),
    e < t - 3 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(t), children: t }) })
    ] }) : null,
    e < t ? /* @__PURE__ */ p.jsx("li", { className: "next", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e + 1), children: "»" }) }) : null
  ] });
}
async function ir({ page: e = 1, filter: t }) {
  return ae({
    url: `comment?type=list&owner=${t.owner}&status=${t.status}&keyword=${t.keyword}&page=${e}`,
    method: "GET"
  });
}
async function Lt(e, t) {
  return ae({
    url: `comment/${e}`,
    method: "PUT",
    body: t
  });
}
async function H3(e) {
  return ae({
    url: "comment",
    method: "POST",
    body: e
  });
}
async function ac(e) {
  return ae({
    url: `comment/${e}`,
    method: "DELETE"
  });
}
function K3() {
  const { t: e } = Dt(), t = k.useRef(null), n = k.useRef(null), r = k.useRef({}), i = zt((g) => g.user), [o, s] = k.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [a, l] = k.useReducer(
    function(g, S) {
      return { ...g, ...S };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [u, c] = k.useState({}), [d, f] = k.useState(!1), [L, y] = k.useState([]), x = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "all" }) },
        { type: "mine", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "mine" }) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "approved" }) },
        { type: "waiting", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "waiting" }) },
        { type: "spam", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "spam" }) }
      ]
    ]
  ];
  k.useEffect(() => {
    ir({ page: o.page, filter: a }).then((g) => {
      s({ ...o, ...g }), y([]);
    });
  }, [a, o.page]);
  const w = (g) => [
    {
      key: "approved",
      name: e("approved button"),
      show: !0,
      disable: g && g.status === "approved",
      async action() {
        if (g) {
          switch (await Lt(g.objectId, { status: "approved" }), o.data = o.data.filter(
            ({ objectId: S }) => S !== g.objectId
          ), g.status) {
            case "waiting":
              o.waitingCount -= 1;
              break;
            case "spam":
              o.spamCount -= 1;
              break;
          }
          s({ ...o });
        } else
          await Promise.all(
            L.map(
              (S) => Lt(S, { status: "approved" })
            )
          ), ir({ page: o.page, filter: a }).then((S) => {
            s({ ...o, ...S }), y([]);
          });
      }
    },
    {
      key: "waiting",
      name: e("waiting"),
      show: !0,
      disable: g && g.status === "waiting",
      async action() {
        g ? (await Lt(g.objectId, { status: "waiting" }), o.data = o.data.filter(
          ({ objectId: S }) => S !== g.objectId
        ), g.status === "spam" && (o.spamCount -= 1), o.waitingCount += 1, s({ ...o })) : (await Promise.all(
          L.map(
            (S) => Lt(S, { status: "waiting" })
          )
        ), ir({ page: o.page, filter: a }).then((S) => {
          s({ ...o, ...S }), y([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: e(g ? "spam" : "mark as spam"),
      disable: g && g.status === "spam",
      async action() {
        g ? (await Lt(g.objectId, { status: "spam" }), o.data = o.data.filter(
          ({ objectId: S }) => S !== g.objectId
        ), o.spamCount += 1, s({ ...o })) : (await Promise.all(
          L.map(
            (S) => Lt(S, { status: "spam" })
          )
        ), ir({ page: o.page, filter: a }).then((S) => {
          s({ ...o, ...S }), y([]);
        }));
      }
    },
    {
      key: "sticky",
      show: g && !g.rid && g.status === "approved",
      name: g && g.sticky ? e("disable sticky") : e("sticky"),
      async action(S) {
        S.preventDefault();
        const E = !g.sticky;
        o.data.forEach((C) => {
          C.objectId === g.objectId && (C.sticky = E);
        }), await Lt(g.objectId, { sticky: E ? 1 : 0 }), s({ ...o });
      }
    },
    {
      key: "edit",
      show: g,
      name: e("edit"),
      action() {
        const S = {};
        u.id !== g.objectId && u.action !== "edit" && (S.id = g.objectId, S.action = "edit"), c(S);
      }
    },
    {
      key: "reply",
      show: g && g.status === "approved",
      name: e("reply"),
      action() {
        const S = {};
        u.id !== g.objectId && u.action !== "reply" && (S.id = g.objectId, S.action = "reply"), c(S);
      }
    },
    {
      key: "delete",
      name: e("delete"),
      show: !0,
      async action() {
        const S = g ? e("delete one confirm", { nick: g.nick }) : e("delete multiple confirm");
        confirm(S) && (g ? (await ac(g.objectId), o.data = o.data.filter(
          ({ objectId: E }) => E !== g.objectId
        ), s({ ...o })) : (await Promise.all(L.map(ac)), ir({ page: o.page, filter: a }).then((E) => {
          s({ ...o, ...E }), y([]);
        })));
      }
    }
  ].filter(({ show: S }) => S), h = async ({ pid: g, rid: S, url: E, at: C }) => {
    const P = n.current.value;
    if (!P)
      return null;
    const { display_name: _, email: O, url: A } = i;
    await H3({
      nick: _,
      mail: O,
      ua: navigator.userAgent,
      link: A,
      url: E,
      comment: P,
      pid: g,
      rid: S || g,
      at: C
    }), location.reload();
  }, m = async (g) => {
    const S = o.data[g];
    await Lt(S.objectId, r.current), o.data[g] = { ...S, ...r.current }, s({ ...o }), c({});
  }, v = o.data.length && o.data.every(({ objectId: g }) => L.includes(g));
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: e("manage comments") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx("div", { className: "clear-fix", children: x.map(([g, S]) => /* @__PURE__ */ p.jsx(
          "ul",
          {
            className: ml("typecho-option-tabs", {
              right: g === "owner"
            }),
            children: S.map(({ type: E, name: C }) => /* @__PURE__ */ p.jsx(
              "li",
              {
                className: ml({ current: E === a[g] }),
                children: /* @__PURE__ */ p.jsxs(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => l({ [g]: E }),
                    children: [
                      C,
                      g === "status" && E !== "approved" && o[`${E}Count`] > 0 ? /* @__PURE__ */ p.jsx("span", { className: "balloon", children: o[`${E}Count`] }) : null
                    ]
                  }
                )
              },
              E
            ))
          },
          g
        )) }),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsxs("form", { method: "get", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
            /* @__PURE__ */ p.jsxs("label", { children: [
              /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("select all") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: v,
                  onChange: () => y(
                    v ? [] : o.data.map(({ objectId: g }) => g)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => f(!d),
                  children: [
                    /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("action") }),
                    e("selected items"),
                    " ",
                    /* @__PURE__ */ p.jsx("i", { className: "i-caret-down" })
                  ]
                }
              ),
              /* @__PURE__ */ p.jsx(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: d ? "block" : "none" },
                  onClick: () => f(!1),
                  children: w().map(({ key: g, name: S, action: E }) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "javascript:void(0)", onClick: E, children: S }) }, g))
                }
              ),
              " "
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                ref: t,
                className: "text-s",
                placeholder: e("please input keywords")
              }
            ),
            " ",
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (g) => {
                  g.preventDefault(), l({ keyword: t.current.value });
                },
                children: e("filter")
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "3%" }),
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "71%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: e("author") }),
                /* @__PURE__ */ p.jsx("th", { children: e("content") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: o.data.map(
                ({
                  objectId: g,
                  nick: S,
                  mail: E,
                  avatar: C,
                  link: P,
                  comment: _,
                  ip: O,
                  addr: A,
                  url: ee,
                  status: fe,
                  rid: ve,
                  pid: H,
                  sticky: Xe,
                  time: ht,
                  insertedAt: j
                }, I) => u.id === g && u.action === "edit" ? /* @__PURE__ */ p.jsxs("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ p.jsx("td", { children: " " }),
                  /* @__PURE__ */ p.jsx("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "label",
                        {
                          htmlFor: `comment-${g}-author`,
                          children: e("username")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${g}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: S,
                          onChange: (T) => r.current.nick = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${g}-mail`, children: e("email") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${g}-mail`,
                          defaultValue: E,
                          onChange: (T) => r.current.mail = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${g}-url`, children: e("homepage") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${g}-author`,
                          defaultValue: P,
                          onChange: (T) => r.current.link = T.target.value
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${g}-text`, children: e("content") }),
                      /* @__PURE__ */ p.jsx(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${g}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: _,
                          onChange: (T) => r.current.comment = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => m(I),
                          children: e("submit")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => c({}),
                          children: e("cancel")
                        }
                      )
                    ] })
                  ] }) })
                ] }, g) : /* @__PURE__ */ p.jsxs("tr", { id: `comment-${g}`, children: [
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: g,
                      checked: L.includes(g),
                      onChange: () => y(
                        L.includes(g) ? L.filter(
                          (T) => T !== g
                        ) : [...L, g]
                      )
                    }
                  ) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "comment-avatar", children: /* @__PURE__ */ p.jsx(
                    "img",
                    {
                      className: "avatar",
                      src: c1(E, C),
                      alt: S,
                      width: "40",
                      height: "40"
                    }
                  ) }) }),
                  /* @__PURE__ */ p.jsx(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ p.jsxs("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ p.jsx("strong", { className: "comment-author", children: P ? /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: /^https:\/\//.test(P) ? P : "https://" + P,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: S
                          }
                        ) : S }),
                        /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: `mailto:${E}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: E
                          }
                        ) }),
                        E && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: O }),
                        O && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: A })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "comment-date", children: [
                          V3(j || ht),
                          " ",
                          e("at"),
                          " ",
                          /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: B3(ee),
                              target: "_blank",
                              rel: "noreferrer",
                              children: ee
                            }
                          )
                        ] }),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: _ }
                          }
                        ),
                        u.id === g && u.action === "reply" ? /* @__PURE__ */ p.jsxs("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx("label", { htmlFor: "text", className: "sr-only", children: e("content") }),
                            /* @__PURE__ */ p.jsx(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: n
                              }
                            )
                          ] }),
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (T) => {
                                  T.preventDefault(), h({
                                    rid: ve,
                                    pid: g,
                                    url: ee,
                                    at: S
                                  });
                                },
                                children: e("reply")
                              }
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => c({}),
                                children: e("cancel")
                              }
                            )
                          ] })
                        ] }) : null,
                        /* @__PURE__ */ p.jsx("div", { className: "comment-action hidden-by-mouse", children: w({
                          objectId: g,
                          nick: S,
                          status: fe,
                          rid: ve,
                          pid: H,
                          sticky: Xe
                        }).map(
                          ({ key: T, disable: D, name: G, action: un }) => D ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: G }, T) : /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${T}`,
                              onClick: un,
                              children: G
                            },
                            T
                          )
                        ) })
                      ]
                    }
                  )
                ] }, g)
              ) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          d1,
          {
            current: o.page,
            total: o.totalPages,
            onChange: (g) => s({ ...o, page: g })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function W3(e, t, n) {
  const r = new Blob([e], { type: n }), i = document.createElement("a"), o = URL.createObjectURL(r);
  i.href = o, i.download = t, document.body.appendChild(i), i.click(), setTimeout(() => {
    document.body.removeChild(i), window.URL.revokeObjectURL(o);
  }, 0);
}
function Q3(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = (i) => t(i.target.result), r.onerror = n, r.readAsText(e);
  });
}
function Y3() {
  const [e, t] = k.useState(!1), [n, r] = k.useState(!1), { t: i } = Dt(), o = k.useRef(null), s = () => {
    confirm(i("import clear data confirm")) && o.current.click();
  }, a = async (u) => {
    try {
      const c = await Q3(u.target.files[0]), d = JSON.parse(c);
      if (!d || d.type !== "waline")
        return alert("import data format not support!");
      const f = d.tables.reduce(
        (h, m) => {
          var v;
          return h + (((v = d.data[m]) == null ? void 0 : v.length) || 0);
        },
        0
      );
      let L = 0;
      t([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: L, maxLength: f }
      ]);
      const y = {};
      for (const h of d.tables) {
        const m = d.data[h];
        if (h !== "Users" && await ae({
          url: "db?table=" + h,
          method: "DELETE"
        }), y[h] || (y[h] = {}), !!Array.isArray(m))
          for (const v of m) {
            let g = !1;
            if (h === "Users") {
              const _ = await ae("user?email=" + v.email);
              _.objectId && (g = _.objectId);
            }
            const E = h == "Users" && g ? "PUT" : "POST", C = h === "Comment" ? Object.assign({}, v, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : v;
            for (const _ in C)
              (C[_] === null || C[_] === void 0) && delete C[_];
            const P = await ae({
              url: `db?table=${h}${E === "PUT" ? `&objectId=${g}` : ""}`,
              method: E,
              body: C
            });
            y[h][v.objectId] = P.objectId, L += 1, t([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: L, maxLength: f }
            ]);
          }
      }
      t(["comment data index relationship reconstruction"]);
      const x = d.data.Comment, w = [];
      for (const h of x) {
        const m = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: v, field: g }) => {
          if (!h[g])
            return;
          const S = h[g], E = y[v][h[g]];
          S && E && S !== E && (m[g] = E);
        }), Object.keys(m).length && w.push([
          m,
          { objectId: y.Comment[h.objectId] }
        ]);
      }
      L = 0;
      for (const [h, m] of w)
        await ae({
          url: `db?table=Comment&objectId=${m.objectId}`,
          method: "PUT",
          body: h
        }), L += 1, t([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: L, maxLength: w.length }
        ]);
      alert(i("import success")), location.reload();
    } catch (c) {
      throw console.log(c), alert(c.message), c;
    } finally {
      t(!1), u.target.value = null;
    }
  }, l = async () => {
    r(!0);
    try {
      const u = await ae("db");
      W3(
        JSON.stringify(u, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("migration") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsx("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ p.jsx(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: l,
            disabled: n,
            children: i(n ? "exporting" : "export")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: s,
              disabled: e,
              children: Array.isArray(e) ? i(...e) : i("import")
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              ref: o,
              onChange: a,
              type: "file",
              style: { display: "none" }
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
class jn {
  constructor(t, n, r) {
    nt(this, "x");
    nt(this, "y");
    nt(this, "scale");
    this.x = t, this.y = n, this.scale = r;
  }
  toString() {
    return "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
  }
  static parse(t) {
    var r = t.style.transform.split(") "), i = r[0].substring(10).split(","), o = r.length > 1 ? r[1].substring(6) : "1", s = i.length > 1 ? i[0] : "0", a = i.length > 1 ? i[1] : "0";
    return new jn(parseFloat(s), parseFloat(a), parseFloat(o));
  }
}
class yi {
  constructor(t) {
    nt(this, "x");
    nt(this, "y");
    if (!t || !t.style.transformOrigin) {
      this.x = 0, this.y = 0;
      return;
    }
    var n = t.style.transformOrigin.split(" ");
    this.x = parseFloat(n[0]), this.y = parseFloat(n[1]);
  }
  toString() {
    return this.x + "px " + this.y + "px";
  }
}
function X3(e, t) {
  let n = 0;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => e(...r), t);
  };
}
function gl(e, t) {
  return e.toFixed(t);
}
function G3(e, t) {
  const n = parseFloat(t.min), r = parseFloat(t.max);
  t.value = gl(Math.max(n, Math.min(r, e)), 3);
}
function J3(e) {
  var t = new Image();
  return new Promise(function(n, r) {
    t.onload = () => {
      n(t);
    }, t.onerror = r, t.src = e;
  });
}
function uc() {
  return {
    boundary: document.createElement("div"),
    viewport: document.createElement("div"),
    preview: document.createElement("img"),
    overlay: document.createElement("div"),
    zoomerWrap: document.createElement("div"),
    zoomer: document.createElement("input")
  };
}
function Z3(e) {
  return e === "ArrowLeft" ? [2, 0] : e === "ArrowUp" ? [0, 2] : e === "ArrowRight" ? [-2, 0] : [0, -2];
}
function q3() {
  return document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
}
var $n, me, Mn, Br, $, f1, vl, p1, h1, m1, yl, L1, g1, v1, y1, wl, bi, w1, xl, Sl, El, x1, S1;
class eg {
  constructor(t, n) {
    cn(this, $);
    nt(this, "element");
    nt(this, "elements");
    nt(this, "options", {
      mouseWheelZoom: "on",
      viewport: {
        width: 220,
        height: 220,
        type: "square"
      },
      zoomerInputClass: "cr-slider"
    });
    cn(this, $n, null);
    cn(this, me, 1);
    cn(this, Mn, null);
    cn(this, Br, X3(() => {
      z(this, $, xl).call(this);
    }, 200));
    if (t.classList.contains("cropt-container"))
      throw new Error("Cropt is already initialized on this element");
    n.viewport && (n.viewport = { ...this.options.viewport, ...n.viewport }), this.options = { ...this.options, ...n }, this.element = t, this.element.classList.add("cropt-container"), this.elements = uc(), this.elements.zoomerWrap.classList.add("cr-slider-wrap"), this.elements.boundary.classList.add("cr-boundary"), this.elements.viewport.classList.add("cr-viewport"), this.elements.overlay.classList.add("cr-overlay"), this.elements.viewport.setAttribute("tabindex", "0"), z(this, $, wl).call(this, this.elements.preview), this.elements.boundary.appendChild(this.elements.preview), this.elements.boundary.appendChild(this.elements.viewport), this.elements.boundary.appendChild(this.elements.overlay), this.elements.zoomer.type = "range", this.elements.zoomer.step = "0.001", this.elements.zoomer.value = "1", this.elements.zoomer.setAttribute("aria-label", "zoom"), this.element.appendChild(this.elements.boundary), this.element.appendChild(this.elements.zoomerWrap), this.elements.zoomerWrap.appendChild(this.elements.zoomer), z(this, $, vl).call(this), z(this, $, L1).call(this), z(this, $, g1).call(this);
  }
  /**
   * Bind an image from an src string.
   * Returns a Promise which resolves when the image has been loaded and state is initialized.
   */
  bind(t, n = null) {
    if (!t)
      throw new Error("src cannot be empty");
    return qr(this, $n, n), J3(t).then((r) => {
      z(this, $, y1).call(this, r), z(this, $, Sl).call(this);
    });
  }
  /**
   * Returns a Promise resolving to an HTMLCanvasElement object for the cropped image.
   * If size is specified, the image will be scaled with its longest side set to size.
   */
  toCanvas(t = null) {
    var n = this.elements.viewport.getBoundingClientRect(), r = n.width / n.height, i = z(this, $, f1).call(this), o = i.right - i.left, s = i.bottom - i.top;
    return t !== null && (r > 1 ? (o = t, s = t / r) : (s = t, o = t * r)), Promise.resolve(z(this, $, h1).call(this, i, o, s));
  }
  toBlob(t = null, n = "image/webp", r = 1) {
    return n === "image/webp" && r < 1 && !q3() && (n = "image/jpeg"), new Promise((i, o) => {
      this.toCanvas(t).then((s) => {
        s.toBlob((a) => {
          a === null ? o("Canvas blob is null") : i(a);
        }, n, r);
      });
    });
  }
  refresh() {
    z(this, $, Sl).call(this);
  }
  setOptions(t) {
    const n = this.options.viewport.width, r = this.options.viewport.height;
    t.viewport && (t.viewport = { ...this.options.viewport, ...t.viewport }), this.options = { ...this.options, ...t }, z(this, $, vl).call(this), (this.options.viewport.width !== n || this.options.viewport.height !== r) && this.refresh();
  }
  setZoom(t) {
    G3(t, this.elements.zoomer);
    var n = new Event("input");
    this.elements.zoomer.dispatchEvent(n);
  }
  destroy() {
    te(this, Mn) && document.removeEventListener("keydown", te(this, Mn)), this.element.removeChild(this.elements.boundary), this.element.classList.remove("cropt-container"), this.element.removeChild(this.elements.zoomerWrap), this.elements = uc();
  }
}
$n = new WeakMap(), me = new WeakMap(), Mn = new WeakMap(), Br = new WeakMap(), $ = new WeakSet(), f1 = function() {
  var t = this.elements.preview.getBoundingClientRect(), n = this.elements.viewport.getBoundingClientRect(), r = n.left - t.left, i = n.top - t.top, o = (n.width - this.elements.viewport.offsetWidth) / 2, s = (n.height - this.elements.viewport.offsetHeight) / 2, a = r + this.elements.viewport.offsetWidth + o, l = i + this.elements.viewport.offsetHeight + s;
  return r = Math.max(0, r / te(this, me)), i = Math.max(0, i / te(this, me)), a = Math.max(0, a / te(this, me)), l = Math.max(0, l / te(this, me)), {
    left: Math.round(r),
    top: Math.round(i),
    right: Math.round(a),
    bottom: Math.round(l)
  };
}, vl = function() {
  this.elements.zoomer.className = this.options.zoomerInputClass;
  const t = "cr-vp-circle", n = this.elements.viewport;
  this.options.viewport.type === "circle" ? n.classList.add(t) : n.classList.remove(t), n.style.width = this.options.viewport.width + "px", n.style.height = this.options.viewport.height + "px";
}, p1 = function(t) {
  var n = t.right - t.left, r = t.bottom - t.top, i = document.createElement("canvas"), o = i.getContext("2d");
  if (o === null)
    throw new Error("Canvas context cannot be null");
  return i.width = n, i.height = r, o.drawImage(this.elements.preview, t.left, t.top, n, r, 0, 0, i.width, i.height), i;
}, h1 = function(t, n, r) {
  var i = z(this, $, p1).call(this, t), o = i.getContext("2d"), s = document.createElement("canvas"), a = s.getContext("2d"), l = document.createElement("canvas"), u = l.getContext("2d");
  if (l.width = n, l.height = r, u === null || o === null || a === null)
    throw new Error("Canvas context cannot be null");
  for (var c = {
    width: i.width,
    height: i.height
  }; c.width * 0.5 > l.width; ) {
    let d = c.width, f = c.height;
    c = {
      width: Math.floor(c.width * 0.5),
      height: Math.floor(c.height * 0.5)
    }, s.width = d, s.height = f, a.clearRect(0, 0, s.width, s.height), a.drawImage(i, 0, 0), o.clearRect(0, 0, d, f), o.drawImage(s, 0, 0, d, f, 0, 0, c.width, c.height);
  }
  return u.drawImage(i, 0, 0, c.width, c.height, 0, 0, l.width, l.height), l;
}, m1 = function() {
  var t = te(this, me), n = this.elements.viewport.getBoundingClientRect(), r = n.width, i = n.height, o = this.elements.boundary.clientWidth / 2, s = this.elements.boundary.clientHeight / 2, a = this.elements.preview.getBoundingClientRect(), l = a.width, u = a.height, c = r / 2, d = i / 2, f = (c / t - o) * -1, L = f - (l * (1 / t) - r * (1 / t)), y = (d / t - s) * -1, x = y - (u * (1 / t) - i * (1 / t)), w = 1 / t * c, h = l * (1 / t) - w, m = 1 / t * d, v = u * (1 / t) - m;
  return {
    translate: {
      maxX: f,
      minX: L,
      maxY: y,
      minY: x
    },
    origin: {
      maxX: h,
      minX: w,
      maxY: v,
      minY: m
    }
  };
}, yl = function(t, n) {
  const r = this.elements.preview.getBoundingClientRect(), i = this.elements.viewport.getBoundingClientRect(), o = jn.parse(this.elements.preview);
  i.top > r.top + n && i.bottom < r.bottom + n && (o.y = o.y + n), i.left > r.left + t && i.right < r.right + t && (o.x = o.x + t), z(this, $, El).call(this, o), te(this, Br).call(this);
}, L1 = function() {
  let t = 0, n = 0, r = [], i = 0, o = (u) => {
    u.preventDefault();
    const c = r.findIndex((d) => d.pointerId === u.pointerId);
    if (c !== -1) {
      if (r[c] = u, r.length === 2) {
        let d = r[0], f = r[1], L = Math.sqrt((d.pageX - f.pageX) * (d.pageX - f.pageX) + (d.pageY - f.pageY) * (d.pageY - f.pageY));
        i === 0 && (i = L / te(this, me)), this.setZoom(L / i);
        return;
      } else if (i !== 0)
        return;
      z(this, $, yl).call(this, u.pageX - t, u.pageY - n), t = u.pageX, n = u.pageY;
    }
  }, s = (u) => {
    const c = r.findIndex((d) => d.pointerId === u.pointerId);
    c !== -1 && r.splice(c, 1), r.length === 0 && (this.elements.overlay.removeEventListener("pointermove", o), this.elements.overlay.removeEventListener("pointerup", s), this.elements.overlay.removeEventListener("pointerout", s), z(this, $, bi).call(this, !1, this.elements.preview), i = 0);
  }, a = (u) => {
    u.button || (u.preventDefault(), r.push(u), this.elements.overlay.setPointerCapture(u.pointerId), !(r.length > 1) && (t = u.pageX, n = u.pageY, z(this, $, bi).call(this, !0, this.elements.preview), this.elements.overlay.addEventListener("pointermove", o), this.elements.overlay.addEventListener("pointerup", s), this.elements.overlay.addEventListener("pointerout", s)));
  }, l = (u) => {
    if (document.activeElement === this.elements.viewport) {
      if (u.shiftKey && (u.key === "ArrowUp" || u.key === "ArrowDown")) {
        u.preventDefault();
        let c = parseFloat(this.elements.zoomer.value), d = u.key === "ArrowUp" ? 0.01 : -0.01;
        this.setZoom(c + d);
      } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(u.key)) {
        u.preventDefault();
        let [c, d] = Z3(u.key);
        z(this, $, yl).call(this, c, d);
      }
    }
  };
  this.elements.overlay.addEventListener("pointerdown", a), document.addEventListener("keydown", l), qr(this, Mn, l);
}, g1 = function() {
  let t = () => {
    z(this, $, v1).call(this);
  }, n = (r) => {
    const i = this.options.mouseWheelZoom;
    let o = 0;
    i === "off" || i === "ctrl" && !r.ctrlKey || (r.deltaY && (o = r.deltaY * -1 / 2e3), r.preventDefault(), this.setZoom(te(this, me) + o * te(this, me)));
  };
  this.elements.zoomer.addEventListener("input", t), this.elements.boundary.addEventListener("wheel", n);
}, v1 = function() {
  const t = jn.parse(this.elements.preview), n = new yi(this.elements.preview);
  let r = () => {
    this.elements.preview.style.transform = t.toString(), this.elements.preview.style.transformOrigin = n.toString();
  };
  qr(this, me, parseFloat(this.elements.zoomer.value)), t.scale = te(this, me), r();
  var i = z(this, $, m1).call(this), o = i.translate, s = i.origin;
  t.x >= o.maxX && (n.x = s.minX, t.x = o.maxX), t.x <= o.minX && (n.x = s.maxX, t.x = o.minX), t.y >= o.maxY && (n.y = s.minY, t.y = o.maxY), t.y <= o.minY && (n.y = s.maxY, t.y = o.minY), r(), te(this, Br).call(this);
}, y1 = function(t) {
  z(this, $, wl).call(this, t), this.elements.preview.parentNode && this.elements.preview.parentNode.replaceChild(t, this.elements.preview), this.elements.preview = t;
}, wl = function(t) {
  t.classList.add("cr-image"), t.setAttribute("alt", "preview"), z(this, $, bi).call(this, !1, t);
}, bi = function(t, n) {
  n.setAttribute("aria-grabbed", t.toString()), this.elements.boundary.setAttribute("aria-dropeffect", t ? "move" : "none");
}, w1 = function() {
  return this.elements.preview.offsetParent !== null;
}, xl = function() {
  const t = this.elements.boundary.getBoundingClientRect(), n = this.elements.preview.getBoundingClientRect(), r = this.elements.overlay;
  r.style.width = n.width + "px", r.style.height = n.height + "px", r.style.top = n.top - t.top + "px", r.style.left = n.left - t.left + "px";
}, Sl = function() {
  if (!z(this, $, w1).call(this))
    return;
  const t = this.elements.preview, n = new jn(0, 0, 1);
  t.style.transform = n.toString(), t.style.transformOrigin = new yi().toString(), z(this, $, x1).call(this), n.scale = te(this, me), t.style.transform = n.toString(), t.style.transformOrigin = new yi().toString(), z(this, $, S1).call(this), z(this, $, xl).call(this);
}, El = function(t) {
  var n = te(this, me), r = this.elements.preview.getBoundingClientRect(), i = this.elements.viewport.getBoundingClientRect(), o = new yi(this.elements.preview), s = i.top - r.top + i.height / 2, a = i.left - r.left + i.width / 2, l = { x: a / n, y: s / n }, u = {
    x: (l.x - o.x) * (1 - n),
    y: (l.y - o.y) * (1 - n)
  };
  t.x -= u.x, t.y -= u.y, this.elements.preview.style.transform = t.toString(), this.elements.preview.style.transformOrigin = l.x + "px " + l.y + "px";
}, x1 = function() {
  var t = 0.85, n = this.elements.boundary.getBoundingClientRect(), r = this.elements.preview, i = this.elements.viewport.getBoundingClientRect(), o = i.width / r.naturalWidth, s = i.height / r.naturalHeight, a = Math.max(o, s);
  a >= t && (t += a), this.elements.zoomer.min = gl(a, 3), this.elements.zoomer.max = gl(t, 3);
  var l = Math.max(n.width / r.naturalWidth, n.height / r.naturalHeight);
  this.setZoom(te(this, $n) !== null ? te(this, $n) : l);
}, S1 = function() {
  var t = this.elements.preview.getBoundingClientRect(), n = this.elements.viewport.getBoundingClientRect(), r = this.elements.boundary.getBoundingClientRect(), i = n.left - r.left, o = n.top - r.top, s = i - (t.width - n.width) / 2, a = o - (t.height - n.height) / 2, l = new jn(s, a, te(this, me));
  z(this, $, El).call(this, l);
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var tn;
((e) => {
  const t = class {
    constructor(l, u, c, d) {
      if (this.version = l, this.errorCorrectionLevel = u, this.modules = [], this.isFunction = [], l < t.MIN_VERSION || l > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (d < -1 || d > 7)
        throw new RangeError("Mask value out of range");
      this.size = l * 4 + 17;
      let f = [];
      for (let y = 0; y < this.size; y++)
        f.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const L = this.addEccAndInterleave(c);
      if (this.drawCodewords(L), d == -1) {
        let y = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const w = this.getPenaltyScore();
          w < y && (d = x, y = w), this.applyMask(x);
        }
      }
      o(0 <= d && d <= 7), this.mask = d, this.applyMask(d), this.drawFormatBits(d), this.isFunction = [];
    }
    static encodeText(l, u) {
      const c = e.QrSegment.makeSegments(l);
      return t.encodeSegments(c, u);
    }
    static encodeBinary(l, u) {
      const c = e.QrSegment.makeBytes(l);
      return t.encodeSegments([c], u);
    }
    static encodeSegments(l, u, c = 1, d = 40, f = -1, L = !0) {
      if (!(t.MIN_VERSION <= c && c <= d && d <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let y, x;
      for (y = c; ; y++) {
        const v = t.getNumDataCodewords(y, u) * 8, g = a.getTotalBits(l, y);
        if (g <= v) {
          x = g;
          break;
        }
        if (y >= d)
          throw new RangeError("Data too long");
      }
      for (const v of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        L && x <= t.getNumDataCodewords(y, v) * 8 && (u = v);
      let w = [];
      for (const v of l) {
        r(v.mode.modeBits, 4, w), r(v.numChars, v.mode.numCharCountBits(y), w);
        for (const g of v.getData())
          w.push(g);
      }
      o(w.length == x);
      const h = t.getNumDataCodewords(y, u) * 8;
      o(w.length <= h), r(0, Math.min(4, h - w.length), w), r(0, (8 - w.length % 8) % 8, w), o(w.length % 8 == 0);
      for (let v = 236; w.length < h; v ^= 253)
        r(v, 8, w);
      let m = [];
      for (; m.length * 8 < w.length; )
        m.push(0);
      return w.forEach((v, g) => m[g >>> 3] |= v << 7 - (g & 7)), new t(y, u, m, f);
    }
    getModule(l, u) {
      return 0 <= l && l < this.size && 0 <= u && u < this.size && this.modules[u][l];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const l = this.getAlignmentPatternPositions(), u = l.length;
      for (let c = 0; c < u; c++)
        for (let d = 0; d < u; d++)
          c == 0 && d == 0 || c == 0 && d == u - 1 || c == u - 1 && d == 0 || this.drawAlignmentPattern(l[c], l[d]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(l) {
      const u = this.errorCorrectionLevel.formatBits << 3 | l;
      let c = u;
      for (let f = 0; f < 10; f++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const d = (u << 10 | c) ^ 21522;
      o(d >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, i(d, f));
      this.setFunctionModule(8, 7, i(d, 6)), this.setFunctionModule(8, 8, i(d, 7)), this.setFunctionModule(7, 8, i(d, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, i(d, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, i(d, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, i(d, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let l = this.version;
      for (let c = 0; c < 12; c++)
        l = l << 1 ^ (l >>> 11) * 7973;
      const u = this.version << 12 | l;
      o(u >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const d = i(u, c), f = this.size - 11 + c % 3, L = Math.floor(c / 3);
        this.setFunctionModule(f, L, d), this.setFunctionModule(L, f, d);
      }
    }
    drawFinderPattern(l, u) {
      for (let c = -4; c <= 4; c++)
        for (let d = -4; d <= 4; d++) {
          const f = Math.max(Math.abs(d), Math.abs(c)), L = l + d, y = u + c;
          0 <= L && L < this.size && 0 <= y && y < this.size && this.setFunctionModule(L, y, f != 2 && f != 4);
        }
    }
    drawAlignmentPattern(l, u) {
      for (let c = -2; c <= 2; c++)
        for (let d = -2; d <= 2; d++)
          this.setFunctionModule(l + d, u + c, Math.max(Math.abs(d), Math.abs(c)) != 1);
    }
    setFunctionModule(l, u, c) {
      this.modules[u][l] = c, this.isFunction[u][l] = !0;
    }
    addEccAndInterleave(l) {
      const u = this.version, c = this.errorCorrectionLevel;
      if (l.length != t.getNumDataCodewords(u, c))
        throw new RangeError("Invalid argument");
      const d = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][u], f = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][u], L = Math.floor(t.getNumRawDataModules(u) / 8), y = d - L % d, x = Math.floor(L / d);
      let w = [];
      const h = t.reedSolomonComputeDivisor(f);
      for (let v = 0, g = 0; v < d; v++) {
        let S = l.slice(g, g + x - f + (v < y ? 0 : 1));
        g += S.length;
        const E = t.reedSolomonComputeRemainder(S, h);
        v < y && S.push(0), w.push(S.concat(E));
      }
      let m = [];
      for (let v = 0; v < w[0].length; v++)
        w.forEach((g, S) => {
          (v != x - f || S >= y) && m.push(g[v]);
        });
      return o(m.length == L), m;
    }
    drawCodewords(l) {
      if (l.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let u = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let d = 0; d < this.size; d++)
          for (let f = 0; f < 2; f++) {
            const L = c - f, x = (c + 1 & 2) == 0 ? this.size - 1 - d : d;
            !this.isFunction[x][L] && u < l.length * 8 && (this.modules[x][L] = i(l[u >>> 3], 7 - (u & 7)), u++);
          }
      }
      o(u == l.length * 8);
    }
    applyMask(l) {
      if (l < 0 || l > 7)
        throw new RangeError("Mask value out of range");
      for (let u = 0; u < this.size; u++)
        for (let c = 0; c < this.size; c++) {
          let d;
          switch (l) {
            case 0:
              d = (c + u) % 2 == 0;
              break;
            case 1:
              d = u % 2 == 0;
              break;
            case 2:
              d = c % 3 == 0;
              break;
            case 3:
              d = (c + u) % 3 == 0;
              break;
            case 4:
              d = (Math.floor(c / 3) + Math.floor(u / 2)) % 2 == 0;
              break;
            case 5:
              d = c * u % 2 + c * u % 3 == 0;
              break;
            case 6:
              d = (c * u % 2 + c * u % 3) % 2 == 0;
              break;
            case 7:
              d = ((c + u) % 2 + c * u % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[u][c] && d && (this.modules[u][c] = !this.modules[u][c]);
        }
    }
    getPenaltyScore() {
      let l = 0;
      for (let f = 0; f < this.size; f++) {
        let L = !1, y = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[f][w] == L ? (y++, y == 5 ? l += t.PENALTY_N1 : y > 5 && l++) : (this.finderPenaltyAddHistory(y, x), L || (l += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), L = this.modules[f][w], y = 1);
        l += this.finderPenaltyTerminateAndCount(L, y, x) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let L = !1, y = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let w = 0; w < this.size; w++)
          this.modules[w][f] == L ? (y++, y == 5 ? l += t.PENALTY_N1 : y > 5 && l++) : (this.finderPenaltyAddHistory(y, x), L || (l += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), L = this.modules[w][f], y = 1);
        l += this.finderPenaltyTerminateAndCount(L, y, x) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let L = 0; L < this.size - 1; L++) {
          const y = this.modules[f][L];
          y == this.modules[f][L + 1] && y == this.modules[f + 1][L] && y == this.modules[f + 1][L + 1] && (l += t.PENALTY_N2);
        }
      let u = 0;
      for (const f of this.modules)
        u = f.reduce((L, y) => L + (y ? 1 : 0), u);
      const c = this.size * this.size, d = Math.ceil(Math.abs(u * 20 - c * 10) / c) - 1;
      return o(0 <= d && d <= 9), l += d * t.PENALTY_N4, o(0 <= l && l <= 2568888), l;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const l = Math.floor(this.version / 7) + 2, u = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (l * 2 - 2)) * 2;
        let c = [6];
        for (let d = this.size - 7; c.length < l; d -= u)
          c.splice(1, 0, d);
        return c;
      }
    }
    static getNumRawDataModules(l) {
      if (l < t.MIN_VERSION || l > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let u = (16 * l + 128) * l + 64;
      if (l >= 2) {
        const c = Math.floor(l / 7) + 2;
        u -= (25 * c - 10) * c - 55, l >= 7 && (u -= 36);
      }
      return o(208 <= u && u <= 29648), u;
    }
    static getNumDataCodewords(l, u) {
      return Math.floor(t.getNumRawDataModules(l) / 8) - t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][l] * t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][l];
    }
    static reedSolomonComputeDivisor(l) {
      if (l < 1 || l > 255)
        throw new RangeError("Degree out of range");
      let u = [];
      for (let d = 0; d < l - 1; d++)
        u.push(0);
      u.push(1);
      let c = 1;
      for (let d = 0; d < l; d++) {
        for (let f = 0; f < u.length; f++)
          u[f] = t.reedSolomonMultiply(u[f], c), f + 1 < u.length && (u[f] ^= u[f + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return u;
    }
    static reedSolomonComputeRemainder(l, u) {
      let c = u.map((d) => 0);
      for (const d of l) {
        const f = d ^ c.shift();
        c.push(0), u.forEach((L, y) => c[y] ^= t.reedSolomonMultiply(L, f));
      }
      return c;
    }
    static reedSolomonMultiply(l, u) {
      if (l >>> 8 || u >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let d = 7; d >= 0; d--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (u >>> d & 1) * l;
      return o(c >>> 8 == 0), c;
    }
    finderPenaltyCountPatterns(l) {
      const u = l[1];
      o(u <= this.size * 3);
      const c = u > 0 && l[2] == u && l[3] == u * 3 && l[4] == u && l[5] == u;
      return (c && l[0] >= u * 4 && l[6] >= u ? 1 : 0) + (c && l[6] >= u * 4 && l[0] >= u ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(l, u, c) {
      return l && (this.finderPenaltyAddHistory(u, c), u = 0), u += this.size, this.finderPenaltyAddHistory(u, c), this.finderPenaltyCountPatterns(c);
    }
    finderPenaltyAddHistory(l, u) {
      u[0] == 0 && (l += this.size), u.pop(), u.unshift(l);
    }
  };
  let n = t;
  n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], n.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], e.QrCode = n;
  function r(l, u, c) {
    if (u < 0 || u > 31 || l >>> u)
      throw new RangeError("Value out of range");
    for (let d = u - 1; d >= 0; d--)
      c.push(l >>> d & 1);
  }
  function i(l, u) {
    return (l >>> u & 1) != 0;
  }
  function o(l) {
    if (!l)
      throw new Error("Assertion error");
  }
  const s = class {
    constructor(l, u, c) {
      if (this.mode = l, this.numChars = u, this.bitData = c, u < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    static makeBytes(l) {
      let u = [];
      for (const c of l)
        r(c, 8, u);
      return new s(s.Mode.BYTE, l.length, u);
    }
    static makeNumeric(l) {
      if (!s.isNumeric(l))
        throw new RangeError("String contains non-numeric characters");
      let u = [];
      for (let c = 0; c < l.length; ) {
        const d = Math.min(l.length - c, 3);
        r(parseInt(l.substr(c, d), 10), d * 3 + 1, u), c += d;
      }
      return new s(s.Mode.NUMERIC, l.length, u);
    }
    static makeAlphanumeric(l) {
      if (!s.isAlphanumeric(l))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let u = [], c;
      for (c = 0; c + 2 <= l.length; c += 2) {
        let d = s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)) * 45;
        d += s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c + 1)), r(d, 11, u);
      }
      return c < l.length && r(s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)), 6, u), new s(s.Mode.ALPHANUMERIC, l.length, u);
    }
    static makeSegments(l) {
      return l == "" ? [] : s.isNumeric(l) ? [s.makeNumeric(l)] : s.isAlphanumeric(l) ? [s.makeAlphanumeric(l)] : [s.makeBytes(s.toUtf8ByteArray(l))];
    }
    static makeEci(l) {
      let u = [];
      if (l < 0)
        throw new RangeError("ECI assignment value out of range");
      if (l < 128)
        r(l, 8, u);
      else if (l < 16384)
        r(2, 2, u), r(l, 14, u);
      else if (l < 1e6)
        r(6, 3, u), r(l, 21, u);
      else
        throw new RangeError("ECI assignment value out of range");
      return new s(s.Mode.ECI, 0, u);
    }
    static isNumeric(l) {
      return s.NUMERIC_REGEX.test(l);
    }
    static isAlphanumeric(l) {
      return s.ALPHANUMERIC_REGEX.test(l);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(l, u) {
      let c = 0;
      for (const d of l) {
        const f = d.mode.numCharCountBits(u);
        if (d.numChars >= 1 << f)
          return 1 / 0;
        c += 4 + f + d.bitData.length;
      }
      return c;
    }
    static toUtf8ByteArray(l) {
      l = encodeURI(l);
      let u = [];
      for (let c = 0; c < l.length; c++)
        l.charAt(c) != "%" ? u.push(l.charCodeAt(c)) : (u.push(parseInt(l.substr(c + 1, 2), 16)), c += 2);
      return u;
    }
  };
  let a = s;
  a.NUMERIC_REGEX = /^[0-9]*$/, a.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, a.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = a;
})(tn || (tn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.ordinal = i, this.formatBits = o;
      }
    };
    let r = n;
    r.LOW = new n(0, 1), r.MEDIUM = new n(1, 0), r.QUARTILE = new n(2, 3), r.HIGH = new n(3, 2), t.Ecc = r;
  })(e.QrCode || (e.QrCode = {}));
})(tn || (tn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.modeBits = i, this.numBitsCharCount = o;
      }
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    let r = n;
    r.NUMERIC = new n(1, [10, 12, 14]), r.ALPHANUMERIC = new n(2, [9, 11, 13]), r.BYTE = new n(4, [8, 16, 16]), r.KANJI = new n(8, [8, 10, 12]), r.ECI = new n(7, [0, 0, 0]), t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(tn || (tn = {}));
var wi = tn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
wi.QrCode.Ecc.LOW, wi.QrCode.Ecc.MEDIUM, wi.QrCode.Ecc.QUARTILE, wi.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function tg() {
  k.useState(!1);
  const [e, t] = k.useState(!1), n = Xr(), r = zt((w) => w.user), { t: i } = Dt();
  let o = null, s = null;
  const a = async function(w) {
    try {
      w.preventDefault(), t(!0);
      const h = w.target.screenName.value;
      let m;
      s ? m = s : m = w.target.avatar.files[0];
      let v = r.avatar;
      m && (v = await d(m)), await n.user.updateProfile({ display_name: h, avatar: v });
    } catch (h) {
      alert(h);
    } finally {
      t(!1), location.reload();
    }
  }, l = (w) => {
    w.preventDefault();
    const h = document.getElementById("image-container"), m = document.getElementById("image-container-wrapper"), v = document.getElementById("image-result");
    if (m.setAttribute("style", "display: none;"), w.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", v.removeAttribute("src"), v.setAttribute("style", "display: none;");
      return;
    }
    const g = w.target.files[0].size;
    if (parseInt(g) > 1 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    m.removeAttribute("style"), o && o.destroy(), o = new eg(h, {
      viewport: {
        width: 219,
        height: 220,
        type: "square"
      },
      mouseWheelZoom: "on"
    });
    const S = new FileReader();
    S.onload = function(E) {
      o.bind(E.target.result);
    }, S.readAsDataURL(w.target.files[0]);
  }, u = async (w) => {
    w.preventDefault(), o.toCanvas(300).then(async (m) => {
      const v = document.getElementById("image-result");
      v.removeAttribute("style"), v.src = m.toDataURL("image/jpeg", 1);
    });
    const h = await o.toBlob(300, "image/jpeg");
    s = new File([h], "image.jpeg", { type: h.type });
  }, c = (w) => {
    w.preventDefault(), o.refresh(), document.getElementById("image-result").setAttribute("style", "display: none;");
  }, d = async function(w) {
    try {
      let h = new FormData();
      return h.append("file", w), (await (await fetch("https://upload.shngm.id/upload/image", {
        method: "POST",
        body: h
      })).json()).imageUrl;
    } catch (h) {
      throw console.error(h), h;
    }
  }, f = async () => {
    try {
      const w = await fetch(`https://api.shngm.io/v1/sys/get-user-by-email?email=${r.email}`, {
        headers: {
          Authorization: "Bearer VSa@JSIJHJK%Jaa@PgcJ@C!SKkfd&OCc8"
        }
      });
      if (!w.ok) {
        const v = await w.json();
        return alert(`Error: ${v.message}`);
      }
      const m = (await w.json()).data.user_id;
      await n.user.updateProfile({ url: `https://go.shng.me/user/${m}` });
    } catch (w) {
      return console.error("error", w), alert(`Something went wrong: ${w.message}`);
    }
  };
  let L = window.serverURL;
  if (!L) {
    const w = location.pathname.match(/(.*?\/)ui/);
    L = w ? w[1] : "/";
  }
  const y = new URLSearchParams(location.search);
  let x = window.TOKEN || sessionStorage.getItem("TOKEN") || y.get("token");
  return x || (x = localStorage.getItem("TOKEN")), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("setting") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "profile-avatar",
                  src: r.avatar || `https://seccdn.libravatar.org/avatar/${r.mailMd5}?s=220&amp;r=X&amp;d=mm`
                }
              )
            }
          ) }),
          /* @__PURE__ */ p.jsx("h2", { children: r.display_name }),
          /* @__PURE__ */ p.jsx("p", { children: r.email })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ p.jsxs("section", { children: [
                /* @__PURE__ */ p.jsx("h3", { children: i("profile") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: a, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: i("nickname") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: r.display_name
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsxs("div", { id: "image-container-wrapper", style: { display: "none" }, children: [
                    /* @__PURE__ */ p.jsx("div", { id: "image-container" }),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        onClick: u,
                        type: "button",
                        className: "btn primary",
                        children: "Crop"
                      }
                    ),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        onClick: c,
                        type: "button",
                        className: "btn",
                        style: { marginLeft: "10px" },
                        children: "Reset"
                      }
                    )
                  ] }) }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("img", { id: "image-result", src: "", alt: "", style: { display: "none" } }) }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-3", children: i("change avatar") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: l,
                        accept: "image/*"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: e,
                      children: i("update my profile")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsxs("section", { id: "social-account", children: [
                /* @__PURE__ */ p.jsx("h3", { children: "Connect" }),
                /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: "account-item shinigami",
                    children: /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        disabled: e,
                        className: "btn primary",
                        onClick: f,
                        children: "Connect to Shinigami"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsx("br", {})
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function ng() {
  const { t: e } = Dt(), t = Xr(), n = Jr(), r = zt((c) => c.user), [i, o] = k.useState(!1), [s, a] = k.useState(!1), l = r1({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  k.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const u = async function(c) {
    c.preventDefault(), o(!1);
    const d = c.target.nick.value;
    if (!d || d.length < 2)
      return o(e("nickname illegal"));
    const f = c.target.email.value;
    if (!f)
      return o(e("please input email"));
    const L = c.target.link.value, y = c.target.password.value, x = c.target["password-again"].value;
    if (!y || !x || x !== y)
      return o(e("passwords don't match"));
    try {
      a(!0);
      const w = await l("login"), h = await t.user.register({
        display_name: d,
        email: f,
        url: L,
        password: y,
        recaptchaV3: window.recaptchaV3Key ? w : void 0,
        turnstile: window.turnstileKey ? w : void 0
      });
      h && h.verify && alert(e("register success! please go to your mailbox to verify it!")), n("/ui/login");
    } catch (w) {
      o(w.message);
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: u, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "nick", className: "sr-only", children: e("nickname") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: e("nickname"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "link", className: "sr-only", children: e("website") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "link",
              name: "link",
              placeholder: e("website"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password-again", className: "sr-only", children: e("password again") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: e("password again")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("register")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(be, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(be, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
function rg() {
  const e = zt((s) => s.user), { t } = Dt(), [n, r] = k.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  k.useEffect(() => {
    $3({ page: n.page }).then((s) => {
      console.log(s), r({ ...n, ...s });
    });
  }, [n.page]);
  const i = (s) => [
    {
      key: "administrator",
      name: t("set administrator"),
      show: s.type === "guest",
      async action(a) {
        a.preventDefault(), await rr({
          id: s.objectId,
          type: "administrator"
        }), s.type = "administrator", r({ ...n });
      }
    },
    {
      key: "guest",
      name: t("set guest"),
      show: s.type === "administrator",
      async action(a) {
        if (a.preventDefault(), s.objectId === e.objectId)
          return alert(t("You can't set yourself to be guest!"));
        await rr({
          id: s.objectId,
          type: "guest"
        }), s.type = "guest", r({ ...n });
      }
    },
    {
      key: "label",
      name: t("set label"),
      show: !0,
      async action(a) {
        a.preventDefault();
        const l = prompt(t("please enter an exclusive label"));
        await rr({
          id: s.objectId,
          label: l
        }), s.label = l, r({ ...n });
      }
    },
    {
      key: "banned",
      name: "Banned User",
      show: !s.is_banned,
      async action(a) {
        a.preventDefault(), await rr({
          id: s.objectId,
          is_banned: 1
        }), s.is_banned = 1, r({ ...n });
      }
    },
    {
      key: "unbanned",
      name: "Unbanned User",
      show: s.is_banned,
      async action(a) {
        a.preventDefault(), await rr({
          id: s.objectId,
          is_banned: 0
        }), s.is_banned = 0, r({ ...n });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: a }) => a), o = (s) => /^verify/.test(s) ? t("verify") : t(s);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: t("manage users") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: t("nickname") }),
                /* @__PURE__ */ p.jsx("th", { children: t("email") }),
                /* @__PURE__ */ p.jsx("th", { children: t("role") }),
                /* @__PURE__ */ p.jsx("th", { children: t("exclusive label") }),
                /* @__PURE__ */ p.jsx("th", { children: t("action") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: n.data.map((s) => /* @__PURE__ */ p.jsxs("tr", { id: `user-${s.objectId}`, children: [
                /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "user-avatar", children: /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    className: "avatar",
                    src: c1(s.email, s.avatar),
                    alt: s.display_name,
                    width: "40",
                    height: "40"
                  }
                ) }) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: /^https:\/\//.test(s.url) ? s.url : "https://" + s.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: s.display_name
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: `mailto:${s.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: s.email
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: o(s.type) }),
                /* @__PURE__ */ p.jsx("td", { children: s.label }),
                /* @__PURE__ */ p.jsx("td", { className: "comment-action", children: i(s).map(
                  ({ key: a, disable: l, name: u, action: c }) => l ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: u }, a) : /* @__PURE__ */ p.jsx(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${a}`,
                      onClick: c,
                      children: u
                    },
                    a
                  )
                ) })
              ] }, s.objectId)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          d1,
          {
            current: n.page,
            total: n.totalPages,
            onChange: (s) => r({ ...n, page: s })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function ig() {
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsx("div", { className: "typecho-login", children: /* @__PURE__ */ p.jsx("h2", { children: "Your account has been banned, please contact the admin." }) }) }) });
}
function ie(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var og = typeof Symbol == "function" && Symbol.observable || "@@observable", cc = og, Ls = () => Math.random().toString(36).substring(7).split("").join("."), sg = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ls()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ls()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ls()}`
}, Ur = sg;
function Sa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function bo(e, t, n) {
  if (typeof e != "function")
    throw new Error(ie(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ie(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ie(1));
    return n(bo)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), s = o, a = 0, l = !1;
  function u() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((w, h) => {
      s.set(h, w);
    }));
  }
  function c() {
    if (l)
      throw new Error(ie(3));
    return i;
  }
  function d(w) {
    if (typeof w != "function")
      throw new Error(ie(4));
    if (l)
      throw new Error(ie(5));
    let h = !0;
    u();
    const m = a++;
    return s.set(m, w), function() {
      if (h) {
        if (l)
          throw new Error(ie(6));
        h = !1, u(), s.delete(m), o = null;
      }
    };
  }
  function f(w) {
    if (!Sa(w))
      throw new Error(ie(7));
    if (typeof w.type > "u")
      throw new Error(ie(8));
    if (typeof w.type != "string")
      throw new Error(ie(17));
    if (l)
      throw new Error(ie(9));
    try {
      l = !0, i = r(i, w);
    } finally {
      l = !1;
    }
    return (o = s).forEach((m) => {
      m();
    }), w;
  }
  function L(w) {
    if (typeof w != "function")
      throw new Error(ie(10));
    r = w, f({
      type: Ur.REPLACE
    });
  }
  function y() {
    const w = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(h) {
        if (typeof h != "object" || h === null)
          throw new Error(ie(11));
        function m() {
          const g = h;
          g.next && g.next(c());
        }
        return m(), {
          unsubscribe: w(m)
        };
      },
      [cc]() {
        return this;
      }
    };
  }
  return f({
    type: Ur.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: c,
    replaceReducer: L,
    [cc]: y
  };
}
function lg(e, t, n) {
  return bo(e, t, n);
}
function ag(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Ur.INIT
    }) > "u")
      throw new Error(ie(12));
    if (typeof n(void 0, {
      type: Ur.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ie(13));
  });
}
function E1(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    ag(n);
  } catch (o) {
    i = o;
  }
  return function(s = {}, a) {
    if (i)
      throw i;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c], f = n[d], L = s[d], y = f(L, a);
      if (typeof y > "u")
        throw a && a.type, new Error(ie(14));
      u[d] = y, l = l || y !== L;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function dc(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function ug(e, t) {
  if (typeof e == "function")
    return dc(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(ie(16));
  const n = {};
  for (const r in e) {
    const i = e[r];
    typeof i == "function" && (n[r] = dc(i, t));
  }
  return n;
}
function Ea(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function k1(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(ie(15));
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...u) => o(l, ...u)
    }, a = e.map((l) => l(s));
    return o = Ea(...a)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function cg(e) {
  return Sa(e) && "type" in e && typeof e.type == "string";
}
const dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Ur,
  applyMiddleware: k1,
  bindActionCreators: ug,
  combineReducers: E1,
  compose: Ea,
  createStore: bo,
  isAction: cg,
  isPlainObject: Sa,
  legacy_createStore: lg
}, Symbol.toStringTag, { value: "Module" }));
function nn() {
  return nn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nn.apply(this, arguments);
}
function fg(e) {
  var t;
  e.models.forEach(function(l) {
    return C1(e, l);
  });
  var n = N1(e), r = k1.apply(dg, e.reduxConfig.middlewares), i = e.reduxConfig.devtoolComposer ? (t = e.reduxConfig).devtoolComposer.apply(t, e.reduxConfig.enhancers.concat([r])) : hg(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([r])), o = e.reduxConfig.createStore || bo, s = e.reduxConfig.initialState, a = s === void 0 ? {} : s;
  return o(n, a, i);
}
function C1(e, t) {
  var n = {}, r = Object.keys(t.reducers);
  r.forEach(function(a) {
    var l = mg(a) ? a : t.name + "/" + a;
    n[l] = t.reducers[a];
  });
  var i = function(l, u) {
    return l === void 0 && (l = t.state), u.type in n ? n[u.type](l, u.payload, u.meta) : l;
  }, o = t.baseReducer, s = o ? function(a, l) {
    return a === void 0 && (a = t.state), i(o(a, l), l);
  } : i;
  e.forEachPlugin("onReducer", function(a) {
    s = a(s, t.name, e) || s;
  }), e.reduxConfig.reducers[t.name] = s;
}
function N1(e) {
  var t = e.reduxConfig.rootReducers, n = pg(e.reduxConfig), r = n;
  return t && Object.keys(t).length && (r = function(o, s) {
    var a = t[s.type];
    return n(a ? a(o, s) : o, s);
  }), e.forEachPlugin("onRootReducer", function(i) {
    r = i(r, e) || r;
  }), r;
}
function pg(e) {
  var t = e.combineReducers || E1;
  return Object.keys(e.reducers).length ? t(e.reducers) : function(n) {
    return n;
  };
}
function hg(e) {
  return e === void 0 && (e = {}), !e.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : Ea;
}
function mg(e) {
  return e.indexOf("/") > -1;
}
var Lg = function(t, n, r) {
}, gg = function(t, n, r) {
}, j1 = function(t, n, r, i) {
  return Object.assign(function(o, s) {
    var a = {
      type: n + "/" + r
    };
    return typeof o < "u" && (a.payload = o), typeof s < "u" && (a.meta = s), t.dispatch(a);
  }, {
    isEffect: i
  });
}, vg = function(t, n) {
  var r = t.dispatch[n.name], i = Object.keys(n.reducers);
  i.forEach(function(o) {
    Lg(n.name, n.reducers), r[o] = j1(t, n.name, o, !1);
  });
}, yg = function(t, n, r) {
  var i = t.dispatch[r.name], o = {};
  r.effects && (o = typeof r.effects == "function" ? r.effects(t.dispatch) : r.effects);
  var s = Object.keys(o);
  s.forEach(function(a) {
    gg(r.name), n.effects[r.name + "/" + a] = o[a].bind(i), i[a] = j1(t, r.name, a, !0);
  });
};
function wg(e) {
  return {
    models: xg(e.models),
    reduxConfig: e.redux,
    forEachPlugin: function(n, r) {
      e.plugins.forEach(function(i) {
        i[n] && r(i[n]);
      });
    },
    effects: {}
  };
}
function xg(e) {
  return Object.keys(e).map(function(t) {
    var n = Sg(t, e[t]);
    return n;
  });
}
function Sg(e, t) {
  return nn({
    name: e,
    reducers: {}
  }, t);
}
function Eg(e) {
  var t = wg(e);
  t.reduxConfig.middlewares.push(kg(t)), t.forEachPlugin("createMiddleware", function(i) {
    t.reduxConfig.middlewares.push(i(t));
  });
  var n = fg(t), r = nn({}, n, {
    name: e.name,
    addModel: function(o) {
      C1(t, o), fc(r, o), pc(r, t, o), n.replaceReducer(N1(t)), n.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return Cg(r, e.plugins), t.models.forEach(function(i) {
    return fc(r, i);
  }), t.models.forEach(function(i) {
    return pc(r, t, i);
  }), t.forEachPlugin("onStoreCreated", function(i) {
    r = i(r, t) || r;
  }), r;
}
function kg(e) {
  return function(t) {
    return function(n) {
      return function(r) {
        return r.type in e.effects ? (n(r), e.effects[r.type](r.payload, t.getState(), r.meta)) : n(r);
      };
    };
  };
}
function fc(e, t) {
  var n = {};
  e.dispatch["" + t.name] = n, vg(e, t);
}
function pc(e, t, n) {
  yg(e, t, n), t.forEachPlugin("onModel", function(r) {
    r(n, e);
  });
}
function Cg(e, t) {
  t.forEach(function(n) {
    if (n.exposed) {
      var r = Object.keys(n.exposed);
      r.forEach(function(i) {
        if (n.exposed) {
          var o = n.exposed[i], s = typeof o == "function";
          e[i] = s ? function() {
            for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
              l[u] = arguments[u];
            return o.apply(void 0, [e].concat(l));
          } : Object.create(n.exposed[i]);
        }
      });
    }
  });
}
var hc = 0;
function Ng(e) {
  var t, n, r, i = (t = e.name) != null ? t : "Rematch Store " + hc;
  hc += 1;
  var o = {
    name: i,
    models: e.models || {},
    plugins: e.plugins || [],
    redux: nn({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, e.redux, {
      devtoolOptions: nn({
        name: i
      }, (n = (r = e.redux) == null ? void 0 : r.devtoolOptions) != null ? n : {})
    })
  };
  return o.plugins.forEach(function(s) {
    s.config && (o.models = xi(o.models, s.config.models), s.config.redux && (o.redux.initialState = xi(o.redux.initialState, s.config.redux.initialState), o.redux.reducers = xi(o.redux.reducers, s.config.redux.reducers), o.redux.rootReducers = xi(o.redux.rootReducers, s.config.redux.reducers), o.redux.enhancers = [].concat(o.redux.enhancers, s.config.redux.enhancers || []), o.redux.middlewares = [].concat(o.redux.middlewares, s.config.redux.middlewares || []), o.redux.combineReducers = o.redux.combineReducers || s.config.redux.combineReducers, o.redux.createStore = o.redux.createStore || s.config.redux.createStore));
  }), o;
}
function xi(e, t) {
  return t ? nn({}, t, e) : e;
}
var jg = function(t) {
  var n = Ng(t || {});
  return Eg(n);
};
async function Pg() {
  return ae("token").catch(() => {
    P1(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function Rg({ email: e, password: t, code: n, recaptchaV3: r, turnstile: i }) {
  return ae({
    url: "token",
    method: "POST",
    body: { email: e, password: t, code: n, recaptchaV3: r, turnstile: i }
  });
}
async function P1() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function Og(e) {
  return ae({ url: "user", method: "POST", body: e });
}
async function Tg({ email: e }) {
  return ae({
    url: "user/password",
    method: "PUT",
    body: { email: e }
  });
}
const Ig = {
  state: null,
  reducers: {
    setUser(e, t) {
      return t;
    },
    updateUser(e, t) {
      return { ...e, ...t };
    }
  },
  effects: (e) => ({
    async loadUserInfo() {
      const t = await Pg();
      if (t != null && t.email) {
        if (window.opener) {
          const n = localStorage.getItem("TOKEN"), r = !!n, i = n || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: i, remember: r, ...t } },
            "*"
          );
        }
        return e.user.setUser(t);
      }
    },
    async login({ email: t, password: n, code: r, remember: i, recaptchaV3: o, turnstile: s }) {
      const { token: a, ...l } = await Rg({
        email: t,
        password: n,
        code: r,
        recaptchaV3: o,
        turnstile: s
      });
      return a && (window.TOKEN = a, sessionStorage.setItem("TOKEN", a), i && localStorage.setItem("TOKEN", a), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: a, remember: i, ...l } },
        "*"
      )), e.user.setUser(l);
    },
    logout() {
      P1(), e.user.setUser(null);
    },
    register(t) {
      return Og(t);
    },
    forgot(t) {
      return Tg(t);
    },
    async updateProfile(t) {
      return await _3(t), window.opener && window.opener.postMessage({ type: "profile", data: t }, "*"), e.user.updateUser(t);
    }
  })
}, R1 = jg({ models: { user: Ig } });
function Si(e) {
  const t = zt((n) => n.user);
  return k.useEffect(() => {
    const n = e.meta || {}, r = e.basename || "";
    if (!(t != null && t.email))
      return location.href = r + "/ui/login?redirect=" + location.pathname.replace(r, "");
    if (n.auth ? e.meta.auth !== t.type : !1)
      return location.href = r + "/ui/profile";
  }, [t, e.meta]), t ? e.children : null;
}
function _g() {
  const e = location.pathname.match(/(.*?)\/ui/), t = e ? e[1] : "/";
  return /* @__PURE__ */ p.jsx(Nh, { store: R1, children: /* @__PURE__ */ p.jsx(E2, { basename: t, children: /* @__PURE__ */ p.jsxs(L2, { children: [
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(K3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(rg, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(Y3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ p.jsx(M3, {}) }),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ p.jsx(ng, {}) }),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ p.jsx(GL, {}) }),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/banned", exact: !0, element: /* @__PURE__ */ p.jsx(ig, {}) }),
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { children: /* @__PURE__ */ p.jsx(tg, {}) })
      }
    )
  ] }) }) });
}
const {
  slice: $g,
  forEach: Mg
} = [];
function Fg(e) {
  return Mg.call($g.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const mc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, bg = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const i = encodeURIComponent(t);
  let o = `${e}=${i}`;
  if (r.maxAge > 0) {
    const s = r.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(s)}`;
  }
  if (r.domain) {
    if (!mc.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!mc.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, Lc = {
  create(e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)), r && (i.domain = r), document.cookie = bg(e, encodeURIComponent(t), i);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var Ag = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return Lc.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: i,
      cookieOptions: o
    } = t;
    n && typeof document < "u" && Lc.create(n, e, r, i, o);
  }
}, zg = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var r;
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: i
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      const s = i.substring(1).split("&");
      for (let a = 0; a < s.length; a++) {
        const l = s[a].indexOf("=");
        l > 0 && s[a].substring(0, l) === t && (n = s[a].substring(l + 1));
      }
    }
    return n;
  }
};
let or = null;
const gc = () => {
  if (or !== null) return or;
  try {
    or = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    or = !1;
  }
  return or;
};
var Dg = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && gc())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && gc() && window.localStorage.setItem(n, e);
  }
};
let sr = null;
const vc = () => {
  if (sr !== null) return sr;
  try {
    sr = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    sr = !1;
  }
  return sr;
};
var Ug = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && vc())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && vc() && window.sessionStorage.setItem(n, e);
  }
}, Bg = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: i
      } = navigator;
      if (n)
        for (let o = 0; o < n.length; o++)
          t.push(n[o]);
      r && t.push(r), i && t.push(i);
    }
    return t.length > 0 ? t : void 0;
  }
}, Vg = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Hg = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var i;
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (i = n[typeof t == "number" ? t : 0]) == null ? void 0 : i.replace("/", "") : void 0;
  }
}, Kg = {
  name: "subdomain",
  lookup(e) {
    var i, o;
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && ((o = (i = window.location) == null ? void 0 : i.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[n];
  }
};
function Wg() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (e) => e
  };
}
class O1 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = Fg(n, this.options || {}, Wg()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Ag), this.addDetector(zg), this.addDetector(Dg), this.addDetector(Ug), this.addDetector(Bg), this.addDetector(Vg), this.addDetector(Hg), this.addDetector(Kg);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let i = this.detectors[r].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
O1.type = "languageDetector";
de.use(O1).use(W2).init({
  // we init with resources
  resources: XL,
  fallbackLng: "zh-CN",
  debug: !0,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: !1,
  // we use content as keys
  interpolation: {
    escapeValue: !1
  }
});
async function Qg() {
  await Promise.race([
    new Promise((n) => setTimeout(n, 50)),
    new Promise((n) => {
      window.addEventListener("message", (r) => {
        r && r.type === "TOKEN" && r.data && n(r);
      });
    }),
    new Promise((n) => {
      const i = new URLSearchParams(location.search).get("token");
      i && n(i);
    })
  ]).then((n) => {
    n && (window.TOKEN = n, sessionStorage.setItem("TOKEN", n));
  }), await Promise.all([R1.dispatch({ type: "user/loadUserInfo" })]).catch(
    (n) => {
      console.error(n);
    }
  );
  const e = document.createElement("div");
  e.style.height = "100%", document.body.appendChild(e), If(e).render(
    /* @__PURE__ */ p.jsx(vo.StrictMode, { children: /* @__PURE__ */ p.jsx(_g, {}) })
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
Qg();

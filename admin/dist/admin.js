(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";.cropt-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none;pointer-events:none}.cropt-container .cr-image,.cropt-container .cr-overlay{-webkit-user-select:none;user-select:none}.cropt-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;height:320px}.cropt-container .cr-boundary,.cropt-container .cr-slider-wrap{width:320px}.cropt-container .cr-viewport{position:absolute;box-sizing:border-box;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px #00000080;z-index:0}.cropt-container .cr-vp-circle{border-radius:50%}.cropt-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.cropt-container .cr-slider-wrap{margin:15px auto}.cropt-container .cr-slider{width:100%}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Poppins,Helvetica Neue,Helvetica,Arial,sans-serif;background:#09090b;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#4f46e5;text-decoration:none}a:hover{color:#4f46e5;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#27272a;color:#d4d4d8;border:1px solid #27272a;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:1px solid #4f46e5;background-color:#4f46e5;cursor:pointer;border-radius:8px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#6366f1}.primary:active,.primary.active{background-color:#4f46e5}.primary:disabled{background-color:#6366f1;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#18181b;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;border-radius:8px;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#18181b;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-banned,a.operate-banned,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#18181b}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#09090b}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#4f46e5;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#4f46e5!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#4f46e5}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#4f46e5;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.shinigami:hover a #shinigami,.account-item.shinigami.bind a #shinigami{--color-shinigami-1: #000;--color-shinigami-2: #fff}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}.cropt-container .cr-boundary{width:300px;height:300px;margin:0}.cropt-container .cr-slider-wrap{width:300px;margin:15px 0}.login-tab-container{min-width:300px}.login-tabs{display:flex;gap:10px;padding:20px 0;border-bottom:1px solid #222}.login-tab{flex:1;text-align:center;padding:10px 0;cursor:pointer;font-weight:700;transition:.3s}.login-tab.active{background:#4f46e5;border-radius:8px;color:#fff}.login-tab-content{display:none;padding:10px 0}.login-tab-content.active{display:block}.login-tab-title{text-align:center;margin:20px 0 10px;font-size:1.2em;font-weight:700}.login-social-content{display:flex;flex-direction:column;gap:10px}.btn-social{color:#000;padding:0 12px;height:40px;font-size:1.14286em;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:8px;background-color:#fff;text-transform:capitalize}.btn-social:hover{color:#000}.change-password-wrapper{display:flex;flex-direction:column}.change-password-wrapper .change-password-label{display:flex;justify-content:space-between;align-items:center}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var RC = Object.defineProperty;
var hb = (o) => {
  throw TypeError(o);
};
var wC = (o, r, s) => r in o ? RC(o, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[r] = s;
var Vr = (o, r, s) => wC(o, typeof r != "symbol" ? r + "" : r, s), Ov = (o, r, s) => r.has(o) || hb("Cannot " + s);
var Wt = (o, r, s) => (Ov(o, r, "read from private field"), s ? s.call(o) : r.get(o)), gs = (o, r, s) => r.has(o) ? hb("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(o) : r.set(o, s), ed = (o, r, s, l) => (Ov(o, r, "write to private field"), l ? l.call(o, s) : r.set(o, s), s), mt = (o, r, s) => (Ov(o, r, "access private method"), s);
function jC(o, r) {
  for (var s = 0; s < r.length; s++) {
    const l = r[s];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const d in l)
        if (d !== "default" && !(d in o)) {
          const f = Object.getOwnPropertyDescriptor(l, d);
          f && Object.defineProperty(o, d, f.get ? f : {
            enumerable: !0,
            get: () => l[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
function xd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var r3 = { exports: {} }, Uv = {}, i3 = { exports: {} }, md = { exports: {} };
md.exports;
(function(o, r) {
  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var s = "18.3.1", l = Symbol.for("react.element"), d = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), k = Symbol.iterator, z = "@@iterator";
    function _(S) {
      if (S === null || typeof S != "object")
        return null;
      var T = k && S[k] || S[z];
      return typeof T == "function" ? T : null;
    }
    var H = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, w = {
      transition: null
    }, A = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, Y = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, X = {}, ne = null;
    function fe(S) {
      ne = S;
    }
    X.setExtraStackFrame = function(S) {
      ne = S;
    }, X.getCurrentStack = null, X.getStackAddendum = function() {
      var S = "";
      ne && (S += ne);
      var T = X.getCurrentStack;
      return T && (S += T() || ""), S;
    };
    var le = !1, pe = !1, Xe = !1, ve = !1, Ee = !1, Re = {
      ReactCurrentDispatcher: H,
      ReactCurrentBatchConfig: w,
      ReactCurrentOwner: Y
    };
    Re.ReactDebugCurrentFrame = X, Re.ReactCurrentActQueue = A;
    function tt(S) {
      {
        for (var T = arguments.length, B = new Array(T > 1 ? T - 1 : 0), K = 1; K < T; K++)
          B[K - 1] = arguments[K];
        Je("warn", S, B);
      }
    }
    function we(S) {
      {
        for (var T = arguments.length, B = new Array(T > 1 ? T - 1 : 0), K = 1; K < T; K++)
          B[K - 1] = arguments[K];
        Je("error", S, B);
      }
    }
    function Je(S, T, B) {
      {
        var K = Re.ReactDebugCurrentFrame, ee = K.getStackAddendum();
        ee !== "" && (T += "%s", B = B.concat([ee]));
        var Se = B.map(function(me) {
          return String(me);
        });
        Se.unshift("Warning: " + T), Function.prototype.apply.call(console[S], console, Se);
      }
    }
    var kt = {};
    function Ge(S, T) {
      {
        var B = S.constructor, K = B && (B.displayName || B.name) || "ReactClass", ee = K + "." + T;
        if (kt[ee])
          return;
        we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, K), kt[ee] = !0;
      }
    }
    var pn = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function(S) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function(S, T, B) {
        Ge(S, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function(S, T, B, K) {
        Ge(S, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function(S, T, B, K) {
        Ge(S, "setState");
      }
    }, wt = Object.assign, hn = {};
    Object.freeze(hn);
    function Yn(S, T, B) {
      this.props = S, this.context = T, this.refs = hn, this.updater = B || pn;
    }
    Yn.prototype.isReactComponent = {}, Yn.prototype.setState = function(S, T) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, S, T, "setState");
    }, Yn.prototype.forceUpdate = function(S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    };
    {
      var Ia = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, Sa = function(S, T) {
        Object.defineProperty(Yn.prototype, S, {
          get: function() {
            tt("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
          }
        });
      };
      for (var Ca in Ia)
        Ia.hasOwnProperty(Ca) && Sa(Ca, Ia[Ca]);
    }
    function ua() {
    }
    ua.prototype = Yn.prototype;
    function tn(S, T, B) {
      this.props = S, this.context = T, this.refs = hn, this.updater = B || pn;
    }
    var Pn = tn.prototype = new ua();
    Pn.constructor = tn, wt(Pn, Yn.prototype), Pn.isPureReactComponent = !0;
    function Kn() {
      var S = {
        current: null
      };
      return Object.seal(S), S;
    }
    var Wn = Array.isArray;
    function Ot(S) {
      return Wn(S);
    }
    function vn(S) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, B = T && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return B;
      }
    }
    function Gt(S) {
      try {
        return At(S), !1;
      } catch {
        return !0;
      }
    }
    function At(S) {
      return "" + S;
    }
    function Mt(S) {
      if (Gt(S))
        return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(S)), At(S);
    }
    function Gn(S, T, B) {
      var K = S.displayName;
      if (K)
        return K;
      var ee = T.displayName || T.name || "";
      return ee !== "" ? B + "(" + ee + ")" : B;
    }
    function ca(S) {
      return S.displayName || "Context";
    }
    function An(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case f:
          return "Fragment";
        case d:
          return "Portal";
        case y:
          return "Profiler";
        case c:
          return "StrictMode";
        case L:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case p:
            var T = S;
            return ca(T) + ".Consumer";
          case h:
            var B = S;
            return ca(B._context) + ".Provider";
          case v:
            return Gn(S, S.render, "ForwardRef");
          case N:
            var K = S.displayName || null;
            return K !== null ? K : An(S.type) || "Memo";
          case j: {
            var ee = S, Se = ee._payload, me = ee._init;
            try {
              return An(me(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ea = Object.prototype.hasOwnProperty, fa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wn, da, gn;
    gn = {};
    function qn(S) {
      if (Ea.call(S, "ref")) {
        var T = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function jt(S) {
      if (Ea.call(S, "key")) {
        var T = Object.getOwnPropertyDescriptor(S, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function ma(S, T) {
      var B = function() {
        wn || (wn = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      B.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: B,
        configurable: !0
      });
    }
    function ur(S, T) {
      var B = function() {
        da || (da = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      B.isReactWarning = !0, Object.defineProperty(S, "ref", {
        get: B,
        configurable: !0
      });
    }
    function cr(S) {
      if (typeof S.ref == "string" && Y.current && S.__self && Y.current.stateNode !== S.__self) {
        var T = An(Y.current.type);
        gn[T] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, S.ref), gn[T] = !0);
      }
    }
    var ae = function(S, T, B, K, ee, Se, me) {
      var je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: S,
        key: T,
        ref: B,
        props: me,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return je._store = {}, Object.defineProperty(je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.defineProperty(je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function ge(S, T, B) {
      var K, ee = {}, Se = null, me = null, je = null, He = null;
      if (T != null) {
        qn(T) && (me = T.ref, cr(T)), jt(T) && (Mt(T.key), Se = "" + T.key), je = T.__self === void 0 ? null : T.__self, He = T.__source === void 0 ? null : T.__source;
        for (K in T)
          Ea.call(T, K) && !fa.hasOwnProperty(K) && (ee[K] = T[K]);
      }
      var it = arguments.length - 2;
      if (it === 1)
        ee.children = B;
      else if (it > 1) {
        for (var ct = Array(it), ft = 0; ft < it; ft++)
          ct[ft] = arguments[ft + 2];
        Object.freeze && Object.freeze(ct), ee.children = ct;
      }
      if (S && S.defaultProps) {
        var gt = S.defaultProps;
        for (K in gt)
          ee[K] === void 0 && (ee[K] = gt[K]);
      }
      if (Se || me) {
        var Et = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
        Se && ma(ee, Et), me && ur(ee, Et);
      }
      return ae(S, Se, me, je, He, Y.current, ee);
    }
    function Me(S, T) {
      var B = ae(S.type, T, S.ref, S._self, S._source, S._owner, S.props);
      return B;
    }
    function at(S, T, B) {
      if (S == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
      var K, ee = wt({}, S.props), Se = S.key, me = S.ref, je = S._self, He = S._source, it = S._owner;
      if (T != null) {
        qn(T) && (me = T.ref, it = Y.current), jt(T) && (Mt(T.key), Se = "" + T.key);
        var ct;
        S.type && S.type.defaultProps && (ct = S.type.defaultProps);
        for (K in T)
          Ea.call(T, K) && !fa.hasOwnProperty(K) && (T[K] === void 0 && ct !== void 0 ? ee[K] = ct[K] : ee[K] = T[K]);
      }
      var ft = arguments.length - 2;
      if (ft === 1)
        ee.children = B;
      else if (ft > 1) {
        for (var gt = Array(ft), Et = 0; Et < ft; Et++)
          gt[Et] = arguments[Et + 2];
        ee.children = gt;
      }
      return ae(S.type, Se, me, je, He, it, ee);
    }
    function rt(S) {
      return typeof S == "object" && S !== null && S.$$typeof === l;
    }
    var Vt = ".", Tt = ":";
    function Mn(S) {
      var T = /[=:]/g, B = {
        "=": "=0",
        ":": "=2"
      }, K = S.replace(T, function(ee) {
        return B[ee];
      });
      return "$" + K;
    }
    var ut = !1, Qn = /\/+/g;
    function ht(S) {
      return S.replace(Qn, "$&/");
    }
    function vt(S, T) {
      return typeof S == "object" && S !== null && S.key != null ? (Mt(S.key), Mn("" + S.key)) : T.toString(36);
    }
    function Ya(S, T, B, K, ee) {
      var Se = typeof S;
      (Se === "undefined" || Se === "boolean") && (S = null);
      var me = !1;
      if (S === null)
        me = !0;
      else
        switch (Se) {
          case "string":
          case "number":
            me = !0;
            break;
          case "object":
            switch (S.$$typeof) {
              case l:
              case d:
                me = !0;
            }
        }
      if (me) {
        var je = S, He = ee(je), it = K === "" ? Vt + vt(je, 0) : K;
        if (Ot(He)) {
          var ct = "";
          it != null && (ct = ht(it) + "/"), Ya(He, T, ct, "", function(kd) {
            return kd;
          });
        } else He != null && (rt(He) && (He.key && (!je || je.key !== He.key) && Mt(He.key), He = Me(
          He,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (He.key && (!je || je.key !== He.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            ht("" + He.key) + "/"
          ) : "") + it
        )), T.push(He));
        return 1;
      }
      var ft, gt, Et = 0, Ze = K === "" ? Vt : K + Tt;
      if (Ot(S))
        for (var Xr = 0; Xr < S.length; Xr++)
          ft = S[Xr], gt = Ze + vt(ft, Xr), Et += Ya(ft, T, B, gt, ee);
      else {
        var Co = _(S);
        if (typeof Co == "function") {
          var Hs = S;
          Co === Hs.entries && (ut || tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ut = !0);
          for (var Dd = Co.call(Hs), hr, Bs = 0; !(hr = Dd.next()).done; )
            ft = hr.value, gt = Ze + vt(ft, Bs++), Et += Ya(ft, T, B, gt, ee);
        } else if (Se === "object") {
          var Is = String(S);
          throw new Error("Objects are not valid as a React child (found: " + (Is === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Is) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return Et;
    }
    function Na(S, T, B) {
      if (S == null)
        return S;
      var K = [], ee = 0;
      return Ya(S, K, "", "", function(Se) {
        return T.call(B, Se, ee++);
      }), K;
    }
    function Ti(S) {
      var T = 0;
      return Na(S, function() {
        T++;
      }), T;
    }
    function vo(S, T, B) {
      Na(S, function() {
        T.apply(this, arguments);
      }, B);
    }
    function ws(S) {
      return Na(S, function(T) {
        return T;
      }) || [];
    }
    function Di(S) {
      if (!rt(S))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
    function ki(S) {
      var T = {
        $$typeof: p,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: S,
        _currentValue2: S,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      T.Provider = {
        $$typeof: h,
        _context: T
      };
      var B = !1, K = !1, ee = !1;
      {
        var Se = {
          $$typeof: p,
          _context: T
        };
        Object.defineProperties(Se, {
          Provider: {
            get: function() {
              return K || (K = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
            },
            set: function(me) {
              T.Provider = me;
            }
          },
          _currentValue: {
            get: function() {
              return T._currentValue;
            },
            set: function(me) {
              T._currentValue = me;
            }
          },
          _currentValue2: {
            get: function() {
              return T._currentValue2;
            },
            set: function(me) {
              T._currentValue2 = me;
            }
          },
          _threadCount: {
            get: function() {
              return T._threadCount;
            },
            set: function(me) {
              T._threadCount = me;
            }
          },
          Consumer: {
            get: function() {
              return B || (B = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
            }
          },
          displayName: {
            get: function() {
              return T.displayName;
            },
            set: function(me) {
              ee || (tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", me), ee = !0);
            }
          }
        }), T.Consumer = Se;
      }
      return T._currentRenderer = null, T._currentRenderer2 = null, T;
    }
    var fr = -1, Br = 0, dr = 1, Ka = 2;
    function Ra(S) {
      if (S._status === fr) {
        var T = S._result, B = T();
        if (B.then(function(Se) {
          if (S._status === Br || S._status === fr) {
            var me = S;
            me._status = dr, me._result = Se;
          }
        }, function(Se) {
          if (S._status === Br || S._status === fr) {
            var me = S;
            me._status = Ka, me._result = Se;
          }
        }), S._status === fr) {
          var K = S;
          K._status = Br, K._result = B;
        }
      }
      if (S._status === dr) {
        var ee = S._result;
        return ee === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
      } else
        throw S._result;
    }
    function D(S) {
      var T = {
        // We use these fields to store the result.
        _status: fr,
        _result: S
      }, B = {
        $$typeof: j,
        _payload: T,
        _init: Ra
      };
      {
        var K, ee;
        Object.defineProperties(B, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(Se) {
              we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Se, Object.defineProperty(B, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(Se) {
              we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = Se, Object.defineProperty(B, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return B;
    }
    function J(S) {
      S != null && S.$$typeof === N ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? we("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var T = {
        $$typeof: v,
        render: S
      };
      {
        var B;
        Object.defineProperty(T, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return B;
          },
          set: function(K) {
            B = K, !S.name && !S.displayName && (S.displayName = K);
          }
        });
      }
      return T;
    }
    var re;
    re = Symbol.for("react.module.reference");
    function be(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === f || S === y || Ee || S === c || S === L || S === x || ve || S === M || le || pe || Xe || typeof S == "object" && S !== null && (S.$$typeof === j || S.$$typeof === N || S.$$typeof === h || S.$$typeof === p || S.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === re || S.getModuleId !== void 0));
    }
    function $e(S, T) {
      be(S) || we("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
      var B = {
        $$typeof: N,
        type: S,
        compare: T === void 0 ? null : T
      };
      {
        var K;
        Object.defineProperty(B, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return K;
          },
          set: function(ee) {
            K = ee, !S.name && !S.displayName && (S.displayName = ee);
          }
        });
      }
      return B;
    }
    function Ne() {
      var S = H.current;
      return S === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
    }
    function Ae(S) {
      var T = Ne();
      if (S._context !== void 0) {
        var B = S._context;
        B.Consumer === S ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === S && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return T.useContext(S);
    }
    function _e(S) {
      var T = Ne();
      return T.useState(S);
    }
    function bt(S, T, B) {
      var K = Ne();
      return K.useReducer(S, T, B);
    }
    function Ve(S) {
      var T = Ne();
      return T.useRef(S);
    }
    function Lt(S, T) {
      var B = Ne();
      return B.useEffect(S, T);
    }
    function yn(S, T) {
      var B = Ne();
      return B.useInsertionEffect(S, T);
    }
    function wa(S, T) {
      var B = Ne();
      return B.useLayoutEffect(S, T);
    }
    function ja(S, T) {
      var B = Ne();
      return B.useCallback(S, T);
    }
    function qt(S, T) {
      var B = Ne();
      return B.useMemo(S, T);
    }
    function Oi(S, T, B) {
      var K = Ne();
      return K.useImperativeHandle(S, T, B);
    }
    function go(S, T) {
      {
        var B = Ne();
        return B.useDebugValue(S, T);
      }
    }
    function js() {
      var S = Ne();
      return S.useTransition();
    }
    function mr(S) {
      var T = Ne();
      return T.useDeferredValue(S);
    }
    function ze() {
      var S = Ne();
      return S.useId();
    }
    function Fi(S, T, B) {
      var K = Ne();
      return K.useSyncExternalStore(S, T, B);
    }
    var Ir = 0, Ts, Ds, ks, Os, Fs, _s, Ps;
    function zu() {
    }
    zu.__reactDisabledLog = !0;
    function wd() {
      {
        if (Ir === 0) {
          Ts = console.log, Ds = console.info, ks = console.warn, Os = console.error, Fs = console.group, _s = console.groupCollapsed, Ps = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: zu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        Ir++;
      }
    }
    function As() {
      {
        if (Ir--, Ir === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, S, {
              value: Ts
            }),
            info: wt({}, S, {
              value: Ds
            }),
            warn: wt({}, S, {
              value: ks
            }),
            error: wt({}, S, {
              value: Os
            }),
            group: wt({}, S, {
              value: Fs
            }),
            groupCollapsed: wt({}, S, {
              value: _s
            }),
            groupEnd: wt({}, S, {
              value: Ps
            })
          });
        }
        Ir < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _i = Re.ReactCurrentDispatcher, pa;
    function Yr(S, T, B) {
      {
        if (pa === void 0)
          try {
            throw Error();
          } catch (ee) {
            var K = ee.stack.trim().match(/\n( *(at )?)/);
            pa = K && K[1] || "";
          }
        return `
` + pa + S;
      }
    }
    var Kr = !1, yo;
    {
      var Ms = typeof WeakMap == "function" ? WeakMap : Map;
      yo = new Ms();
    }
    function $u(S, T) {
      if (!S || Kr)
        return "";
      {
        var B = yo.get(S);
        if (B !== void 0)
          return B;
      }
      var K;
      Kr = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = _i.current, _i.current = null, wd();
      try {
        if (T) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (Ze) {
              K = Ze;
            }
            Reflect.construct(S, [], me);
          } else {
            try {
              me.call();
            } catch (Ze) {
              K = Ze;
            }
            S.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            K = Ze;
          }
          S();
        }
      } catch (Ze) {
        if (Ze && K && typeof Ze.stack == "string") {
          for (var je = Ze.stack.split(`
`), He = K.stack.split(`
`), it = je.length - 1, ct = He.length - 1; it >= 1 && ct >= 0 && je[it] !== He[ct]; )
            ct--;
          for (; it >= 1 && ct >= 0; it--, ct--)
            if (je[it] !== He[ct]) {
              if (it !== 1 || ct !== 1)
                do
                  if (it--, ct--, ct < 0 || je[it] !== He[ct]) {
                    var ft = `
` + je[it].replace(" at new ", " at ");
                    return S.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", S.displayName)), typeof S == "function" && yo.set(S, ft), ft;
                  }
                while (it >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        Kr = !1, _i.current = Se, As(), Error.prepareStackTrace = ee;
      }
      var gt = S ? S.displayName || S.name : "", Et = gt ? Yr(gt) : "";
      return typeof S == "function" && yo.set(S, Et), Et;
    }
    function Vs(S, T, B) {
      return $u(S, !1);
    }
    function jd(S) {
      var T = S.prototype;
      return !!(T && T.isReactComponent);
    }
    function Wr(S, T, B) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return $u(S, jd(S));
      if (typeof S == "string")
        return Yr(S);
      switch (S) {
        case L:
          return Yr("Suspense");
        case x:
          return Yr("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case v:
            return Vs(S.render);
          case N:
            return Wr(S.type, T, B);
          case j: {
            var K = S, ee = K._payload, Se = K._init;
            try {
              return Wr(Se(ee), T, B);
            } catch {
            }
          }
        }
      return "";
    }
    var Hu = {}, Us = Re.ReactDebugCurrentFrame;
    function Lo(S) {
      if (S) {
        var T = S._owner, B = Wr(S.type, S._source, T ? T.type : null);
        Us.setExtraStackFrame(B);
      } else
        Us.setExtraStackFrame(null);
    }
    function Bu(S, T, B, K, ee) {
      {
        var Se = Function.call.bind(Ea);
        for (var me in S)
          if (Se(S, me)) {
            var je = void 0;
            try {
              if (typeof S[me] != "function") {
                var He = Error((K || "React class") + ": " + B + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              je = S[me](T, me, K, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              je = it;
            }
            je && !(je instanceof Error) && (Lo(ee), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", B, me, typeof je), Lo(null)), je instanceof Error && !(je.message in Hu) && (Hu[je.message] = !0, Lo(ee), we("Failed %s type: %s", B, je.message), Lo(null));
          }
      }
    }
    function We(S) {
      if (S) {
        var T = S._owner, B = Wr(S.type, S._source, T ? T.type : null);
        fe(B);
      } else
        fe(null);
    }
    var zs;
    zs = !1;
    function $s() {
      if (Y.current) {
        var S = An(Y.current.type);
        if (S)
          return `

Check the render method of \`` + S + "`.";
      }
      return "";
    }
    function Fe(S) {
      if (S !== void 0) {
        var T = S.fileName.replace(/^.*[\\\/]/, ""), B = S.lineNumber;
        return `

Check your code at ` + T + ":" + B + ".";
      }
      return "";
    }
    function Iu(S) {
      return S != null ? Fe(S.__source) : "";
    }
    var Ln = {};
    function Pi(S) {
      var T = $s();
      if (!T) {
        var B = typeof S == "string" ? S : S.displayName || S.name;
        B && (T = `

Check the top-level render call using <` + B + ">.");
      }
      return T;
    }
    function Gr(S, T) {
      if (!(!S._store || S._store.validated || S.key != null)) {
        S._store.validated = !0;
        var B = Pi(T);
        if (!Ln[B]) {
          Ln[B] = !0;
          var K = "";
          S && S._owner && S._owner !== Y.current && (K = " It was passed a child from " + An(S._owner.type) + "."), We(S), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, K), We(null);
        }
      }
    }
    function Yu(S, T) {
      if (typeof S == "object") {
        if (Ot(S))
          for (var B = 0; B < S.length; B++) {
            var K = S[B];
            rt(K) && Gr(K, T);
          }
        else if (rt(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var ee = _(S);
          if (typeof ee == "function" && ee !== S.entries)
            for (var Se = ee.call(S), me; !(me = Se.next()).done; )
              rt(me.value) && Gr(me.value, T);
        }
      }
    }
    function Qt(S) {
      {
        var T = S.type;
        if (T == null || typeof T == "string")
          return;
        var B;
        if (typeof T == "function")
          B = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === N))
          B = T.propTypes;
        else
          return;
        if (B) {
          var K = An(T);
          Bu(B, S.props, "prop", K, S);
        } else if (T.PropTypes !== void 0 && !zs) {
          zs = !0;
          var ee = An(T);
          we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xt(S) {
      {
        for (var T = Object.keys(S.props), B = 0; B < T.length; B++) {
          var K = T[B];
          if (K !== "children" && K !== "key") {
            We(S), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), We(null);
            break;
          }
        }
        S.ref !== null && (We(S), we("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    function Ku(S, T, B) {
      var K = be(S);
      if (!K) {
        var ee = "";
        (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Se = Iu(T);
        Se ? ee += Se : ee += $s();
        var me;
        S === null ? me = "null" : Ot(S) ? me = "array" : S !== void 0 && S.$$typeof === l ? (me = "<" + (An(S.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : me = typeof S, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, ee);
      }
      var je = ge.apply(this, arguments);
      if (je == null)
        return je;
      if (K)
        for (var He = 2; He < arguments.length; He++)
          Yu(arguments[He], S);
      return S === f ? xt(je) : Qt(je), je;
    }
    var Xn = !1;
    function Vn(S) {
      var T = Ku.bind(null, S);
      return T.type = S, Xn || (Xn = !0, tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
        enumerable: !1,
        get: function() {
          return tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: S
          }), S;
        }
      }), T;
    }
    function Wa(S, T, B) {
      for (var K = at.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
        Yu(arguments[ee], K.type);
      return Qt(K), K;
    }
    function Td(S, T) {
      var B = w.transition;
      w.transition = {};
      var K = w.transition;
      w.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        S();
      } finally {
        if (w.transition = B, B === null && K._updatedFibers) {
          var ee = K._updatedFibers.size;
          ee > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
        }
      }
    }
    var bo = !1, Ai = null;
    function Wu(S) {
      if (Ai === null)
        try {
          var T = ("require" + Math.random()).slice(0, 7), B = o && o[T];
          Ai = B.call(o, "timers").setImmediate;
        } catch {
          Ai = function(ee) {
            bo === !1 && (bo = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var Se = new MessageChannel();
            Se.port1.onmessage = ee, Se.port2.postMessage(void 0);
          };
        }
      return Ai(S);
    }
    var qr = 0, Gu = !1;
    function qu(S) {
      {
        var T = qr;
        qr++, A.current === null && (A.current = []);
        var B = A.isBatchingLegacy, K;
        try {
          if (A.isBatchingLegacy = !0, K = S(), !B && A.didScheduleLegacyUpdate) {
            var ee = A.current;
            ee !== null && (A.didScheduleLegacyUpdate = !1, So(ee));
          }
        } catch (gt) {
          throw pr(T), gt;
        } finally {
          A.isBatchingLegacy = B;
        }
        if (K !== null && typeof K == "object" && typeof K.then == "function") {
          var Se = K, me = !1, je = {
            then: function(gt, Et) {
              me = !0, Se.then(function(Ze) {
                pr(T), qr === 0 ? xo(Ze, gt, Et) : gt(Ze);
              }, function(Ze) {
                pr(T), Et(Ze);
              });
            }
          };
          return !Gu && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            me || (Gu = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), je;
        } else {
          var He = K;
          if (pr(T), qr === 0) {
            var it = A.current;
            it !== null && (So(it), A.current = null);
            var ct = {
              then: function(gt, Et) {
                A.current === null ? (A.current = [], xo(He, gt, Et)) : gt(He);
              }
            };
            return ct;
          } else {
            var ft = {
              then: function(gt, Et) {
                gt(He);
              }
            };
            return ft;
          }
        }
      }
    }
    function pr(S) {
      S !== qr - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), qr = S;
    }
    function xo(S, T, B) {
      {
        var K = A.current;
        if (K !== null)
          try {
            So(K), Wu(function() {
              K.length === 0 ? (A.current = null, T(S)) : xo(S, T, B);
            });
          } catch (ee) {
            B(ee);
          }
        else
          T(S);
      }
    }
    var Qr = !1;
    function So(S) {
      if (!Qr) {
        Qr = !0;
        var T = 0;
        try {
          for (; T < S.length; T++) {
            var B = S[T];
            do
              B = B(!0);
            while (B !== null);
          }
          S.length = 0;
        } catch (K) {
          throw S = S.slice(T + 1), K;
        } finally {
          Qr = !1;
        }
      }
    }
    var Qu = Ku, Xu = Wa, Ju = Vn, Zu = {
      map: Na,
      forEach: vo,
      count: Ti,
      toArray: ws,
      only: Di
    };
    r.Children = Zu, r.Component = Yn, r.Fragment = f, r.Profiler = y, r.PureComponent = tn, r.StrictMode = c, r.Suspense = L, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, r.act = qu, r.cloneElement = Xu, r.createContext = ki, r.createElement = Qu, r.createFactory = Ju, r.createRef = Kn, r.forwardRef = J, r.isValidElement = rt, r.lazy = D, r.memo = $e, r.startTransition = Td, r.unstable_act = qu, r.useCallback = ja, r.useContext = Ae, r.useDebugValue = go, r.useDeferredValue = mr, r.useEffect = Lt, r.useId = ze, r.useImperativeHandle = Oi, r.useInsertionEffect = yn, r.useLayoutEffect = wa, r.useMemo = qt, r.useReducer = bt, r.useRef = Ve, r.useState = _e, r.useSyncExternalStore = Fi, r.useTransition = js, r.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(md, md.exports);
var TC = md.exports;
i3.exports = TC;
var P = i3.exports;
const Sd = /* @__PURE__ */ xd(P), zv = /* @__PURE__ */ jC({
  __proto__: null,
  default: Sd
}, [P]);
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var o = P, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), j = Symbol.iterator, M = "@@iterator";
  function k(D) {
    if (D === null || typeof D != "object")
      return null;
    var J = j && D[j] || D[M];
    return typeof J == "function" ? J : null;
  }
  var z = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(D) {
    {
      for (var J = arguments.length, re = new Array(J > 1 ? J - 1 : 0), be = 1; be < J; be++)
        re[be - 1] = arguments[be];
      H("error", D, re);
    }
  }
  function H(D, J, re) {
    {
      var be = z.ReactDebugCurrentFrame, $e = be.getStackAddendum();
      $e !== "" && (J += "%s", re = re.concat([$e]));
      var Ne = re.map(function(Ae) {
        return String(Ae);
      });
      Ne.unshift("Warning: " + J), Function.prototype.apply.call(console[D], console, Ne);
    }
  }
  var w = !1, A = !1, Y = !1, X = !1, ne = !1, fe;
  fe = Symbol.for("react.module.reference");
  function le(D) {
    return !!(typeof D == "string" || typeof D == "function" || D === l || D === f || ne || D === d || D === p || D === v || X || D === N || w || A || Y || typeof D == "object" && D !== null && (D.$$typeof === x || D.$$typeof === L || D.$$typeof === c || D.$$typeof === y || D.$$typeof === h || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    D.$$typeof === fe || D.getModuleId !== void 0));
  }
  function pe(D, J, re) {
    var be = D.displayName;
    if (be)
      return be;
    var $e = J.displayName || J.name || "";
    return $e !== "" ? re + "(" + $e + ")" : re;
  }
  function Xe(D) {
    return D.displayName || "Context";
  }
  function ve(D) {
    if (D == null)
      return null;
    if (typeof D.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
      return D.displayName || D.name || null;
    if (typeof D == "string")
      return D;
    switch (D) {
      case l:
        return "Fragment";
      case s:
        return "Portal";
      case f:
        return "Profiler";
      case d:
        return "StrictMode";
      case p:
        return "Suspense";
      case v:
        return "SuspenseList";
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case y:
          var J = D;
          return Xe(J) + ".Consumer";
        case c:
          var re = D;
          return Xe(re._context) + ".Provider";
        case h:
          return pe(D, D.render, "ForwardRef");
        case L:
          var be = D.displayName || null;
          return be !== null ? be : ve(D.type) || "Memo";
        case x: {
          var $e = D, Ne = $e._payload, Ae = $e._init;
          try {
            return ve(Ae(Ne));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Ee = Object.assign, Re = 0, tt, we, Je, kt, Ge, pn, wt;
  function hn() {
  }
  hn.__reactDisabledLog = !0;
  function Yn() {
    {
      if (Re === 0) {
        tt = console.log, we = console.info, Je = console.warn, kt = console.error, Ge = console.group, pn = console.groupCollapsed, wt = console.groupEnd;
        var D = {
          configurable: !0,
          enumerable: !0,
          value: hn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: D,
          log: D,
          warn: D,
          error: D,
          group: D,
          groupCollapsed: D,
          groupEnd: D
        });
      }
      Re++;
    }
  }
  function Ia() {
    {
      if (Re--, Re === 0) {
        var D = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Ee({}, D, {
            value: tt
          }),
          info: Ee({}, D, {
            value: we
          }),
          warn: Ee({}, D, {
            value: Je
          }),
          error: Ee({}, D, {
            value: kt
          }),
          group: Ee({}, D, {
            value: Ge
          }),
          groupCollapsed: Ee({}, D, {
            value: pn
          }),
          groupEnd: Ee({}, D, {
            value: wt
          })
        });
      }
      Re < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Sa = z.ReactCurrentDispatcher, Ca;
  function ua(D, J, re) {
    {
      if (Ca === void 0)
        try {
          throw Error();
        } catch ($e) {
          var be = $e.stack.trim().match(/\n( *(at )?)/);
          Ca = be && be[1] || "";
        }
      return `
` + Ca + D;
    }
  }
  var tn = !1, Pn;
  {
    var Kn = typeof WeakMap == "function" ? WeakMap : Map;
    Pn = new Kn();
  }
  function Wn(D, J) {
    if (!D || tn)
      return "";
    {
      var re = Pn.get(D);
      if (re !== void 0)
        return re;
    }
    var be;
    tn = !0;
    var $e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Ne;
    Ne = Sa.current, Sa.current = null, Yn();
    try {
      if (J) {
        var Ae = function() {
          throw Error();
        };
        if (Object.defineProperty(Ae.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(Ae, []);
          } catch (qt) {
            be = qt;
          }
          Reflect.construct(D, [], Ae);
        } else {
          try {
            Ae.call();
          } catch (qt) {
            be = qt;
          }
          D.call(Ae.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (qt) {
          be = qt;
        }
        D();
      }
    } catch (qt) {
      if (qt && be && typeof qt.stack == "string") {
        for (var _e = qt.stack.split(`
`), bt = be.stack.split(`
`), Ve = _e.length - 1, Lt = bt.length - 1; Ve >= 1 && Lt >= 0 && _e[Ve] !== bt[Lt]; )
          Lt--;
        for (; Ve >= 1 && Lt >= 0; Ve--, Lt--)
          if (_e[Ve] !== bt[Lt]) {
            if (Ve !== 1 || Lt !== 1)
              do
                if (Ve--, Lt--, Lt < 0 || _e[Ve] !== bt[Lt]) {
                  var yn = `
` + _e[Ve].replace(" at new ", " at ");
                  return D.displayName && yn.includes("<anonymous>") && (yn = yn.replace("<anonymous>", D.displayName)), typeof D == "function" && Pn.set(D, yn), yn;
                }
              while (Ve >= 1 && Lt >= 0);
            break;
          }
      }
    } finally {
      tn = !1, Sa.current = Ne, Ia(), Error.prepareStackTrace = $e;
    }
    var wa = D ? D.displayName || D.name : "", ja = wa ? ua(wa) : "";
    return typeof D == "function" && Pn.set(D, ja), ja;
  }
  function Ot(D, J, re) {
    return Wn(D, !1);
  }
  function vn(D) {
    var J = D.prototype;
    return !!(J && J.isReactComponent);
  }
  function Gt(D, J, re) {
    if (D == null)
      return "";
    if (typeof D == "function")
      return Wn(D, vn(D));
    if (typeof D == "string")
      return ua(D);
    switch (D) {
      case p:
        return ua("Suspense");
      case v:
        return ua("SuspenseList");
    }
    if (typeof D == "object")
      switch (D.$$typeof) {
        case h:
          return Ot(D.render);
        case L:
          return Gt(D.type, J, re);
        case x: {
          var be = D, $e = be._payload, Ne = be._init;
          try {
            return Gt(Ne($e), J, re);
          } catch {
          }
        }
      }
    return "";
  }
  var At = Object.prototype.hasOwnProperty, Mt = {}, Gn = z.ReactDebugCurrentFrame;
  function ca(D) {
    if (D) {
      var J = D._owner, re = Gt(D.type, D._source, J ? J.type : null);
      Gn.setExtraStackFrame(re);
    } else
      Gn.setExtraStackFrame(null);
  }
  function An(D, J, re, be, $e) {
    {
      var Ne = Function.call.bind(At);
      for (var Ae in D)
        if (Ne(D, Ae)) {
          var _e = void 0;
          try {
            if (typeof D[Ae] != "function") {
              var bt = Error((be || "React class") + ": " + re + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw bt.name = "Invariant Violation", bt;
            }
            _e = D[Ae](J, Ae, be, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (Ve) {
            _e = Ve;
          }
          _e && !(_e instanceof Error) && (ca($e), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", re, Ae, typeof _e), ca(null)), _e instanceof Error && !(_e.message in Mt) && (Mt[_e.message] = !0, ca($e), _("Failed %s type: %s", re, _e.message), ca(null));
        }
    }
  }
  var Ea = Array.isArray;
  function fa(D) {
    return Ea(D);
  }
  function wn(D) {
    {
      var J = typeof Symbol == "function" && Symbol.toStringTag, re = J && D[Symbol.toStringTag] || D.constructor.name || "Object";
      return re;
    }
  }
  function da(D) {
    try {
      return gn(D), !1;
    } catch {
      return !0;
    }
  }
  function gn(D) {
    return "" + D;
  }
  function qn(D) {
    if (da(D))
      return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(D)), gn(D);
  }
  var jt = z.ReactCurrentOwner, ma = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, ur, cr, ae;
  ae = {};
  function ge(D) {
    if (At.call(D, "ref")) {
      var J = Object.getOwnPropertyDescriptor(D, "ref").get;
      if (J && J.isReactWarning)
        return !1;
    }
    return D.ref !== void 0;
  }
  function Me(D) {
    if (At.call(D, "key")) {
      var J = Object.getOwnPropertyDescriptor(D, "key").get;
      if (J && J.isReactWarning)
        return !1;
    }
    return D.key !== void 0;
  }
  function at(D, J) {
    if (typeof D.ref == "string" && jt.current && J && jt.current.stateNode !== J) {
      var re = ve(jt.current.type);
      ae[re] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ve(jt.current.type), D.ref), ae[re] = !0);
    }
  }
  function rt(D, J) {
    {
      var re = function() {
        ur || (ur = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
      };
      re.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: re,
        configurable: !0
      });
    }
  }
  function Vt(D, J) {
    {
      var re = function() {
        cr || (cr = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
      };
      re.isReactWarning = !0, Object.defineProperty(D, "ref", {
        get: re,
        configurable: !0
      });
    }
  }
  var Tt = function(D, J, re, be, $e, Ne, Ae) {
    var _e = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: r,
      // Built-in properties that belong on the element
      type: D,
      key: J,
      ref: re,
      props: Ae,
      // Record the component responsible for creating this element.
      _owner: Ne
    };
    return _e._store = {}, Object.defineProperty(_e._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(_e, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: be
    }), Object.defineProperty(_e, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: $e
    }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
  };
  function Mn(D, J, re, be, $e) {
    {
      var Ne, Ae = {}, _e = null, bt = null;
      re !== void 0 && (qn(re), _e = "" + re), Me(J) && (qn(J.key), _e = "" + J.key), ge(J) && (bt = J.ref, at(J, $e));
      for (Ne in J)
        At.call(J, Ne) && !ma.hasOwnProperty(Ne) && (Ae[Ne] = J[Ne]);
      if (D && D.defaultProps) {
        var Ve = D.defaultProps;
        for (Ne in Ve)
          Ae[Ne] === void 0 && (Ae[Ne] = Ve[Ne]);
      }
      if (_e || bt) {
        var Lt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
        _e && rt(Ae, Lt), bt && Vt(Ae, Lt);
      }
      return Tt(D, _e, bt, $e, be, jt.current, Ae);
    }
  }
  var ut = z.ReactCurrentOwner, Qn = z.ReactDebugCurrentFrame;
  function ht(D) {
    if (D) {
      var J = D._owner, re = Gt(D.type, D._source, J ? J.type : null);
      Qn.setExtraStackFrame(re);
    } else
      Qn.setExtraStackFrame(null);
  }
  var vt;
  vt = !1;
  function Ya(D) {
    return typeof D == "object" && D !== null && D.$$typeof === r;
  }
  function Na() {
    {
      if (ut.current) {
        var D = ve(ut.current.type);
        if (D)
          return `

Check the render method of \`` + D + "`.";
      }
      return "";
    }
  }
  function Ti(D) {
    {
      if (D !== void 0) {
        var J = D.fileName.replace(/^.*[\\\/]/, ""), re = D.lineNumber;
        return `

Check your code at ` + J + ":" + re + ".";
      }
      return "";
    }
  }
  var vo = {};
  function ws(D) {
    {
      var J = Na();
      if (!J) {
        var re = typeof D == "string" ? D : D.displayName || D.name;
        re && (J = `

Check the top-level render call using <` + re + ">.");
      }
      return J;
    }
  }
  function Di(D, J) {
    {
      if (!D._store || D._store.validated || D.key != null)
        return;
      D._store.validated = !0;
      var re = ws(J);
      if (vo[re])
        return;
      vo[re] = !0;
      var be = "";
      D && D._owner && D._owner !== ut.current && (be = " It was passed a child from " + ve(D._owner.type) + "."), ht(D), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, be), ht(null);
    }
  }
  function ki(D, J) {
    {
      if (typeof D != "object")
        return;
      if (fa(D))
        for (var re = 0; re < D.length; re++) {
          var be = D[re];
          Ya(be) && Di(be, J);
        }
      else if (Ya(D))
        D._store && (D._store.validated = !0);
      else if (D) {
        var $e = k(D);
        if (typeof $e == "function" && $e !== D.entries)
          for (var Ne = $e.call(D), Ae; !(Ae = Ne.next()).done; )
            Ya(Ae.value) && Di(Ae.value, J);
      }
    }
  }
  function fr(D) {
    {
      var J = D.type;
      if (J == null || typeof J == "string")
        return;
      var re;
      if (typeof J == "function")
        re = J.propTypes;
      else if (typeof J == "object" && (J.$$typeof === h || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      J.$$typeof === L))
        re = J.propTypes;
      else
        return;
      if (re) {
        var be = ve(J);
        An(re, D.props, "prop", be, D);
      } else if (J.PropTypes !== void 0 && !vt) {
        vt = !0;
        var $e = ve(J);
        _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
      }
      typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Br(D) {
    {
      for (var J = Object.keys(D.props), re = 0; re < J.length; re++) {
        var be = J[re];
        if (be !== "children" && be !== "key") {
          ht(D), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), ht(null);
          break;
        }
      }
      D.ref !== null && (ht(D), _("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
    }
  }
  var dr = {};
  function Ka(D, J, re, be, $e, Ne) {
    {
      var Ae = le(D);
      if (!Ae) {
        var _e = "";
        (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var bt = Ti($e);
        bt ? _e += bt : _e += Na();
        var Ve;
        D === null ? Ve = "null" : fa(D) ? Ve = "array" : D !== void 0 && D.$$typeof === r ? (Ve = "<" + (ve(D.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof D, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, _e);
      }
      var Lt = Mn(D, J, re, $e, Ne);
      if (Lt == null)
        return Lt;
      if (Ae) {
        var yn = J.children;
        if (yn !== void 0)
          if (be)
            if (fa(yn)) {
              for (var wa = 0; wa < yn.length; wa++)
                ki(yn[wa], D);
              Object.freeze && Object.freeze(yn);
            } else
              _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            ki(yn, D);
      }
      if (At.call(J, "key")) {
        var ja = ve(D), qt = Object.keys(J).filter(function(js) {
          return js !== "key";
        }), Oi = qt.length > 0 ? "{key: someKey, " + qt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!dr[ja + Oi]) {
          var go = qt.length > 0 ? "{" + qt.join(": ..., ") + ": ...}" : "{}";
          _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Oi, ja, go, ja), dr[ja + Oi] = !0;
        }
      }
      return D === l ? Br(Lt) : fr(Lt), Lt;
    }
  }
  var Ra = Ka;
  Uv.Fragment = l, Uv.jsxDEV = Ra;
})();
r3.exports = Uv;
var C = r3.exports, o3 = { exports: {} }, oa = {}, s3 = { exports: {} }, l3 = {};
(function(o) {
  /**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = !1, s = !1, l = 5;
    function d(ae, ge) {
      var Me = ae.length;
      ae.push(ge), y(ae, ge, Me);
    }
    function f(ae) {
      return ae.length === 0 ? null : ae[0];
    }
    function c(ae) {
      if (ae.length === 0)
        return null;
      var ge = ae[0], Me = ae.pop();
      return Me !== ge && (ae[0] = Me, h(ae, Me, 0)), ge;
    }
    function y(ae, ge, Me) {
      for (var at = Me; at > 0; ) {
        var rt = at - 1 >>> 1, Vt = ae[rt];
        if (p(Vt, ge) > 0)
          ae[rt] = ge, ae[at] = Vt, at = rt;
        else
          return;
      }
    }
    function h(ae, ge, Me) {
      for (var at = Me, rt = ae.length, Vt = rt >>> 1; at < Vt; ) {
        var Tt = (at + 1) * 2 - 1, Mn = ae[Tt], ut = Tt + 1, Qn = ae[ut];
        if (p(Mn, ge) < 0)
          ut < rt && p(Qn, Mn) < 0 ? (ae[at] = Qn, ae[ut] = ge, at = ut) : (ae[at] = Mn, ae[Tt] = ge, at = Tt);
        else if (ut < rt && p(Qn, ge) < 0)
          ae[at] = Qn, ae[ut] = ge, at = ut;
        else
          return;
      }
    }
    function p(ae, ge) {
      var Me = ae.sortIndex - ge.sortIndex;
      return Me !== 0 ? Me : ae.id - ge.id;
    }
    var v = 1, L = 2, x = 3, N = 4, j = 5;
    function M(ae, ge) {
    }
    var k = typeof performance == "object" && typeof performance.now == "function";
    if (k) {
      var z = performance;
      o.unstable_now = function() {
        return z.now();
      };
    } else {
      var _ = Date, H = _.now();
      o.unstable_now = function() {
        return _.now() - H;
      };
    }
    var w = 1073741823, A = -1, Y = 250, X = 5e3, ne = 1e4, fe = w, le = [], pe = [], Xe = 1, ve = null, Ee = x, Re = !1, tt = !1, we = !1, Je = typeof setTimeout == "function" ? setTimeout : null, kt = typeof clearTimeout == "function" ? clearTimeout : null, Ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pn(ae) {
      for (var ge = f(pe); ge !== null; ) {
        if (ge.callback === null)
          c(pe);
        else if (ge.startTime <= ae)
          c(pe), ge.sortIndex = ge.expirationTime, d(le, ge);
        else
          return;
        ge = f(pe);
      }
    }
    function wt(ae) {
      if (we = !1, pn(ae), !tt)
        if (f(le) !== null)
          tt = !0, qn(hn);
        else {
          var ge = f(pe);
          ge !== null && jt(wt, ge.startTime - ae);
        }
    }
    function hn(ae, ge) {
      tt = !1, we && (we = !1, ma()), Re = !0;
      var Me = Ee;
      try {
        var at;
        if (!s) return Yn(ae, ge);
      } finally {
        ve = null, Ee = Me, Re = !1;
      }
    }
    function Yn(ae, ge) {
      var Me = ge;
      for (pn(Me), ve = f(le); ve !== null && !r && !(ve.expirationTime > Me && (!ae || ca())); ) {
        var at = ve.callback;
        if (typeof at == "function") {
          ve.callback = null, Ee = ve.priorityLevel;
          var rt = ve.expirationTime <= Me, Vt = at(rt);
          Me = o.unstable_now(), typeof Vt == "function" ? ve.callback = Vt : ve === f(le) && c(le), pn(Me);
        } else
          c(le);
        ve = f(le);
      }
      if (ve !== null)
        return !0;
      var Tt = f(pe);
      return Tt !== null && jt(wt, Tt.startTime - Me), !1;
    }
    function Ia(ae, ge) {
      switch (ae) {
        case v:
        case L:
        case x:
        case N:
        case j:
          break;
        default:
          ae = x;
      }
      var Me = Ee;
      Ee = ae;
      try {
        return ge();
      } finally {
        Ee = Me;
      }
    }
    function Sa(ae) {
      var ge;
      switch (Ee) {
        case v:
        case L:
        case x:
          ge = x;
          break;
        default:
          ge = Ee;
          break;
      }
      var Me = Ee;
      Ee = ge;
      try {
        return ae();
      } finally {
        Ee = Me;
      }
    }
    function Ca(ae) {
      var ge = Ee;
      return function() {
        var Me = Ee;
        Ee = ge;
        try {
          return ae.apply(this, arguments);
        } finally {
          Ee = Me;
        }
      };
    }
    function ua(ae, ge, Me) {
      var at = o.unstable_now(), rt;
      if (typeof Me == "object" && Me !== null) {
        var Vt = Me.delay;
        typeof Vt == "number" && Vt > 0 ? rt = at + Vt : rt = at;
      } else
        rt = at;
      var Tt;
      switch (ae) {
        case v:
          Tt = A;
          break;
        case L:
          Tt = Y;
          break;
        case j:
          Tt = fe;
          break;
        case N:
          Tt = ne;
          break;
        case x:
        default:
          Tt = X;
          break;
      }
      var Mn = rt + Tt, ut = {
        id: Xe++,
        callback: ge,
        priorityLevel: ae,
        startTime: rt,
        expirationTime: Mn,
        sortIndex: -1
      };
      return rt > at ? (ut.sortIndex = rt, d(pe, ut), f(le) === null && ut === f(pe) && (we ? ma() : we = !0, jt(wt, rt - at))) : (ut.sortIndex = Mn, d(le, ut), !tt && !Re && (tt = !0, qn(hn))), ut;
    }
    function tn() {
    }
    function Pn() {
      !tt && !Re && (tt = !0, qn(hn));
    }
    function Kn() {
      return f(le);
    }
    function Wn(ae) {
      ae.callback = null;
    }
    function Ot() {
      return Ee;
    }
    var vn = !1, Gt = null, At = -1, Mt = l, Gn = -1;
    function ca() {
      var ae = o.unstable_now() - Gn;
      return !(ae < Mt);
    }
    function An() {
    }
    function Ea(ae) {
      if (ae < 0 || ae > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      ae > 0 ? Mt = Math.floor(1e3 / ae) : Mt = l;
    }
    var fa = function() {
      if (Gt !== null) {
        var ae = o.unstable_now();
        Gn = ae;
        var ge = !0, Me = !0;
        try {
          Me = Gt(ge, ae);
        } finally {
          Me ? wn() : (vn = !1, Gt = null);
        }
      } else
        vn = !1;
    }, wn;
    if (typeof Ge == "function")
      wn = function() {
        Ge(fa);
      };
    else if (typeof MessageChannel < "u") {
      var da = new MessageChannel(), gn = da.port2;
      da.port1.onmessage = fa, wn = function() {
        gn.postMessage(null);
      };
    } else
      wn = function() {
        Je(fa, 0);
      };
    function qn(ae) {
      Gt = ae, vn || (vn = !0, wn());
    }
    function jt(ae, ge) {
      At = Je(function() {
        ae(o.unstable_now());
      }, ge);
    }
    function ma() {
      kt(At), At = -1;
    }
    var ur = An, cr = null;
    o.unstable_IdlePriority = j, o.unstable_ImmediatePriority = v, o.unstable_LowPriority = N, o.unstable_NormalPriority = x, o.unstable_Profiling = cr, o.unstable_UserBlockingPriority = L, o.unstable_cancelCallback = Wn, o.unstable_continueExecution = Pn, o.unstable_forceFrameRate = Ea, o.unstable_getCurrentPriorityLevel = Ot, o.unstable_getFirstCallbackNode = Kn, o.unstable_next = Sa, o.unstable_pauseExecution = tn, o.unstable_requestPaint = ur, o.unstable_runWithPriority = Ia, o.unstable_scheduleCallback = ua, o.unstable_shouldYield = ca, o.unstable_wrapCallback = Ca, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(l3);
s3.exports = l3;
var DC = s3.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var o = P, r = DC, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, l = !1;
  function d(e) {
    l = e;
  }
  function f(e) {
    if (!l) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      y("warn", e, n);
    }
  }
  function c(e) {
    if (!l) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      y("error", e, n);
    }
  }
  function y(e, t, n) {
    {
      var a = s.ReactDebugCurrentFrame, i = a.getStackAddendum();
      i !== "" && (t += "%s", n = n.concat([i]));
      var u = n.map(function(m) {
        return String(m);
      });
      u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
    }
  }
  var h = 0, p = 1, v = 2, L = 3, x = 4, N = 5, j = 6, M = 7, k = 8, z = 9, _ = 10, H = 11, w = 12, A = 13, Y = 14, X = 15, ne = 16, fe = 17, le = 18, pe = 19, Xe = 21, ve = 22, Ee = 23, Re = 24, tt = 25, we = !0, Je = !1, kt = !1, Ge = !1, pn = !1, wt = !0, hn = !1, Yn = !0, Ia = !0, Sa = !0, Ca = !0, ua = /* @__PURE__ */ new Set(), tn = {}, Pn = {};
  function Kn(e, t) {
    Wn(e, t), Wn(e + "Capture", t);
  }
  function Wn(e, t) {
    tn[e] && c("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tn[e] = t;
    {
      var n = e.toLowerCase();
      Pn[n] = e, e === "onDoubleClick" && (Pn.ondblclick = e);
    }
    for (var a = 0; a < t.length; a++)
      ua.add(t[a]);
  }
  var Ot = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vn = Object.prototype.hasOwnProperty;
  function Gt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function At(e) {
    try {
      return Mt(e), !1;
    } catch {
      return !0;
    }
  }
  function Mt(e) {
    return "" + e;
  }
  function Gn(e, t) {
    if (At(e))
      return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), Mt(e);
  }
  function ca(e) {
    if (At(e))
      return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gt(e)), Mt(e);
  }
  function An(e, t) {
    if (At(e))
      return c("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), Mt(e);
  }
  function Ea(e, t) {
    if (At(e))
      return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), Mt(e);
  }
  function fa(e) {
    if (At(e))
      return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Gt(e)), Mt(e);
  }
  function wn(e) {
    if (At(e))
      return c("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Gt(e)), Mt(e);
  }
  var da = 0, gn = 1, qn = 2, jt = 3, ma = 4, ur = 5, cr = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ge = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + ae + "][" + ge + "]*$"), at = {}, rt = {};
  function Vt(e) {
    return vn.call(rt, e) ? !0 : vn.call(at, e) ? !1 : Me.test(e) ? (rt[e] = !0, !0) : (at[e] = !0, c("Invalid attribute name: `%s`", e), !1);
  }
  function Tt(e, t, n) {
    return t !== null ? t.type === da : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Mn(e, t, n, a) {
    if (n !== null && n.type === da)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (a)
          return !1;
        if (n !== null)
          return !n.acceptsBooleans;
        var i = e.toLowerCase().slice(0, 5);
        return i !== "data-" && i !== "aria-";
      }
      default:
        return !1;
    }
  }
  function ut(e, t, n, a) {
    if (t === null || typeof t > "u" || Mn(e, t, n, a))
      return !0;
    if (a)
      return !1;
    if (n !== null)
      switch (n.type) {
        case jt:
          return !t;
        case ma:
          return t === !1;
        case ur:
          return isNaN(t);
        case cr:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function Qn(e) {
    return vt.hasOwnProperty(e) ? vt[e] : null;
  }
  function ht(e, t, n, a, i, u, m) {
    this.acceptsBooleans = t === qn || t === jt || t === ma, this.attributeName = a, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
  }
  var vt = {}, Ya = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  Ya.forEach(function(e) {
    vt[e] = new ht(
      e,
      da,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0], n = e[1];
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    vt[e] = new ht(
      e,
      qn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    vt[e] = new ht(
      e,
      qn,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      jt,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      jt,
      !0,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      ma,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    vt[e] = new ht(
      e,
      cr,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(e) {
    vt[e] = new ht(
      e,
      ur,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Na = /[\-\:]([a-z])/g, Ti = function(e) {
    return e[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Na, Ti);
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      e,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Na, Ti);
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(e) {
    var t = e.replace(Na, Ti);
    vt[t] = new ht(
      t,
      gn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    vt[e] = new ht(
      e,
      gn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var vo = "xlinkHref";
  vt[vo] = new ht(
    "xlinkHref",
    gn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    vt[e] = new ht(
      e,
      gn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var ws = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Di = !1;
  function ki(e) {
    !Di && ws.test(e) && (Di = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function fr(e, t, n, a) {
    if (a.mustUseProperty) {
      var i = a.propertyName;
      return e[i];
    } else {
      Gn(n, t), a.sanitizeURL && ki("" + n);
      var u = a.attributeName, m = null;
      if (a.type === ma) {
        if (e.hasAttribute(u)) {
          var g = e.getAttribute(u);
          return g === "" ? !0 : ut(t, n, a, !1) ? g : g === "" + n ? n : g;
        }
      } else if (e.hasAttribute(u)) {
        if (ut(t, n, a, !1))
          return e.getAttribute(u);
        if (a.type === jt)
          return n;
        m = e.getAttribute(u);
      }
      return ut(t, n, a, !1) ? m === null ? n : m : m === "" + n ? n : m;
    }
  }
  function Br(e, t, n, a) {
    {
      if (!Vt(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var i = e.getAttribute(t);
      return Gn(n, t), i === "" + n ? n : i;
    }
  }
  function dr(e, t, n, a) {
    var i = Qn(t);
    if (!Tt(t, i, a)) {
      if (ut(t, n, i, a) && (n = null), a || i === null) {
        if (Vt(t)) {
          var u = t;
          n === null ? e.removeAttribute(u) : (Gn(n, t), e.setAttribute(u, "" + n));
        }
        return;
      }
      var m = i.mustUseProperty;
      if (m) {
        var g = i.propertyName;
        if (n === null) {
          var b = i.type;
          e[g] = b === jt ? !1 : "";
        } else
          e[g] = n;
        return;
      }
      var E = i.attributeName, R = i.attributeNamespace;
      if (n === null)
        e.removeAttribute(E);
      else {
        var F = i.type, O;
        F === jt || F === ma && n === !0 ? O = "" : (Gn(n, E), O = "" + n, i.sanitizeURL && ki(O.toString())), R ? e.setAttributeNS(R, E, O) : e.setAttribute(E, O);
      }
    }
  }
  var Ka = Symbol.for("react.element"), Ra = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), $e = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Lt = Symbol.for("react.scope"), yn = Symbol.for("react.debug_trace_mode"), wa = Symbol.for("react.offscreen"), ja = Symbol.for("react.legacy_hidden"), qt = Symbol.for("react.cache"), Oi = Symbol.for("react.tracing_marker"), go = Symbol.iterator, js = "@@iterator";
  function mr(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = go && e[go] || e[js];
    return typeof t == "function" ? t : null;
  }
  var ze = Object.assign, Fi = 0, Ir, Ts, Ds, ks, Os, Fs, _s;
  function Ps() {
  }
  Ps.__reactDisabledLog = !0;
  function zu() {
    {
      if (Fi === 0) {
        Ir = console.log, Ts = console.info, Ds = console.warn, ks = console.error, Os = console.group, Fs = console.groupCollapsed, _s = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ps,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Fi++;
    }
  }
  function wd() {
    {
      if (Fi--, Fi === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: ze({}, e, {
            value: Ir
          }),
          info: ze({}, e, {
            value: Ts
          }),
          warn: ze({}, e, {
            value: Ds
          }),
          error: ze({}, e, {
            value: ks
          }),
          group: ze({}, e, {
            value: Os
          }),
          groupCollapsed: ze({}, e, {
            value: Fs
          }),
          groupEnd: ze({}, e, {
            value: _s
          })
        });
      }
      Fi < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var As = s.ReactCurrentDispatcher, _i;
  function pa(e, t, n) {
    {
      if (_i === void 0)
        try {
          throw Error();
        } catch (i) {
          var a = i.stack.trim().match(/\n( *(at )?)/);
          _i = a && a[1] || "";
        }
      return `
` + _i + e;
    }
  }
  var Yr = !1, Kr;
  {
    var yo = typeof WeakMap == "function" ? WeakMap : Map;
    Kr = new yo();
  }
  function Ms(e, t) {
    if (!e || Yr)
      return "";
    {
      var n = Kr.get(e);
      if (n !== void 0)
        return n;
    }
    var a;
    Yr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = As.current, As.current = null, zu();
    try {
      if (t) {
        var m = function() {
          throw Error();
        };
        if (Object.defineProperty(m.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(m, []);
          } catch (I) {
            a = I;
          }
          Reflect.construct(e, [], m);
        } else {
          try {
            m.call();
          } catch (I) {
            a = I;
          }
          e.call(m.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (I) {
          a = I;
        }
        e();
      }
    } catch (I) {
      if (I && a && typeof I.stack == "string") {
        for (var g = I.stack.split(`
`), b = a.stack.split(`
`), E = g.length - 1, R = b.length - 1; E >= 1 && R >= 0 && g[E] !== b[R]; )
          R--;
        for (; E >= 1 && R >= 0; E--, R--)
          if (g[E] !== b[R]) {
            if (E !== 1 || R !== 1)
              do
                if (E--, R--, R < 0 || g[E] !== b[R]) {
                  var F = `
` + g[E].replace(" at new ", " at ");
                  return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && Kr.set(e, F), F;
                }
              while (E >= 1 && R >= 0);
            break;
          }
      }
    } finally {
      Yr = !1, As.current = u, wd(), Error.prepareStackTrace = i;
    }
    var O = e ? e.displayName || e.name : "", $ = O ? pa(O) : "";
    return typeof e == "function" && Kr.set(e, $), $;
  }
  function $u(e, t, n) {
    return Ms(e, !0);
  }
  function Vs(e, t, n) {
    return Ms(e, !1);
  }
  function jd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Wr(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Ms(e, jd(e));
    if (typeof e == "string")
      return pa(e);
    switch (e) {
      case Ae:
        return pa("Suspense");
      case _e:
        return pa("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ne:
          return Vs(e.render);
        case bt:
          return Wr(e.type, t, n);
        case Ve: {
          var a = e, i = a._payload, u = a._init;
          try {
            return Wr(u(i), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function Hu(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case N:
        return pa(e.type);
      case ne:
        return pa("Lazy");
      case A:
        return pa("Suspense");
      case pe:
        return pa("SuspenseList");
      case h:
      case v:
      case X:
        return Vs(e.type);
      case H:
        return Vs(e.type.render);
      case p:
        return $u(e.type);
      default:
        return "";
    }
  }
  function Us(e) {
    try {
      var t = "", n = e;
      do
        t += Hu(n), n = n.return;
      while (n);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Lo(e, t, n) {
    var a = e.displayName;
    if (a)
      return a;
    var i = t.displayName || t.name || "";
    return i !== "" ? n + "(" + i + ")" : n;
  }
  function Bu(e) {
    return e.displayName || "Context";
  }
  function We(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case D:
        return "Fragment";
      case Ra:
        return "Portal";
      case re:
        return "Profiler";
      case J:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          var t = e;
          return Bu(t) + ".Consumer";
        case be:
          var n = e;
          return Bu(n._context) + ".Provider";
        case Ne:
          return Lo(e, e.render, "ForwardRef");
        case bt:
          var a = e.displayName || null;
          return a !== null ? a : We(e.type) || "Memo";
        case Ve: {
          var i = e, u = i._payload, m = i._init;
          try {
            return We(m(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function zs(e, t, n) {
    var a = t.displayName || t.name || "";
    return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
  }
  function $s(e) {
    return e.displayName || "Context";
  }
  function Fe(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case Re:
        return "Cache";
      case z:
        var a = n;
        return $s(a) + ".Consumer";
      case _:
        var i = n;
        return $s(i._context) + ".Provider";
      case le:
        return "DehydratedFragment";
      case H:
        return zs(n, n.render, "ForwardRef");
      case M:
        return "Fragment";
      case N:
        return n;
      case x:
        return "Portal";
      case L:
        return "Root";
      case j:
        return "Text";
      case ne:
        return We(n);
      case k:
        return n === J ? "StrictMode" : "Mode";
      case ve:
        return "Offscreen";
      case w:
        return "Profiler";
      case Xe:
        return "Scope";
      case A:
        return "Suspense";
      case pe:
        return "SuspenseList";
      case tt:
        return "TracingMarker";
      case p:
      case h:
      case fe:
      case v:
      case Y:
      case X:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var Iu = s.ReactDebugCurrentFrame, Ln = null, Pi = !1;
  function Gr() {
    {
      if (Ln === null)
        return null;
      var e = Ln._debugOwner;
      if (e !== null && typeof e < "u")
        return Fe(e);
    }
    return null;
  }
  function Yu() {
    return Ln === null ? "" : Us(Ln);
  }
  function Qt() {
    Iu.getCurrentStack = null, Ln = null, Pi = !1;
  }
  function xt(e) {
    Iu.getCurrentStack = e === null ? null : Yu, Ln = e, Pi = !1;
  }
  function Ku() {
    return Ln;
  }
  function Xn(e) {
    Pi = e;
  }
  function Vn(e) {
    return "" + e;
  }
  function Wa(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return wn(e), e;
      default:
        return "";
    }
  }
  var Td = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function bo(e, t) {
    Td[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Ai(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Wu(e) {
    return e._valueTracker;
  }
  function qr(e) {
    e._valueTracker = null;
  }
  function Gu(e) {
    var t = "";
    return e && (Ai(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function qu(e) {
    var t = Ai(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    wn(e[t]);
    var a = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var i = n.get, u = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(g) {
          wn(g), a = "" + g, u.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var m = {
        getValue: function() {
          return a;
        },
        setValue: function(g) {
          wn(g), a = "" + g;
        },
        stopTracking: function() {
          qr(e), delete e[t];
        }
      };
      return m;
    }
  }
  function pr(e) {
    Wu(e) || (e._valueTracker = qu(e));
  }
  function xo(e) {
    if (!e)
      return !1;
    var t = Wu(e);
    if (!t)
      return !0;
    var n = t.getValue(), a = Gu(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function Qr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var So = !1, Qu = !1, Xu = !1, Ju = !1;
  function Zu(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function S(e, t) {
    var n = e, a = t.checked, i = ze({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked
    });
    return i;
  }
  function T(e, t) {
    bo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Qu && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Gr() || "A component", t.type), Qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !So && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Gr() || "A component", t.type), So = !0);
    var n = e, a = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Wa(t.value != null ? t.value : a),
      controlled: Zu(t)
    };
  }
  function B(e, t) {
    var n = e, a = t.checked;
    a != null && dr(n, "checked", a, !1);
  }
  function K(e, t) {
    var n = e;
    {
      var a = Zu(t);
      !n._wrapperState.controlled && a && !Ju && (c("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ju = !0), n._wrapperState.controlled && !a && !Xu && (c("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xu = !0);
    }
    B(e, t);
    var i = Wa(t.value), u = t.type;
    if (i != null)
      u === "number" ? (i === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != i) && (n.value = Vn(i)) : n.value !== Vn(i) && (n.value = Vn(i));
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? je(n, t.type, i) : t.hasOwnProperty("defaultValue") && je(n, t.type, Wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function ee(e, t, n) {
    var a = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type, u = i === "submit" || i === "reset";
      if (u && (t.value === void 0 || t.value === null))
        return;
      var m = Vn(a._wrapperState.initialValue);
      n || m !== a.value && (a.value = m), a.defaultValue = m;
    }
    var g = a.name;
    g !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, g !== "" && (a.name = g);
  }
  function Se(e, t) {
    var n = e;
    K(n, t), me(n, t);
  }
  function me(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var a = e; a.parentNode; )
        a = a.parentNode;
      Gn(n, "name");
      for (var i = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), u = 0; u < i.length; u++) {
        var m = i[u];
        if (!(m === e || m.form !== e.form)) {
          var g = Uc(m);
          if (!g)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          xo(m), K(m, g);
        }
      }
    }
  }
  function je(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || Qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = Vn(e._wrapperState.initialValue) : e.defaultValue !== Vn(n) && (e.defaultValue = Vn(n)));
  }
  var He = !1, it = !1, ct = !1;
  function ft(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || it || (it = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (ct || (ct = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !He && (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), He = !0);
  }
  function gt(e, t) {
    t.value != null && e.setAttribute("value", Vn(Wa(t.value)));
  }
  var Et = Array.isArray;
  function Ze(e) {
    return Et(e);
  }
  var Xr;
  Xr = !1;
  function Co() {
    var e = Gr();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var Hs = ["value", "defaultValue"];
  function Dd(e) {
    {
      bo("select", e);
      for (var t = 0; t < Hs.length; t++) {
        var n = Hs[t];
        if (e[n] != null) {
          var a = Ze(e[n]);
          e.multiple && !a ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Co()) : !e.multiple && a && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Co());
        }
      }
    }
  }
  function hr(e, t, n, a) {
    var i = e.options;
    if (t) {
      for (var u = n, m = {}, g = 0; g < u.length; g++)
        m["$" + u[g]] = !0;
      for (var b = 0; b < i.length; b++) {
        var E = m.hasOwnProperty("$" + i[b].value);
        i[b].selected !== E && (i[b].selected = E), E && a && (i[b].defaultSelected = !0);
      }
    } else {
      for (var R = Vn(Wa(n)), F = null, O = 0; O < i.length; O++) {
        if (i[O].value === R) {
          i[O].selected = !0, a && (i[O].defaultSelected = !0);
          return;
        }
        F === null && !i[O].disabled && (F = i[O]);
      }
      F !== null && (F.selected = !0);
    }
  }
  function Bs(e, t) {
    return ze({}, t, {
      value: void 0
    });
  }
  function Is(e, t) {
    var n = e;
    Dd(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Xr && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Xr = !0);
  }
  function kd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null ? hr(n, !!t.multiple, a, !1) : t.defaultValue != null && hr(n, !!t.multiple, t.defaultValue, !0);
  }
  function c5(e, t) {
    var n = e, a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var i = t.value;
    i != null ? hr(n, !!t.multiple, i, !1) : a !== !!t.multiple && (t.defaultValue != null ? hr(n, !!t.multiple, t.defaultValue, !0) : hr(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function f5(e, t) {
    var n = e, a = t.value;
    a != null && hr(n, !!t.multiple, a, !1);
  }
  var lg = !1;
  function Od(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var a = ze({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: Vn(n._wrapperState.initialValue)
    });
    return a;
  }
  function ug(e, t) {
    var n = e;
    bo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !lg && (c("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Gr() || "A component"), lg = !0);
    var a = t.value;
    if (a == null) {
      var i = t.children, u = t.defaultValue;
      if (i != null) {
        c("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (u != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Ze(i)) {
            if (i.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          u = i;
        }
      }
      u == null && (u = ""), a = u;
    }
    n._wrapperState = {
      initialValue: Wa(a)
    };
  }
  function cg(e, t) {
    var n = e, a = Wa(t.value), i = Wa(t.defaultValue);
    if (a != null) {
      var u = Vn(a);
      u !== n.value && (n.value = u), t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u);
    }
    i != null && (n.defaultValue = Vn(i));
  }
  function fg(e, t) {
    var n = e, a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  function d5(e, t) {
    cg(e, t);
  }
  var vr = "http://www.w3.org/1999/xhtml", m5 = "http://www.w3.org/1998/Math/MathML", Fd = "http://www.w3.org/2000/svg";
  function _d(e) {
    switch (e) {
      case "svg":
        return Fd;
      case "math":
        return m5;
      default:
        return vr;
    }
  }
  function Pd(e, t) {
    return e == null || e === vr ? _d(t) : e === Fd && t === "foreignObject" ? vr : e;
  }
  var p5 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, a, i);
      });
    } : e;
  }, ec, dg = p5(function(e, t) {
    if (e.namespaceURI === Fd && !("innerHTML" in e)) {
      ec = ec || document.createElement("div"), ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = ec.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Un = 1, gr = 3, Ft = 8, yr = 9, Ad = 11, tc = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === gr) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, h5 = {
    animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
    background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
    backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
    border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
    borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
    borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
    borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
    borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
    borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
    borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
    borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
    borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
    borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
    borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
    borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
    columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
    columns: ["columnCount", "columnWidth"],
    flex: ["flexBasis", "flexGrow", "flexShrink"],
    flexFlow: ["flexDirection", "flexWrap"],
    font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
    fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
    gap: ["columnGap", "rowGap"],
    grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
    gridColumn: ["gridColumnEnd", "gridColumnStart"],
    gridColumnGap: ["columnGap"],
    gridGap: ["columnGap", "rowGap"],
    gridRow: ["gridRowEnd", "gridRowStart"],
    gridRowGap: ["rowGap"],
    gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    marker: ["markerEnd", "markerMid", "markerStart"],
    mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
    maskPosition: ["maskPositionX", "maskPositionY"],
    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
    overflow: ["overflowX", "overflowY"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    placeContent: ["alignContent", "justifyContent"],
    placeItems: ["alignItems", "justifyItems"],
    placeSelf: ["alignSelf", "justifySelf"],
    textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
    textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
    transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
    wordWrap: ["overflowWrap"]
  }, Ys = {
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
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function v5(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var g5 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ys).forEach(function(e) {
    g5.forEach(function(t) {
      Ys[v5(t, e)] = Ys[e];
    });
  });
  function Md(e, t, n) {
    var a = t == null || typeof t == "boolean" || t === "";
    return a ? "" : !n && typeof t == "number" && t !== 0 && !(Ys.hasOwnProperty(e) && Ys[e]) ? t + "px" : (Ea(t, e), ("" + t).trim());
  }
  var y5 = /([A-Z])/g, L5 = /^ms-/;
  function b5(e) {
    return e.replace(y5, "-$1").toLowerCase().replace(L5, "-ms-");
  }
  var mg = function() {
  };
  {
    var x5 = /^(?:webkit|moz|o)[A-Z]/, S5 = /^-ms-/, C5 = /-(.)/g, pg = /;\s*$/, Eo = {}, Vd = {}, hg = !1, vg = !1, E5 = function(e) {
      return e.replace(C5, function(t, n) {
        return n.toUpperCase();
      });
    }, N5 = function(e) {
      Eo.hasOwnProperty(e) && Eo[e] || (Eo[e] = !0, c(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        E5(e.replace(S5, "ms-"))
      ));
    }, R5 = function(e) {
      Eo.hasOwnProperty(e) && Eo[e] || (Eo[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, w5 = function(e, t) {
      Vd.hasOwnProperty(t) && Vd[t] || (Vd[t] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(pg, "")));
    }, j5 = function(e, t) {
      hg || (hg = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
    }, T5 = function(e, t) {
      vg || (vg = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    mg = function(e, t) {
      e.indexOf("-") > -1 ? N5(e) : x5.test(e) ? R5(e) : pg.test(t) && w5(e, t), typeof t == "number" && (isNaN(t) ? j5(e, t) : isFinite(t) || T5(e, t));
    };
  }
  var D5 = mg;
  function k5(e) {
    {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var i = e[a];
          if (i != null) {
            var u = a.indexOf("--") === 0;
            t += n + (u ? a : b5(a)) + ":", t += Md(a, i, u), n = ";";
          }
        }
      return t || null;
    }
  }
  function gg(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var i = a.indexOf("--") === 0;
        i || D5(a, t[a]);
        var u = Md(a, t[a], i);
        a === "float" && (a = "cssFloat"), i ? n.setProperty(a, u) : n[a] = u;
      }
  }
  function O5(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function yg(e) {
    var t = {};
    for (var n in e)
      for (var a = h5[n] || [n], i = 0; i < a.length; i++)
        t[a[i]] = n;
    return t;
  }
  function F5(e, t) {
    {
      if (!t)
        return;
      var n = yg(e), a = yg(t), i = {};
      for (var u in n) {
        var m = n[u], g = a[u];
        if (g && m !== g) {
          var b = m + "," + g;
          if (i[b])
            continue;
          i[b] = !0, c("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", O5(e[m]) ? "Removing" : "Updating", m, g);
        }
      }
    }
  }
  var _5 = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  }, P5 = ze({
    menuitem: !0
  }, _5), A5 = "__html";
  function Ud(e, t) {
    if (t) {
      if (P5[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(A5 in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function Mi(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
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
  var nc = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, Lg = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, No = {}, M5 = new RegExp("^(aria)-[" + ge + "]*$"), V5 = new RegExp("^(aria)[A-Z][" + ge + "]*$");
  function U5(e, t) {
    {
      if (vn.call(No, t) && No[t])
        return !0;
      if (V5.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), a = Lg.hasOwnProperty(n) ? n : null;
        if (a == null)
          return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), No[t] = !0, !0;
        if (t !== a)
          return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), No[t] = !0, !0;
      }
      if (M5.test(t)) {
        var i = t.toLowerCase(), u = Lg.hasOwnProperty(i) ? i : null;
        if (u == null)
          return No[t] = !0, !1;
        if (t !== u)
          return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, u), No[t] = !0, !0;
      }
    }
    return !0;
  }
  function z5(e, t) {
    {
      var n = [];
      for (var a in t) {
        var i = U5(e, a);
        i || n.push(a);
      }
      var u = n.map(function(m) {
        return "`" + m + "`";
      }).join(", ");
      n.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e) : n.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", u, e);
    }
  }
  function $5(e, t) {
    Mi(e, t) || z5(e, t);
  }
  var bg = !1;
  function H5(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !bg && (bg = !0, e === "select" && t.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var xg = function() {
  };
  {
    var jn = {}, Sg = /^on./, B5 = /^on[^A-Z]/, I5 = new RegExp("^(aria)-[" + ge + "]*$"), Y5 = new RegExp("^(aria)[A-Z][" + ge + "]*$");
    xg = function(e, t, n, a) {
      if (vn.call(jn, t) && jn[t])
        return !0;
      var i = t.toLowerCase();
      if (i === "onfocusin" || i === "onfocusout")
        return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jn[t] = !0, !0;
      if (a != null) {
        var u = a.registrationNameDependencies, m = a.possibleRegistrationNames;
        if (u.hasOwnProperty(t))
          return !0;
        var g = m.hasOwnProperty(i) ? m[i] : null;
        if (g != null)
          return c("Invalid event handler property `%s`. Did you mean `%s`?", t, g), jn[t] = !0, !0;
        if (Sg.test(t))
          return c("Unknown event handler property `%s`. It will be ignored.", t), jn[t] = !0, !0;
      } else if (Sg.test(t))
        return B5.test(t) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jn[t] = !0, !0;
      if (I5.test(t) || Y5.test(t))
        return !0;
      if (i === "innerhtml")
        return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jn[t] = !0, !0;
      if (i === "aria")
        return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jn[t] = !0, !0;
      if (i === "is" && n !== null && n !== void 0 && typeof n != "string")
        return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), jn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jn[t] = !0, !0;
      var b = Qn(t), E = b !== null && b.type === da;
      if (nc.hasOwnProperty(i)) {
        var R = nc[i];
        if (R !== t)
          return c("Invalid DOM property `%s`. Did you mean `%s`?", t, R), jn[t] = !0, !0;
      } else if (!E && t !== i)
        return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), jn[t] = !0, !0;
      return typeof n == "boolean" && Mn(t, n, b, !1) ? (n ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), jn[t] = !0, !0) : E ? !0 : Mn(t, n, b, !1) ? (jn[t] = !0, !1) : ((n === "false" || n === "true") && b !== null && b.type === jt && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), jn[t] = !0), !0);
    };
  }
  var K5 = function(e, t, n) {
    {
      var a = [];
      for (var i in t) {
        var u = xg(e, i, t[i], n);
        u || a.push(i);
      }
      var m = a.map(function(g) {
        return "`" + g + "`";
      }).join(", ");
      a.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : a.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
    }
  };
  function W5(e, t, n) {
    Mi(e, t) || K5(e, t, n);
  }
  var Cg = 1, zd = 2, Ks = 4, G5 = Cg | zd | Ks, Ws = null;
  function q5(e) {
    Ws !== null && c("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ws = e;
  }
  function Q5() {
    Ws === null && c("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ws = null;
  }
  function X5(e) {
    return e === Ws;
  }
  function $d(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === gr ? t.parentNode : t;
  }
  var Hd = null, Ro = null, wo = null;
  function Eg(e) {
    var t = ii(e);
    if (t) {
      if (typeof Hd != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var a = Uc(n);
        Hd(t.stateNode, t.type, a);
      }
    }
  }
  function J5(e) {
    Hd = e;
  }
  function Ng(e) {
    Ro ? wo ? wo.push(e) : wo = [e] : Ro = e;
  }
  function Z5() {
    return Ro !== null || wo !== null;
  }
  function Rg() {
    if (Ro) {
      var e = Ro, t = wo;
      if (Ro = null, wo = null, Eg(e), t)
        for (var n = 0; n < t.length; n++)
          Eg(t[n]);
    }
  }
  var wg = function(e, t) {
    return e(t);
  }, jg = function() {
  }, Bd = !1;
  function e4() {
    var e = Z5();
    e && (jg(), Rg());
  }
  function Tg(e, t, n) {
    if (Bd)
      return e(t, n);
    Bd = !0;
    try {
      return wg(e, t, n);
    } finally {
      Bd = !1, e4();
    }
  }
  function t4(e, t, n) {
    wg = e, jg = n;
  }
  function n4(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function a4(e, t, n) {
    switch (e) {
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
        return !!(n.disabled && n4(t));
      default:
        return !1;
    }
  }
  function Gs(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var a = Uc(n);
    if (a === null)
      return null;
    var i = a[t];
    if (a4(t, e.type, a))
      return null;
    if (i && typeof i != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
    return i;
  }
  var Id = !1;
  if (Ot)
    try {
      var qs = {};
      Object.defineProperty(qs, "passive", {
        get: function() {
          Id = !0;
        }
      }), window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
    } catch {
      Id = !1;
    }
  function Dg(e, t, n, a, i, u, m, g, b) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (R) {
      this.onError(R);
    }
  }
  var kg = Dg;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var Yd = document.createElement("react");
    kg = function(t, n, a, i, u, m, g, b, E) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var R = document.createEvent("Event"), F = !1, O = !0, $ = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
      function W() {
        Yd.removeEventListener(G, ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
      }
      var ie = Array.prototype.slice.call(arguments, 3);
      function ye() {
        F = !0, W(), n.apply(a, ie), O = !1;
      }
      var he, Ye = !1, Ue = !1;
      function V(U) {
        if (he = U.error, Ye = !0, he === null && U.colno === 0 && U.lineno === 0 && (Ue = !0), U.defaultPrevented && he != null && typeof he == "object")
          try {
            he._suppressLogging = !0;
          } catch {
          }
      }
      var G = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", V), Yd.addEventListener(G, ye, !1), R.initEvent(G, !1, !1), Yd.dispatchEvent(R), I && Object.defineProperty(window, "event", I), F && O && (Ye ? Ue && (he = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : he = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(he)), window.removeEventListener("error", V), !F)
        return W(), Dg.apply(this, arguments);
    };
  }
  var r4 = kg, jo = !1, ac = null, rc = !1, Kd = null, i4 = {
    onError: function(e) {
      jo = !0, ac = e;
    }
  };
  function Wd(e, t, n, a, i, u, m, g, b) {
    jo = !1, ac = null, r4.apply(i4, arguments);
  }
  function o4(e, t, n, a, i, u, m, g, b) {
    if (Wd.apply(this, arguments), jo) {
      var E = Gd();
      rc || (rc = !0, Kd = E);
    }
  }
  function s4() {
    if (rc) {
      var e = Kd;
      throw rc = !1, Kd = null, e;
    }
  }
  function l4() {
    return jo;
  }
  function Gd() {
    if (jo) {
      var e = ac;
      return jo = !1, ac = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function To(e) {
    return e._reactInternals;
  }
  function u4(e) {
    return e._reactInternals !== void 0;
  }
  function c4(e, t) {
    e._reactInternals = t;
  }
  var xe = (
    /*                      */
    0
  ), Do = (
    /*                */
    1
  ), _t = (
    /*                    */
    2
  ), Ke = (
    /*                       */
    4
  ), Vi = (
    /*                */
    16
  ), Qs = (
    /*                 */
    32
  ), qd = (
    /*                     */
    64
  ), et = (
    /*                   */
    128
  ), Lr = (
    /*            */
    256
  ), Jr = (
    /*                          */
    512
  ), Ui = (
    /*                     */
    1024
  ), Ta = (
    /*                      */
    2048
  ), br = (
    /*                    */
    4096
  ), zi = (
    /*                   */
    8192
  ), ic = (
    /*             */
    16384
  ), f4 = Ta | Ke | qd | Jr | Ui | ic, d4 = (
    /*               */
    32767
  ), Xs = (
    /*                   */
    32768
  ), Tn = (
    /*                */
    65536
  ), Qd = (
    /* */
    131072
  ), Og = (
    /*                       */
    1048576
  ), Xd = (
    /*                    */
    2097152
  ), $i = (
    /*                 */
    4194304
  ), Jd = (
    /*                */
    8388608
  ), xr = (
    /*               */
    16777216
  ), oc = (
    /*              */
    33554432
  ), Zd = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ke | Ui | 0
  ), em = _t | Ke | Vi | Qs | Jr | br | zi, Js = Ke | qd | Jr | zi, ko = Ta | Vi, Sr = $i | Jd | Xd, m4 = s.ReactCurrentOwner;
  function Hi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var a = t;
      do
        t = a, (t.flags & (_t | br)) !== xe && (n = t.return), a = t.return;
      while (a);
    }
    return t.tag === L ? n : null;
  }
  function Fg(e) {
    if (e.tag === A) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function _g(e) {
    return e.tag === L ? e.stateNode.containerInfo : null;
  }
  function p4(e) {
    return Hi(e) === e;
  }
  function h4(e) {
    {
      var t = m4.current;
      if (t !== null && t.tag === p) {
        var n = t, a = n.stateNode;
        a._warnedAboutRefsInRender || c("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Fe(n) || "A component"), a._warnedAboutRefsInRender = !0;
      }
    }
    var i = To(e);
    return i ? Hi(i) === i : !1;
  }
  function Pg(e) {
    if (Hi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function Ag(e) {
    var t = e.alternate;
    if (!t) {
      var n = Hi(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var a = e, i = t; ; ) {
      var u = a.return;
      if (u === null)
        break;
      var m = u.alternate;
      if (m === null) {
        var g = u.return;
        if (g !== null) {
          a = i = g;
          continue;
        }
        break;
      }
      if (u.child === m.child) {
        for (var b = u.child; b; ) {
          if (b === a)
            return Pg(u), e;
          if (b === i)
            return Pg(u), t;
          b = b.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.return !== i.return)
        a = u, i = m;
      else {
        for (var E = !1, R = u.child; R; ) {
          if (R === a) {
            E = !0, a = u, i = m;
            break;
          }
          if (R === i) {
            E = !0, i = u, a = m;
            break;
          }
          R = R.sibling;
        }
        if (!E) {
          for (R = m.child; R; ) {
            if (R === a) {
              E = !0, a = m, i = u;
              break;
            }
            if (R === i) {
              E = !0, i = m, a = u;
              break;
            }
            R = R.sibling;
          }
          if (!E)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (a.alternate !== i)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (a.tag !== L)
      throw new Error("Unable to find node on an unmounted component.");
    return a.stateNode.current === a ? e : t;
  }
  function Mg(e) {
    var t = Ag(e);
    return t !== null ? Vg(t) : null;
  }
  function Vg(e) {
    if (e.tag === N || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = Vg(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function v4(e) {
    var t = Ag(e);
    return t !== null ? Ug(t) : null;
  }
  function Ug(e) {
    if (e.tag === N || e.tag === j)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== x) {
        var n = Ug(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var zg = r.unstable_scheduleCallback, g4 = r.unstable_cancelCallback, y4 = r.unstable_shouldYield, L4 = r.unstable_requestPaint, Xt = r.unstable_now, b4 = r.unstable_getCurrentPriorityLevel, sc = r.unstable_ImmediatePriority, tm = r.unstable_UserBlockingPriority, Bi = r.unstable_NormalPriority, x4 = r.unstable_LowPriority, nm = r.unstable_IdlePriority, S4 = r.unstable_yieldValue, C4 = r.unstable_setDisableYieldValue, Oo = null, bn = null, se = null, Ga = !1, Da = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function E4(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return c("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Ia && (e = ze({}, e, {
        getLaneLabelMap: D4,
        injectProfilingHooks: T4
      })), Oo = t.inject(e), bn = t;
    } catch (n) {
      c("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function N4(e, t) {
    if (bn && typeof bn.onScheduleFiberRoot == "function")
      try {
        bn.onScheduleFiberRoot(Oo, e, t);
      } catch (n) {
        Ga || (Ga = !0, c("React instrumentation encountered an error: %s", n));
      }
  }
  function R4(e, t) {
    if (bn && typeof bn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & et) === et;
        if (Sa) {
          var a;
          switch (t) {
            case ea:
              a = sc;
              break;
            case Er:
              a = tm;
              break;
            case Nr:
              a = Bi;
              break;
            case pc:
              a = nm;
              break;
            default:
              a = Bi;
              break;
          }
          bn.onCommitFiberRoot(Oo, e, a, n);
        }
      } catch (i) {
        Ga || (Ga = !0, c("React instrumentation encountered an error: %s", i));
      }
  }
  function w4(e) {
    if (bn && typeof bn.onPostCommitFiberRoot == "function")
      try {
        bn.onPostCommitFiberRoot(Oo, e);
      } catch (t) {
        Ga || (Ga = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function j4(e) {
    if (bn && typeof bn.onCommitFiberUnmount == "function")
      try {
        bn.onCommitFiberUnmount(Oo, e);
      } catch (t) {
        Ga || (Ga = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function Jt(e) {
    if (typeof S4 == "function" && (C4(e), d(e)), bn && typeof bn.setStrictMode == "function")
      try {
        bn.setStrictMode(Oo, e);
      } catch (t) {
        Ga || (Ga = !0, c("React instrumentation encountered an error: %s", t));
      }
  }
  function T4(e) {
    se = e;
  }
  function D4() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < rm; n++) {
        var a = Q4(t);
        e.set(t, a), t *= 2;
      }
      return e;
    }
  }
  function k4(e) {
    se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
  }
  function $g() {
    se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
  }
  function Zs(e) {
    se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
  }
  function Fo() {
    se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
  }
  function O4(e) {
    se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
  }
  function F4() {
    se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
  }
  function _4(e) {
    se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
  }
  function P4() {
    se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
  }
  function A4(e) {
    se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
  }
  function M4() {
    se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
  }
  function Hg(e) {
    se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
  }
  function Bg() {
    se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
  }
  function V4(e, t, n) {
    se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, n);
  }
  function U4(e, t, n) {
    se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, n);
  }
  function z4(e) {
    se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
  }
  function $4() {
    se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
  }
  function H4(e) {
    se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
  }
  function B4() {
    se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
  }
  function Ig(e) {
    se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
  }
  function I4() {
    se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
  }
  function Yg() {
    se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
  }
  function Y4(e) {
    se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
  }
  function K4(e, t) {
    se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
  }
  function am(e, t) {
    se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
  }
  var Le = (
    /*                         */
    0
  ), Be = (
    /*                 */
    1
  ), ot = (
    /*                    */
    2
  ), Nt = (
    /*               */
    8
  ), qa = (
    /*              */
    16
  ), Kg = Math.clz32 ? Math.clz32 : q4, W4 = Math.log, G4 = Math.LN2;
  function q4(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (W4(t) / G4 | 0) | 0;
  }
  var rm = 31, Q = (
    /*                        */
    0
  ), Zt = (
    /*                          */
    0
  ), Te = (
    /*                        */
    1
  ), _o = (
    /*    */
    2
  ), Cr = (
    /*             */
    4
  ), Ii = (
    /*            */
    8
  ), Qa = (
    /*                     */
    16
  ), el = (
    /*                */
    32
  ), Po = (
    /*                       */
    4194240
  ), tl = (
    /*                        */
    64
  ), im = (
    /*                        */
    128
  ), om = (
    /*                        */
    256
  ), sm = (
    /*                        */
    512
  ), lm = (
    /*                        */
    1024
  ), um = (
    /*                        */
    2048
  ), cm = (
    /*                        */
    4096
  ), fm = (
    /*                        */
    8192
  ), dm = (
    /*                        */
    16384
  ), mm = (
    /*                       */
    32768
  ), pm = (
    /*                       */
    65536
  ), hm = (
    /*                       */
    131072
  ), vm = (
    /*                       */
    262144
  ), gm = (
    /*                       */
    524288
  ), ym = (
    /*                       */
    1048576
  ), Lm = (
    /*                       */
    2097152
  ), lc = (
    /*                            */
    130023424
  ), Ao = (
    /*                             */
    4194304
  ), bm = (
    /*                             */
    8388608
  ), xm = (
    /*                             */
    16777216
  ), Sm = (
    /*                             */
    33554432
  ), Cm = (
    /*                             */
    67108864
  ), Wg = Ao, nl = (
    /*          */
    134217728
  ), Gg = (
    /*                          */
    268435455
  ), al = (
    /*               */
    268435456
  ), Yi = (
    /*                        */
    536870912
  ), Jn = (
    /*                   */
    1073741824
  );
  function Q4(e) {
    {
      if (e & Te)
        return "Sync";
      if (e & _o)
        return "InputContinuousHydration";
      if (e & Cr)
        return "InputContinuous";
      if (e & Ii)
        return "DefaultHydration";
      if (e & Qa)
        return "Default";
      if (e & el)
        return "TransitionHydration";
      if (e & Po)
        return "Transition";
      if (e & lc)
        return "Retry";
      if (e & nl)
        return "SelectiveHydration";
      if (e & al)
        return "IdleHydration";
      if (e & Yi)
        return "Idle";
      if (e & Jn)
        return "Offscreen";
    }
  }
  var pt = -1, uc = tl, cc = Ao;
  function rl(e) {
    switch (Ki(e)) {
      case Te:
        return Te;
      case _o:
        return _o;
      case Cr:
        return Cr;
      case Ii:
        return Ii;
      case Qa:
        return Qa;
      case el:
        return el;
      case tl:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case cm:
      case fm:
      case dm:
      case mm:
      case pm:
      case hm:
      case vm:
      case gm:
      case ym:
      case Lm:
        return e & Po;
      case Ao:
      case bm:
      case xm:
      case Sm:
      case Cm:
        return e & lc;
      case nl:
        return nl;
      case al:
        return al;
      case Yi:
        return Yi;
      case Jn:
        return Jn;
      default:
        return c("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function fc(e, t) {
    var n = e.pendingLanes;
    if (n === Q)
      return Q;
    var a = Q, i = e.suspendedLanes, u = e.pingedLanes, m = n & Gg;
    if (m !== Q) {
      var g = m & ~i;
      if (g !== Q)
        a = rl(g);
      else {
        var b = m & u;
        b !== Q && (a = rl(b));
      }
    } else {
      var E = n & ~i;
      E !== Q ? a = rl(E) : u !== Q && (a = rl(u));
    }
    if (a === Q)
      return Q;
    if (t !== Q && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & i) === Q) {
      var R = Ki(a), F = Ki(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        R >= F || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        R === Qa && (F & Po) !== Q
      )
        return t;
    }
    (a & Cr) !== Q && (a |= n & Qa);
    var O = e.entangledLanes;
    if (O !== Q)
      for (var $ = e.entanglements, I = a & O; I > 0; ) {
        var W = Wi(I), ie = 1 << W;
        a |= $[W], I &= ~ie;
      }
    return a;
  }
  function X4(e, t) {
    for (var n = e.eventTimes, a = pt; t > 0; ) {
      var i = Wi(t), u = 1 << i, m = n[i];
      m > a && (a = m), t &= ~u;
    }
    return a;
  }
  function J4(e, t) {
    switch (e) {
      case Te:
      case _o:
      case Cr:
        return t + 250;
      case Ii:
      case Qa:
      case el:
      case tl:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case cm:
      case fm:
      case dm:
      case mm:
      case pm:
      case hm:
      case vm:
      case gm:
      case ym:
      case Lm:
        return t + 5e3;
      case Ao:
      case bm:
      case xm:
      case Sm:
      case Cm:
        return pt;
      case nl:
      case al:
      case Yi:
      case Jn:
        return pt;
      default:
        return c("Should have found matching lanes. This is a bug in React."), pt;
    }
  }
  function Z4(e, t) {
    for (var n = e.pendingLanes, a = e.suspendedLanes, i = e.pingedLanes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Wi(m), b = 1 << g, E = u[g];
      E === pt ? ((b & a) === Q || (b & i) !== Q) && (u[g] = J4(b, t)) : E <= t && (e.expiredLanes |= b), m &= ~b;
    }
  }
  function e8(e) {
    return rl(e.pendingLanes);
  }
  function Em(e) {
    var t = e.pendingLanes & ~Jn;
    return t !== Q ? t : t & Jn ? Jn : Q;
  }
  function t8(e) {
    return (e & Te) !== Q;
  }
  function Nm(e) {
    return (e & Gg) !== Q;
  }
  function qg(e) {
    return (e & lc) === e;
  }
  function n8(e) {
    var t = Te | Cr | Qa;
    return (e & t) === Q;
  }
  function a8(e) {
    return (e & Po) === e;
  }
  function dc(e, t) {
    var n = _o | Cr | Ii | Qa;
    return (t & n) !== Q;
  }
  function r8(e, t) {
    return (t & e.expiredLanes) !== Q;
  }
  function Qg(e) {
    return (e & Po) !== Q;
  }
  function Xg() {
    var e = uc;
    return uc <<= 1, (uc & Po) === Q && (uc = tl), e;
  }
  function i8() {
    var e = cc;
    return cc <<= 1, (cc & lc) === Q && (cc = Ao), e;
  }
  function Ki(e) {
    return e & -e;
  }
  function il(e) {
    return Ki(e);
  }
  function Wi(e) {
    return 31 - Kg(e);
  }
  function Rm(e) {
    return Wi(e);
  }
  function Zn(e, t) {
    return (e & t) !== Q;
  }
  function Mo(e, t) {
    return (e & t) === t;
  }
  function Pe(e, t) {
    return e | t;
  }
  function mc(e, t) {
    return e & ~t;
  }
  function Jg(e, t) {
    return e & t;
  }
  function VT(e) {
    return e;
  }
  function o8(e, t) {
    return e !== Zt && e < t ? e : t;
  }
  function wm(e) {
    for (var t = [], n = 0; n < rm; n++)
      t.push(e);
    return t;
  }
  function ol(e, t, n) {
    e.pendingLanes |= t, t !== Yi && (e.suspendedLanes = Q, e.pingedLanes = Q);
    var a = e.eventTimes, i = Rm(t);
    a[i] = n;
  }
  function s8(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var i = Wi(a), u = 1 << i;
      n[i] = pt, a &= ~u;
    }
  }
  function Zg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function l8(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var a = e.entanglements, i = e.eventTimes, u = e.expirationTimes, m = n; m > 0; ) {
      var g = Wi(m), b = 1 << g;
      a[g] = Q, i[g] = pt, u[g] = pt, m &= ~b;
    }
  }
  function jm(e, t) {
    for (var n = e.entangledLanes |= t, a = e.entanglements, i = n; i; ) {
      var u = Wi(i), m = 1 << u;
      // Is this one of the newly entangled lanes?
      m & t | // Is this lane transitively entangled with the newly entangled lanes?
      a[u] & t && (a[u] |= t), i &= ~m;
    }
  }
  function u8(e, t) {
    var n = Ki(t), a;
    switch (n) {
      case Cr:
        a = _o;
        break;
      case Qa:
        a = Ii;
        break;
      case tl:
      case im:
      case om:
      case sm:
      case lm:
      case um:
      case cm:
      case fm:
      case dm:
      case mm:
      case pm:
      case hm:
      case vm:
      case gm:
      case ym:
      case Lm:
      case Ao:
      case bm:
      case xm:
      case Sm:
      case Cm:
        a = el;
        break;
      case Yi:
        a = al;
        break;
      default:
        a = Zt;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== Zt ? Zt : a;
  }
  function e1(e, t, n) {
    if (Da)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var i = Rm(n), u = 1 << i, m = a[i];
        m.add(t), n &= ~u;
      }
  }
  function t1(e, t) {
    if (Da)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var i = Rm(t), u = 1 << i, m = n[i];
        m.size > 0 && (m.forEach(function(g) {
          var b = g.alternate;
          (b === null || !a.has(b)) && a.add(g);
        }), m.clear()), t &= ~u;
      }
  }
  function n1(e, t) {
    return null;
  }
  var ea = Te, Er = Cr, Nr = Qa, pc = Yi, sl = Zt;
  function ka() {
    return sl;
  }
  function en(e) {
    sl = e;
  }
  function c8(e, t) {
    var n = sl;
    try {
      return sl = e, t();
    } finally {
      sl = n;
    }
  }
  function f8(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function d8(e, t) {
    return e > t ? e : t;
  }
  function Tm(e, t) {
    return e !== 0 && e < t;
  }
  function a1(e) {
    var t = Ki(e);
    return Tm(ea, t) ? Tm(Er, t) ? Nm(t) ? Nr : pc : Er : ea;
  }
  function hc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var r1;
  function m8(e) {
    r1 = e;
  }
  function p8(e) {
    r1(e);
  }
  var Dm;
  function h8(e) {
    Dm = e;
  }
  var i1;
  function v8(e) {
    i1 = e;
  }
  var o1;
  function g8(e) {
    o1 = e;
  }
  var s1;
  function y8(e) {
    s1 = e;
  }
  var km = !1, vc = [], Zr = null, ei = null, ti = null, ll = /* @__PURE__ */ new Map(), ul = /* @__PURE__ */ new Map(), ni = [], L8 = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    // Intentionally camelCase
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
    "submit"
  ];
  function b8(e) {
    return L8.indexOf(e) > -1;
  }
  function x8(e, t, n, a, i) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    };
  }
  function l1(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zr = null;
        break;
      case "dragenter":
      case "dragleave":
        ei = null;
        break;
      case "mouseover":
      case "mouseout":
        ti = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        ll.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var a = t.pointerId;
        ul.delete(a);
        break;
      }
    }
  }
  function cl(e, t, n, a, i, u) {
    if (e === null || e.nativeEvent !== u) {
      var m = x8(t, n, a, i, u);
      if (t !== null) {
        var g = ii(t);
        g !== null && Dm(g);
      }
      return m;
    }
    e.eventSystemFlags |= a;
    var b = e.targetContainers;
    return i !== null && b.indexOf(i) === -1 && b.push(i), e;
  }
  function S8(e, t, n, a, i) {
    switch (t) {
      case "focusin": {
        var u = i;
        return Zr = cl(Zr, e, t, n, a, u), !0;
      }
      case "dragenter": {
        var m = i;
        return ei = cl(ei, e, t, n, a, m), !0;
      }
      case "mouseover": {
        var g = i;
        return ti = cl(ti, e, t, n, a, g), !0;
      }
      case "pointerover": {
        var b = i, E = b.pointerId;
        return ll.set(E, cl(ll.get(E) || null, e, t, n, a, b)), !0;
      }
      case "gotpointercapture": {
        var R = i, F = R.pointerId;
        return ul.set(F, cl(ul.get(F) || null, e, t, n, a, R)), !0;
      }
    }
    return !1;
  }
  function u1(e) {
    var t = Qi(e.target);
    if (t !== null) {
      var n = Hi(t);
      if (n !== null) {
        var a = n.tag;
        if (a === A) {
          var i = Fg(n);
          if (i !== null) {
            e.blockedOn = i, s1(e.priority, function() {
              i1(n);
            });
            return;
          }
        } else if (a === L) {
          var u = n.stateNode;
          if (hc(u)) {
            e.blockedOn = _g(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function C8(e) {
    for (var t = o1(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, a = 0; a < ni.length && Tm(t, ni[a].priority); a++)
      ;
    ni.splice(a, 0, n), a === 0 && u1(n);
  }
  function gc(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], a = _m(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var i = e.nativeEvent, u = new i.constructor(i.type, i);
        q5(u), i.target.dispatchEvent(u), Q5();
      } else {
        var m = ii(a);
        return m !== null && Dm(m), e.blockedOn = a, !1;
      }
      t.shift();
    }
    return !0;
  }
  function c1(e, t, n) {
    gc(e) && n.delete(t);
  }
  function E8() {
    km = !1, Zr !== null && gc(Zr) && (Zr = null), ei !== null && gc(ei) && (ei = null), ti !== null && gc(ti) && (ti = null), ll.forEach(c1), ul.forEach(c1);
  }
  function fl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, km || (km = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, E8)));
  }
  function dl(e) {
    if (vc.length > 0) {
      fl(vc[0], e);
      for (var t = 1; t < vc.length; t++) {
        var n = vc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Zr !== null && fl(Zr, e), ei !== null && fl(ei, e), ti !== null && fl(ti, e);
    var a = function(g) {
      return fl(g, e);
    };
    ll.forEach(a), ul.forEach(a);
    for (var i = 0; i < ni.length; i++) {
      var u = ni[i];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; ni.length > 0; ) {
      var m = ni[0];
      if (m.blockedOn !== null)
        break;
      u1(m), m.blockedOn === null && ni.shift();
    }
  }
  var Vo = s.ReactCurrentBatchConfig, Om = !0;
  function f1(e) {
    Om = !!e;
  }
  function N8() {
    return Om;
  }
  function R8(e, t, n) {
    var a = d1(t), i;
    switch (a) {
      case ea:
        i = w8;
        break;
      case Er:
        i = j8;
        break;
      case Nr:
      default:
        i = Fm;
        break;
    }
    return i.bind(null, t, n, e);
  }
  function w8(e, t, n, a) {
    var i = ka(), u = Vo.transition;
    Vo.transition = null;
    try {
      en(ea), Fm(e, t, n, a);
    } finally {
      en(i), Vo.transition = u;
    }
  }
  function j8(e, t, n, a) {
    var i = ka(), u = Vo.transition;
    Vo.transition = null;
    try {
      en(Er), Fm(e, t, n, a);
    } finally {
      en(i), Vo.transition = u;
    }
  }
  function Fm(e, t, n, a) {
    Om && T8(e, t, n, a);
  }
  function T8(e, t, n, a) {
    var i = _m(e, t, n, a);
    if (i === null) {
      Gm(e, t, a, yc, n), l1(e, a);
      return;
    }
    if (S8(i, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if (l1(e, a), t & Ks && b8(e)) {
      for (; i !== null; ) {
        var u = ii(i);
        u !== null && p8(u);
        var m = _m(e, t, n, a);
        if (m === null && Gm(e, t, a, yc, n), m === i)
          break;
        i = m;
      }
      i !== null && a.stopPropagation();
      return;
    }
    Gm(e, t, a, null, n);
  }
  var yc = null;
  function _m(e, t, n, a) {
    yc = null;
    var i = $d(a), u = Qi(i);
    if (u !== null) {
      var m = Hi(u);
      if (m === null)
        u = null;
      else {
        var g = m.tag;
        if (g === A) {
          var b = Fg(m);
          if (b !== null)
            return b;
          u = null;
        } else if (g === L) {
          var E = m.stateNode;
          if (hc(E))
            return _g(m);
          u = null;
        } else m !== u && (u = null);
      }
    }
    return yc = u, null;
  }
  function d1(e) {
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
        return ea;
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
        return Er;
      case "message": {
        var t = b4();
        switch (t) {
          case sc:
            return ea;
          case tm:
            return Er;
          case Bi:
          case x4:
            return Nr;
          case nm:
            return pc;
          default:
            return Nr;
        }
      }
      default:
        return Nr;
    }
  }
  function D8(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function k8(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function O8(e, t, n, a) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }), n;
  }
  function F8(e, t, n, a) {
    return e.addEventListener(t, n, {
      passive: a
    }), n;
  }
  var ml = null, Pm = null, pl = null;
  function _8(e) {
    return ml = e, Pm = p1(), !0;
  }
  function P8() {
    ml = null, Pm = null, pl = null;
  }
  function m1() {
    if (pl)
      return pl;
    var e, t = Pm, n = t.length, a, i = p1(), u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var m = n - e;
    for (a = 1; a <= m && t[n - a] === i[u - a]; a++)
      ;
    var g = a > 1 ? 1 - a : void 0;
    return pl = i.slice(e, g), pl;
  }
  function p1() {
    return "value" in ml ? ml.value : ml.textContent;
  }
  function Lc(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function bc() {
    return !0;
  }
  function h1() {
    return !1;
  }
  function ta(e) {
    function t(n, a, i, u, m) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var g in e)
        if (e.hasOwnProperty(g)) {
          var b = e[g];
          b ? this[g] = b(u) : this[g] = u[g];
        }
      var E = u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return E ? this.isDefaultPrevented = bc : this.isDefaultPrevented = h1, this.isPropagationStopped = h1, this;
    }
    return ze(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bc);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bc);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: bc
    }), t;
  }
  var Uo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Am = ta(Uo), hl = ze({}, Uo, {
    view: 0,
    detail: 0
  }), A8 = ta(hl), Mm, Vm, vl;
  function M8(e) {
    e !== vl && (vl && e.type === "mousemove" ? (Mm = e.screenX - vl.screenX, Vm = e.screenY - vl.screenY) : (Mm = 0, Vm = 0), vl = e);
  }
  var xc = ze({}, hl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zm,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (M8(e), Mm);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vm;
    }
  }), v1 = ta(xc), V8 = ze({}, xc, {
    dataTransfer: 0
  }), U8 = ta(V8), z8 = ze({}, hl, {
    relatedTarget: 0
  }), Um = ta(z8), $8 = ze({}, Uo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H8 = ta($8), B8 = ze({}, Uo, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), I8 = ta(B8), Y8 = ze({}, Uo, {
    data: 0
  }), g1 = ta(Y8), K8 = g1, W8 = {
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
  }, G8 = {
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
  };
  function q8(e) {
    if (e.key) {
      var t = W8[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = Lc(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? G8[e.keyCode] || "Unidentified" : "";
  }
  var Q8 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function X8(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var a = Q8[e];
    return a ? !!n[a] : !1;
  }
  function zm(e) {
    return X8;
  }
  var J8 = ze({}, hl, {
    key: q8,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zm,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? Lc(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Lc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Z8 = ta(J8), e6 = ze({}, xc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), y1 = ta(e6), t6 = ze({}, hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zm
  }), n6 = ta(t6), a6 = ze({}, Uo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), r6 = ta(a6), i6 = ze({}, xc, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : (
        // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
        "wheelDeltaY" in e ? -e.wheelDeltaY : (
          // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
          "wheelDelta" in e ? -e.wheelDelta : 0
        )
      );
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  }), o6 = ta(i6), s6 = [9, 13, 27, 32], L1 = 229, $m = Ot && "CompositionEvent" in window, gl = null;
  Ot && "documentMode" in document && (gl = document.documentMode);
  var l6 = Ot && "TextEvent" in window && !gl, b1 = Ot && (!$m || gl && gl > 8 && gl <= 11), x1 = 32, S1 = String.fromCharCode(x1);
  function u6() {
    Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Kn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var C1 = !1;
  function c6(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function f6(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function d6(e, t) {
    return e === "keydown" && t.keyCode === L1;
  }
  function E1(e, t) {
    switch (e) {
      case "keyup":
        return s6.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== L1;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function N1(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function R1(e) {
    return e.locale === "ko";
  }
  var zo = !1;
  function m6(e, t, n, a, i) {
    var u, m;
    if ($m ? u = f6(t) : zo ? E1(t, a) && (u = "onCompositionEnd") : d6(t, a) && (u = "onCompositionStart"), !u)
      return null;
    b1 && !R1(a) && (!zo && u === "onCompositionStart" ? zo = _8(i) : u === "onCompositionEnd" && zo && (m = m1()));
    var g = Rc(n, u);
    if (g.length > 0) {
      var b = new g1(u, t, null, a, i);
      if (e.push({
        event: b,
        listeners: g
      }), m)
        b.data = m;
      else {
        var E = N1(a);
        E !== null && (b.data = E);
      }
    }
  }
  function p6(e, t) {
    switch (e) {
      case "compositionend":
        return N1(t);
      case "keypress":
        var n = t.which;
        return n !== x1 ? null : (C1 = !0, S1);
      case "textInput":
        var a = t.data;
        return a === S1 && C1 ? null : a;
      default:
        return null;
    }
  }
  function h6(e, t) {
    if (zo) {
      if (e === "compositionend" || !$m && E1(e, t)) {
        var n = m1();
        return P8(), zo = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!c6(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return b1 && !R1(t) ? null : t.data;
      default:
        return null;
    }
  }
  function v6(e, t, n, a, i) {
    var u;
    if (l6 ? u = p6(t, a) : u = h6(t, a), !u)
      return null;
    var m = Rc(n, "onBeforeInput");
    if (m.length > 0) {
      var g = new K8("onBeforeInput", "beforeinput", null, a, i);
      e.push({
        event: g,
        listeners: m
      }), g.data = u;
    }
  }
  function g6(e, t, n, a, i, u, m) {
    m6(e, t, n, a, i), v6(e, t, n, a, i);
  }
  var y6 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function w1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!y6[e.type] : t === "textarea";
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function L6(e) {
    if (!Ot)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var a = document.createElement("div");
      a.setAttribute(t, "return;"), n = typeof a[t] == "function";
    }
    return n;
  }
  function b6() {
    Kn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function j1(e, t, n, a) {
    Ng(a);
    var i = Rc(t, "onChange");
    if (i.length > 0) {
      var u = new Am("onChange", "change", null, n, a);
      e.push({
        event: u,
        listeners: i
      });
    }
  }
  var yl = null, Ll = null;
  function x6(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function S6(e) {
    var t = [];
    j1(t, Ll, e, $d(e)), Tg(C6, t);
  }
  function C6(e) {
    K1(e, 0);
  }
  function Sc(e) {
    var t = Ko(e);
    if (xo(t))
      return e;
  }
  function E6(e, t) {
    if (e === "change")
      return t;
  }
  var T1 = !1;
  Ot && (T1 = L6("input") && (!document.documentMode || document.documentMode > 9));
  function N6(e, t) {
    yl = e, Ll = t, yl.attachEvent("onpropertychange", k1);
  }
  function D1() {
    yl && (yl.detachEvent("onpropertychange", k1), yl = null, Ll = null);
  }
  function k1(e) {
    e.propertyName === "value" && Sc(Ll) && S6(e);
  }
  function R6(e, t, n) {
    e === "focusin" ? (D1(), N6(t, n)) : e === "focusout" && D1();
  }
  function w6(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Sc(Ll);
  }
  function j6(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function T6(e, t) {
    if (e === "click")
      return Sc(t);
  }
  function D6(e, t) {
    if (e === "input" || e === "change")
      return Sc(t);
  }
  function k6(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || je(e, "number", e.value);
  }
  function O6(e, t, n, a, i, u, m) {
    var g = n ? Ko(n) : window, b, E;
    if (x6(g) ? b = E6 : w1(g) ? T1 ? b = D6 : (b = w6, E = R6) : j6(g) && (b = T6), b) {
      var R = b(t, n);
      if (R) {
        j1(e, R, a, i);
        return;
      }
    }
    E && E(t, g, n), t === "focusout" && k6(g);
  }
  function F6() {
    Wn("onMouseEnter", ["mouseout", "mouseover"]), Wn("onMouseLeave", ["mouseout", "mouseover"]), Wn("onPointerEnter", ["pointerout", "pointerover"]), Wn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function _6(e, t, n, a, i, u, m) {
    var g = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
    if (g && !X5(a)) {
      var E = a.relatedTarget || a.fromElement;
      if (E && (Qi(E) || _l(E)))
        return;
    }
    if (!(!b && !g)) {
      var R;
      if (i.window === i)
        R = i;
      else {
        var F = i.ownerDocument;
        F ? R = F.defaultView || F.parentWindow : R = window;
      }
      var O, $;
      if (b) {
        var I = a.relatedTarget || a.toElement;
        if (O = n, $ = I ? Qi(I) : null, $ !== null) {
          var W = Hi($);
          ($ !== W || $.tag !== N && $.tag !== j) && ($ = null);
        }
      } else
        O = null, $ = n;
      if (O !== $) {
        var ie = v1, ye = "onMouseLeave", he = "onMouseEnter", Ye = "mouse";
        (t === "pointerout" || t === "pointerover") && (ie = y1, ye = "onPointerLeave", he = "onPointerEnter", Ye = "pointer");
        var Ue = O == null ? R : Ko(O), V = $ == null ? R : Ko($), G = new ie(ye, Ye + "leave", O, a, i);
        G.target = Ue, G.relatedTarget = V;
        var U = null, Z = Qi(i);
        if (Z === n) {
          var ce = new ie(he, Ye + "enter", $, a, i);
          ce.target = V, ce.relatedTarget = Ue, U = ce;
        }
        r7(e, G, U, O, $);
      }
    }
  }
  function P6(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var na = typeof Object.is == "function" ? Object.is : P6;
  function bl(e, t) {
    if (na(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length)
      return !1;
    for (var i = 0; i < n.length; i++) {
      var u = n[i];
      if (!vn.call(t, u) || !na(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function O1(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function A6(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function F1(e, t) {
    for (var n = O1(e), a = 0, i = 0; n; ) {
      if (n.nodeType === gr) {
        if (i = a + n.textContent.length, a <= t && i >= t)
          return {
            node: n,
            offset: t - a
          };
        a = i;
      }
      n = O1(A6(n));
    }
  }
  function M6(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0)
      return null;
    var i = a.anchorNode, u = a.anchorOffset, m = a.focusNode, g = a.focusOffset;
    try {
      i.nodeType, m.nodeType;
    } catch {
      return null;
    }
    return V6(e, i, u, m, g);
  }
  function V6(e, t, n, a, i) {
    var u = 0, m = -1, g = -1, b = 0, E = 0, R = e, F = null;
    e: for (; ; ) {
      for (var O = null; R === t && (n === 0 || R.nodeType === gr) && (m = u + n), R === a && (i === 0 || R.nodeType === gr) && (g = u + i), R.nodeType === gr && (u += R.nodeValue.length), (O = R.firstChild) !== null; )
        F = R, R = O;
      for (; ; ) {
        if (R === e)
          break e;
        if (F === t && ++b === n && (m = u), F === a && ++E === i && (g = u), (O = R.nextSibling) !== null)
          break;
        R = F, F = R.parentNode;
      }
      R = O;
    }
    return m === -1 || g === -1 ? null : {
      start: m,
      end: g
    };
  }
  function U6(e, t) {
    var n = e.ownerDocument || document, a = n && n.defaultView || window;
    if (a.getSelection) {
      var i = a.getSelection(), u = e.textContent.length, m = Math.min(t.start, u), g = t.end === void 0 ? m : Math.min(t.end, u);
      if (!i.extend && m > g) {
        var b = g;
        g = m, m = b;
      }
      var E = F1(e, m), R = F1(e, g);
      if (E && R) {
        if (i.rangeCount === 1 && i.anchorNode === E.node && i.anchorOffset === E.offset && i.focusNode === R.node && i.focusOffset === R.offset)
          return;
        var F = n.createRange();
        F.setStart(E.node, E.offset), i.removeAllRanges(), m > g ? (i.addRange(F), i.extend(R.node, R.offset)) : (F.setEnd(R.node, R.offset), i.addRange(F));
      }
    }
  }
  function _1(e) {
    return e && e.nodeType === gr;
  }
  function P1(e, t) {
    return !e || !t ? !1 : e === t ? !0 : _1(e) ? !1 : _1(t) ? P1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function z6(e) {
    return e && e.ownerDocument && P1(e.ownerDocument.documentElement, e);
  }
  function $6(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function A1() {
    for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
      if ($6(t))
        e = t.contentWindow;
      else
        return t;
      t = Qr(e.document);
    }
    return t;
  }
  function Hm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function H6() {
    var e = A1();
    return {
      focusedElem: e,
      selectionRange: Hm(e) ? I6(e) : null
    };
  }
  function B6(e) {
    var t = A1(), n = e.focusedElem, a = e.selectionRange;
    if (t !== n && z6(n)) {
      a !== null && Hm(n) && Y6(n, a);
      for (var i = [], u = n; u = u.parentNode; )
        u.nodeType === Un && i.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      typeof n.focus == "function" && n.focus();
      for (var m = 0; m < i.length; m++) {
        var g = i[m];
        g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
      }
    }
  }
  function I6(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = M6(e), t || {
      start: 0,
      end: 0
    };
  }
  function Y6(e, t) {
    var n = t.start, a = t.end;
    a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : U6(e, t);
  }
  var K6 = Ot && "documentMode" in document && document.documentMode <= 11;
  function W6() {
    Kn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var $o = null, Bm = null, xl = null, Im = !1;
  function G6(e) {
    if ("selectionStart" in e && Hm(e))
      return {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection();
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    };
  }
  function q6(e) {
    return e.window === e ? e.document : e.nodeType === yr ? e : e.ownerDocument;
  }
  function M1(e, t, n) {
    var a = q6(n);
    if (!(Im || $o == null || $o !== Qr(a))) {
      var i = G6($o);
      if (!xl || !bl(xl, i)) {
        xl = i;
        var u = Rc(Bm, "onSelect");
        if (u.length > 0) {
          var m = new Am("onSelect", "select", null, t, n);
          e.push({
            event: m,
            listeners: u
          }), m.target = $o;
        }
      }
    }
  }
  function Q6(e, t, n, a, i, u, m) {
    var g = n ? Ko(n) : window;
    switch (t) {
      case "focusin":
        (w1(g) || g.contentEditable === "true") && ($o = g, Bm = n, xl = null);
        break;
      case "focusout":
        $o = null, Bm = null, xl = null;
        break;
      case "mousedown":
        Im = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        Im = !1, M1(e, a, i);
        break;
      case "selectionchange":
        if (K6)
          break;
      case "keydown":
      case "keyup":
        M1(e, a, i);
    }
  }
  function Cc(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ho = {
    animationend: Cc("Animation", "AnimationEnd"),
    animationiteration: Cc("Animation", "AnimationIteration"),
    animationstart: Cc("Animation", "AnimationStart"),
    transitionend: Cc("Transition", "TransitionEnd")
  }, Ym = {}, V1 = {};
  Ot && (V1 = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);
  function Ec(e) {
    if (Ym[e])
      return Ym[e];
    if (!Ho[e])
      return e;
    var t = Ho[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in V1)
        return Ym[e] = t[n];
    return e;
  }
  var U1 = Ec("animationend"), z1 = Ec("animationiteration"), $1 = Ec("animationstart"), H1 = Ec("transitionend"), B1 = /* @__PURE__ */ new Map(), I1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function ai(e, t) {
    B1.set(e, t), Kn(t, [e]);
  }
  function X6() {
    for (var e = 0; e < I1.length; e++) {
      var t = I1[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
      ai(n, "on" + a);
    }
    ai(U1, "onAnimationEnd"), ai(z1, "onAnimationIteration"), ai($1, "onAnimationStart"), ai("dblclick", "onDoubleClick"), ai("focusin", "onFocus"), ai("focusout", "onBlur"), ai(H1, "onTransitionEnd");
  }
  function J6(e, t, n, a, i, u, m) {
    var g = B1.get(t);
    if (g !== void 0) {
      var b = Am, E = t;
      switch (t) {
        case "keypress":
          if (Lc(a) === 0)
            return;
        case "keydown":
        case "keyup":
          b = Z8;
          break;
        case "focusin":
          E = "focus", b = Um;
          break;
        case "focusout":
          E = "blur", b = Um;
          break;
        case "beforeblur":
        case "afterblur":
          b = Um;
          break;
        case "click":
          if (a.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          b = v1;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          b = U8;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          b = n6;
          break;
        case U1:
        case z1:
        case $1:
          b = H8;
          break;
        case H1:
          b = r6;
          break;
        case "scroll":
          b = A8;
          break;
        case "wheel":
          b = o6;
          break;
        case "copy":
        case "cut":
        case "paste":
          b = I8;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          b = y1;
          break;
      }
      var R = (u & Ks) !== 0;
      {
        var F = !R && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", O = n7(n, g, a.type, R, F);
        if (O.length > 0) {
          var $ = new b(g, E, null, a, i);
          e.push({
            event: $,
            listeners: O
          });
        }
      }
    }
  }
  X6(), F6(), b6(), W6(), u6();
  function Z6(e, t, n, a, i, u, m) {
    J6(e, t, n, a, i, u);
    var g = (u & G5) === 0;
    g && (_6(e, t, n, a, i), O6(e, t, n, a, i), Q6(e, t, n, a, i), g6(e, t, n, a, i));
  }
  var Sl = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Km = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sl));
  function Y1(e, t, n) {
    var a = e.type || "unknown-event";
    e.currentTarget = n, o4(a, t, void 0, e), e.currentTarget = null;
  }
  function e7(e, t, n) {
    var a;
    if (n)
      for (var i = t.length - 1; i >= 0; i--) {
        var u = t[i], m = u.instance, g = u.currentTarget, b = u.listener;
        if (m !== a && e.isPropagationStopped())
          return;
        Y1(e, b, g), a = m;
      }
    else
      for (var E = 0; E < t.length; E++) {
        var R = t[E], F = R.instance, O = R.currentTarget, $ = R.listener;
        if (F !== a && e.isPropagationStopped())
          return;
        Y1(e, $, O), a = F;
      }
  }
  function K1(e, t) {
    for (var n = (t & Ks) !== 0, a = 0; a < e.length; a++) {
      var i = e[a], u = i.event, m = i.listeners;
      e7(u, m, n);
    }
    s4();
  }
  function t7(e, t, n, a, i) {
    var u = $d(n), m = [];
    Z6(m, e, a, n, u, t), K1(m, t);
  }
  function yt(e, t) {
    Km.has(e) || c('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, a = kx(t), i = i7(e);
    a.has(i) || (W1(t, e, zd, n), a.add(i));
  }
  function Wm(e, t, n) {
    Km.has(e) && !t && c('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var a = 0;
    t && (a |= Ks), W1(n, e, a, t);
  }
  var Nc = "_reactListening" + Math.random().toString(36).slice(2);
  function Cl(e) {
    if (!e[Nc]) {
      e[Nc] = !0, ua.forEach(function(n) {
        n !== "selectionchange" && (Km.has(n) || Wm(n, !1, e), Wm(n, !0, e));
      });
      var t = e.nodeType === yr ? e : e.ownerDocument;
      t !== null && (t[Nc] || (t[Nc] = !0, Wm("selectionchange", !1, t)));
    }
  }
  function W1(e, t, n, a, i) {
    var u = R8(e, t, n), m = void 0;
    Id && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, a ? m !== void 0 ? O8(e, t, u, m) : k8(e, t, u) : m !== void 0 ? F8(e, t, u, m) : D8(e, t, u);
  }
  function G1(e, t) {
    return e === t || e.nodeType === Ft && e.parentNode === t;
  }
  function Gm(e, t, n, a, i) {
    var u = a;
    if (!(t & Cg) && !(t & zd)) {
      var m = i;
      if (a !== null) {
        var g = a;
        e: for (; ; ) {
          if (g === null)
            return;
          var b = g.tag;
          if (b === L || b === x) {
            var E = g.stateNode.containerInfo;
            if (G1(E, m))
              break;
            if (b === x)
              for (var R = g.return; R !== null; ) {
                var F = R.tag;
                if (F === L || F === x) {
                  var O = R.stateNode.containerInfo;
                  if (G1(O, m))
                    return;
                }
                R = R.return;
              }
            for (; E !== null; ) {
              var $ = Qi(E);
              if ($ === null)
                return;
              var I = $.tag;
              if (I === N || I === j) {
                g = u = $;
                continue e;
              }
              E = E.parentNode;
            }
          }
          g = g.return;
        }
      }
    }
    Tg(function() {
      return t7(e, t, n, u);
    });
  }
  function El(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function n7(e, t, n, a, i, u) {
    for (var m = t !== null ? t + "Capture" : null, g = a ? m : t, b = [], E = e, R = null; E !== null; ) {
      var F = E, O = F.stateNode, $ = F.tag;
      if ($ === N && O !== null && (R = O, g !== null)) {
        var I = Gs(E, g);
        I != null && b.push(El(E, I, R));
      }
      if (i)
        break;
      E = E.return;
    }
    return b;
  }
  function Rc(e, t) {
    for (var n = t + "Capture", a = [], i = e; i !== null; ) {
      var u = i, m = u.stateNode, g = u.tag;
      if (g === N && m !== null) {
        var b = m, E = Gs(i, n);
        E != null && a.unshift(El(i, E, b));
        var R = Gs(i, t);
        R != null && a.push(El(i, R, b));
      }
      i = i.return;
    }
    return a;
  }
  function Bo(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== N);
    return e || null;
  }
  function a7(e, t) {
    for (var n = e, a = t, i = 0, u = n; u; u = Bo(u))
      i++;
    for (var m = 0, g = a; g; g = Bo(g))
      m++;
    for (; i - m > 0; )
      n = Bo(n), i--;
    for (; m - i > 0; )
      a = Bo(a), m--;
    for (var b = i; b--; ) {
      if (n === a || a !== null && n === a.alternate)
        return n;
      n = Bo(n), a = Bo(a);
    }
    return null;
  }
  function q1(e, t, n, a, i) {
    for (var u = t._reactName, m = [], g = n; g !== null && g !== a; ) {
      var b = g, E = b.alternate, R = b.stateNode, F = b.tag;
      if (E !== null && E === a)
        break;
      if (F === N && R !== null) {
        var O = R;
        if (i) {
          var $ = Gs(g, u);
          $ != null && m.unshift(El(g, $, O));
        } else if (!i) {
          var I = Gs(g, u);
          I != null && m.push(El(g, I, O));
        }
      }
      g = g.return;
    }
    m.length !== 0 && e.push({
      event: t,
      listeners: m
    });
  }
  function r7(e, t, n, a, i) {
    var u = a && i ? a7(a, i) : null;
    a !== null && q1(e, t, a, u, !1), i !== null && n !== null && q1(e, n, i, u, !0);
  }
  function i7(e, t) {
    return e + "__bubble";
  }
  var zn = !1, Nl = "dangerouslySetInnerHTML", wc = "suppressContentEditableWarning", ri = "suppressHydrationWarning", Q1 = "autoFocus", Gi = "children", qi = "style", jc = "__html", qm, Tc, Rl, X1, Dc, J1, Z1;
  qm = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Tc = function(e, t) {
    $5(e, t), H5(e, t), W5(e, t, {
      registrationNameDependencies: tn,
      possibleRegistrationNames: Pn
    });
  }, J1 = Ot && !document.documentMode, Rl = function(e, t, n) {
    if (!zn) {
      var a = kc(n), i = kc(t);
      i !== a && (zn = !0, c("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(i), JSON.stringify(a)));
    }
  }, X1 = function(e) {
    if (!zn) {
      zn = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), c("Extra attributes from the server: %s", t);
    }
  }, Dc = function(e, t) {
    t === !1 ? c("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : c("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Z1 = function(e, t) {
    var n = e.namespaceURI === vr ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var o7 = /\r\n?/g, s7 = /\u0000|\uFFFD/g;
  function kc(e) {
    fa(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(o7, `
`).replace(s7, "");
  }
  function Oc(e, t, n, a) {
    var i = kc(t), u = kc(e);
    if (u !== i && (a && (zn || (zn = !0, c('Text content did not match. Server: "%s" Client: "%s"', u, i))), n && we))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function e0(e) {
    return e.nodeType === yr ? e : e.ownerDocument;
  }
  function l7() {
  }
  function Fc(e) {
    e.onclick = l7;
  }
  function u7(e, t, n, a, i) {
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var m = a[u];
        if (u === qi)
          m && Object.freeze(m), gg(t, m);
        else if (u === Nl) {
          var g = m ? m[jc] : void 0;
          g != null && dg(t, g);
        } else if (u === Gi)
          if (typeof m == "string") {
            var b = e !== "textarea" || m !== "";
            b && tc(t, m);
          } else typeof m == "number" && tc(t, "" + m);
        else u === wc || u === ri || u === Q1 || (tn.hasOwnProperty(u) ? m != null && (typeof m != "function" && Dc(u, m), u === "onScroll" && yt("scroll", t)) : m != null && dr(t, u, m, i));
      }
  }
  function c7(e, t, n, a) {
    for (var i = 0; i < t.length; i += 2) {
      var u = t[i], m = t[i + 1];
      u === qi ? gg(e, m) : u === Nl ? dg(e, m) : u === Gi ? tc(e, m) : dr(e, u, m, a);
    }
  }
  function f7(e, t, n, a) {
    var i, u = e0(n), m, g = a;
    if (g === vr && (g = _d(e)), g === vr) {
      if (i = Mi(e, t), !i && e !== e.toLowerCase() && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var b = u.createElement("div");
        b.innerHTML = "<script><\/script>";
        var E = b.firstChild;
        m = b.removeChild(E);
      } else if (typeof t.is == "string")
        m = u.createElement(e, {
          is: t.is
        });
      else if (m = u.createElement(e), e === "select") {
        var R = m;
        t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
      }
    } else
      m = u.createElementNS(g, e);
    return g === vr && !i && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !vn.call(qm, e) && (qm[e] = !0, c("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
  }
  function d7(e, t) {
    return e0(t).createTextNode(e);
  }
  function m7(e, t, n, a) {
    var i = Mi(t, n);
    Tc(t, n);
    var u;
    switch (t) {
      case "dialog":
        yt("cancel", e), yt("close", e), u = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e), u = n;
        break;
      case "video":
      case "audio":
        for (var m = 0; m < Sl.length; m++)
          yt(Sl[m], e);
        u = n;
        break;
      case "source":
        yt("error", e), u = n;
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e), u = n;
        break;
      case "details":
        yt("toggle", e), u = n;
        break;
      case "input":
        T(e, n), u = S(e, n), yt("invalid", e);
        break;
      case "option":
        ft(e, n), u = n;
        break;
      case "select":
        Is(e, n), u = Bs(e, n), yt("invalid", e);
        break;
      case "textarea":
        ug(e, n), u = Od(e, n), yt("invalid", e);
        break;
      default:
        u = n;
    }
    switch (Ud(t, u), u7(t, e, a, u, i), t) {
      case "input":
        pr(e), ee(e, n, !1);
        break;
      case "textarea":
        pr(e), fg(e);
        break;
      case "option":
        gt(e, n);
        break;
      case "select":
        kd(e, n);
        break;
      default:
        typeof u.onClick == "function" && Fc(e);
        break;
    }
  }
  function p7(e, t, n, a, i) {
    Tc(t, a);
    var u = null, m, g;
    switch (t) {
      case "input":
        m = S(e, n), g = S(e, a), u = [];
        break;
      case "select":
        m = Bs(e, n), g = Bs(e, a), u = [];
        break;
      case "textarea":
        m = Od(e, n), g = Od(e, a), u = [];
        break;
      default:
        m = n, g = a, typeof m.onClick != "function" && typeof g.onClick == "function" && Fc(e);
        break;
    }
    Ud(t, g);
    var b, E, R = null;
    for (b in m)
      if (!(g.hasOwnProperty(b) || !m.hasOwnProperty(b) || m[b] == null))
        if (b === qi) {
          var F = m[b];
          for (E in F)
            F.hasOwnProperty(E) && (R || (R = {}), R[E] = "");
        } else b === Nl || b === Gi || b === wc || b === ri || b === Q1 || (tn.hasOwnProperty(b) ? u || (u = []) : (u = u || []).push(b, null));
    for (b in g) {
      var O = g[b], $ = m != null ? m[b] : void 0;
      if (!(!g.hasOwnProperty(b) || O === $ || O == null && $ == null))
        if (b === qi)
          if (O && Object.freeze(O), $) {
            for (E in $)
              $.hasOwnProperty(E) && (!O || !O.hasOwnProperty(E)) && (R || (R = {}), R[E] = "");
            for (E in O)
              O.hasOwnProperty(E) && $[E] !== O[E] && (R || (R = {}), R[E] = O[E]);
          } else
            R || (u || (u = []), u.push(b, R)), R = O;
        else if (b === Nl) {
          var I = O ? O[jc] : void 0, W = $ ? $[jc] : void 0;
          I != null && W !== I && (u = u || []).push(b, I);
        } else b === Gi ? (typeof O == "string" || typeof O == "number") && (u = u || []).push(b, "" + O) : b === wc || b === ri || (tn.hasOwnProperty(b) ? (O != null && (typeof O != "function" && Dc(b, O), b === "onScroll" && yt("scroll", e)), !u && $ !== O && (u = [])) : (u = u || []).push(b, O));
    }
    return R && (F5(R, g[qi]), (u = u || []).push(qi, R)), u;
  }
  function h7(e, t, n, a, i) {
    n === "input" && i.type === "radio" && i.name != null && B(e, i);
    var u = Mi(n, a), m = Mi(n, i);
    switch (c7(e, t, u, m), n) {
      case "input":
        K(e, i);
        break;
      case "textarea":
        cg(e, i);
        break;
      case "select":
        c5(e, i);
        break;
    }
  }
  function v7(e) {
    {
      var t = e.toLowerCase();
      return nc.hasOwnProperty(t) && nc[t] || null;
    }
  }
  function g7(e, t, n, a, i, u, m) {
    var g, b;
    switch (g = Mi(t, n), Tc(t, n), t) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (var E = 0; E < Sl.length; E++)
          yt(Sl[E], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        T(e, n), yt("invalid", e);
        break;
      case "option":
        ft(e, n);
        break;
      case "select":
        Is(e, n), yt("invalid", e);
        break;
      case "textarea":
        ug(e, n), yt("invalid", e);
        break;
    }
    Ud(t, n);
    {
      b = /* @__PURE__ */ new Set();
      for (var R = e.attributes, F = 0; F < R.length; F++) {
        var O = R[F].name.toLowerCase();
        switch (O) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            b.add(R[F].name);
        }
      }
    }
    var $ = null;
    for (var I in n)
      if (n.hasOwnProperty(I)) {
        var W = n[I];
        if (I === Gi)
          typeof W == "string" ? e.textContent !== W && (n[ri] !== !0 && Oc(e.textContent, W, u, m), $ = [Gi, W]) : typeof W == "number" && e.textContent !== "" + W && (n[ri] !== !0 && Oc(e.textContent, W, u, m), $ = [Gi, "" + W]);
        else if (tn.hasOwnProperty(I))
          W != null && (typeof W != "function" && Dc(I, W), I === "onScroll" && yt("scroll", e));
        else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof g == "boolean") {
          var ie = void 0, ye = g && hn ? null : Qn(I);
          if (n[ri] !== !0) {
            if (!(I === wc || I === ri || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            I === "value" || I === "checked" || I === "selected")) {
              if (I === Nl) {
                var he = e.innerHTML, Ye = W ? W[jc] : void 0;
                if (Ye != null) {
                  var Ue = Z1(e, Ye);
                  Ue !== he && Rl(I, he, Ue);
                }
              } else if (I === qi) {
                if (b.delete(I), J1) {
                  var V = k5(W);
                  ie = e.getAttribute("style"), V !== ie && Rl(I, ie, V);
                }
              } else if (g && !hn)
                b.delete(I.toLowerCase()), ie = Br(e, I, W), W !== ie && Rl(I, ie, W);
              else if (!Tt(I, ye, g) && !ut(I, W, ye, g)) {
                var G = !1;
                if (ye !== null)
                  b.delete(ye.attributeName), ie = fr(e, I, W, ye);
                else {
                  var U = a;
                  if (U === vr && (U = _d(t)), U === vr)
                    b.delete(I.toLowerCase());
                  else {
                    var Z = v7(I);
                    Z !== null && Z !== I && (G = !0, b.delete(Z)), b.delete(I);
                  }
                  ie = Br(e, I, W);
                }
                var ce = hn;
                !ce && W !== ie && !G && Rl(I, ie, W);
              }
            }
          }
        }
      }
    switch (m && // $FlowFixMe - Should be inferred as not undefined.
    b.size > 0 && n[ri] !== !0 && X1(b), t) {
      case "input":
        pr(e), ee(e, n, !0);
        break;
      case "textarea":
        pr(e), fg(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && Fc(e);
        break;
    }
    return $;
  }
  function y7(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function Qm(e, t) {
    {
      if (zn)
        return;
      zn = !0, c("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function Xm(e, t) {
    {
      if (zn)
        return;
      zn = !0, c('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Jm(e, t, n) {
    {
      if (zn)
        return;
      zn = !0, c("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function Zm(e, t) {
    {
      if (t === "" || zn)
        return;
      zn = !0, c('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function L7(e, t, n) {
    switch (t) {
      case "input":
        Se(e, n);
        return;
      case "textarea":
        d5(e, n);
        return;
      case "select":
        f5(e, n);
        return;
    }
  }
  var wl = function() {
  }, jl = function() {
  };
  {
    var b7 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], t0 = [
      "applet",
      "caption",
      "html",
      "table",
      "td",
      "th",
      "marquee",
      "object",
      "template",
      // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
      // TODO: Distinguish by namespace here -- for <title>, including it here
      // errs on the side of fewer warnings
      "foreignObject",
      "desc",
      "title"
    ], x7 = t0.concat(["button"]), S7 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], n0 = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    jl = function(e, t) {
      var n = ze({}, e || n0), a = {
        tag: t
      };
      return t0.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), x7.indexOf(t) !== -1 && (n.pTagInButtonScope = null), b7.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n;
    };
    var C7 = function(e, t) {
      switch (t) {
        case "select":
          return e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return S7.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }, E7 = function(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }, a0 = {};
    wl = function(e, t, n) {
      n = n || n0;
      var a = n.current, i = a && a.tag;
      t != null && (e != null && c("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var u = C7(e, i) ? null : a, m = u ? null : E7(e, n), g = u || m;
      if (g) {
        var b = g.tag, E = !!u + "|" + e + "|" + b;
        if (!a0[E]) {
          a0[E] = !0;
          var R = e, F = "";
          if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", u) {
            var O = "";
            b === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), c("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, b, F, O);
          } else
            c("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, b);
        }
      }
    };
  }
  var _c = "suppressHydrationWarning", Pc = "$", Ac = "/$", Tl = "$?", Dl = "$!", N7 = "style", ep = null, tp = null;
  function R7(e) {
    var t, n, a = e.nodeType;
    switch (a) {
      case yr:
      case Ad: {
        t = a === yr ? "#document" : "#fragment";
        var i = e.documentElement;
        n = i ? i.namespaceURI : Pd(null, "");
        break;
      }
      default: {
        var u = a === Ft ? e.parentNode : e, m = u.namespaceURI || null;
        t = u.tagName, n = Pd(m, t);
        break;
      }
    }
    {
      var g = t.toLowerCase(), b = jl(null, g);
      return {
        namespace: n,
        ancestorInfo: b
      };
    }
  }
  function w7(e, t, n) {
    {
      var a = e, i = Pd(a.namespace, t), u = jl(a.ancestorInfo, t);
      return {
        namespace: i,
        ancestorInfo: u
      };
    }
  }
  function UT(e) {
    return e;
  }
  function j7(e) {
    ep = N8(), tp = H6();
    var t = null;
    return f1(!1), t;
  }
  function T7(e) {
    B6(tp), f1(ep), ep = null, tp = null;
  }
  function D7(e, t, n, a, i) {
    var u;
    {
      var m = a;
      if (wl(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var g = "" + t.children, b = jl(m.ancestorInfo, e);
        wl(null, g, b);
      }
      u = m.namespace;
    }
    var E = f7(e, t, n, u);
    return Fl(i, E), up(E, t), E;
  }
  function k7(e, t) {
    e.appendChild(t);
  }
  function O7(e, t, n, a, i) {
    switch (m7(e, t, n, a), t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!n.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function F7(e, t, n, a, i, u) {
    {
      var m = u;
      if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
        var g = "" + a.children, b = jl(m.ancestorInfo, t);
        wl(null, g, b);
      }
    }
    return p7(e, t, n, a);
  }
  function np(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function _7(e, t, n, a) {
    {
      var i = n;
      wl(null, e, i.ancestorInfo);
    }
    var u = d7(e, t);
    return Fl(a, u), u;
  }
  function P7() {
    var e = window.event;
    return e === void 0 ? Nr : d1(e.type);
  }
  var ap = typeof setTimeout == "function" ? setTimeout : void 0, A7 = typeof clearTimeout == "function" ? clearTimeout : void 0, rp = -1, r0 = typeof Promise == "function" ? Promise : void 0, M7 = typeof queueMicrotask == "function" ? queueMicrotask : typeof r0 < "u" ? function(e) {
    return r0.resolve(null).then(e).catch(V7);
  } : ap;
  function V7(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function U7(e, t, n, a) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && e.focus();
        return;
      case "img": {
        n.src && (e.src = n.src);
        return;
      }
    }
  }
  function z7(e, t, n, a, i, u) {
    h7(e, t, n, a, i), up(e, i);
  }
  function i0(e) {
    tc(e, "");
  }
  function $7(e, t, n) {
    e.nodeValue = n;
  }
  function H7(e, t) {
    e.appendChild(t);
  }
  function B7(e, t) {
    var n;
    e.nodeType === Ft ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && Fc(n);
  }
  function I7(e, t, n) {
    e.insertBefore(t, n);
  }
  function Y7(e, t, n) {
    e.nodeType === Ft ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function K7(e, t) {
    e.removeChild(t);
  }
  function W7(e, t) {
    e.nodeType === Ft ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function ip(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === Ft) {
        var u = i.data;
        if (u === Ac)
          if (a === 0) {
            e.removeChild(i), dl(t);
            return;
          } else
            a--;
        else (u === Pc || u === Tl || u === Dl) && a++;
      }
      n = i;
    } while (n);
    dl(t);
  }
  function G7(e, t) {
    e.nodeType === Ft ? ip(e.parentNode, t) : e.nodeType === Un && ip(e, t), dl(e);
  }
  function q7(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function Q7(e) {
    e.nodeValue = "";
  }
  function X7(e, t) {
    e = e;
    var n = t[N7], a = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = Md("display", a);
  }
  function J7(e, t) {
    e.nodeValue = t;
  }
  function Z7(e) {
    e.nodeType === Un ? e.textContent = "" : e.nodeType === yr && e.documentElement && e.removeChild(e.documentElement);
  }
  function ex(e, t, n) {
    return e.nodeType !== Un || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function tx(e, t) {
    return t === "" || e.nodeType !== gr ? null : e;
  }
  function nx(e) {
    return e.nodeType !== Ft ? null : e;
  }
  function o0(e) {
    return e.data === Tl;
  }
  function op(e) {
    return e.data === Dl;
  }
  function ax(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, a, i;
    return t && (n = t.dgst, a = t.msg, i = t.stck), {
      message: a,
      digest: n,
      stack: i
    };
  }
  function rx(e, t) {
    e._reactRetry = t;
  }
  function Mc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Un || t === gr)
        break;
      if (t === Ft) {
        var n = e.data;
        if (n === Pc || n === Dl || n === Tl)
          break;
        if (n === Ac)
          return null;
      }
    }
    return e;
  }
  function kl(e) {
    return Mc(e.nextSibling);
  }
  function ix(e) {
    return Mc(e.firstChild);
  }
  function ox(e) {
    return Mc(e.firstChild);
  }
  function sx(e) {
    return Mc(e.nextSibling);
  }
  function lx(e, t, n, a, i, u, m) {
    Fl(u, e), up(e, n);
    var g;
    {
      var b = i;
      g = b.namespace;
    }
    var E = (u.mode & Be) !== Le;
    return g7(e, t, n, g, a, E, m);
  }
  function ux(e, t, n, a) {
    return Fl(n, e), n.mode & Be, y7(e, t);
  }
  function cx(e, t) {
    Fl(t, e);
  }
  function fx(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Ft) {
        var a = t.data;
        if (a === Ac) {
          if (n === 0)
            return kl(t);
          n--;
        } else (a === Pc || a === Dl || a === Tl) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function s0(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Ft) {
        var a = t.data;
        if (a === Pc || a === Dl || a === Tl) {
          if (n === 0)
            return t;
          n--;
        } else a === Ac && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function dx(e) {
    dl(e);
  }
  function mx(e) {
    dl(e);
  }
  function px(e) {
    return e !== "head" && e !== "body";
  }
  function hx(e, t, n, a) {
    var i = !0;
    Oc(t.nodeValue, n, a, i);
  }
  function vx(e, t, n, a, i, u) {
    if (t[_c] !== !0) {
      var m = !0;
      Oc(a.nodeValue, i, u, m);
    }
  }
  function gx(e, t) {
    t.nodeType === Un ? Qm(e, t) : t.nodeType === Ft || Xm(e, t);
  }
  function yx(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === Un ? Qm(n, t) : t.nodeType === Ft || Xm(n, t));
    }
  }
  function Lx(e, t, n, a, i) {
    (i || t[_c] !== !0) && (a.nodeType === Un ? Qm(n, a) : a.nodeType === Ft || Xm(n, a));
  }
  function bx(e, t, n) {
    Jm(e, t);
  }
  function xx(e, t) {
    Zm(e, t);
  }
  function Sx(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && Jm(a, t);
    }
  }
  function Cx(e, t) {
    {
      var n = e.parentNode;
      n !== null && Zm(n, t);
    }
  }
  function Ex(e, t, n, a, i, u) {
    (u || t[_c] !== !0) && Jm(n, a);
  }
  function Nx(e, t, n, a, i) {
    (i || t[_c] !== !0) && Zm(n, a);
  }
  function Rx(e) {
    c("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function wx(e) {
    Cl(e);
  }
  var Io = Math.random().toString(36).slice(2), Yo = "__reactFiber$" + Io, sp = "__reactProps$" + Io, Ol = "__reactContainer$" + Io, lp = "__reactEvents$" + Io, jx = "__reactListeners$" + Io, Tx = "__reactHandles$" + Io;
  function Dx(e) {
    delete e[Yo], delete e[sp], delete e[lp], delete e[jx], delete e[Tx];
  }
  function Fl(e, t) {
    t[Yo] = e;
  }
  function Vc(e, t) {
    t[Ol] = e;
  }
  function l0(e) {
    e[Ol] = null;
  }
  function _l(e) {
    return !!e[Ol];
  }
  function Qi(e) {
    var t = e[Yo];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ol] || n[Yo], t) {
        var a = t.alternate;
        if (t.child !== null || a !== null && a.child !== null)
          for (var i = s0(e); i !== null; ) {
            var u = i[Yo];
            if (u)
              return u;
            i = s0(i);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ii(e) {
    var t = e[Yo] || e[Ol];
    return t && (t.tag === N || t.tag === j || t.tag === A || t.tag === L) ? t : null;
  }
  function Ko(e) {
    if (e.tag === N || e.tag === j)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Uc(e) {
    return e[sp] || null;
  }
  function up(e, t) {
    e[sp] = t;
  }
  function kx(e) {
    var t = e[lp];
    return t === void 0 && (t = e[lp] = /* @__PURE__ */ new Set()), t;
  }
  var u0 = {}, c0 = s.ReactDebugCurrentFrame;
  function zc(e) {
    if (e) {
      var t = e._owner, n = Wr(e.type, e._source, t ? t.type : null);
      c0.setExtraStackFrame(n);
    } else
      c0.setExtraStackFrame(null);
  }
  function Oa(e, t, n, a, i) {
    {
      var u = Function.call.bind(vn);
      for (var m in e)
        if (u(e, m)) {
          var g = void 0;
          try {
            if (typeof e[m] != "function") {
              var b = Error((a || "React class") + ": " + n + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw b.name = "Invariant Violation", b;
            }
            g = e[m](t, m, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (E) {
            g = E;
          }
          g && !(g instanceof Error) && (zc(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, m, typeof g), zc(null)), g instanceof Error && !(g.message in u0) && (u0[g.message] = !0, zc(i), c("Failed %s type: %s", n, g.message), zc(null));
        }
    }
  }
  var cp = [], $c;
  $c = [];
  var Rr = -1;
  function oi(e) {
    return {
      current: e
    };
  }
  function xn(e, t) {
    if (Rr < 0) {
      c("Unexpected pop.");
      return;
    }
    t !== $c[Rr] && c("Unexpected Fiber popped."), e.current = cp[Rr], cp[Rr] = null, $c[Rr] = null, Rr--;
  }
  function Sn(e, t, n) {
    Rr++, cp[Rr] = e.current, $c[Rr] = n, e.current = t;
  }
  var fp;
  fp = {};
  var aa = {};
  Object.freeze(aa);
  var wr = oi(aa), Xa = oi(!1), dp = aa;
  function Wo(e, t, n) {
    return n && Ja(t) ? dp : wr.current;
  }
  function f0(e, t, n) {
    {
      var a = e.stateNode;
      a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function Go(e, t) {
    {
      var n = e.type, a = n.contextTypes;
      if (!a)
        return aa;
      var i = e.stateNode;
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var m in a)
        u[m] = t[m];
      {
        var g = Fe(e) || "Unknown";
        Oa(a, u, "context", g);
      }
      return i && f0(e, t, u), u;
    }
  }
  function Hc() {
    return Xa.current;
  }
  function Ja(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Bc(e) {
    xn(Xa, e), xn(wr, e);
  }
  function mp(e) {
    xn(Xa, e), xn(wr, e);
  }
  function d0(e, t, n) {
    {
      if (wr.current !== aa)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      Sn(wr, t, e), Sn(Xa, n, e);
    }
  }
  function m0(e, t, n) {
    {
      var a = e.stateNode, i = t.childContextTypes;
      if (typeof a.getChildContext != "function") {
        {
          var u = Fe(e) || "Unknown";
          fp[u] || (fp[u] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", u, u));
        }
        return n;
      }
      var m = a.getChildContext();
      for (var g in m)
        if (!(g in i))
          throw new Error((Fe(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
      {
        var b = Fe(e) || "Unknown";
        Oa(i, m, "child context", b);
      }
      return ze({}, n, m);
    }
  }
  function Ic(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || aa;
      return dp = wr.current, Sn(wr, n, e), Sn(Xa, Xa.current, e), !0;
    }
  }
  function p0(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var i = m0(e, t, dp);
        a.__reactInternalMemoizedMergedChildContext = i, xn(Xa, e), xn(wr, e), Sn(wr, i, e), Sn(Xa, n, e);
      } else
        xn(Xa, e), Sn(Xa, n, e);
    }
  }
  function Ox(e) {
    {
      if (!p4(e) || e.tag !== p)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case L:
            return t.stateNode.context;
          case p: {
            var n = t.type;
            if (Ja(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var si = 0, Yc = 1, jr = null, pp = !1, hp = !1;
  function h0(e) {
    jr === null ? jr = [e] : jr.push(e);
  }
  function Fx(e) {
    pp = !0, h0(e);
  }
  function v0() {
    pp && li();
  }
  function li() {
    if (!hp && jr !== null) {
      hp = !0;
      var e = 0, t = ka();
      try {
        var n = !0, a = jr;
        for (en(ea); e < a.length; e++) {
          var i = a[e];
          do
            i = i(n);
          while (i !== null);
        }
        jr = null, pp = !1;
      } catch (u) {
        throw jr !== null && (jr = jr.slice(e + 1)), zg(sc, li), u;
      } finally {
        en(t), hp = !1;
      }
    }
    return null;
  }
  var qo = [], Qo = 0, Kc = null, Wc = 0, ha = [], va = 0, Xi = null, Tr = 1, Dr = "";
  function _x(e) {
    return Zi(), (e.flags & Og) !== xe;
  }
  function Px(e) {
    return Zi(), Wc;
  }
  function Ax() {
    var e = Dr, t = Tr, n = t & ~Mx(t);
    return n.toString(32) + e;
  }
  function Ji(e, t) {
    Zi(), qo[Qo++] = Wc, qo[Qo++] = Kc, Kc = e, Wc = t;
  }
  function g0(e, t, n) {
    Zi(), ha[va++] = Tr, ha[va++] = Dr, ha[va++] = Xi, Xi = e;
    var a = Tr, i = Dr, u = Gc(a) - 1, m = a & ~(1 << u), g = n + 1, b = Gc(t) + u;
    if (b > 30) {
      var E = u - u % 5, R = (1 << E) - 1, F = (m & R).toString(32), O = m >> E, $ = u - E, I = Gc(t) + $, W = g << $, ie = W | O, ye = F + i;
      Tr = 1 << I | ie, Dr = ye;
    } else {
      var he = g << u, Ye = he | m, Ue = i;
      Tr = 1 << b | Ye, Dr = Ue;
    }
  }
  function vp(e) {
    Zi();
    var t = e.return;
    if (t !== null) {
      var n = 1, a = 0;
      Ji(e, n), g0(e, n, a);
    }
  }
  function Gc(e) {
    return 32 - Kg(e);
  }
  function Mx(e) {
    return 1 << Gc(e) - 1;
  }
  function gp(e) {
    for (; e === Kc; )
      Kc = qo[--Qo], qo[Qo] = null, Wc = qo[--Qo], qo[Qo] = null;
    for (; e === Xi; )
      Xi = ha[--va], ha[va] = null, Dr = ha[--va], ha[va] = null, Tr = ha[--va], ha[va] = null;
  }
  function Vx() {
    return Zi(), Xi !== null ? {
      id: Tr,
      overflow: Dr
    } : null;
  }
  function Ux(e, t) {
    Zi(), ha[va++] = Tr, ha[va++] = Dr, ha[va++] = Xi, Tr = t.id, Dr = t.overflow, Xi = e;
  }
  function Zi() {
    an() || c("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var nn = null, ga = null, Fa = !1, eo = !1, ui = null;
  function zx() {
    Fa && c("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function y0() {
    eo = !0;
  }
  function $x() {
    return eo;
  }
  function Hx(e) {
    var t = e.stateNode.containerInfo;
    return ga = ox(t), nn = e, Fa = !0, ui = null, eo = !1, !0;
  }
  function Bx(e, t, n) {
    return ga = sx(t), nn = e, Fa = !0, ui = null, eo = !1, n !== null && Ux(e, n), !0;
  }
  function L0(e, t) {
    switch (e.tag) {
      case L: {
        gx(e.stateNode.containerInfo, t);
        break;
      }
      case N: {
        var n = (e.mode & Be) !== Le;
        Lx(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case A: {
        var a = e.memoizedState;
        a.dehydrated !== null && yx(a.dehydrated, t);
        break;
      }
    }
  }
  function b0(e, t) {
    L0(e, t);
    var n = WS();
    n.stateNode = t, n.return = e;
    var a = e.deletions;
    a === null ? (e.deletions = [n], e.flags |= Vi) : a.push(n);
  }
  function yp(e, t) {
    {
      if (eo)
        return;
      switch (e.tag) {
        case L: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case N:
              var a = t.type;
              t.pendingProps, bx(n, a);
              break;
            case j:
              var i = t.pendingProps;
              xx(n, i);
              break;
          }
          break;
        }
        case N: {
          var u = e.type, m = e.memoizedProps, g = e.stateNode;
          switch (t.tag) {
            case N: {
              var b = t.type, E = t.pendingProps, R = (e.mode & Be) !== Le;
              Ex(
                u,
                m,
                g,
                b,
                E,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
            case j: {
              var F = t.pendingProps, O = (e.mode & Be) !== Le;
              Nx(
                u,
                m,
                g,
                F,
                // TODO: Delete this argument when we remove the legacy root API.
                O
              );
              break;
            }
          }
          break;
        }
        case A: {
          var $ = e.memoizedState, I = $.dehydrated;
          if (I !== null) switch (t.tag) {
            case N:
              var W = t.type;
              t.pendingProps, Sx(I, W);
              break;
            case j:
              var ie = t.pendingProps;
              Cx(I, ie);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function x0(e, t) {
    t.flags = t.flags & ~br | _t, yp(e, t);
  }
  function S0(e, t) {
    switch (e.tag) {
      case N: {
        var n = e.type;
        e.pendingProps;
        var a = ex(t, n);
        return a !== null ? (e.stateNode = a, nn = e, ga = ix(a), !0) : !1;
      }
      case j: {
        var i = e.pendingProps, u = tx(t, i);
        return u !== null ? (e.stateNode = u, nn = e, ga = null, !0) : !1;
      }
      case A: {
        var m = nx(t);
        if (m !== null) {
          var g = {
            dehydrated: m,
            treeContext: Vx(),
            retryLane: Jn
          };
          e.memoizedState = g;
          var b = GS(m);
          return b.return = e, e.child = b, nn = e, ga = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Lp(e) {
    return (e.mode & Be) !== Le && (e.flags & et) === xe;
  }
  function bp(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function xp(e) {
    if (Fa) {
      var t = ga;
      if (!t) {
        Lp(e) && (yp(nn, e), bp()), x0(nn, e), Fa = !1, nn = e;
        return;
      }
      var n = t;
      if (!S0(e, t)) {
        Lp(e) && (yp(nn, e), bp()), t = kl(n);
        var a = nn;
        if (!t || !S0(e, t)) {
          x0(nn, e), Fa = !1, nn = e;
          return;
        }
        b0(a, n);
      }
    }
  }
  function Ix(e, t, n) {
    var a = e.stateNode, i = !eo, u = lx(a, e.type, e.memoizedProps, t, n, e, i);
    return e.updateQueue = u, u !== null;
  }
  function Yx(e) {
    var t = e.stateNode, n = e.memoizedProps, a = ux(t, n, e);
    if (a) {
      var i = nn;
      if (i !== null)
        switch (i.tag) {
          case L: {
            var u = i.stateNode.containerInfo, m = (i.mode & Be) !== Le;
            hx(
              u,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              m
            );
            break;
          }
          case N: {
            var g = i.type, b = i.memoizedProps, E = i.stateNode, R = (i.mode & Be) !== Le;
            vx(
              g,
              b,
              E,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              R
            );
            break;
          }
        }
    }
    return a;
  }
  function Kx(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    cx(n, e);
  }
  function Wx(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return fx(n);
  }
  function C0(e) {
    for (var t = e.return; t !== null && t.tag !== N && t.tag !== L && t.tag !== A; )
      t = t.return;
    nn = t;
  }
  function qc(e) {
    if (e !== nn)
      return !1;
    if (!Fa)
      return C0(e), Fa = !0, !1;
    if (e.tag !== L && (e.tag !== N || px(e.type) && !np(e.type, e.memoizedProps))) {
      var t = ga;
      if (t)
        if (Lp(e))
          E0(e), bp();
        else
          for (; t; )
            b0(e, t), t = kl(t);
    }
    return C0(e), e.tag === A ? ga = Wx(e) : ga = nn ? kl(e.stateNode) : null, !0;
  }
  function Gx() {
    return Fa && ga !== null;
  }
  function E0(e) {
    for (var t = ga; t; )
      L0(e, t), t = kl(t);
  }
  function Xo() {
    nn = null, ga = null, Fa = !1, eo = !1;
  }
  function N0() {
    ui !== null && (yL(ui), ui = null);
  }
  function an() {
    return Fa;
  }
  function Sp(e) {
    ui === null ? ui = [e] : ui.push(e);
  }
  var qx = s.ReactCurrentBatchConfig, Qx = null;
  function Xx() {
    return qx.transition;
  }
  var _a = {
    recordUnsafeLifecycleWarnings: function(e, t) {
    },
    flushPendingUnsafeLifecycleWarnings: function() {
    },
    recordLegacyContextWarning: function(e, t) {
    },
    flushLegacyContextWarning: function() {
    },
    discardPendingWarnings: function() {
    }
  };
  {
    var Jx = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & Nt && (t = n), n = n.return;
      return t;
    }, to = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, Pl = [], Al = [], Ml = [], Vl = [], Ul = [], zl = [], no = /* @__PURE__ */ new Set();
    _a.recordUnsafeLifecycleWarnings = function(e, t) {
      no.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && Pl.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillMount == "function" && Al.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ml.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ul.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillUpdate == "function" && zl.push(e));
    }, _a.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      Pl.length > 0 && (Pl.forEach(function(O) {
        e.add(Fe(O) || "Component"), no.add(O.type);
      }), Pl = []);
      var t = /* @__PURE__ */ new Set();
      Al.length > 0 && (Al.forEach(function(O) {
        t.add(Fe(O) || "Component"), no.add(O.type);
      }), Al = []);
      var n = /* @__PURE__ */ new Set();
      Ml.length > 0 && (Ml.forEach(function(O) {
        n.add(Fe(O) || "Component"), no.add(O.type);
      }), Ml = []);
      var a = /* @__PURE__ */ new Set();
      Vl.length > 0 && (Vl.forEach(function(O) {
        a.add(Fe(O) || "Component"), no.add(O.type);
      }), Vl = []);
      var i = /* @__PURE__ */ new Set();
      Ul.length > 0 && (Ul.forEach(function(O) {
        i.add(Fe(O) || "Component"), no.add(O.type);
      }), Ul = []);
      var u = /* @__PURE__ */ new Set();
      if (zl.length > 0 && (zl.forEach(function(O) {
        u.add(Fe(O) || "Component"), no.add(O.type);
      }), zl = []), t.size > 0) {
        var m = to(t);
        c(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
      }
      if (a.size > 0) {
        var g = to(a);
        c(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
      }
      if (u.size > 0) {
        var b = to(u);
        c(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
      }
      if (e.size > 0) {
        var E = to(e);
        f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
      }
      if (n.size > 0) {
        var R = to(n);
        f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
      }
      if (i.size > 0) {
        var F = to(i);
        f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
      }
    };
    var Qc = /* @__PURE__ */ new Map(), R0 = /* @__PURE__ */ new Set();
    _a.recordLegacyContextWarning = function(e, t) {
      var n = Jx(e);
      if (n === null) {
        c("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!R0.has(e.type)) {
        var a = Qc.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Qc.set(n, a)), a.push(e));
      }
    }, _a.flushLegacyContextWarning = function() {
      Qc.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(u) {
            a.add(Fe(u) || "Component"), R0.add(u.type);
          });
          var i = to(a);
          try {
            xt(n), c(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i);
          } finally {
            Qt();
          }
        }
      });
    }, _a.discardPendingWarnings = function() {
      Pl = [], Al = [], Ml = [], Vl = [], Ul = [], zl = [], Qc = /* @__PURE__ */ new Map();
    };
  }
  var Cp, Ep, Np, Rp, wp, w0 = function(e, t) {
  };
  Cp = !1, Ep = !1, Np = {}, Rp = {}, wp = {}, w0 = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = Fe(t) || "Component";
      Rp[n] || (Rp[n] = !0, c('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function Zx(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function $l(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != "function" && typeof a != "object") {
      if ((e.mode & Nt || Yn) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== p) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !Zx(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var i = Fe(e) || "Component";
        Np[i] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, a), Np[i] = !0);
      }
      if (n._owner) {
        var u = n._owner, m;
        if (u) {
          var g = u;
          if (g.tag !== p)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          m = g.stateNode;
        }
        if (!m)
          throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
        var b = m;
        An(a, "ref");
        var E = "" + a;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
          return t.ref;
        var R = function(F) {
          var O = b.refs;
          F === null ? delete O[E] : O[E] = F;
        };
        return R._stringRef = E, R;
      } else {
        if (typeof a != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!n._owner)
          throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return a;
  }
  function Xc(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Jc(e) {
    {
      var t = Fe(e) || "Component";
      if (wp[t])
        return;
      wp[t] = !0, c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function j0(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function T0(e) {
    function t(V, G) {
      if (e) {
        var U = V.deletions;
        U === null ? (V.deletions = [G], V.flags |= Vi) : U.push(G);
      }
    }
    function n(V, G) {
      if (!e)
        return null;
      for (var U = G; U !== null; )
        t(V, U), U = U.sibling;
      return null;
    }
    function a(V, G) {
      for (var U = /* @__PURE__ */ new Map(), Z = G; Z !== null; )
        Z.key !== null ? U.set(Z.key, Z) : U.set(Z.index, Z), Z = Z.sibling;
      return U;
    }
    function i(V, G) {
      var U = fo(V, G);
      return U.index = 0, U.sibling = null, U;
    }
    function u(V, G, U) {
      if (V.index = U, !e)
        return V.flags |= Og, G;
      var Z = V.alternate;
      if (Z !== null) {
        var ce = Z.index;
        return ce < G ? (V.flags |= _t, G) : ce;
      } else
        return V.flags |= _t, G;
    }
    function m(V) {
      return e && V.alternate === null && (V.flags |= _t), V;
    }
    function g(V, G, U, Z) {
      if (G === null || G.tag !== j) {
        var ce = Sv(U, V.mode, Z);
        return ce.return = V, ce;
      } else {
        var oe = i(G, U);
        return oe.return = V, oe;
      }
    }
    function b(V, G, U, Z) {
      var ce = U.type;
      if (ce === D)
        return R(V, G, U.props.children, Z, U.key);
      if (G !== null && (G.elementType === ce || // Keep this check inline so it only runs on the false path:
      _L(G, U) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof ce == "object" && ce !== null && ce.$$typeof === Ve && j0(ce) === G.type)) {
        var oe = i(G, U.props);
        return oe.ref = $l(V, G, U), oe.return = V, oe._debugSource = U._source, oe._debugOwner = U._owner, oe;
      }
      var Ce = xv(U, V.mode, Z);
      return Ce.ref = $l(V, G, U), Ce.return = V, Ce;
    }
    function E(V, G, U, Z) {
      if (G === null || G.tag !== x || G.stateNode.containerInfo !== U.containerInfo || G.stateNode.implementation !== U.implementation) {
        var ce = Cv(U, V.mode, Z);
        return ce.return = V, ce;
      } else {
        var oe = i(G, U.children || []);
        return oe.return = V, oe;
      }
    }
    function R(V, G, U, Z, ce) {
      if (G === null || G.tag !== M) {
        var oe = bi(U, V.mode, Z, ce);
        return oe.return = V, oe;
      } else {
        var Ce = i(G, U);
        return Ce.return = V, Ce;
      }
    }
    function F(V, G, U) {
      if (typeof G == "string" && G !== "" || typeof G == "number") {
        var Z = Sv("" + G, V.mode, U);
        return Z.return = V, Z;
      }
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Ka: {
            var ce = xv(G, V.mode, U);
            return ce.ref = $l(V, null, G), ce.return = V, ce;
          }
          case Ra: {
            var oe = Cv(G, V.mode, U);
            return oe.return = V, oe;
          }
          case Ve: {
            var Ce = G._payload, ke = G._init;
            return F(V, ke(Ce), U);
          }
        }
        if (Ze(G) || mr(G)) {
          var lt = bi(G, V.mode, U, null);
          return lt.return = V, lt;
        }
        Xc(V, G);
      }
      return typeof G == "function" && Jc(V), null;
    }
    function O(V, G, U, Z) {
      var ce = G !== null ? G.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return ce !== null ? null : g(V, G, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ka:
            return U.key === ce ? b(V, G, U, Z) : null;
          case Ra:
            return U.key === ce ? E(V, G, U, Z) : null;
          case Ve: {
            var oe = U._payload, Ce = U._init;
            return O(V, G, Ce(oe), Z);
          }
        }
        if (Ze(U) || mr(U))
          return ce !== null ? null : R(V, G, U, Z, null);
        Xc(V, U);
      }
      return typeof U == "function" && Jc(V), null;
    }
    function $(V, G, U, Z, ce) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
        var oe = V.get(U) || null;
        return g(G, oe, "" + Z, ce);
      }
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Ka: {
            var Ce = V.get(Z.key === null ? U : Z.key) || null;
            return b(G, Ce, Z, ce);
          }
          case Ra: {
            var ke = V.get(Z.key === null ? U : Z.key) || null;
            return E(G, ke, Z, ce);
          }
          case Ve:
            var lt = Z._payload, qe = Z._init;
            return $(V, G, U, qe(lt), ce);
        }
        if (Ze(Z) || mr(Z)) {
          var Dt = V.get(U) || null;
          return R(G, Dt, Z, ce, null);
        }
        Xc(G, Z);
      }
      return typeof Z == "function" && Jc(G), null;
    }
    function I(V, G, U) {
      {
        if (typeof V != "object" || V === null)
          return G;
        switch (V.$$typeof) {
          case Ka:
          case Ra:
            w0(V, U);
            var Z = V.key;
            if (typeof Z != "string")
              break;
            if (G === null) {
              G = /* @__PURE__ */ new Set(), G.add(Z);
              break;
            }
            if (!G.has(Z)) {
              G.add(Z);
              break;
            }
            c("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
            break;
          case Ve:
            var ce = V._payload, oe = V._init;
            I(oe(ce), G, U);
            break;
        }
      }
      return G;
    }
    function W(V, G, U, Z) {
      for (var ce = null, oe = 0; oe < U.length; oe++) {
        var Ce = U[oe];
        ce = I(Ce, ce, V);
      }
      for (var ke = null, lt = null, qe = G, Dt = 0, Qe = 0, Rt = null; qe !== null && Qe < U.length; Qe++) {
        qe.index > Qe ? (Rt = qe, qe = null) : Rt = qe.sibling;
        var En = O(V, qe, U[Qe], Z);
        if (En === null) {
          qe === null && (qe = Rt);
          break;
        }
        e && qe && En.alternate === null && t(V, qe), Dt = u(En, Dt, Qe), lt === null ? ke = En : lt.sibling = En, lt = En, qe = Rt;
      }
      if (Qe === U.length) {
        if (n(V, qe), an()) {
          var fn = Qe;
          Ji(V, fn);
        }
        return ke;
      }
      if (qe === null) {
        for (; Qe < U.length; Qe++) {
          var ia = F(V, U[Qe], Z);
          ia !== null && (Dt = u(ia, Dt, Qe), lt === null ? ke = ia : lt.sibling = ia, lt = ia);
        }
        if (an()) {
          var Fn = Qe;
          Ji(V, Fn);
        }
        return ke;
      }
      for (var _n = a(V, qe); Qe < U.length; Qe++) {
        var Nn = $(_n, V, Qe, U[Qe], Z);
        Nn !== null && (e && Nn.alternate !== null && _n.delete(Nn.key === null ? Qe : Nn.key), Dt = u(Nn, Dt, Qe), lt === null ? ke = Nn : lt.sibling = Nn, lt = Nn);
      }
      if (e && _n.forEach(function(vs) {
        return t(V, vs);
      }), an()) {
        var Mr = Qe;
        Ji(V, Mr);
      }
      return ke;
    }
    function ie(V, G, U, Z) {
      var ce = mr(U);
      if (typeof ce != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        U[Symbol.toStringTag] === "Generator" && (Ep || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ep = !0), U.entries === ce && (Cp || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Cp = !0);
        var oe = ce.call(U);
        if (oe)
          for (var Ce = null, ke = oe.next(); !ke.done; ke = oe.next()) {
            var lt = ke.value;
            Ce = I(lt, Ce, V);
          }
      }
      var qe = ce.call(U);
      if (qe == null)
        throw new Error("An iterable object provided no iterator.");
      for (var Dt = null, Qe = null, Rt = G, En = 0, fn = 0, ia = null, Fn = qe.next(); Rt !== null && !Fn.done; fn++, Fn = qe.next()) {
        Rt.index > fn ? (ia = Rt, Rt = null) : ia = Rt.sibling;
        var _n = O(V, Rt, Fn.value, Z);
        if (_n === null) {
          Rt === null && (Rt = ia);
          break;
        }
        e && Rt && _n.alternate === null && t(V, Rt), En = u(_n, En, fn), Qe === null ? Dt = _n : Qe.sibling = _n, Qe = _n, Rt = ia;
      }
      if (Fn.done) {
        if (n(V, Rt), an()) {
          var Nn = fn;
          Ji(V, Nn);
        }
        return Dt;
      }
      if (Rt === null) {
        for (; !Fn.done; fn++, Fn = qe.next()) {
          var Mr = F(V, Fn.value, Z);
          Mr !== null && (En = u(Mr, En, fn), Qe === null ? Dt = Mr : Qe.sibling = Mr, Qe = Mr);
        }
        if (an()) {
          var vs = fn;
          Ji(V, vs);
        }
        return Dt;
      }
      for (var Lu = a(V, Rt); !Fn.done; fn++, Fn = qe.next()) {
        var or = $(Lu, V, fn, Fn.value, Z);
        or !== null && (e && or.alternate !== null && Lu.delete(or.key === null ? fn : or.key), En = u(or, En, fn), Qe === null ? Dt = or : Qe.sibling = or, Qe = or);
      }
      if (e && Lu.forEach(function(NC) {
        return t(V, NC);
      }), an()) {
        var EC = fn;
        Ji(V, EC);
      }
      return Dt;
    }
    function ye(V, G, U, Z) {
      if (G !== null && G.tag === j) {
        n(V, G.sibling);
        var ce = i(G, U);
        return ce.return = V, ce;
      }
      n(V, G);
      var oe = Sv(U, V.mode, Z);
      return oe.return = V, oe;
    }
    function he(V, G, U, Z) {
      for (var ce = U.key, oe = G; oe !== null; ) {
        if (oe.key === ce) {
          var Ce = U.type;
          if (Ce === D) {
            if (oe.tag === M) {
              n(V, oe.sibling);
              var ke = i(oe, U.props.children);
              return ke.return = V, ke._debugSource = U._source, ke._debugOwner = U._owner, ke;
            }
          } else if (oe.elementType === Ce || // Keep this check inline so it only runs on the false path:
          _L(oe, U) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ve && j0(Ce) === oe.type) {
            n(V, oe.sibling);
            var lt = i(oe, U.props);
            return lt.ref = $l(V, oe, U), lt.return = V, lt._debugSource = U._source, lt._debugOwner = U._owner, lt;
          }
          n(V, oe);
          break;
        } else
          t(V, oe);
        oe = oe.sibling;
      }
      if (U.type === D) {
        var qe = bi(U.props.children, V.mode, Z, U.key);
        return qe.return = V, qe;
      } else {
        var Dt = xv(U, V.mode, Z);
        return Dt.ref = $l(V, G, U), Dt.return = V, Dt;
      }
    }
    function Ye(V, G, U, Z) {
      for (var ce = U.key, oe = G; oe !== null; ) {
        if (oe.key === ce)
          if (oe.tag === x && oe.stateNode.containerInfo === U.containerInfo && oe.stateNode.implementation === U.implementation) {
            n(V, oe.sibling);
            var Ce = i(oe, U.children || []);
            return Ce.return = V, Ce;
          } else {
            n(V, oe);
            break;
          }
        else
          t(V, oe);
        oe = oe.sibling;
      }
      var ke = Cv(U, V.mode, Z);
      return ke.return = V, ke;
    }
    function Ue(V, G, U, Z) {
      var ce = typeof U == "object" && U !== null && U.type === D && U.key === null;
      if (ce && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ka:
            return m(he(V, G, U, Z));
          case Ra:
            return m(Ye(V, G, U, Z));
          case Ve:
            var oe = U._payload, Ce = U._init;
            return Ue(V, G, Ce(oe), Z);
        }
        if (Ze(U))
          return W(V, G, U, Z);
        if (mr(U))
          return ie(V, G, U, Z);
        Xc(V, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? m(ye(V, G, "" + U, Z)) : (typeof U == "function" && Jc(V), n(V, G));
    }
    return Ue;
  }
  var Jo = T0(!0), D0 = T0(!1);
  function e9(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, a = fo(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        n = n.sibling, a = a.sibling = fo(n, n.pendingProps), a.return = t;
      a.sibling = null;
    }
  }
  function t9(e, t) {
    for (var n = e.child; n !== null; )
      HS(n, t), n = n.sibling;
  }
  var jp = oi(null), Tp;
  Tp = {};
  var Zc = null, Zo = null, Dp = null, ef = !1;
  function tf() {
    Zc = null, Zo = null, Dp = null, ef = !1;
  }
  function k0() {
    ef = !0;
  }
  function O0() {
    ef = !1;
  }
  function F0(e, t, n) {
    Sn(jp, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Tp && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Tp;
  }
  function kp(e, t) {
    var n = jp.current;
    xn(jp, t), e._currentValue = n;
  }
  function Op(e, t, n) {
    for (var a = e; a !== null; ) {
      var i = a.alternate;
      if (Mo(a.childLanes, t) ? i !== null && !Mo(i.childLanes, t) && (i.childLanes = Pe(i.childLanes, t)) : (a.childLanes = Pe(a.childLanes, t), i !== null && (i.childLanes = Pe(i.childLanes, t))), a === n)
        break;
      a = a.return;
    }
    a !== n && c("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function n9(e, t, n) {
    a9(e, t, n);
  }
  function a9(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = void 0, u = a.dependencies;
      if (u !== null) {
        i = a.child;
        for (var m = u.firstContext; m !== null; ) {
          if (m.context === t) {
            if (a.tag === p) {
              var g = il(n), b = kr(pt, g);
              b.tag = af;
              var E = a.updateQueue;
              if (E !== null) {
                var R = E.shared, F = R.pending;
                F === null ? b.next = b : (b.next = F.next, F.next = b), R.pending = b;
              }
            }
            a.lanes = Pe(a.lanes, n);
            var O = a.alternate;
            O !== null && (O.lanes = Pe(O.lanes, n)), Op(a.return, n, e), u.lanes = Pe(u.lanes, n);
            break;
          }
          m = m.next;
        }
      } else if (a.tag === _)
        i = a.type === e.type ? null : a.child;
      else if (a.tag === le) {
        var $ = a.return;
        if ($ === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        $.lanes = Pe($.lanes, n);
        var I = $.alternate;
        I !== null && (I.lanes = Pe(I.lanes, n)), Op($, n, e), i = a.sibling;
      } else
        i = a.child;
      if (i !== null)
        i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          var W = i.sibling;
          if (W !== null) {
            W.return = i.return, i = W;
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function es(e, t) {
    Zc = e, Zo = null, Dp = null;
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (Zn(n.lanes, t) && nu(), n.firstContext = null);
    }
  }
  function Pt(e) {
    ef && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (Dp !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Zo === null) {
        if (Zc === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Zo = n, Zc.dependencies = {
          lanes: Q,
          firstContext: n
        };
      } else
        Zo = Zo.next = n;
    }
    return t;
  }
  var ao = null;
  function Fp(e) {
    ao === null ? ao = [e] : ao.push(e);
  }
  function r9() {
    if (ao !== null) {
      for (var e = 0; e < ao.length; e++) {
        var t = ao[e], n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var a = n.next, i = t.pending;
          if (i !== null) {
            var u = i.next;
            i.next = a, n.next = u;
          }
          t.pending = n;
        }
      }
      ao = null;
    }
  }
  function _0(e, t, n, a) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Fp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, nf(e, a);
  }
  function i9(e, t, n, a) {
    var i = t.interleaved;
    i === null ? (n.next = n, Fp(t)) : (n.next = i.next, i.next = n), t.interleaved = n;
  }
  function o9(e, t, n, a) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Fp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, nf(e, a);
  }
  function $n(e, t) {
    return nf(e, t);
  }
  var s9 = nf;
  function nf(e, t) {
    e.lanes = Pe(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Pe(n.lanes, t)), n === null && (e.flags & (_t | br)) !== xe && DL(e);
    for (var a = e, i = e.return; i !== null; )
      i.childLanes = Pe(i.childLanes, t), n = i.alternate, n !== null ? n.childLanes = Pe(n.childLanes, t) : (i.flags & (_t | br)) !== xe && DL(e), a = i, i = i.return;
    if (a.tag === L) {
      var u = a.stateNode;
      return u;
    } else
      return null;
  }
  var P0 = 0, A0 = 1, af = 2, _p = 3, rf = !1, Pp, of;
  Pp = !1, of = null;
  function Ap(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: Q
      },
      effects: null
    };
    e.updateQueue = t;
  }
  function M0(e, t) {
    var n = t.updateQueue, a = e.updateQueue;
    if (n === a) {
      var i = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
      };
      t.updateQueue = i;
    }
  }
  function kr(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: P0,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function ci(e, t, n) {
    var a = e.updateQueue;
    if (a === null)
      return null;
    var i = a.shared;
    if (of === i && !Pp && (c("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Pp = !0), iS()) {
      var u = i.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, s9(e, n);
    } else
      return o9(e, i, t, n);
  }
  function sf(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var i = a.shared;
      if (Qg(n)) {
        var u = i.lanes;
        u = Jg(u, e.pendingLanes);
        var m = Pe(u, n);
        i.lanes = m, jm(e, m);
      }
    }
  }
  function Mp(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null) {
      var i = a.updateQueue;
      if (n === i) {
        var u = null, m = null, g = n.firstBaseUpdate;
        if (g !== null) {
          var b = g;
          do {
            var E = {
              eventTime: b.eventTime,
              lane: b.lane,
              tag: b.tag,
              payload: b.payload,
              callback: b.callback,
              next: null
            };
            m === null ? u = m = E : (m.next = E, m = E), b = b.next;
          } while (b !== null);
          m === null ? u = m = t : (m.next = t, m = t);
        } else
          u = m = t;
        n = {
          baseState: i.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: m,
          shared: i.shared,
          effects: i.effects
        }, e.updateQueue = n;
        return;
      }
    }
    var R = n.lastBaseUpdate;
    R === null ? n.firstBaseUpdate = t : R.next = t, n.lastBaseUpdate = t;
  }
  function l9(e, t, n, a, i, u) {
    switch (n.tag) {
      case A0: {
        var m = n.payload;
        if (typeof m == "function") {
          k0();
          var g = m.call(u, a, i);
          {
            if (e.mode & Nt) {
              Jt(!0);
              try {
                m.call(u, a, i);
              } finally {
                Jt(!1);
              }
            }
            O0();
          }
          return g;
        }
        return m;
      }
      case _p:
        e.flags = e.flags & ~Tn | et;
      case P0: {
        var b = n.payload, E;
        if (typeof b == "function") {
          k0(), E = b.call(u, a, i);
          {
            if (e.mode & Nt) {
              Jt(!0);
              try {
                b.call(u, a, i);
              } finally {
                Jt(!1);
              }
            }
            O0();
          }
        } else
          E = b;
        return E == null ? a : ze({}, a, E);
      }
      case af:
        return rf = !0, a;
    }
    return a;
  }
  function lf(e, t, n, a) {
    var i = e.updateQueue;
    rf = !1, of = i.shared;
    var u = i.firstBaseUpdate, m = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var b = g, E = b.next;
      b.next = null, m === null ? u = E : m.next = E, m = b;
      var R = e.alternate;
      if (R !== null) {
        var F = R.updateQueue, O = F.lastBaseUpdate;
        O !== m && (O === null ? F.firstBaseUpdate = E : O.next = E, F.lastBaseUpdate = b);
      }
    }
    if (u !== null) {
      var $ = i.baseState, I = Q, W = null, ie = null, ye = null, he = u;
      do {
        var Ye = he.lane, Ue = he.eventTime;
        if (Mo(a, Ye)) {
          if (ye !== null) {
            var G = {
              eventTime: Ue,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Zt,
              tag: he.tag,
              payload: he.payload,
              callback: he.callback,
              next: null
            };
            ye = ye.next = G;
          }
          $ = l9(e, i, he, $, t, n);
          var U = he.callback;
          if (U !== null && // If the update was already committed, we should not queue its
          // callback again.
          he.lane !== Zt) {
            e.flags |= qd;
            var Z = i.effects;
            Z === null ? i.effects = [he] : Z.push(he);
          }
        } else {
          var V = {
            eventTime: Ue,
            lane: Ye,
            tag: he.tag,
            payload: he.payload,
            callback: he.callback,
            next: null
          };
          ye === null ? (ie = ye = V, W = $) : ye = ye.next = V, I = Pe(I, Ye);
        }
        if (he = he.next, he === null) {
          if (g = i.shared.pending, g === null)
            break;
          var ce = g, oe = ce.next;
          ce.next = null, he = oe, i.lastBaseUpdate = ce, i.shared.pending = null;
        }
      } while (!0);
      ye === null && (W = $), i.baseState = W, i.firstBaseUpdate = ie, i.lastBaseUpdate = ye;
      var Ce = i.shared.interleaved;
      if (Ce !== null) {
        var ke = Ce;
        do
          I = Pe(I, ke.lane), ke = ke.next;
        while (ke !== Ce);
      } else u === null && (i.shared.lanes = Q);
      pu(I), e.lanes = I, e.memoizedState = $;
    }
    of = null;
  }
  function u9(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function V0() {
    rf = !1;
  }
  function uf() {
    return rf;
  }
  function U0(e, t, n) {
    var a = t.effects;
    if (t.effects = null, a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i], m = u.callback;
        m !== null && (u.callback = null, u9(m, n));
      }
  }
  var Hl = {}, fi = oi(Hl), Bl = oi(Hl), cf = oi(Hl);
  function ff(e) {
    if (e === Hl)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function z0() {
    var e = ff(cf.current);
    return e;
  }
  function Vp(e, t) {
    Sn(cf, t, e), Sn(Bl, e, e), Sn(fi, Hl, e);
    var n = R7(t);
    xn(fi, e), Sn(fi, n, e);
  }
  function ts(e) {
    xn(fi, e), xn(Bl, e), xn(cf, e);
  }
  function Up() {
    var e = ff(fi.current);
    return e;
  }
  function $0(e) {
    ff(cf.current);
    var t = ff(fi.current), n = w7(t, e.type);
    t !== n && (Sn(Bl, e, e), Sn(fi, n, e));
  }
  function zp(e) {
    Bl.current === e && (xn(fi, e), xn(Bl, e));
  }
  var c9 = 0, H0 = 1, B0 = 1, Il = 2, Pa = oi(c9);
  function $p(e, t) {
    return (e & t) !== 0;
  }
  function ns(e) {
    return e & H0;
  }
  function Hp(e, t) {
    return e & H0 | t;
  }
  function f9(e, t) {
    return e | t;
  }
  function di(e, t) {
    Sn(Pa, t, e);
  }
  function as(e) {
    xn(Pa, e);
  }
  function d9(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function df(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === A) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || o0(a) || op(a))
            return t;
        }
      } else if (t.tag === pe && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var i = (t.flags & et) !== xe;
        if (i)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Hn = (
    /*   */
    0
  ), Ut = (
    /* */
    1
  ), Za = (
    /*  */
    2
  ), zt = (
    /*    */
    4
  ), rn = (
    /*   */
    8
  ), Bp = [];
  function Ip() {
    for (var e = 0; e < Bp.length; e++) {
      var t = Bp[e];
      t._workInProgressVersionPrimary = null;
    }
    Bp.length = 0;
  }
  function m9(e, t) {
    var n = t._getVersion, a = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var ue = s.ReactCurrentDispatcher, Yl = s.ReactCurrentBatchConfig, Yp, rs;
  Yp = /* @__PURE__ */ new Set();
  var ro = Q, st = null, $t = null, Ht = null, mf = !1, Kl = !1, Wl = 0, p9 = 0, h9 = 25, q = null, ya = null, mi = -1, Kp = !1;
  function nt() {
    {
      var e = q;
      ya === null ? ya = [e] : ya.push(e);
    }
  }
  function te() {
    {
      var e = q;
      ya !== null && (mi++, ya[mi] !== e && v9(e));
    }
  }
  function is(e) {
    e != null && !Ze(e) && c("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", q, typeof e);
  }
  function v9(e) {
    {
      var t = Fe(st);
      if (!Yp.has(t) && (Yp.add(t), ya !== null)) {
        for (var n = "", a = 30, i = 0; i <= mi; i++) {
          for (var u = ya[i], m = i === mi ? e : u, g = i + 1 + ". " + u; g.length < a; )
            g += " ";
          g += m + `
`, n += g;
        }
        c(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
      }
    }
  }
  function Cn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Wp(e, t) {
    if (Kp)
      return !1;
    if (t === null)
      return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", q), !1;
    e.length !== t.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!na(e[n], t[n]))
        return !1;
    return !0;
  }
  function os(e, t, n, a, i, u) {
    ro = u, st = t, ya = e !== null ? e._debugHookTypes : null, mi = -1, Kp = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? ue.current = fy : ya !== null ? ue.current = cy : ue.current = uy;
    var m = n(a, i);
    if (Kl) {
      var g = 0;
      do {
        if (Kl = !1, Wl = 0, g >= h9)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        g += 1, Kp = !1, $t = null, Ht = null, t.updateQueue = null, mi = -1, ue.current = dy, m = n(a, i);
      } while (Kl);
    }
    ue.current = Rf, t._debugHookTypes = ya;
    var b = $t !== null && $t.next !== null;
    if (ro = Q, st = null, $t = null, Ht = null, q = null, ya = null, mi = -1, e !== null && (e.flags & Sr) !== (t.flags & Sr) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Be) !== Le && c("Internal React error: Expected static flag was missing. Please notify the React team."), mf = !1, b)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return m;
  }
  function ss() {
    var e = Wl !== 0;
    return Wl = 0, e;
  }
  function I0(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & qa) !== Le ? t.flags &= ~(oc | xr | Ta | Ke) : t.flags &= ~(Ta | Ke), e.lanes = mc(e.lanes, n);
  }
  function Y0() {
    if (ue.current = Rf, mf) {
      for (var e = st.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      mf = !1;
    }
    ro = Q, st = null, $t = null, Ht = null, ya = null, mi = -1, q = null, ry = !1, Kl = !1, Wl = 0;
  }
  function er() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ht === null ? st.memoizedState = Ht = e : Ht = Ht.next = e, Ht;
  }
  function La() {
    var e;
    if ($t === null) {
      var t = st.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = $t.next;
    var n;
    if (Ht === null ? n = st.memoizedState : n = Ht.next, n !== null)
      Ht = n, n = Ht.next, $t = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      $t = e;
      var a = {
        memoizedState: $t.memoizedState,
        baseState: $t.baseState,
        baseQueue: $t.baseQueue,
        queue: $t.queue,
        next: null
      };
      Ht === null ? st.memoizedState = Ht = a : Ht = Ht.next = a;
    }
    return Ht;
  }
  function K0() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Gp(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qp(e, t, n) {
    var a = er(), i;
    n !== void 0 ? i = n(t) : i = t, a.memoizedState = a.baseState = i;
    var u = {
      pending: null,
      interleaved: null,
      lanes: Q,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: i
    };
    a.queue = u;
    var m = u.dispatch = b9.bind(null, st, u);
    return [a.memoizedState, m];
  }
  function Qp(e, t, n) {
    var a = La(), i = a.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = $t, m = u.baseQueue, g = i.pending;
    if (g !== null) {
      if (m !== null) {
        var b = m.next, E = g.next;
        m.next = E, g.next = b;
      }
      u.baseQueue !== m && c("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), u.baseQueue = m = g, i.pending = null;
    }
    if (m !== null) {
      var R = m.next, F = u.baseState, O = null, $ = null, I = null, W = R;
      do {
        var ie = W.lane;
        if (Mo(ro, ie)) {
          if (I !== null) {
            var he = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Zt,
              action: W.action,
              hasEagerState: W.hasEagerState,
              eagerState: W.eagerState,
              next: null
            };
            I = I.next = he;
          }
          if (W.hasEagerState)
            F = W.eagerState;
          else {
            var Ye = W.action;
            F = e(F, Ye);
          }
        } else {
          var ye = {
            lane: ie,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          I === null ? ($ = I = ye, O = F) : I = I.next = ye, st.lanes = Pe(st.lanes, ie), pu(ie);
        }
        W = W.next;
      } while (W !== null && W !== R);
      I === null ? O = F : I.next = $, na(F, a.memoizedState) || nu(), a.memoizedState = F, a.baseState = O, a.baseQueue = I, i.lastRenderedState = F;
    }
    var Ue = i.interleaved;
    if (Ue !== null) {
      var V = Ue;
      do {
        var G = V.lane;
        st.lanes = Pe(st.lanes, G), pu(G), V = V.next;
      } while (V !== Ue);
    } else m === null && (i.lanes = Q);
    var U = i.dispatch;
    return [a.memoizedState, U];
  }
  function Xp(e, t, n) {
    var a = La(), i = a.queue;
    if (i === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    i.lastRenderedReducer = e;
    var u = i.dispatch, m = i.pending, g = a.memoizedState;
    if (m !== null) {
      i.pending = null;
      var b = m.next, E = b;
      do {
        var R = E.action;
        g = e(g, R), E = E.next;
      } while (E !== b);
      na(g, a.memoizedState) || nu(), a.memoizedState = g, a.baseQueue === null && (a.baseState = g), i.lastRenderedState = g;
    }
    return [g, u];
  }
  function zT(e, t, n) {
  }
  function $T(e, t, n) {
  }
  function Jp(e, t, n) {
    var a = st, i = er(), u, m = an();
    if (m) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      u = n(), rs || u !== n() && (c("The result of getServerSnapshot should be cached to avoid an infinite loop"), rs = !0);
    } else {
      if (u = t(), !rs) {
        var g = t();
        na(u, g) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), rs = !0);
      }
      var b = Yf();
      if (b === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      dc(b, ro) || W0(a, t, u);
    }
    i.memoizedState = u;
    var E = {
      value: u,
      getSnapshot: t
    };
    return i.queue = E, yf(q0.bind(null, a, E, e), [e]), a.flags |= Ta, Gl(Ut | rn, G0.bind(null, a, E, u, t), void 0, null), u;
  }
  function pf(e, t, n) {
    var a = st, i = La(), u = t();
    if (!rs) {
      var m = t();
      na(u, m) || (c("The result of getSnapshot should be cached to avoid an infinite loop"), rs = !0);
    }
    var g = i.memoizedState, b = !na(g, u);
    b && (i.memoizedState = u, nu());
    var E = i.queue;
    if (Ql(q0.bind(null, a, E, e), [e]), E.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Ht !== null && Ht.memoizedState.tag & Ut) {
      a.flags |= Ta, Gl(Ut | rn, G0.bind(null, a, E, u, t), void 0, null);
      var R = Yf();
      if (R === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      dc(R, ro) || W0(a, t, u);
    }
    return u;
  }
  function W0(e, t, n) {
    e.flags |= ic;
    var a = {
      getSnapshot: t,
      value: n
    }, i = st.updateQueue;
    if (i === null)
      i = K0(), st.updateQueue = i, i.stores = [a];
    else {
      var u = i.stores;
      u === null ? i.stores = [a] : u.push(a);
    }
  }
  function G0(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Q0(t) && X0(e);
  }
  function q0(e, t, n) {
    var a = function() {
      Q0(t) && X0(e);
    };
    return n(a);
  }
  function Q0(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var a = t();
      return !na(n, a);
    } catch {
      return !0;
    }
  }
  function X0(e) {
    var t = $n(e, Te);
    t !== null && Kt(t, e, Te, pt);
  }
  function hf(e) {
    var t = er();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: Q,
      dispatch: null,
      lastRenderedReducer: Gp,
      lastRenderedState: e
    };
    t.queue = n;
    var a = n.dispatch = x9.bind(null, st, n);
    return [t.memoizedState, a];
  }
  function Zp(e) {
    return Qp(Gp);
  }
  function eh(e) {
    return Xp(Gp);
  }
  function Gl(e, t, n, a) {
    var i = {
      tag: e,
      create: t,
      destroy: n,
      deps: a,
      // Circular
      next: null
    }, u = st.updateQueue;
    if (u === null)
      u = K0(), st.updateQueue = u, u.lastEffect = i.next = i;
    else {
      var m = u.lastEffect;
      if (m === null)
        u.lastEffect = i.next = i;
      else {
        var g = m.next;
        m.next = i, i.next = g, u.lastEffect = i;
      }
    }
    return i;
  }
  function th(e) {
    var t = er();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function vf(e) {
    var t = La();
    return t.memoizedState;
  }
  function ql(e, t, n, a) {
    var i = er(), u = a === void 0 ? null : a;
    st.flags |= e, i.memoizedState = Gl(Ut | t, n, void 0, u);
  }
  function gf(e, t, n, a) {
    var i = La(), u = a === void 0 ? null : a, m = void 0;
    if ($t !== null) {
      var g = $t.memoizedState;
      if (m = g.destroy, u !== null) {
        var b = g.deps;
        if (Wp(u, b)) {
          i.memoizedState = Gl(t, n, m, u);
          return;
        }
      }
    }
    st.flags |= e, i.memoizedState = Gl(Ut | t, n, m, u);
  }
  function yf(e, t) {
    return (st.mode & qa) !== Le ? ql(oc | Ta | Jd, rn, e, t) : ql(Ta | Jd, rn, e, t);
  }
  function Ql(e, t) {
    return gf(Ta, rn, e, t);
  }
  function nh(e, t) {
    return ql(Ke, Za, e, t);
  }
  function Lf(e, t) {
    return gf(Ke, Za, e, t);
  }
  function ah(e, t) {
    var n = Ke;
    return n |= $i, (st.mode & qa) !== Le && (n |= xr), ql(n, zt, e, t);
  }
  function bf(e, t) {
    return gf(Ke, zt, e, t);
  }
  function J0(e, t) {
    if (typeof t == "function") {
      var n = t, a = e();
      return n(a), function() {
        n(null);
      };
    } else if (t != null) {
      var i = t;
      i.hasOwnProperty("current") || c("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(i).join(", ") + "}");
      var u = e();
      return i.current = u, function() {
        i.current = null;
      };
    }
  }
  function rh(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null, i = Ke;
    return i |= $i, (st.mode & qa) !== Le && (i |= xr), ql(i, zt, J0.bind(null, t, e), a);
  }
  function xf(e, t, n) {
    typeof t != "function" && c("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null;
    return gf(Ke, zt, J0.bind(null, t, e), a);
  }
  function g9(e, t) {
  }
  var Sf = g9;
  function ih(e, t) {
    var n = er(), a = t === void 0 ? null : t;
    return n.memoizedState = [e, a], e;
  }
  function Cf(e, t) {
    var n = La(), a = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && a !== null) {
      var u = i[1];
      if (Wp(a, u))
        return i[0];
    }
    return n.memoizedState = [e, a], e;
  }
  function oh(e, t) {
    var n = er(), a = t === void 0 ? null : t, i = e();
    return n.memoizedState = [i, a], i;
  }
  function Ef(e, t) {
    var n = La(), a = t === void 0 ? null : t, i = n.memoizedState;
    if (i !== null && a !== null) {
      var u = i[1];
      if (Wp(a, u))
        return i[0];
    }
    var m = e();
    return n.memoizedState = [m, a], m;
  }
  function sh(e) {
    var t = er();
    return t.memoizedState = e, e;
  }
  function Z0(e) {
    var t = La(), n = $t, a = n.memoizedState;
    return ty(t, a, e);
  }
  function ey(e) {
    var t = La();
    if ($t === null)
      return t.memoizedState = e, e;
    var n = $t.memoizedState;
    return ty(t, n, e);
  }
  function ty(e, t, n) {
    var a = !n8(ro);
    if (a) {
      if (!na(n, t)) {
        var i = Xg();
        st.lanes = Pe(st.lanes, i), pu(i), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, nu()), e.memoizedState = n, n;
  }
  function y9(e, t, n) {
    var a = ka();
    en(f8(a, Er)), e(!0);
    var i = Yl.transition;
    Yl.transition = {};
    var u = Yl.transition;
    Yl.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (en(a), Yl.transition = i, i === null && u._updatedFibers) {
        var m = u._updatedFibers.size;
        m > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
      }
    }
  }
  function lh() {
    var e = hf(!1), t = e[0], n = e[1], a = y9.bind(null, n), i = er();
    return i.memoizedState = a, [t, a];
  }
  function ny() {
    var e = Zp(), t = e[0], n = La(), a = n.memoizedState;
    return [t, a];
  }
  function ay() {
    var e = eh(), t = e[0], n = La(), a = n.memoizedState;
    return [t, a];
  }
  var ry = !1;
  function L9() {
    return ry;
  }
  function uh() {
    var e = er(), t = Yf(), n = t.identifierPrefix, a;
    if (an()) {
      var i = Ax();
      a = ":" + n + "R" + i;
      var u = Wl++;
      u > 0 && (a += "H" + u.toString(32)), a += ":";
    } else {
      var m = p9++;
      a = ":" + n + "r" + m.toString(32) + ":";
    }
    return e.memoizedState = a, a;
  }
  function Nf() {
    var e = La(), t = e.memoizedState;
    return t;
  }
  function b9(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = yi(e), i = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iy(e))
      oy(t, i);
    else {
      var u = _0(e, t, i, a);
      if (u !== null) {
        var m = On();
        Kt(u, e, a, m), sy(u, t, a);
      }
    }
    ly(e, a);
  }
  function x9(e, t, n) {
    typeof arguments[3] == "function" && c("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = yi(e), i = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iy(e))
      oy(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === Q && (u === null || u.lanes === Q)) {
        var m = t.lastRenderedReducer;
        if (m !== null) {
          var g;
          g = ue.current, ue.current = Aa;
          try {
            var b = t.lastRenderedState, E = m(b, n);
            if (i.hasEagerState = !0, i.eagerState = E, na(E, b)) {
              i9(e, t, i, a);
              return;
            }
          } catch {
          } finally {
            ue.current = g;
          }
        }
      }
      var R = _0(e, t, i, a);
      if (R !== null) {
        var F = On();
        Kt(R, e, a, F), sy(R, t, a);
      }
    }
    ly(e, a);
  }
  function iy(e) {
    var t = e.alternate;
    return e === st || t !== null && t === st;
  }
  function oy(e, t) {
    Kl = mf = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sy(e, t, n) {
    if (Qg(n)) {
      var a = t.lanes;
      a = Jg(a, e.pendingLanes);
      var i = Pe(a, n);
      t.lanes = i, jm(e, i);
    }
  }
  function ly(e, t, n) {
    am(e, t);
  }
  var Rf = {
    readContext: Pt,
    useCallback: Cn,
    useContext: Cn,
    useEffect: Cn,
    useImperativeHandle: Cn,
    useInsertionEffect: Cn,
    useLayoutEffect: Cn,
    useMemo: Cn,
    useReducer: Cn,
    useRef: Cn,
    useState: Cn,
    useDebugValue: Cn,
    useDeferredValue: Cn,
    useTransition: Cn,
    useMutableSource: Cn,
    useSyncExternalStore: Cn,
    useId: Cn,
    unstable_isNewReconciler: Je
  }, uy = null, cy = null, fy = null, dy = null, tr = null, Aa = null, wf = null;
  {
    var ch = function() {
      c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, De = function() {
      c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    uy = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", nt(), is(t), ih(e, t);
      },
      useContext: function(e) {
        return q = "useContext", nt(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", nt(), is(t), yf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", nt(), is(n), rh(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", nt(), is(t), nh(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", nt(), is(t), ah(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", nt(), is(t);
        var n = ue.current;
        ue.current = tr;
        try {
          return oh(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", nt();
        var a = ue.current;
        ue.current = tr;
        try {
          return qp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", nt(), th(e);
      },
      useState: function(e) {
        q = "useState", nt();
        var t = ue.current;
        ue.current = tr;
        try {
          return hf(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", nt(), void 0;
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", nt(), sh(e);
      },
      useTransition: function() {
        return q = "useTransition", nt(), lh();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", nt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", nt(), Jp(e, t, n);
      },
      useId: function() {
        return q = "useId", nt(), uh();
      },
      unstable_isNewReconciler: Je
    }, cy = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", te(), ih(e, t);
      },
      useContext: function(e) {
        return q = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", te(), yf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", te(), rh(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", te(), nh(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", te(), ah(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", te();
        var n = ue.current;
        ue.current = tr;
        try {
          return oh(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", te();
        var a = ue.current;
        ue.current = tr;
        try {
          return qp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", te(), th(e);
      },
      useState: function(e) {
        q = "useState", te();
        var t = ue.current;
        ue.current = tr;
        try {
          return hf(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", te(), void 0;
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", te(), sh(e);
      },
      useTransition: function() {
        return q = "useTransition", te(), lh();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", te(), Jp(e, t, n);
      },
      useId: function() {
        return q = "useId", te(), uh();
      },
      unstable_isNewReconciler: Je
    }, fy = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", te(), Cf(e, t);
      },
      useContext: function(e) {
        return q = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", te(), bf(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", te();
        var n = ue.current;
        ue.current = Aa;
        try {
          return Ef(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", te();
        var a = ue.current;
        ue.current = Aa;
        try {
          return Qp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", te(), vf();
      },
      useState: function(e) {
        q = "useState", te();
        var t = ue.current;
        ue.current = Aa;
        try {
          return Zp(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", te(), Sf();
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", te(), Z0(e);
      },
      useTransition: function() {
        return q = "useTransition", te(), ny();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", te(), pf(e, t);
      },
      useId: function() {
        return q = "useId", te(), Nf();
      },
      unstable_isNewReconciler: Je
    }, dy = {
      readContext: function(e) {
        return Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", te(), Cf(e, t);
      },
      useContext: function(e) {
        return q = "useContext", te(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", te(), bf(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", te();
        var n = ue.current;
        ue.current = wf;
        try {
          return Ef(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", te();
        var a = ue.current;
        ue.current = wf;
        try {
          return Xp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", te(), vf();
      },
      useState: function(e) {
        q = "useState", te();
        var t = ue.current;
        ue.current = wf;
        try {
          return eh(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", te(), Sf();
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", te(), ey(e);
      },
      useTransition: function() {
        return q = "useTransition", te(), ay();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", te(), pf(e, t);
      },
      useId: function() {
        return q = "useId", te(), Nf();
      },
      unstable_isNewReconciler: Je
    }, tr = {
      readContext: function(e) {
        return ch(), Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", De(), nt(), ih(e, t);
      },
      useContext: function(e) {
        return q = "useContext", De(), nt(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", De(), nt(), yf(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", De(), nt(), rh(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", De(), nt(), nh(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", De(), nt(), ah(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", De(), nt();
        var n = ue.current;
        ue.current = tr;
        try {
          return oh(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", De(), nt();
        var a = ue.current;
        ue.current = tr;
        try {
          return qp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", De(), nt(), th(e);
      },
      useState: function(e) {
        q = "useState", De(), nt();
        var t = ue.current;
        ue.current = tr;
        try {
          return hf(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", De(), nt(), void 0;
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", De(), nt(), sh(e);
      },
      useTransition: function() {
        return q = "useTransition", De(), nt(), lh();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", De(), nt(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", De(), nt(), Jp(e, t, n);
      },
      useId: function() {
        return q = "useId", De(), nt(), uh();
      },
      unstable_isNewReconciler: Je
    }, Aa = {
      readContext: function(e) {
        return ch(), Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", De(), te(), Cf(e, t);
      },
      useContext: function(e) {
        return q = "useContext", De(), te(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", De(), te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", De(), te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", De(), te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", De(), te(), bf(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", De(), te();
        var n = ue.current;
        ue.current = Aa;
        try {
          return Ef(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", De(), te();
        var a = ue.current;
        ue.current = Aa;
        try {
          return Qp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", De(), te(), vf();
      },
      useState: function(e) {
        q = "useState", De(), te();
        var t = ue.current;
        ue.current = Aa;
        try {
          return Zp(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", De(), te(), Sf();
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", De(), te(), Z0(e);
      },
      useTransition: function() {
        return q = "useTransition", De(), te(), ny();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", De(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", De(), te(), pf(e, t);
      },
      useId: function() {
        return q = "useId", De(), te(), Nf();
      },
      unstable_isNewReconciler: Je
    }, wf = {
      readContext: function(e) {
        return ch(), Pt(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", De(), te(), Cf(e, t);
      },
      useContext: function(e) {
        return q = "useContext", De(), te(), Pt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", De(), te(), Ql(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return q = "useImperativeHandle", De(), te(), xf(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", De(), te(), Lf(e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", De(), te(), bf(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", De(), te();
        var n = ue.current;
        ue.current = Aa;
        try {
          return Ef(e, t);
        } finally {
          ue.current = n;
        }
      },
      useReducer: function(e, t, n) {
        q = "useReducer", De(), te();
        var a = ue.current;
        ue.current = Aa;
        try {
          return Xp(e, t, n);
        } finally {
          ue.current = a;
        }
      },
      useRef: function(e) {
        return q = "useRef", De(), te(), vf();
      },
      useState: function(e) {
        q = "useState", De(), te();
        var t = ue.current;
        ue.current = Aa;
        try {
          return eh(e);
        } finally {
          ue.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return q = "useDebugValue", De(), te(), Sf();
      },
      useDeferredValue: function(e) {
        return q = "useDeferredValue", De(), te(), ey(e);
      },
      useTransition: function() {
        return q = "useTransition", De(), te(), ay();
      },
      useMutableSource: function(e, t, n) {
        return q = "useMutableSource", De(), te(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return q = "useSyncExternalStore", De(), te(), pf(e, t);
      },
      useId: function() {
        return q = "useId", De(), te(), Nf();
      },
      unstable_isNewReconciler: Je
    };
  }
  var pi = r.unstable_now, my = 0, jf = -1, Xl = -1, Tf = -1, fh = !1, Df = !1;
  function py() {
    return fh;
  }
  function S9() {
    Df = !0;
  }
  function C9() {
    fh = !1, Df = !1;
  }
  function E9() {
    fh = Df, Df = !1;
  }
  function hy() {
    return my;
  }
  function vy() {
    my = pi();
  }
  function dh(e) {
    Xl = pi(), e.actualStartTime < 0 && (e.actualStartTime = pi());
  }
  function gy(e) {
    Xl = -1;
  }
  function kf(e, t) {
    if (Xl >= 0) {
      var n = pi() - Xl;
      e.actualDuration += n, t && (e.selfBaseDuration = n), Xl = -1;
    }
  }
  function nr(e) {
    if (jf >= 0) {
      var t = pi() - jf;
      jf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case L:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
          case w:
            var i = n.stateNode;
            i.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function mh(e) {
    if (Tf >= 0) {
      var t = pi() - Tf;
      Tf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case L:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
          case w:
            var i = n.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function ar() {
    jf = pi();
  }
  function ph() {
    Tf = pi();
  }
  function hh(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function Ma(e, t) {
    if (e && e.defaultProps) {
      var n = ze({}, t), a = e.defaultProps;
      for (var i in a)
        n[i] === void 0 && (n[i] = a[i]);
      return n;
    }
    return t;
  }
  var vh = {}, gh, yh, Lh, bh, xh, yy, Of, Sh, Ch, Eh, Jl;
  {
    gh = /* @__PURE__ */ new Set(), yh = /* @__PURE__ */ new Set(), Lh = /* @__PURE__ */ new Set(), bh = /* @__PURE__ */ new Set(), Sh = /* @__PURE__ */ new Set(), xh = /* @__PURE__ */ new Set(), Ch = /* @__PURE__ */ new Set(), Eh = /* @__PURE__ */ new Set(), Jl = /* @__PURE__ */ new Set();
    var Ly = /* @__PURE__ */ new Set();
    Of = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Ly.has(n) || (Ly.add(n), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, yy = function(e, t) {
      if (t === void 0) {
        var n = We(e) || "Component";
        xh.has(n) || (xh.add(n), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(vh, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(vh);
  }
  function Nh(e, t, n, a) {
    var i = e.memoizedState, u = n(a, i);
    {
      if (e.mode & Nt) {
        Jt(!0);
        try {
          u = n(a, i);
        } finally {
          Jt(!1);
        }
      }
      yy(t, u);
    }
    var m = u == null ? i : ze({}, i, u);
    if (e.memoizedState = m, e.lanes === Q) {
      var g = e.updateQueue;
      g.baseState = m;
    }
  }
  var Rh = {
    isMounted: h4,
    enqueueSetState: function(e, t, n) {
      var a = To(e), i = On(), u = yi(a), m = kr(i, u);
      m.payload = t, n != null && (Of(n, "setState"), m.callback = n);
      var g = ci(a, m, u);
      g !== null && (Kt(g, a, u, i), sf(g, a, u)), am(a, u);
    },
    enqueueReplaceState: function(e, t, n) {
      var a = To(e), i = On(), u = yi(a), m = kr(i, u);
      m.tag = A0, m.payload = t, n != null && (Of(n, "replaceState"), m.callback = n);
      var g = ci(a, m, u);
      g !== null && (Kt(g, a, u, i), sf(g, a, u)), am(a, u);
    },
    enqueueForceUpdate: function(e, t) {
      var n = To(e), a = On(), i = yi(n), u = kr(a, i);
      u.tag = af, t != null && (Of(t, "forceUpdate"), u.callback = t);
      var m = ci(n, u, i);
      m !== null && (Kt(m, n, i, a), sf(m, n, i)), K4(n, i);
    }
  };
  function by(e, t, n, a, i, u, m) {
    var g = e.stateNode;
    if (typeof g.shouldComponentUpdate == "function") {
      var b = g.shouldComponentUpdate(a, u, m);
      {
        if (e.mode & Nt) {
          Jt(!0);
          try {
            b = g.shouldComponentUpdate(a, u, m);
          } finally {
            Jt(!1);
          }
        }
        b === void 0 && c("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", We(t) || "Component");
      }
      return b;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !bl(n, a) || !bl(i, u) : !0;
  }
  function N9(e, t, n) {
    var a = e.stateNode;
    {
      var i = We(t) || "Component", u = a.render;
      u || (t.prototype && typeof t.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", i) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", i)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", i), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", i), a.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", i), a.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", i), t.childContextTypes && !Jl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Nt) === Le && (Jl.add(t), c(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), t.contextTypes && !Jl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & Nt) === Le && (Jl.add(t), c(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, i)), a.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", i), t.contextType && t.contextTypes && !Ch.has(t) && (Ch.add(t), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", i)), typeof a.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", i), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", We(t) || "A pure component"), typeof a.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", i), typeof a.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", i), typeof a.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", i), typeof a.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", i);
      var m = a.props !== n;
      a.props !== void 0 && m && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", i, i), a.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", i, i), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !Lh.has(t) && (Lh.add(t), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", We(t))), typeof a.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof a.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof t.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", i);
      var g = a.state;
      g && (typeof g != "object" || Ze(g)) && c("%s.state: must be set to an object or null", i), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", i);
    }
  }
  function xy(e, t) {
    t.updater = Rh, e.stateNode = t, c4(t, e), t._reactInternalInstance = vh;
  }
  function Sy(e, t, n) {
    var a = !1, i = aa, u = aa, m = t.contextType;
    if ("contextType" in t) {
      var g = (
        // Allow null for conditional declaration
        m === null || m !== void 0 && m.$$typeof === $e && m._context === void 0
      );
      if (!g && !Eh.has(t)) {
        Eh.add(t);
        var b = "";
        m === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? b = " However, it is set to a " + typeof m + "." : m.$$typeof === be ? b = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", We(t) || "Component", b);
      }
    }
    if (typeof m == "object" && m !== null)
      u = Pt(m);
    else {
      i = Wo(e, t, !0);
      var E = t.contextTypes;
      a = E != null, u = a ? Go(e, i) : aa;
    }
    var R = new t(n, u);
    if (e.mode & Nt) {
      Jt(!0);
      try {
        R = new t(n, u);
      } finally {
        Jt(!1);
      }
    }
    var F = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
    xy(e, R);
    {
      if (typeof t.getDerivedStateFromProps == "function" && F === null) {
        var O = We(t) || "Component";
        yh.has(O) || (yh.add(O), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, R.state === null ? "null" : "undefined", O));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
        var $ = null, I = null, W = null;
        if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? W = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (W = "UNSAFE_componentWillUpdate"), $ !== null || I !== null || W !== null) {
          var ie = We(t) || "Component", ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          bh.has(ie) || (bh.add(ie), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ie, ye, $ !== null ? `
  ` + $ : "", I !== null ? `
  ` + I : "", W !== null ? `
  ` + W : ""));
        }
      }
    }
    return a && f0(e, i, u), R;
  }
  function R9(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Fe(e) || "Component"), Rh.enqueueReplaceState(t, t.state, null));
  }
  function Cy(e, t, n, a) {
    var i = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== i) {
      {
        var u = Fe(e) || "Component";
        gh.has(u) || (gh.add(u), c("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", u));
      }
      Rh.enqueueReplaceState(t, t.state, null);
    }
  }
  function wh(e, t, n, a) {
    N9(e, t, n);
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Ap(e);
    var u = t.contextType;
    if (typeof u == "object" && u !== null)
      i.context = Pt(u);
    else {
      var m = Wo(e, t, !0);
      i.context = Go(e, m);
    }
    {
      if (i.state === n) {
        var g = We(t) || "Component";
        Sh.has(g) || (Sh.add(g), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
      }
      e.mode & Nt && _a.recordLegacyContextWarning(e, i), _a.recordUnsafeLifecycleWarnings(e, i);
    }
    i.state = e.memoizedState;
    var b = t.getDerivedStateFromProps;
    if (typeof b == "function" && (Nh(e, t, b, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (R9(e, i), lf(e, n, i, a), i.state = e.memoizedState), typeof i.componentDidMount == "function") {
      var E = Ke;
      E |= $i, (e.mode & qa) !== Le && (E |= xr), e.flags |= E;
    }
  }
  function w9(e, t, n, a) {
    var i = e.stateNode, u = e.memoizedProps;
    i.props = u;
    var m = i.context, g = t.contextType, b = aa;
    if (typeof g == "object" && g !== null)
      b = Pt(g);
    else {
      var E = Wo(e, t, !0);
      b = Go(e, E);
    }
    var R = t.getDerivedStateFromProps, F = typeof R == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !F && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== n || m !== b) && Cy(e, i, n, b), V0();
    var O = e.memoizedState, $ = i.state = O;
    if (lf(e, n, i, a), $ = e.memoizedState, u === n && O === $ && !Hc() && !uf()) {
      if (typeof i.componentDidMount == "function") {
        var I = Ke;
        I |= $i, (e.mode & qa) !== Le && (I |= xr), e.flags |= I;
      }
      return !1;
    }
    typeof R == "function" && (Nh(e, t, R, n), $ = e.memoizedState);
    var W = uf() || by(e, t, u, n, O, $, b);
    if (W) {
      if (!F && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function") && (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function") {
        var ie = Ke;
        ie |= $i, (e.mode & qa) !== Le && (ie |= xr), e.flags |= ie;
      }
    } else {
      if (typeof i.componentDidMount == "function") {
        var ye = Ke;
        ye |= $i, (e.mode & qa) !== Le && (ye |= xr), e.flags |= ye;
      }
      e.memoizedProps = n, e.memoizedState = $;
    }
    return i.props = n, i.state = $, i.context = b, W;
  }
  function j9(e, t, n, a, i) {
    var u = t.stateNode;
    M0(e, t);
    var m = t.memoizedProps, g = t.type === t.elementType ? m : Ma(t.type, m);
    u.props = g;
    var b = t.pendingProps, E = u.context, R = n.contextType, F = aa;
    if (typeof R == "object" && R !== null)
      F = Pt(R);
    else {
      var O = Wo(t, n, !0);
      F = Go(t, O);
    }
    var $ = n.getDerivedStateFromProps, I = typeof $ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    !I && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (m !== b || E !== F) && Cy(t, u, a, F), V0();
    var W = t.memoizedState, ie = u.state = W;
    if (lf(t, a, u, i), ie = t.memoizedState, m === b && W === ie && !Hc() && !uf() && !kt)
      return typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ke), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ui), !1;
    typeof $ == "function" && (Nh(t, n, $, a), ie = t.memoizedState);
    var ye = uf() || by(t, n, g, a, W, ie, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    kt;
    return ye ? (!I && (typeof u.UNSAFE_componentWillUpdate == "function" || typeof u.componentWillUpdate == "function") && (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, ie, F), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, ie, F)), typeof u.componentDidUpdate == "function" && (t.flags |= Ke), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= Ui)) : (typeof u.componentDidUpdate == "function" && (m !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ke), typeof u.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Ui), t.memoizedProps = a, t.memoizedState = ie), u.props = a, u.state = ie, u.context = F, ye;
  }
  function io(e, t) {
    return {
      value: e,
      source: t,
      stack: Us(t),
      digest: null
    };
  }
  function jh(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function T9(e, t) {
    return !0;
  }
  function Th(e, t) {
    try {
      var n = T9(e, t);
      if (n === !1)
        return;
      var a = t.value, i = t.source, u = t.stack, m = u !== null ? u : "";
      if (a != null && a._suppressLogging) {
        if (e.tag === p)
          return;
        console.error(a);
      }
      var g = i ? Fe(i) : null, b = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", E;
      if (e.tag === L)
        E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var R = Fe(e) || "Anonymous";
        E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
      }
      var F = b + `
` + m + `

` + ("" + E);
      console.error(F);
    } catch (O) {
      setTimeout(function() {
        throw O;
      });
    }
  }
  var D9 = typeof WeakMap == "function" ? WeakMap : Map;
  function Ey(e, t, n) {
    var a = kr(pt, n);
    a.tag = _p, a.payload = {
      element: null
    };
    var i = t.value;
    return a.callback = function() {
      SS(i), Th(e, t);
    }, a;
  }
  function Dh(e, t, n) {
    var a = kr(pt, n);
    a.tag = _p;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = t.value;
      a.payload = function() {
        return i(u);
      }, a.callback = function() {
        PL(e), Th(e, t);
      };
    }
    var m = e.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (a.callback = function() {
      PL(e), Th(e, t), typeof i != "function" && bS(this);
      var b = t.value, E = t.stack;
      this.componentDidCatch(b, {
        componentStack: E !== null ? E : ""
      }), typeof i != "function" && (Zn(e.lanes, Te) || c("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Fe(e) || "Unknown"));
    }), a;
  }
  function Ny(e, t, n) {
    var a = e.pingCache, i;
    if (a === null ? (a = e.pingCache = new D9(), i = /* @__PURE__ */ new Set(), a.set(t, i)) : (i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i))), !i.has(n)) {
      i.add(n);
      var u = CS.bind(null, e, t, n);
      Da && hu(e, n), t.then(u, u);
    }
  }
  function k9(e, t, n, a) {
    var i = e.updateQueue;
    if (i === null) {
      var u = /* @__PURE__ */ new Set();
      u.add(n), e.updateQueue = u;
    } else
      i.add(n);
  }
  function O9(e, t) {
    var n = e.tag;
    if ((e.mode & Be) === Le && (n === h || n === H || n === X)) {
      var a = e.alternate;
      a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function Ry(e) {
    var t = e;
    do {
      if (t.tag === A && d9(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function wy(e, t, n, a, i) {
    if ((e.mode & Be) === Le) {
      if (e === t)
        e.flags |= Tn;
      else {
        if (e.flags |= et, n.flags |= Qd, n.flags &= ~(f4 | Xs), n.tag === p) {
          var u = n.alternate;
          if (u === null)
            n.tag = fe;
          else {
            var m = kr(pt, Te);
            m.tag = af, ci(n, m, Te);
          }
        }
        n.lanes = Pe(n.lanes, Te);
      }
      return e;
    }
    return e.flags |= Tn, e.lanes = i, e;
  }
  function F9(e, t, n, a, i) {
    if (n.flags |= Xs, Da && hu(e, i), a !== null && typeof a == "object" && typeof a.then == "function") {
      var u = a;
      O9(n), an() && n.mode & Be && y0();
      var m = Ry(t);
      if (m !== null) {
        m.flags &= ~Lr, wy(m, t, n, e, i), m.mode & Be && Ny(e, u, i), k9(m, e, u);
        return;
      } else {
        if (!t8(i)) {
          Ny(e, u, i), uv();
          return;
        }
        var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        a = g;
      }
    } else if (an() && n.mode & Be) {
      y0();
      var b = Ry(t);
      if (b !== null) {
        (b.flags & Tn) === xe && (b.flags |= Lr), wy(b, t, n, e, i), Sp(io(a, n));
        return;
      }
    }
    a = io(a, n), dS(a);
    var E = t;
    do {
      switch (E.tag) {
        case L: {
          var R = a;
          E.flags |= Tn;
          var F = il(i);
          E.lanes = Pe(E.lanes, F);
          var O = Ey(E, R, F);
          Mp(E, O);
          return;
        }
        case p:
          var $ = a, I = E.type, W = E.stateNode;
          if ((E.flags & et) === xe && (typeof I.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && !RL(W))) {
            E.flags |= Tn;
            var ie = il(i);
            E.lanes = Pe(E.lanes, ie);
            var ye = Dh(E, $, ie);
            Mp(E, ye);
            return;
          }
          break;
      }
      E = E.return;
    } while (E !== null);
  }
  function _9() {
    return null;
  }
  var Zl = s.ReactCurrentOwner, Va = !1, kh, eu, Oh, Fh, _h, oo, Ph, Ff, tu;
  kh = {}, eu = {}, Oh = {}, Fh = {}, _h = {}, oo = !1, Ph = {}, Ff = {}, tu = {};
  function Dn(e, t, n, a) {
    e === null ? t.child = D0(t, null, n, a) : t.child = Jo(t, e.child, n, a);
  }
  function P9(e, t, n, a) {
    t.child = Jo(t, e.child, null, a), t.child = Jo(t, null, n, a);
  }
  function jy(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Oa(
        u,
        a,
        // Resolved props
        "prop",
        We(n)
      );
    }
    var m = n.render, g = t.ref, b, E;
    es(t, i), Zs(t);
    {
      if (Zl.current = t, Xn(!0), b = os(e, t, m, a, g, i), E = ss(), t.mode & Nt) {
        Jt(!0);
        try {
          b = os(e, t, m, a, g, i), E = ss();
        } finally {
          Jt(!1);
        }
      }
      Xn(!1);
    }
    return Fo(), e !== null && !Va ? (I0(e, t, i), Or(e, t, i)) : (an() && E && vp(t), t.flags |= Do, Dn(e, t, b, i), t.child);
  }
  function Ty(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      if (zS(u) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var m = u;
        return m = hs(u), t.tag = X, t.type = m, Vh(t, u), Dy(e, t, m, a, i);
      }
      {
        var g = u.propTypes;
        if (g && Oa(
          g,
          a,
          // Resolved props
          "prop",
          We(u)
        ), n.defaultProps !== void 0) {
          var b = We(u) || "Unknown";
          tu[b] || (c("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", b), tu[b] = !0);
        }
      }
      var E = bv(n.type, null, a, t, t.mode, i);
      return E.ref = t.ref, E.return = t, t.child = E, E;
    }
    {
      var R = n.type, F = R.propTypes;
      F && Oa(
        F,
        a,
        // Resolved props
        "prop",
        We(R)
      );
    }
    var O = e.child, $ = Ih(e, i);
    if (!$) {
      var I = O.memoizedProps, W = n.compare;
      if (W = W !== null ? W : bl, W(I, a) && e.ref === t.ref)
        return Or(e, t, i);
    }
    t.flags |= Do;
    var ie = fo(O, a);
    return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
  }
  function Dy(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === Ve) {
        var m = u, g = m._payload, b = m._init;
        try {
          u = b(g);
        } catch {
          u = null;
        }
        var E = u && u.propTypes;
        E && Oa(
          E,
          a,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          We(u)
        );
      }
    }
    if (e !== null) {
      var R = e.memoizedProps;
      if (bl(R, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (Va = !1, t.pendingProps = a = R, Ih(e, i))
          (e.flags & Qd) !== xe && (Va = !0);
        else return t.lanes = e.lanes, Or(e, t, i);
    }
    return Ah(e, t, n, a, i);
  }
  function ky(e, t, n) {
    var a = t.pendingProps, i = a.children, u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden" || Ge)
      if ((t.mode & Be) === Le) {
        var m = {
          baseLanes: Q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = m, Kf(t, n);
      } else if (Zn(n, Jn)) {
        var F = {
          baseLanes: Q,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = F;
        var O = u !== null ? u.baseLanes : n;
        Kf(t, O);
      } else {
        var g = null, b;
        if (u !== null) {
          var E = u.baseLanes;
          b = Pe(E, n);
        } else
          b = n;
        t.lanes = t.childLanes = Jn;
        var R = {
          baseLanes: b,
          cachePool: g,
          transitions: null
        };
        return t.memoizedState = R, t.updateQueue = null, Kf(t, b), null;
      }
    else {
      var $;
      u !== null ? ($ = Pe(u.baseLanes, n), t.memoizedState = null) : $ = n, Kf(t, $);
    }
    return Dn(e, t, i, n), t.child;
  }
  function A9(e, t, n) {
    var a = t.pendingProps;
    return Dn(e, t, a, n), t.child;
  }
  function M9(e, t, n) {
    var a = t.pendingProps.children;
    return Dn(e, t, a, n), t.child;
  }
  function V9(e, t, n) {
    {
      t.flags |= Ke;
      {
        var a = t.stateNode;
        a.effectDuration = 0, a.passiveEffectDuration = 0;
      }
    }
    var i = t.pendingProps, u = i.children;
    return Dn(e, t, u, n), t.child;
  }
  function Oy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Jr, t.flags |= Xd);
  }
  function Ah(e, t, n, a, i) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && Oa(
        u,
        a,
        // Resolved props
        "prop",
        We(n)
      );
    }
    var m;
    {
      var g = Wo(t, n, !0);
      m = Go(t, g);
    }
    var b, E;
    es(t, i), Zs(t);
    {
      if (Zl.current = t, Xn(!0), b = os(e, t, n, a, m, i), E = ss(), t.mode & Nt) {
        Jt(!0);
        try {
          b = os(e, t, n, a, m, i), E = ss();
        } finally {
          Jt(!1);
        }
      }
      Xn(!1);
    }
    return Fo(), e !== null && !Va ? (I0(e, t, i), Or(e, t, i)) : (an() && E && vp(t), t.flags |= Do, Dn(e, t, b, i), t.child);
  }
  function Fy(e, t, n, a, i) {
    {
      switch (tC(t)) {
        case !1: {
          var u = t.stateNode, m = t.type, g = new m(t.memoizedProps, u.context), b = g.state;
          u.updater.enqueueSetState(u, b, null);
          break;
        }
        case !0: {
          t.flags |= et, t.flags |= Tn;
          var E = new Error("Simulated error coming from DevTools"), R = il(i);
          t.lanes = Pe(t.lanes, R);
          var F = Dh(t, io(E, t), R);
          Mp(t, F);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var O = n.propTypes;
        O && Oa(
          O,
          a,
          // Resolved props
          "prop",
          We(n)
        );
      }
    }
    var $;
    Ja(n) ? ($ = !0, Ic(t)) : $ = !1, es(t, i);
    var I = t.stateNode, W;
    I === null ? (Pf(e, t), Sy(t, n, a), wh(t, n, a, i), W = !0) : e === null ? W = w9(t, n, a, i) : W = j9(e, t, n, a, i);
    var ie = Mh(e, t, n, W, $, i);
    {
      var ye = t.stateNode;
      W && ye.props !== a && (oo || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Fe(t) || "a component"), oo = !0);
    }
    return ie;
  }
  function Mh(e, t, n, a, i, u) {
    Oy(e, t);
    var m = (t.flags & et) !== xe;
    if (!a && !m)
      return i && p0(t, n, !1), Or(e, t, u);
    var g = t.stateNode;
    Zl.current = t;
    var b;
    if (m && typeof n.getDerivedStateFromError != "function")
      b = null, gy();
    else {
      Zs(t);
      {
        if (Xn(!0), b = g.render(), t.mode & Nt) {
          Jt(!0);
          try {
            g.render();
          } finally {
            Jt(!1);
          }
        }
        Xn(!1);
      }
      Fo();
    }
    return t.flags |= Do, e !== null && m ? P9(e, t, b, u) : Dn(e, t, b, u), t.memoizedState = g.state, i && p0(t, n, !0), t.child;
  }
  function _y(e) {
    var t = e.stateNode;
    t.pendingContext ? d0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && d0(e, t.context, !1), Vp(e, t.containerInfo);
  }
  function U9(e, t, n) {
    if (_y(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var a = t.pendingProps, i = t.memoizedState, u = i.element;
    M0(e, t), lf(t, a, null, n);
    var m = t.memoizedState;
    t.stateNode;
    var g = m.element;
    if (i.isDehydrated) {
      var b = {
        element: g,
        isDehydrated: !1,
        cache: m.cache,
        pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
        transitions: m.transitions
      }, E = t.updateQueue;
      if (E.baseState = b, t.memoizedState = b, t.flags & Lr) {
        var R = io(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return Py(e, t, g, n, R);
      } else if (g !== u) {
        var F = io(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return Py(e, t, g, n, F);
      } else {
        Hx(t);
        var O = D0(t, null, g, n);
        t.child = O;
        for (var $ = O; $; )
          $.flags = $.flags & ~_t | br, $ = $.sibling;
      }
    } else {
      if (Xo(), g === u)
        return Or(e, t, n);
      Dn(e, t, g, n);
    }
    return t.child;
  }
  function Py(e, t, n, a, i) {
    return Xo(), Sp(i), t.flags |= Lr, Dn(e, t, n, a), t.child;
  }
  function z9(e, t, n) {
    $0(t), e === null && xp(t);
    var a = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = i.children, g = np(a, i);
    return g ? m = null : u !== null && np(a, u) && (t.flags |= Qs), Oy(e, t), Dn(e, t, m, n), t.child;
  }
  function $9(e, t) {
    return e === null && xp(t), null;
  }
  function H9(e, t, n, a) {
    Pf(e, t);
    var i = t.pendingProps, u = n, m = u._payload, g = u._init, b = g(m);
    t.type = b;
    var E = t.tag = $S(b), R = Ma(b, i), F;
    switch (E) {
      case h:
        return Vh(t, b), t.type = b = hs(b), F = Ah(null, t, b, R, a), F;
      case p:
        return t.type = b = pv(b), F = Fy(null, t, b, R, a), F;
      case H:
        return t.type = b = hv(b), F = jy(null, t, b, R, a), F;
      case Y: {
        if (t.type !== t.elementType) {
          var O = b.propTypes;
          O && Oa(
            O,
            R,
            // Resolved for outer only
            "prop",
            We(b)
          );
        }
        return F = Ty(
          null,
          t,
          b,
          Ma(b.type, R),
          // The inner type can have defaults too
          a
        ), F;
      }
    }
    var $ = "";
    throw b !== null && typeof b == "object" && b.$$typeof === Ve && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + $));
  }
  function B9(e, t, n, a, i) {
    Pf(e, t), t.tag = p;
    var u;
    return Ja(n) ? (u = !0, Ic(t)) : u = !1, es(t, i), Sy(t, n, a), wh(t, n, a, i), Mh(null, t, n, !0, u, i);
  }
  function I9(e, t, n, a) {
    Pf(e, t);
    var i = t.pendingProps, u;
    {
      var m = Wo(t, n, !1);
      u = Go(t, m);
    }
    es(t, a);
    var g, b;
    Zs(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var E = We(n) || "Unknown";
        kh[E] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), kh[E] = !0);
      }
      t.mode & Nt && _a.recordLegacyContextWarning(t, null), Xn(!0), Zl.current = t, g = os(null, t, n, i, u, a), b = ss(), Xn(!1);
    }
    if (Fo(), t.flags |= Do, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
      var R = We(n) || "Unknown";
      eu[R] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), eu[R] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
    ) {
      {
        var F = We(n) || "Unknown";
        eu[F] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), eu[F] = !0);
      }
      t.tag = p, t.memoizedState = null, t.updateQueue = null;
      var O = !1;
      return Ja(n) ? (O = !0, Ic(t)) : O = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, Ap(t), xy(t, g), wh(t, n, i, a), Mh(null, t, n, !0, O, a);
    } else {
      if (t.tag = h, t.mode & Nt) {
        Jt(!0);
        try {
          g = os(null, t, n, i, u, a), b = ss();
        } finally {
          Jt(!1);
        }
      }
      return an() && b && vp(t), Dn(null, t, g, a), Vh(t, n), t.child;
    }
  }
  function Vh(e, t) {
    {
      if (t && t.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", a = Gr();
        a && (n += `

Check the render method of \`` + a + "`.");
        var i = a || "", u = e._debugSource;
        u && (i = u.fileName + ":" + u.lineNumber), _h[i] || (_h[i] = !0, c("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var m = We(t) || "Unknown";
        tu[m] || (c("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), tu[m] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var g = We(t) || "Unknown";
        Fh[g] || (c("%s: Function components do not support getDerivedStateFromProps.", g), Fh[g] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var b = We(t) || "Unknown";
        Oh[b] || (c("%s: Function components do not support contextType.", b), Oh[b] = !0);
      }
    }
  }
  var Uh = {
    dehydrated: null,
    treeContext: null,
    retryLane: Zt
  };
  function zh(e) {
    return {
      baseLanes: e,
      cachePool: _9(),
      transitions: null
    };
  }
  function Y9(e, t) {
    var n = null;
    return {
      baseLanes: Pe(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function K9(e, t, n, a) {
    if (t !== null) {
      var i = t.memoizedState;
      if (i === null)
        return !1;
    }
    return $p(e, Il);
  }
  function W9(e, t) {
    return mc(e.childLanes, t);
  }
  function Ay(e, t, n) {
    var a = t.pendingProps;
    nC(t) && (t.flags |= et);
    var i = Pa.current, u = !1, m = (t.flags & et) !== xe;
    if (m || K9(i, e) ? (u = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (i = f9(i, B0)), i = ns(i), di(t, i), e === null) {
      xp(t);
      var g = t.memoizedState;
      if (g !== null) {
        var b = g.dehydrated;
        if (b !== null)
          return J9(t, b);
      }
      var E = a.children, R = a.fallback;
      if (u) {
        var F = G9(t, E, R, n), O = t.child;
        return O.memoizedState = zh(n), t.memoizedState = Uh, F;
      } else
        return $h(t, E);
    } else {
      var $ = e.memoizedState;
      if ($ !== null) {
        var I = $.dehydrated;
        if (I !== null)
          return Z9(e, t, m, a, I, $, n);
      }
      if (u) {
        var W = a.fallback, ie = a.children, ye = Q9(e, t, ie, W, n), he = t.child, Ye = e.child.memoizedState;
        return he.memoizedState = Ye === null ? zh(n) : Y9(Ye, n), he.childLanes = W9(e, n), t.memoizedState = Uh, ye;
      } else {
        var Ue = a.children, V = q9(e, t, Ue, n);
        return t.memoizedState = null, V;
      }
    }
  }
  function $h(e, t, n) {
    var a = e.mode, i = {
      mode: "visible",
      children: t
    }, u = Hh(i, a);
    return u.return = e, e.child = u, u;
  }
  function G9(e, t, n, a) {
    var i = e.mode, u = e.child, m = {
      mode: "hidden",
      children: t
    }, g, b;
    return (i & Be) === Le && u !== null ? (g = u, g.childLanes = Q, g.pendingProps = m, e.mode & ot && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), b = bi(n, i, a, null)) : (g = Hh(m, i), b = bi(n, i, a, null)), g.return = e, b.return = e, g.sibling = b, e.child = g, b;
  }
  function Hh(e, t, n) {
    return ML(e, t, Q, null);
  }
  function My(e, t) {
    return fo(e, t);
  }
  function q9(e, t, n, a) {
    var i = e.child, u = i.sibling, m = My(i, {
      mode: "visible",
      children: n
    });
    if ((t.mode & Be) === Le && (m.lanes = a), m.return = t, m.sibling = null, u !== null) {
      var g = t.deletions;
      g === null ? (t.deletions = [u], t.flags |= Vi) : g.push(u);
    }
    return t.child = m, m;
  }
  function Q9(e, t, n, a, i) {
    var u = t.mode, m = e.child, g = m.sibling, b = {
      mode: "hidden",
      children: n
    }, E;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (u & Be) === Le && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== m
    ) {
      var R = t.child;
      E = R, E.childLanes = Q, E.pendingProps = b, t.mode & ot && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = m.selfBaseDuration, E.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
    } else
      E = My(m, b), E.subtreeFlags = m.subtreeFlags & Sr;
    var F;
    return g !== null ? F = fo(g, a) : (F = bi(a, u, i, null), F.flags |= _t), F.return = t, E.return = t, E.sibling = F, t.child = E, F;
  }
  function _f(e, t, n, a) {
    a !== null && Sp(a), Jo(t, e.child, null, n);
    var i = t.pendingProps, u = i.children, m = $h(t, u);
    return m.flags |= _t, t.memoizedState = null, m;
  }
  function X9(e, t, n, a, i) {
    var u = t.mode, m = {
      mode: "visible",
      children: n
    }, g = Hh(m, u), b = bi(a, u, i, null);
    return b.flags |= _t, g.return = t, b.return = t, g.sibling = b, t.child = g, (t.mode & Be) !== Le && Jo(t, e.child, null, i), b;
  }
  function J9(e, t, n) {
    return (e.mode & Be) === Le ? (c("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Te) : op(t) ? e.lanes = Ii : e.lanes = Jn, null;
  }
  function Z9(e, t, n, a, i, u, m) {
    if (n)
      if (t.flags & Lr) {
        t.flags &= ~Lr;
        var V = jh(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return _f(e, t, m, V);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= et, null;
        var G = a.children, U = a.fallback, Z = X9(e, t, G, U, m), ce = t.child;
        return ce.memoizedState = zh(m), t.memoizedState = Uh, Z;
      }
    else {
      if (zx(), (t.mode & Be) === Le)
        return _f(
          e,
          t,
          m,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (op(i)) {
        var g, b, E;
        {
          var R = ax(i);
          g = R.digest, b = R.message, E = R.stack;
        }
        var F;
        b ? F = new Error(b) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var O = jh(F, g, E);
        return _f(e, t, m, O);
      }
      var $ = Zn(m, e.childLanes);
      if (Va || $) {
        var I = Yf();
        if (I !== null) {
          var W = u8(I, m);
          if (W !== Zt && W !== u.retryLane) {
            u.retryLane = W;
            var ie = pt;
            $n(e, W), Kt(I, e, W, ie);
          }
        }
        uv();
        var ye = jh(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return _f(e, t, m, ye);
      } else if (o0(i)) {
        t.flags |= et, t.child = e.child;
        var he = ES.bind(null, e);
        return rx(i, he), null;
      } else {
        Bx(t, i, u.treeContext);
        var Ye = a.children, Ue = $h(t, Ye);
        return Ue.flags |= br, Ue;
      }
    }
  }
  function Vy(e, t, n) {
    e.lanes = Pe(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = Pe(a.lanes, t)), Op(e.return, t, n);
  }
  function e2(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === A) {
        var i = a.memoizedState;
        i !== null && Vy(a, n, e);
      } else if (a.tag === pe)
        Vy(a, n, e);
      else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === e)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }
  function t2(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      a !== null && df(a) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function n2(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Ph[e])
      if (Ph[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            c('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            c('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            c('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        c('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function a2(e, t) {
    e !== void 0 && !Ff[e] && (e !== "collapsed" && e !== "hidden" ? (Ff[e] = !0, c('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ff[e] = !0, c('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function Uy(e, t) {
    {
      var n = Ze(e), a = !n && typeof mr(e) == "function";
      if (n || a) {
        var i = n ? "array" : "iterable";
        return c("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", i, t, i), !1;
      }
    }
    return !0;
  }
  function r2(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Ze(e)) {
        for (var n = 0; n < e.length; n++)
          if (!Uy(e[n], n))
            return;
      } else {
        var a = mr(e);
        if (typeof a == "function") {
          var i = a.call(e);
          if (i)
            for (var u = i.next(), m = 0; !u.done; u = i.next()) {
              if (!Uy(u.value, m))
                return;
              m++;
            }
        } else
          c('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function Bh(e, t, n, a, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = n, u.tailMode = i);
  }
  function zy(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail, m = a.children;
    n2(i), a2(u, i), r2(m, i), Dn(e, t, m, n);
    var g = Pa.current, b = $p(g, Il);
    if (b)
      g = Hp(g, Il), t.flags |= et;
    else {
      var E = e !== null && (e.flags & et) !== xe;
      E && e2(t, t.child, n), g = ns(g);
    }
    if (di(t, g), (t.mode & Be) === Le)
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards": {
          var R = t2(t.child), F;
          R === null ? (F = t.child, t.child = null) : (F = R.sibling, R.sibling = null), Bh(
            t,
            !1,
            // isBackwards
            F,
            R,
            u
          );
          break;
        }
        case "backwards": {
          var O = null, $ = t.child;
          for (t.child = null; $ !== null; ) {
            var I = $.alternate;
            if (I !== null && df(I) === null) {
              t.child = $;
              break;
            }
            var W = $.sibling;
            $.sibling = O, O = $, $ = W;
          }
          Bh(
            t,
            !0,
            // isBackwards
            O,
            null,
            // last
            u
          );
          break;
        }
        case "together": {
          Bh(
            t,
            !1,
            // isBackwards
            null,
            // tail
            null,
            // last
            void 0
          );
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function i2(e, t, n) {
    Vp(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return e === null ? t.child = Jo(t, null, a, n) : Dn(e, t, a, n), t.child;
  }
  var $y = !1;
  function o2(e, t, n) {
    var a = t.type, i = a._context, u = t.pendingProps, m = t.memoizedProps, g = u.value;
    {
      "value" in u || $y || ($y = !0, c("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var b = t.type.propTypes;
      b && Oa(b, u, "prop", "Context.Provider");
    }
    if (F0(t, i, g), m !== null) {
      var E = m.value;
      if (na(E, g)) {
        if (m.children === u.children && !Hc())
          return Or(e, t, n);
      } else
        n9(t, i, n);
    }
    var R = u.children;
    return Dn(e, t, R, n), t.child;
  }
  var Hy = !1;
  function s2(e, t, n) {
    var a = t.type;
    a._context === void 0 ? a !== a.Consumer && (Hy || (Hy = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
    var i = t.pendingProps, u = i.children;
    typeof u != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), es(t, n);
    var m = Pt(a);
    Zs(t);
    var g;
    return Zl.current = t, Xn(!0), g = u(m), Xn(!1), Fo(), t.flags |= Do, Dn(e, t, g, n), t.child;
  }
  function nu() {
    Va = !0;
  }
  function Pf(e, t) {
    (t.mode & Be) === Le && e !== null && (e.alternate = null, t.alternate = null, t.flags |= _t);
  }
  function Or(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), gy(), pu(t.lanes), Zn(n, t.childLanes) ? (e9(e, t), t.child) : null;
  }
  function l2(e, t, n) {
    {
      var a = t.return;
      if (a === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === a.child)
        a.child = n;
      else {
        var i = a.child;
        if (i === null)
          throw new Error("Expected parent to have a child.");
        for (; i.sibling !== t; )
          if (i = i.sibling, i === null)
            throw new Error("Expected to find the previous sibling.");
        i.sibling = n;
      }
      var u = a.deletions;
      return u === null ? (a.deletions = [e], a.flags |= Vi) : u.push(e), n.flags |= _t, n;
    }
  }
  function Ih(e, t) {
    var n = e.lanes;
    return !!Zn(n, t);
  }
  function u2(e, t, n) {
    switch (t.tag) {
      case L:
        _y(t), t.stateNode, Xo();
        break;
      case N:
        $0(t);
        break;
      case p: {
        var a = t.type;
        Ja(a) && Ic(t);
        break;
      }
      case x:
        Vp(t, t.stateNode.containerInfo);
        break;
      case _: {
        var i = t.memoizedProps.value, u = t.type._context;
        F0(t, u, i);
        break;
      }
      case w:
        {
          var m = Zn(n, t.childLanes);
          m && (t.flags |= Ke);
          {
            var g = t.stateNode;
            g.effectDuration = 0, g.passiveEffectDuration = 0;
          }
        }
        break;
      case A: {
        var b = t.memoizedState;
        if (b !== null) {
          if (b.dehydrated !== null)
            return di(t, ns(Pa.current)), t.flags |= et, null;
          var E = t.child, R = E.childLanes;
          if (Zn(n, R))
            return Ay(e, t, n);
          di(t, ns(Pa.current));
          var F = Or(e, t, n);
          return F !== null ? F.sibling : null;
        } else
          di(t, ns(Pa.current));
        break;
      }
      case pe: {
        var O = (e.flags & et) !== xe, $ = Zn(n, t.childLanes);
        if (O) {
          if ($)
            return zy(e, t, n);
          t.flags |= et;
        }
        var I = t.memoizedState;
        if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), di(t, Pa.current), $)
          break;
        return null;
      }
      case ve:
      case Ee:
        return t.lanes = Q, ky(e, t, n);
    }
    return Or(e, t, n);
  }
  function By(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return l2(e, t, bv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var a = e.memoizedProps, i = t.pendingProps;
      if (a !== i || Hc() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        Va = !0;
      else {
        var u = Ih(e, n);
        if (!u && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & et) === xe)
          return Va = !1, u2(e, t, n);
        (e.flags & Qd) !== xe ? Va = !0 : Va = !1;
      }
    } else if (Va = !1, an() && _x(t)) {
      var m = t.index, g = Px();
      g0(t, g, m);
    }
    switch (t.lanes = Q, t.tag) {
      case v:
        return I9(e, t, t.type, n);
      case ne: {
        var b = t.elementType;
        return H9(e, t, b, n);
      }
      case h: {
        var E = t.type, R = t.pendingProps, F = t.elementType === E ? R : Ma(E, R);
        return Ah(e, t, E, F, n);
      }
      case p: {
        var O = t.type, $ = t.pendingProps, I = t.elementType === O ? $ : Ma(O, $);
        return Fy(e, t, O, I, n);
      }
      case L:
        return U9(e, t, n);
      case N:
        return z9(e, t, n);
      case j:
        return $9(e, t);
      case A:
        return Ay(e, t, n);
      case x:
        return i2(e, t, n);
      case H: {
        var W = t.type, ie = t.pendingProps, ye = t.elementType === W ? ie : Ma(W, ie);
        return jy(e, t, W, ye, n);
      }
      case M:
        return A9(e, t, n);
      case k:
        return M9(e, t, n);
      case w:
        return V9(e, t, n);
      case _:
        return o2(e, t, n);
      case z:
        return s2(e, t, n);
      case Y: {
        var he = t.type, Ye = t.pendingProps, Ue = Ma(he, Ye);
        if (t.type !== t.elementType) {
          var V = he.propTypes;
          V && Oa(
            V,
            Ue,
            // Resolved for outer only
            "prop",
            We(he)
          );
        }
        return Ue = Ma(he.type, Ue), Ty(e, t, he, Ue, n);
      }
      case X:
        return Dy(e, t, t.type, t.pendingProps, n);
      case fe: {
        var G = t.type, U = t.pendingProps, Z = t.elementType === G ? U : Ma(G, U);
        return B9(e, t, G, Z, n);
      }
      case pe:
        return zy(e, t, n);
      case Xe:
        break;
      case ve:
        return ky(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function ls(e) {
    e.flags |= Ke;
  }
  function Iy(e) {
    e.flags |= Jr, e.flags |= Xd;
  }
  var Yy, Yh, Ky, Wy;
  Yy = function(e, t, n, a) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === N || i.tag === j)
        k7(e, i.stateNode);
      else if (i.tag !== x) {
        if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
      }
      if (i === t)
        return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t)
          return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Yh = function(e, t) {
  }, Ky = function(e, t, n, a, i) {
    var u = e.memoizedProps;
    if (u !== a) {
      var m = t.stateNode, g = Up(), b = F7(m, n, u, a, i, g);
      t.updateQueue = b, b && ls(t);
    }
  }, Wy = function(e, t, n, a) {
    n !== a && ls(t);
  };
  function au(e, t) {
    if (!an())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        }
        case "collapsed": {
          for (var i = e.tail, u = null; i !== null; )
            i.alternate !== null && (u = i), i = i.sibling;
          u === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : u.sibling = null;
          break;
        }
      }
  }
  function on(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = Q, a = xe;
    if (t) {
      if ((e.mode & ot) !== Le) {
        for (var b = e.selfBaseDuration, E = e.child; E !== null; )
          n = Pe(n, Pe(E.lanes, E.childLanes)), a |= E.subtreeFlags & Sr, a |= E.flags & Sr, b += E.treeBaseDuration, E = E.sibling;
        e.treeBaseDuration = b;
      } else
        for (var R = e.child; R !== null; )
          n = Pe(n, Pe(R.lanes, R.childLanes)), a |= R.subtreeFlags & Sr, a |= R.flags & Sr, R.return = e, R = R.sibling;
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & ot) !== Le) {
        for (var i = e.actualDuration, u = e.selfBaseDuration, m = e.child; m !== null; )
          n = Pe(n, Pe(m.lanes, m.childLanes)), a |= m.subtreeFlags, a |= m.flags, i += m.actualDuration, u += m.treeBaseDuration, m = m.sibling;
        e.actualDuration = i, e.treeBaseDuration = u;
      } else
        for (var g = e.child; g !== null; )
          n = Pe(n, Pe(g.lanes, g.childLanes)), a |= g.subtreeFlags, a |= g.flags, g.return = e, g = g.sibling;
      e.subtreeFlags |= a;
    }
    return e.childLanes = n, t;
  }
  function c2(e, t, n) {
    if (Gx() && (t.mode & Be) !== Le && (t.flags & et) === xe)
      return E0(t), Xo(), t.flags |= Lr | Xs | Tn, !1;
    var a = qc(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (Kx(t), on(t), (t.mode & ot) !== Le) {
          var i = n !== null;
          if (i) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Xo(), (t.flags & et) === xe && (t.memoizedState = null), t.flags |= Ke, on(t), (t.mode & ot) !== Le) {
          var m = n !== null;
          if (m) {
            var g = t.child;
            g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return N0(), !0;
  }
  function Gy(e, t, n) {
    var a = t.pendingProps;
    switch (gp(t), t.tag) {
      case v:
      case ne:
      case X:
      case h:
      case H:
      case M:
      case k:
      case w:
      case z:
      case Y:
        return on(t), null;
      case p: {
        var i = t.type;
        return Ja(i) && Bc(t), on(t), null;
      }
      case L: {
        var u = t.stateNode;
        if (ts(t), mp(t), Ip(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), e === null || e.child === null) {
          var m = qc(t);
          if (m)
            ls(t);
          else if (e !== null) {
            var g = e.memoizedState;
            // Check if this is a client root
            (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & Lr) !== xe) && (t.flags |= Ui, N0());
          }
        }
        return Yh(e, t), on(t), null;
      }
      case N: {
        zp(t);
        var b = z0(), E = t.type;
        if (e !== null && t.stateNode != null)
          Ky(e, t, E, a, b), e.ref !== t.ref && Iy(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return on(t), null;
          }
          var R = Up(), F = qc(t);
          if (F)
            Ix(t, b, R) && ls(t);
          else {
            var O = D7(E, a, b, R, t);
            Yy(O, t, !1, !1), t.stateNode = O, O7(O, E, a, b) && ls(t);
          }
          t.ref !== null && Iy(t);
        }
        return on(t), null;
      }
      case j: {
        var $ = a;
        if (e && t.stateNode != null) {
          var I = e.memoizedProps;
          Wy(e, t, I, $);
        } else {
          if (typeof $ != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var W = z0(), ie = Up(), ye = qc(t);
          ye ? Yx(t) && ls(t) : t.stateNode = _7($, W, ie, t);
        }
        return on(t), null;
      }
      case A: {
        as(t);
        var he = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ye = c2(e, t, he);
          if (!Ye)
            return t.flags & Tn ? t : null;
        }
        if ((t.flags & et) !== xe)
          return t.lanes = n, (t.mode & ot) !== Le && hh(t), t;
        var Ue = he !== null, V = e !== null && e.memoizedState !== null;
        if (Ue !== V && Ue) {
          var G = t.child;
          if (G.flags |= zi, (t.mode & Be) !== Le) {
            var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !pn);
            U || $p(Pa.current, B0) ? fS() : uv();
          }
        }
        var Z = t.updateQueue;
        if (Z !== null && (t.flags |= Ke), on(t), (t.mode & ot) !== Le && Ue) {
          var ce = t.child;
          ce !== null && (t.treeBaseDuration -= ce.treeBaseDuration);
        }
        return null;
      }
      case x:
        return ts(t), Yh(e, t), e === null && wx(t.stateNode.containerInfo), on(t), null;
      case _:
        var oe = t.type._context;
        return kp(oe, t), on(t), null;
      case fe: {
        var Ce = t.type;
        return Ja(Ce) && Bc(t), on(t), null;
      }
      case pe: {
        as(t);
        var ke = t.memoizedState;
        if (ke === null)
          return on(t), null;
        var lt = (t.flags & et) !== xe, qe = ke.rendering;
        if (qe === null)
          if (lt)
            au(ke, !1);
          else {
            var Dt = mS() && (e === null || (e.flags & et) === xe);
            if (!Dt)
              for (var Qe = t.child; Qe !== null; ) {
                var Rt = df(Qe);
                if (Rt !== null) {
                  lt = !0, t.flags |= et, au(ke, !1);
                  var En = Rt.updateQueue;
                  return En !== null && (t.updateQueue = En, t.flags |= Ke), t.subtreeFlags = xe, t9(t, n), di(t, Hp(Pa.current, Il)), t.child;
                }
                Qe = Qe.sibling;
              }
            ke.tail !== null && Xt() > hL() && (t.flags |= et, lt = !0, au(ke, !1), t.lanes = Wg);
          }
        else {
          if (!lt) {
            var fn = df(qe);
            if (fn !== null) {
              t.flags |= et, lt = !0;
              var ia = fn.updateQueue;
              if (ia !== null && (t.updateQueue = ia, t.flags |= Ke), au(ke, !0), ke.tail === null && ke.tailMode === "hidden" && !qe.alternate && !an())
                return on(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            Xt() * 2 - ke.renderingStartTime > hL() && n !== Jn && (t.flags |= et, lt = !0, au(ke, !1), t.lanes = Wg);
          }
          if (ke.isBackwards)
            qe.sibling = t.child, t.child = qe;
          else {
            var Fn = ke.last;
            Fn !== null ? Fn.sibling = qe : t.child = qe, ke.last = qe;
          }
        }
        if (ke.tail !== null) {
          var _n = ke.tail;
          ke.rendering = _n, ke.tail = _n.sibling, ke.renderingStartTime = Xt(), _n.sibling = null;
          var Nn = Pa.current;
          return lt ? Nn = Hp(Nn, Il) : Nn = ns(Nn), di(t, Nn), _n;
        }
        return on(t), null;
      }
      case Xe:
        break;
      case ve:
      case Ee: {
        lv(t);
        var Mr = t.memoizedState, vs = Mr !== null;
        if (e !== null) {
          var Lu = e.memoizedState, or = Lu !== null;
          or !== vs && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !Ge && (t.flags |= zi);
        }
        return !vs || (t.mode & Be) === Le ? on(t) : Zn(ir, Jn) && (on(t), t.subtreeFlags & (_t | Ke) && (t.flags |= zi)), null;
      }
      case Re:
        return null;
      case tt:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function f2(e, t, n) {
    switch (gp(t), t.tag) {
      case p: {
        var a = t.type;
        Ja(a) && Bc(t);
        var i = t.flags;
        return i & Tn ? (t.flags = i & ~Tn | et, (t.mode & ot) !== Le && hh(t), t) : null;
      }
      case L: {
        t.stateNode, ts(t), mp(t), Ip();
        var u = t.flags;
        return (u & Tn) !== xe && (u & et) === xe ? (t.flags = u & ~Tn | et, t) : null;
      }
      case N:
        return zp(t), null;
      case A: {
        as(t);
        var m = t.memoizedState;
        if (m !== null && m.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Xo();
        }
        var g = t.flags;
        return g & Tn ? (t.flags = g & ~Tn | et, (t.mode & ot) !== Le && hh(t), t) : null;
      }
      case pe:
        return as(t), null;
      case x:
        return ts(t), null;
      case _:
        var b = t.type._context;
        return kp(b, t), null;
      case ve:
      case Ee:
        return lv(t), null;
      case Re:
        return null;
      default:
        return null;
    }
  }
  function qy(e, t, n) {
    switch (gp(t), t.tag) {
      case p: {
        var a = t.type.childContextTypes;
        a != null && Bc(t);
        break;
      }
      case L: {
        t.stateNode, ts(t), mp(t), Ip();
        break;
      }
      case N: {
        zp(t);
        break;
      }
      case x:
        ts(t);
        break;
      case A:
        as(t);
        break;
      case pe:
        as(t);
        break;
      case _:
        var i = t.type._context;
        kp(i, t);
        break;
      case ve:
      case Ee:
        lv(t);
        break;
    }
  }
  var Qy = null;
  Qy = /* @__PURE__ */ new Set();
  var Af = !1, sn = !1, d2 = typeof WeakSet == "function" ? WeakSet : Set, de = null, us = null, cs = null;
  function m2(e) {
    Wd(null, function() {
      throw e;
    }), Gd();
  }
  var p2 = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ot)
      try {
        ar(), t.componentWillUnmount();
      } finally {
        nr(e);
      }
    else
      t.componentWillUnmount();
  };
  function Xy(e, t) {
    try {
      hi(zt, e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function Kh(e, t, n) {
    try {
      p2(e, n);
    } catch (a) {
      dt(e, t, a);
    }
  }
  function h2(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      dt(e, t, a);
    }
  }
  function Jy(e, t) {
    try {
      eL(e);
    } catch (n) {
      dt(e, t, n);
    }
  }
  function fs(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var a;
        try {
          if (Sa && Ca && e.mode & ot)
            try {
              ar(), a = n(null);
            } finally {
              nr(e);
            }
          else
            a = n(null);
        } catch (i) {
          dt(e, t, i);
        }
        typeof a == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Fe(e));
      } else
        n.current = null;
  }
  function Mf(e, t, n) {
    try {
      n();
    } catch (a) {
      dt(e, t, a);
    }
  }
  var Zy = !1;
  function v2(e, t) {
    j7(e.containerInfo), de = t, g2();
    var n = Zy;
    return Zy = !1, n;
  }
  function g2() {
    for (; de !== null; ) {
      var e = de, t = e.child;
      (e.subtreeFlags & Zd) !== xe && t !== null ? (t.return = e, de = t) : y2();
    }
  }
  function y2() {
    for (; de !== null; ) {
      var e = de;
      xt(e);
      try {
        L2(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      Qt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, de = t;
        return;
      }
      de = e.return;
    }
  }
  function L2(e) {
    var t = e.alternate, n = e.flags;
    if ((n & Ui) !== xe) {
      switch (xt(e), e.tag) {
        case h:
        case H:
        case X:
          break;
        case p: {
          if (t !== null) {
            var a = t.memoizedProps, i = t.memoizedState, u = e.stateNode;
            e.type === e.elementType && !oo && (u.props !== e.memoizedProps && c("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(e) || "instance"), u.state !== e.memoizedState && c("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(e) || "instance"));
            var m = u.getSnapshotBeforeUpdate(e.elementType === e.type ? a : Ma(e.type, a), i);
            {
              var g = Qy;
              m === void 0 && !g.has(e.type) && (g.add(e.type), c("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Fe(e)));
            }
            u.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        }
        case L: {
          {
            var b = e.stateNode;
            Z7(b.containerInfo);
          }
          break;
        }
        case N:
        case j:
        case x:
        case fe:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      Qt();
    }
  }
  function Ua(e, t, n) {
    var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
    if (i !== null) {
      var u = i.next, m = u;
      do {
        if ((m.tag & e) === e) {
          var g = m.destroy;
          m.destroy = void 0, g !== void 0 && ((e & rn) !== Hn ? _4(t) : (e & zt) !== Hn && Hg(t), (e & Za) !== Hn && vu(!0), Mf(t, n, g), (e & Za) !== Hn && vu(!1), (e & rn) !== Hn ? P4() : (e & zt) !== Hn && Bg());
        }
        m = m.next;
      } while (m !== u);
    }
  }
  function hi(e, t) {
    var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var i = a.next, u = i;
      do {
        if ((u.tag & e) === e) {
          (e & rn) !== Hn ? O4(t) : (e & zt) !== Hn && A4(t);
          var m = u.create;
          (e & Za) !== Hn && vu(!0), u.destroy = m(), (e & Za) !== Hn && vu(!1), (e & rn) !== Hn ? F4() : (e & zt) !== Hn && M4();
          {
            var g = u.destroy;
            if (g !== void 0 && typeof g != "function") {
              var b = void 0;
              (u.tag & zt) !== xe ? b = "useLayoutEffect" : (u.tag & Za) !== xe ? b = "useInsertionEffect" : b = "useEffect";
              var E = void 0;
              g === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? E = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + g, c("%s must not return anything besides a function, which is used for clean-up.%s", b, E);
            }
          }
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function b2(e, t) {
    if ((t.flags & Ke) !== xe)
      switch (t.tag) {
        case w: {
          var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, i = a.id, u = a.onPostCommit, m = hy(), g = t.alternate === null ? "mount" : "update";
          py() && (g = "nested-update"), typeof u == "function" && u(i, g, n, m);
          var b = t.return;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case L:
                var E = b.stateNode;
                E.passiveEffectDuration += n;
                break e;
              case w:
                var R = b.stateNode;
                R.passiveEffectDuration += n;
                break e;
            }
            b = b.return;
          }
          break;
        }
      }
  }
  function x2(e, t, n, a) {
    if ((n.flags & Js) !== xe)
      switch (n.tag) {
        case h:
        case H:
        case X: {
          if (!sn)
            if (n.mode & ot)
              try {
                ar(), hi(zt | Ut, n);
              } finally {
                nr(n);
              }
            else
              hi(zt | Ut, n);
          break;
        }
        case p: {
          var i = n.stateNode;
          if (n.flags & Ke && !sn)
            if (t === null)
              if (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(n) || "instance")), n.mode & ot)
                try {
                  ar(), i.componentDidMount();
                } finally {
                  nr(n);
                }
              else
                i.componentDidMount();
            else {
              var u = n.elementType === n.type ? t.memoizedProps : Ma(n.type, t.memoizedProps), m = t.memoizedState;
              if (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(n) || "instance")), n.mode & ot)
                try {
                  ar(), i.componentDidUpdate(u, m, i.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  nr(n);
                }
              else
                i.componentDidUpdate(u, m, i.__reactInternalSnapshotBeforeUpdate);
            }
          var g = n.updateQueue;
          g !== null && (n.type === n.elementType && !oo && (i.props !== n.memoizedProps && c("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(n) || "instance"), i.state !== n.memoizedState && c("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(n) || "instance")), U0(n, g, i));
          break;
        }
        case L: {
          var b = n.updateQueue;
          if (b !== null) {
            var E = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case N:
                  E = n.child.stateNode;
                  break;
                case p:
                  E = n.child.stateNode;
                  break;
              }
            U0(n, b, E);
          }
          break;
        }
        case N: {
          var R = n.stateNode;
          if (t === null && n.flags & Ke) {
            var F = n.type, O = n.memoizedProps;
            U7(R, F, O);
          }
          break;
        }
        case j:
          break;
        case x:
          break;
        case w: {
          {
            var $ = n.memoizedProps, I = $.onCommit, W = $.onRender, ie = n.stateNode.effectDuration, ye = hy(), he = t === null ? "mount" : "update";
            py() && (he = "nested-update"), typeof W == "function" && W(n.memoizedProps.id, he, n.actualDuration, n.treeBaseDuration, n.actualStartTime, ye);
            {
              typeof I == "function" && I(n.memoizedProps.id, he, ie, ye), yS(n);
              var Ye = n.return;
              e: for (; Ye !== null; ) {
                switch (Ye.tag) {
                  case L:
                    var Ue = Ye.stateNode;
                    Ue.effectDuration += ie;
                    break e;
                  case w:
                    var V = Ye.stateNode;
                    V.effectDuration += ie;
                    break e;
                }
                Ye = Ye.return;
              }
            }
          }
          break;
        }
        case A: {
          T2(e, n);
          break;
        }
        case pe:
        case fe:
        case Xe:
        case ve:
        case Ee:
        case tt:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    sn || n.flags & Jr && eL(n);
  }
  function S2(e) {
    switch (e.tag) {
      case h:
      case H:
      case X: {
        if (e.mode & ot)
          try {
            ar(), Xy(e, e.return);
          } finally {
            nr(e);
          }
        else
          Xy(e, e.return);
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && h2(e, e.return, t), Jy(e, e.return);
        break;
      }
      case N: {
        Jy(e, e.return);
        break;
      }
    }
  }
  function C2(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === N) {
        if (n === null) {
          n = a;
          try {
            var i = a.stateNode;
            t ? q7(i) : X7(a.stateNode, a.memoizedProps);
          } catch (m) {
            dt(e, e.return, m);
          }
        }
      } else if (a.tag === j) {
        if (n === null)
          try {
            var u = a.stateNode;
            t ? Q7(u) : J7(u, a.memoizedProps);
          } catch (m) {
            dt(e, e.return, m);
          }
      } else if (!((a.tag === ve || a.tag === Ee) && a.memoizedState !== null && a !== e)) {
        if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
      }
      if (a === e)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return;
        n === a && (n = null), a = a.return;
      }
      n === a && (n = null), a.sibling.return = a.return, a = a.sibling;
    }
  }
  function eL(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, a;
      switch (e.tag) {
        case N:
          a = n;
          break;
        default:
          a = n;
      }
      if (typeof t == "function") {
        var i;
        if (e.mode & ot)
          try {
            ar(), i = t(a);
          } finally {
            nr(e);
          }
        else
          i = t(a);
        typeof i == "function" && c("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Fe(e));
      } else
        t.hasOwnProperty("current") || c("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Fe(e)), t.current = a;
    }
  }
  function E2(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function tL(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, tL(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === N) {
        var n = e.stateNode;
        n !== null && Dx(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function N2(e) {
    for (var t = e.return; t !== null; ) {
      if (nL(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function nL(e) {
    return e.tag === N || e.tag === L || e.tag === x;
  }
  function aL(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || nL(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== N && t.tag !== j && t.tag !== le; ) {
        if (t.flags & _t || t.child === null || t.tag === x)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & _t))
        return t.stateNode;
    }
  }
  function R2(e) {
    var t = N2(e);
    switch (t.tag) {
      case N: {
        var n = t.stateNode;
        t.flags & Qs && (i0(n), t.flags &= ~Qs);
        var a = aL(e);
        Gh(e, a, n);
        break;
      }
      case L:
      case x: {
        var i = t.stateNode.containerInfo, u = aL(e);
        Wh(e, u, i);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Wh(e, t, n) {
    var a = e.tag, i = a === N || a === j;
    if (i) {
      var u = e.stateNode;
      t ? Y7(n, u, t) : B7(n, u);
    } else if (a !== x) {
      var m = e.child;
      if (m !== null) {
        Wh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Wh(g, t, n), g = g.sibling;
      }
    }
  }
  function Gh(e, t, n) {
    var a = e.tag, i = a === N || a === j;
    if (i) {
      var u = e.stateNode;
      t ? I7(n, u, t) : H7(n, u);
    } else if (a !== x) {
      var m = e.child;
      if (m !== null) {
        Gh(m, t, n);
        for (var g = m.sibling; g !== null; )
          Gh(g, t, n), g = g.sibling;
      }
    }
  }
  var ln = null, za = !1;
  function w2(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case N: {
            ln = a.stateNode, za = !1;
            break e;
          }
          case L: {
            ln = a.stateNode.containerInfo, za = !0;
            break e;
          }
          case x: {
            ln = a.stateNode.containerInfo, za = !0;
            break e;
          }
        }
        a = a.return;
      }
      if (ln === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      rL(e, t, n), ln = null, za = !1;
    }
    E2(n);
  }
  function vi(e, t, n) {
    for (var a = n.child; a !== null; )
      rL(e, t, a), a = a.sibling;
  }
  function rL(e, t, n) {
    switch (j4(n), n.tag) {
      case N:
        sn || fs(n, t);
      case j: {
        {
          var a = ln, i = za;
          ln = null, vi(e, t, n), ln = a, za = i, ln !== null && (za ? W7(ln, n.stateNode) : K7(ln, n.stateNode));
        }
        return;
      }
      case le: {
        ln !== null && (za ? G7(ln, n.stateNode) : ip(ln, n.stateNode));
        return;
      }
      case x: {
        {
          var u = ln, m = za;
          ln = n.stateNode.containerInfo, za = !0, vi(e, t, n), ln = u, za = m;
        }
        return;
      }
      case h:
      case H:
      case Y:
      case X: {
        if (!sn) {
          var g = n.updateQueue;
          if (g !== null) {
            var b = g.lastEffect;
            if (b !== null) {
              var E = b.next, R = E;
              do {
                var F = R, O = F.destroy, $ = F.tag;
                O !== void 0 && (($ & Za) !== Hn ? Mf(n, t, O) : ($ & zt) !== Hn && (Hg(n), n.mode & ot ? (ar(), Mf(n, t, O), nr(n)) : Mf(n, t, O), Bg())), R = R.next;
              } while (R !== E);
            }
          }
        }
        vi(e, t, n);
        return;
      }
      case p: {
        if (!sn) {
          fs(n, t);
          var I = n.stateNode;
          typeof I.componentWillUnmount == "function" && Kh(n, t, I);
        }
        vi(e, t, n);
        return;
      }
      case Xe: {
        vi(e, t, n);
        return;
      }
      case ve: {
        if (
          // TODO: Remove this dead flag
          n.mode & Be
        ) {
          var W = sn;
          sn = W || n.memoizedState !== null, vi(e, t, n), sn = W;
        } else
          vi(e, t, n);
        break;
      }
      default: {
        vi(e, t, n);
        return;
      }
    }
  }
  function j2(e) {
    e.memoizedState;
  }
  function T2(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var i = a.memoizedState;
        if (i !== null) {
          var u = i.dehydrated;
          u !== null && mx(u);
        }
      }
    }
  }
  function iL(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new d2()), t.forEach(function(a) {
        var i = NS.bind(null, e, a);
        if (!n.has(a)) {
          if (n.add(a), Da)
            if (us !== null && cs !== null)
              hu(cs, us);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          a.then(i, i);
        }
      });
    }
  }
  function D2(e, t, n) {
    us = n, cs = e, xt(t), oL(t, e), xt(t), us = null, cs = null;
  }
  function $a(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i];
        try {
          w2(e, t, u);
        } catch (b) {
          dt(u, t, b);
        }
      }
    var m = Ku();
    if (t.subtreeFlags & em)
      for (var g = t.child; g !== null; )
        xt(g), oL(g, e), g = g.sibling;
    xt(m);
  }
  function oL(e, t, n) {
    var a = e.alternate, i = e.flags;
    switch (e.tag) {
      case h:
      case H:
      case Y:
      case X: {
        if ($a(t, e), rr(e), i & Ke) {
          try {
            Ua(Za | Ut, e, e.return), hi(Za | Ut, e);
          } catch (Ce) {
            dt(e, e.return, Ce);
          }
          if (e.mode & ot) {
            try {
              ar(), Ua(zt | Ut, e, e.return);
            } catch (Ce) {
              dt(e, e.return, Ce);
            }
            nr(e);
          } else
            try {
              Ua(zt | Ut, e, e.return);
            } catch (Ce) {
              dt(e, e.return, Ce);
            }
        }
        return;
      }
      case p: {
        $a(t, e), rr(e), i & Jr && a !== null && fs(a, a.return);
        return;
      }
      case N: {
        $a(t, e), rr(e), i & Jr && a !== null && fs(a, a.return);
        {
          if (e.flags & Qs) {
            var u = e.stateNode;
            try {
              i0(u);
            } catch (Ce) {
              dt(e, e.return, Ce);
            }
          }
          if (i & Ke) {
            var m = e.stateNode;
            if (m != null) {
              var g = e.memoizedProps, b = a !== null ? a.memoizedProps : g, E = e.type, R = e.updateQueue;
              if (e.updateQueue = null, R !== null)
                try {
                  z7(m, R, E, b, g, e);
                } catch (Ce) {
                  dt(e, e.return, Ce);
                }
            }
          }
        }
        return;
      }
      case j: {
        if ($a(t, e), rr(e), i & Ke) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var F = e.stateNode, O = e.memoizedProps, $ = a !== null ? a.memoizedProps : O;
          try {
            $7(F, $, O);
          } catch (Ce) {
            dt(e, e.return, Ce);
          }
        }
        return;
      }
      case L: {
        if ($a(t, e), rr(e), i & Ke && a !== null) {
          var I = a.memoizedState;
          if (I.isDehydrated)
            try {
              dx(t.containerInfo);
            } catch (Ce) {
              dt(e, e.return, Ce);
            }
        }
        return;
      }
      case x: {
        $a(t, e), rr(e);
        return;
      }
      case A: {
        $a(t, e), rr(e);
        var W = e.child;
        if (W.flags & zi) {
          var ie = W.stateNode, ye = W.memoizedState, he = ye !== null;
          if (ie.isHidden = he, he) {
            var Ye = W.alternate !== null && W.alternate.memoizedState !== null;
            Ye || cS();
          }
        }
        if (i & Ke) {
          try {
            j2(e);
          } catch (Ce) {
            dt(e, e.return, Ce);
          }
          iL(e);
        }
        return;
      }
      case ve: {
        var Ue = a !== null && a.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Be
        ) {
          var V = sn;
          sn = V || Ue, $a(t, e), sn = V;
        } else
          $a(t, e);
        if (rr(e), i & zi) {
          var G = e.stateNode, U = e.memoizedState, Z = U !== null, ce = e;
          if (G.isHidden = Z, Z && !Ue && (ce.mode & Be) !== Le) {
            de = ce;
            for (var oe = ce.child; oe !== null; )
              de = oe, O2(oe), oe = oe.sibling;
          }
          C2(ce, Z);
        }
        return;
      }
      case pe: {
        $a(t, e), rr(e), i & Ke && iL(e);
        return;
      }
      case Xe:
        return;
      default: {
        $a(t, e), rr(e);
        return;
      }
    }
  }
  function rr(e) {
    var t = e.flags;
    if (t & _t) {
      try {
        R2(e);
      } catch (n) {
        dt(e, e.return, n);
      }
      e.flags &= ~_t;
    }
    t & br && (e.flags &= ~br);
  }
  function k2(e, t, n) {
    us = n, cs = t, de = e, sL(e, t, n), us = null, cs = null;
  }
  function sL(e, t, n) {
    for (var a = (e.mode & Be) !== Le; de !== null; ) {
      var i = de, u = i.child;
      if (i.tag === ve && a) {
        var m = i.memoizedState !== null, g = m || Af;
        if (g) {
          qh(e, t, n);
          continue;
        } else {
          var b = i.alternate, E = b !== null && b.memoizedState !== null, R = E || sn, F = Af, O = sn;
          Af = g, sn = R, sn && !O && (de = i, F2(i));
          for (var $ = u; $ !== null; )
            de = $, sL(
              $,
              // New root; bubble back up to here and stop.
              t,
              n
            ), $ = $.sibling;
          de = i, Af = F, sn = O, qh(e, t, n);
          continue;
        }
      }
      (i.subtreeFlags & Js) !== xe && u !== null ? (u.return = i, de = u) : qh(e, t, n);
    }
  }
  function qh(e, t, n) {
    for (; de !== null; ) {
      var a = de;
      if ((a.flags & Js) !== xe) {
        var i = a.alternate;
        xt(a);
        try {
          x2(t, i, a, n);
        } catch (m) {
          dt(a, a.return, m);
        }
        Qt();
      }
      if (a === e) {
        de = null;
        return;
      }
      var u = a.sibling;
      if (u !== null) {
        u.return = a.return, de = u;
        return;
      }
      de = a.return;
    }
  }
  function O2(e) {
    for (; de !== null; ) {
      var t = de, n = t.child;
      switch (t.tag) {
        case h:
        case H:
        case Y:
        case X: {
          if (t.mode & ot)
            try {
              ar(), Ua(zt, t, t.return);
            } finally {
              nr(t);
            }
          else
            Ua(zt, t, t.return);
          break;
        }
        case p: {
          fs(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Kh(t, t.return, a);
          break;
        }
        case N: {
          fs(t, t.return);
          break;
        }
        case ve: {
          var i = t.memoizedState !== null;
          if (i) {
            lL(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, de = n) : lL(e);
    }
  }
  function lL(e) {
    for (; de !== null; ) {
      var t = de;
      if (t === e) {
        de = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, de = n;
        return;
      }
      de = t.return;
    }
  }
  function F2(e) {
    for (; de !== null; ) {
      var t = de, n = t.child;
      if (t.tag === ve) {
        var a = t.memoizedState !== null;
        if (a) {
          uL(e);
          continue;
        }
      }
      n !== null ? (n.return = t, de = n) : uL(e);
    }
  }
  function uL(e) {
    for (; de !== null; ) {
      var t = de;
      xt(t);
      try {
        S2(t);
      } catch (a) {
        dt(t, t.return, a);
      }
      if (Qt(), t === e) {
        de = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, de = n;
        return;
      }
      de = t.return;
    }
  }
  function _2(e, t, n, a) {
    de = t, P2(t, e, n, a);
  }
  function P2(e, t, n, a) {
    for (; de !== null; ) {
      var i = de, u = i.child;
      (i.subtreeFlags & ko) !== xe && u !== null ? (u.return = i, de = u) : A2(e, t, n, a);
    }
  }
  function A2(e, t, n, a) {
    for (; de !== null; ) {
      var i = de;
      if ((i.flags & Ta) !== xe) {
        xt(i);
        try {
          M2(t, i, n, a);
        } catch (m) {
          dt(i, i.return, m);
        }
        Qt();
      }
      if (i === e) {
        de = null;
        return;
      }
      var u = i.sibling;
      if (u !== null) {
        u.return = i.return, de = u;
        return;
      }
      de = i.return;
    }
  }
  function M2(e, t, n, a) {
    switch (t.tag) {
      case h:
      case H:
      case X: {
        if (t.mode & ot) {
          ph();
          try {
            hi(rn | Ut, t);
          } finally {
            mh(t);
          }
        } else
          hi(rn | Ut, t);
        break;
      }
    }
  }
  function V2(e) {
    de = e, U2();
  }
  function U2() {
    for (; de !== null; ) {
      var e = de, t = e.child;
      if ((de.flags & Vi) !== xe) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var i = n[a];
            de = i, H2(i, e);
          }
          {
            var u = e.alternate;
            if (u !== null) {
              var m = u.child;
              if (m !== null) {
                u.child = null;
                do {
                  var g = m.sibling;
                  m.sibling = null, m = g;
                } while (m !== null);
              }
            }
          }
          de = e;
        }
      }
      (e.subtreeFlags & ko) !== xe && t !== null ? (t.return = e, de = t) : z2();
    }
  }
  function z2() {
    for (; de !== null; ) {
      var e = de;
      (e.flags & Ta) !== xe && (xt(e), $2(e), Qt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, de = t;
        return;
      }
      de = e.return;
    }
  }
  function $2(e) {
    switch (e.tag) {
      case h:
      case H:
      case X: {
        e.mode & ot ? (ph(), Ua(rn | Ut, e, e.return), mh(e)) : Ua(rn | Ut, e, e.return);
        break;
      }
    }
  }
  function H2(e, t) {
    for (; de !== null; ) {
      var n = de;
      xt(n), I2(n, t), Qt();
      var a = n.child;
      a !== null ? (a.return = n, de = a) : B2(e);
    }
  }
  function B2(e) {
    for (; de !== null; ) {
      var t = de, n = t.sibling, a = t.return;
      if (tL(t), t === e) {
        de = null;
        return;
      }
      if (n !== null) {
        n.return = a, de = n;
        return;
      }
      de = a;
    }
  }
  function I2(e, t) {
    switch (e.tag) {
      case h:
      case H:
      case X: {
        e.mode & ot ? (ph(), Ua(rn, e, t), mh(e)) : Ua(rn, e, t);
        break;
      }
    }
  }
  function Y2(e) {
    switch (e.tag) {
      case h:
      case H:
      case X: {
        try {
          hi(zt | Ut, e);
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
    }
  }
  function K2(e) {
    switch (e.tag) {
      case h:
      case H:
      case X: {
        try {
          hi(rn | Ut, e);
        } catch (t) {
          dt(e, e.return, t);
        }
        break;
      }
    }
  }
  function W2(e) {
    switch (e.tag) {
      case h:
      case H:
      case X: {
        try {
          Ua(zt | Ut, e, e.return);
        } catch (n) {
          dt(e, e.return, n);
        }
        break;
      }
      case p: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Kh(e, e.return, t);
        break;
      }
    }
  }
  function G2(e) {
    switch (e.tag) {
      case h:
      case H:
      case X:
        try {
          Ua(rn | Ut, e, e.return);
        } catch (t) {
          dt(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var ru = Symbol.for;
    ru("selector.component"), ru("selector.has_pseudo_class"), ru("selector.role"), ru("selector.test_id"), ru("selector.text");
  }
  var q2 = [];
  function Q2() {
    q2.forEach(function(e) {
      return e();
    });
  }
  var X2 = s.ReactCurrentActQueue;
  function J2(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function cL() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && X2.current !== null && c("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var Z2 = Math.ceil, Qh = s.ReactCurrentDispatcher, Xh = s.ReactCurrentOwner, un = s.ReactCurrentBatchConfig, Ha = s.ReactCurrentActQueue, Bt = (
    /*             */
    0
  ), fL = (
    /*               */
    1
  ), cn = (
    /*                */
    2
  ), ba = (
    /*                */
    4
  ), Fr = 0, iu = 1, so = 2, Vf = 3, ou = 4, dL = 5, Jh = 6, Ie = Bt, kn = null, St = null, It = Q, ir = Q, Zh = oi(Q), Yt = Fr, su = null, Uf = Q, lu = Q, zf = Q, uu = null, Bn = null, ev = 0, mL = 500, pL = 1 / 0, eS = 500, _r = null;
  function cu() {
    pL = Xt() + eS;
  }
  function hL() {
    return pL;
  }
  var $f = !1, tv = null, ds = null, lo = !1, gi = null, fu = Q, nv = [], av = null, tS = 50, du = 0, rv = null, iv = !1, Hf = !1, nS = 50, ms = 0, Bf = null, mu = pt, If = Q, vL = !1;
  function Yf() {
    return kn;
  }
  function On() {
    return (Ie & (cn | ba)) !== Bt ? Xt() : (mu !== pt || (mu = Xt()), mu);
  }
  function yi(e) {
    var t = e.mode;
    if ((t & Be) === Le)
      return Te;
    if ((Ie & cn) !== Bt && It !== Q)
      return il(It);
    var n = Xx() !== Qx;
    if (n) {
      if (un.transition !== null) {
        var a = un.transition;
        a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
      }
      return If === Zt && (If = Xg()), If;
    }
    var i = ka();
    if (i !== Zt)
      return i;
    var u = P7();
    return u;
  }
  function aS(e) {
    var t = e.mode;
    return (t & Be) === Le ? Te : i8();
  }
  function Kt(e, t, n, a) {
    wS(), vL && c("useInsertionEffect must not schedule updates."), iv && (Hf = !0), ol(e, n, a), (Ie & cn) !== Q && e === kn ? DS(t) : (Da && e1(e, t, n), kS(t), e === kn && ((Ie & cn) === Bt && (lu = Pe(lu, n)), Yt === ou && Li(e, It)), In(e, a), n === Te && Ie === Bt && (t.mode & Be) === Le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Ha.isBatchingLegacy && (cu(), v0()));
  }
  function rS(e, t, n) {
    var a = e.current;
    a.lanes = t, ol(e, t, n), In(e, n);
  }
  function iS(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Ie & cn) !== Bt
    );
  }
  function In(e, t) {
    var n = e.callbackNode;
    Z4(e, t);
    var a = fc(e, e === kn ? It : Q);
    if (a === Q) {
      n !== null && OL(n), e.callbackNode = null, e.callbackPriority = Zt;
      return;
    }
    var i = Ki(a), u = e.callbackPriority;
    if (u === i && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Ha.current !== null && n !== dv)) {
      n == null && u !== Te && c("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && OL(n);
    var m;
    if (i === Te)
      e.tag === si ? (Ha.isBatchingLegacy !== null && (Ha.didScheduleLegacyUpdate = !0), Fx(LL.bind(null, e))) : h0(LL.bind(null, e)), Ha.current !== null ? Ha.current.push(li) : M7(function() {
        (Ie & (cn | ba)) === Bt && li();
      }), m = null;
    else {
      var g;
      switch (a1(a)) {
        case ea:
          g = sc;
          break;
        case Er:
          g = tm;
          break;
        case Nr:
          g = Bi;
          break;
        case pc:
          g = nm;
          break;
        default:
          g = Bi;
          break;
      }
      m = mv(g, gL.bind(null, e));
    }
    e.callbackPriority = i, e.callbackNode = m;
  }
  function gL(e, t) {
    if (C9(), mu = pt, If = Q, (Ie & (cn | ba)) !== Bt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, a = Ar();
    if (a && e.callbackNode !== n)
      return null;
    var i = fc(e, e === kn ? It : Q);
    if (i === Q)
      return null;
    var u = !dc(e, i) && !r8(e, i) && !t, m = u ? hS(e, i) : Wf(e, i);
    if (m !== Fr) {
      if (m === so) {
        var g = Em(e);
        g !== Q && (i = g, m = ov(e, g));
      }
      if (m === iu) {
        var b = su;
        throw uo(e, Q), Li(e, i), In(e, Xt()), b;
      }
      if (m === Jh)
        Li(e, i);
      else {
        var E = !dc(e, i), R = e.current.alternate;
        if (E && !sS(R)) {
          if (m = Wf(e, i), m === so) {
            var F = Em(e);
            F !== Q && (i = F, m = ov(e, F));
          }
          if (m === iu) {
            var O = su;
            throw uo(e, Q), Li(e, i), In(e, Xt()), O;
          }
        }
        e.finishedWork = R, e.finishedLanes = i, oS(e, m, i);
      }
    }
    return In(e, Xt()), e.callbackNode === n ? gL.bind(null, e) : null;
  }
  function ov(e, t) {
    var n = uu;
    if (hc(e)) {
      var a = uo(e, t);
      a.flags |= Lr, Rx(e.containerInfo);
    }
    var i = Wf(e, t);
    if (i !== so) {
      var u = Bn;
      Bn = n, u !== null && yL(u);
    }
    return i;
  }
  function yL(e) {
    Bn === null ? Bn = e : Bn.push.apply(Bn, e);
  }
  function oS(e, t, n) {
    switch (t) {
      case Fr:
      case iu:
        throw new Error("Root did not complete. This is a bug in React.");
      case so: {
        co(e, Bn, _r);
        break;
      }
      case Vf: {
        if (Li(e, n), qg(n) && // do not delay if we're inside an act() scope
        !FL()) {
          var a = ev + mL - Xt();
          if (a > 10) {
            var i = fc(e, Q);
            if (i !== Q)
              break;
            var u = e.suspendedLanes;
            if (!Mo(u, n)) {
              On(), Zg(e, u);
              break;
            }
            e.timeoutHandle = ap(co.bind(null, e, Bn, _r), a);
            break;
          }
        }
        co(e, Bn, _r);
        break;
      }
      case ou: {
        if (Li(e, n), a8(n))
          break;
        if (!FL()) {
          var m = X4(e, n), g = m, b = Xt() - g, E = RS(b) - b;
          if (E > 10) {
            e.timeoutHandle = ap(co.bind(null, e, Bn, _r), E);
            break;
          }
        }
        co(e, Bn, _r);
        break;
      }
      case dL: {
        co(e, Bn, _r);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function sS(e) {
    for (var t = e; ; ) {
      if (t.flags & ic) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var i = 0; i < a.length; i++) {
              var u = a[i], m = u.getSnapshot, g = u.value;
              try {
                if (!na(m(), g))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var b = t.child;
      if (t.subtreeFlags & ic && b !== null) {
        b.return = t, t = b;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function Li(e, t) {
    t = mc(t, zf), t = mc(t, lu), s8(e, t);
  }
  function LL(e) {
    if (E9(), (Ie & (cn | ba)) !== Bt)
      throw new Error("Should not already be working.");
    Ar();
    var t = fc(e, Q);
    if (!Zn(t, Te))
      return In(e, Xt()), null;
    var n = Wf(e, t);
    if (e.tag !== si && n === so) {
      var a = Em(e);
      a !== Q && (t = a, n = ov(e, a));
    }
    if (n === iu) {
      var i = su;
      throw uo(e, Q), Li(e, t), In(e, Xt()), i;
    }
    if (n === Jh)
      throw new Error("Root did not complete. This is a bug in React.");
    var u = e.current.alternate;
    return e.finishedWork = u, e.finishedLanes = t, co(e, Bn, _r), In(e, Xt()), null;
  }
  function lS(e, t) {
    t !== Q && (jm(e, Pe(t, Te)), In(e, Xt()), (Ie & (cn | ba)) === Bt && (cu(), li()));
  }
  function sv(e, t) {
    var n = Ie;
    Ie |= fL;
    try {
      return e(t);
    } finally {
      Ie = n, Ie === Bt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ha.isBatchingLegacy && (cu(), v0());
    }
  }
  function uS(e, t, n, a, i) {
    var u = ka(), m = un.transition;
    try {
      return un.transition = null, en(ea), e(t, n, a, i);
    } finally {
      en(u), un.transition = m, Ie === Bt && cu();
    }
  }
  function Pr(e) {
    gi !== null && gi.tag === si && (Ie & (cn | ba)) === Bt && Ar();
    var t = Ie;
    Ie |= fL;
    var n = un.transition, a = ka();
    try {
      return un.transition = null, en(ea), e ? e() : void 0;
    } finally {
      en(a), un.transition = n, Ie = t, (Ie & (cn | ba)) === Bt && li();
    }
  }
  function bL() {
    return (Ie & (cn | ba)) !== Bt;
  }
  function Kf(e, t) {
    Sn(Zh, ir, e), ir = Pe(ir, t);
  }
  function lv(e) {
    ir = Zh.current, xn(Zh, e);
  }
  function uo(e, t) {
    e.finishedWork = null, e.finishedLanes = Q;
    var n = e.timeoutHandle;
    if (n !== rp && (e.timeoutHandle = rp, A7(n)), St !== null)
      for (var a = St.return; a !== null; ) {
        var i = a.alternate;
        qy(i, a), a = a.return;
      }
    kn = e;
    var u = fo(e.current, null);
    return St = u, It = ir = t, Yt = Fr, su = null, Uf = Q, lu = Q, zf = Q, uu = null, Bn = null, r9(), _a.discardPendingWarnings(), u;
  }
  function xL(e, t) {
    do {
      var n = St;
      try {
        if (tf(), Y0(), Qt(), Xh.current = null, n === null || n.return === null) {
          Yt = iu, su = t, St = null;
          return;
        }
        if (Sa && n.mode & ot && kf(n, !0), Ia)
          if (Fo(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var a = t;
            U4(n, a, It);
          } else
            V4(n, t, It);
        F9(e, n.return, n, t, It), NL(n);
      } catch (i) {
        t = i, St === n && n !== null ? (n = n.return, St = n) : n = St;
        continue;
      }
      return;
    } while (!0);
  }
  function SL() {
    var e = Qh.current;
    return Qh.current = Rf, e === null ? Rf : e;
  }
  function CL(e) {
    Qh.current = e;
  }
  function cS() {
    ev = Xt();
  }
  function pu(e) {
    Uf = Pe(e, Uf);
  }
  function fS() {
    Yt === Fr && (Yt = Vf);
  }
  function uv() {
    (Yt === Fr || Yt === Vf || Yt === so) && (Yt = ou), kn !== null && (Nm(Uf) || Nm(lu)) && Li(kn, It);
  }
  function dS(e) {
    Yt !== ou && (Yt = so), uu === null ? uu = [e] : uu.push(e);
  }
  function mS() {
    return Yt === Fr;
  }
  function Wf(e, t) {
    var n = Ie;
    Ie |= cn;
    var a = SL();
    if (kn !== e || It !== t) {
      if (Da) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (hu(e, It), i.clear()), t1(e, t);
      }
      _r = n1(), uo(e, t);
    }
    Ig(t);
    do
      try {
        pS();
        break;
      } catch (u) {
        xL(e, u);
      }
    while (!0);
    if (tf(), Ie = n, CL(a), St !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return Yg(), kn = null, It = Q, Yt;
  }
  function pS() {
    for (; St !== null; )
      EL(St);
  }
  function hS(e, t) {
    var n = Ie;
    Ie |= cn;
    var a = SL();
    if (kn !== e || It !== t) {
      if (Da) {
        var i = e.memoizedUpdaters;
        i.size > 0 && (hu(e, It), i.clear()), t1(e, t);
      }
      _r = n1(), cu(), uo(e, t);
    }
    Ig(t);
    do
      try {
        vS();
        break;
      } catch (u) {
        xL(e, u);
      }
    while (!0);
    return tf(), CL(a), Ie = n, St !== null ? (I4(), Fr) : (Yg(), kn = null, It = Q, Yt);
  }
  function vS() {
    for (; St !== null && !y4(); )
      EL(St);
  }
  function EL(e) {
    var t = e.alternate;
    xt(e);
    var n;
    (e.mode & ot) !== Le ? (dh(e), n = cv(t, e, ir), kf(e, !0)) : n = cv(t, e, ir), Qt(), e.memoizedProps = e.pendingProps, n === null ? NL(e) : St = n, Xh.current = null;
  }
  function NL(e) {
    var t = e;
    do {
      var n = t.alternate, a = t.return;
      if ((t.flags & Xs) === xe) {
        xt(t);
        var i = void 0;
        if ((t.mode & ot) === Le ? i = Gy(n, t, ir) : (dh(t), i = Gy(n, t, ir), kf(t, !1)), Qt(), i !== null) {
          St = i;
          return;
        }
      } else {
        var u = f2(n, t);
        if (u !== null) {
          u.flags &= d4, St = u;
          return;
        }
        if ((t.mode & ot) !== Le) {
          kf(t, !1);
          for (var m = t.actualDuration, g = t.child; g !== null; )
            m += g.actualDuration, g = g.sibling;
          t.actualDuration = m;
        }
        if (a !== null)
          a.flags |= Xs, a.subtreeFlags = xe, a.deletions = null;
        else {
          Yt = Jh, St = null;
          return;
        }
      }
      var b = t.sibling;
      if (b !== null) {
        St = b;
        return;
      }
      t = a, St = t;
    } while (t !== null);
    Yt === Fr && (Yt = dL);
  }
  function co(e, t, n) {
    var a = ka(), i = un.transition;
    try {
      un.transition = null, en(ea), gS(e, t, n, a);
    } finally {
      un.transition = i, en(a);
    }
    return null;
  }
  function gS(e, t, n, a) {
    do
      Ar();
    while (gi !== null);
    if (jS(), (Ie & (cn | ba)) !== Bt)
      throw new Error("Should not already be working.");
    var i = e.finishedWork, u = e.finishedLanes;
    if (k4(u), i === null)
      return $g(), null;
    if (u === Q && c("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, i === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = Zt;
    var m = Pe(i.lanes, i.childLanes);
    l8(e, m), e === kn && (kn = null, St = null, It = Q), ((i.subtreeFlags & ko) !== xe || (i.flags & ko) !== xe) && (lo || (lo = !0, av = n, mv(Bi, function() {
      return Ar(), null;
    })));
    var g = (i.subtreeFlags & (Zd | em | Js | ko)) !== xe, b = (i.flags & (Zd | em | Js | ko)) !== xe;
    if (g || b) {
      var E = un.transition;
      un.transition = null;
      var R = ka();
      en(ea);
      var F = Ie;
      Ie |= ba, Xh.current = null, v2(e, i), vy(), D2(e, i, u), T7(e.containerInfo), e.current = i, z4(u), k2(i, e, u), $4(), L4(), Ie = F, en(R), un.transition = E;
    } else
      e.current = i, vy();
    var O = lo;
    if (lo ? (lo = !1, gi = e, fu = u) : (ms = 0, Bf = null), m = e.pendingLanes, m === Q && (ds = null), O || TL(e.current, !1), R4(i.stateNode, a), Da && e.memoizedUpdaters.clear(), Q2(), In(e, Xt()), t !== null)
      for (var $ = e.onRecoverableError, I = 0; I < t.length; I++) {
        var W = t[I], ie = W.stack, ye = W.digest;
        $(W.value, {
          componentStack: ie,
          digest: ye
        });
      }
    if ($f) {
      $f = !1;
      var he = tv;
      throw tv = null, he;
    }
    return Zn(fu, Te) && e.tag !== si && Ar(), m = e.pendingLanes, Zn(m, Te) ? (S9(), e === rv ? du++ : (du = 0, rv = e)) : du = 0, li(), $g(), null;
  }
  function Ar() {
    if (gi !== null) {
      var e = a1(fu), t = d8(Nr, e), n = un.transition, a = ka();
      try {
        return un.transition = null, en(t), LS();
      } finally {
        en(a), un.transition = n;
      }
    }
    return !1;
  }
  function yS(e) {
    nv.push(e), lo || (lo = !0, mv(Bi, function() {
      return Ar(), null;
    }));
  }
  function LS() {
    if (gi === null)
      return !1;
    var e = av;
    av = null;
    var t = gi, n = fu;
    if (gi = null, fu = Q, (Ie & (cn | ba)) !== Bt)
      throw new Error("Cannot flush passive effects while already rendering.");
    iv = !0, Hf = !1, H4(n);
    var a = Ie;
    Ie |= ba, V2(t.current), _2(t, t.current, n, e);
    {
      var i = nv;
      nv = [];
      for (var u = 0; u < i.length; u++) {
        var m = i[u];
        b2(t, m);
      }
    }
    B4(), TL(t.current, !0), Ie = a, li(), Hf ? t === Bf ? ms++ : (ms = 0, Bf = t) : ms = 0, iv = !1, Hf = !1, w4(t);
    {
      var g = t.current.stateNode;
      g.effectDuration = 0, g.passiveEffectDuration = 0;
    }
    return !0;
  }
  function RL(e) {
    return ds !== null && ds.has(e);
  }
  function bS(e) {
    ds === null ? ds = /* @__PURE__ */ new Set([e]) : ds.add(e);
  }
  function xS(e) {
    $f || ($f = !0, tv = e);
  }
  var SS = xS;
  function wL(e, t, n) {
    var a = io(n, t), i = Ey(e, a, Te), u = ci(e, i, Te), m = On();
    u !== null && (ol(u, Te, m), In(u, m));
  }
  function dt(e, t, n) {
    if (m2(n), vu(!1), e.tag === L) {
      wL(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === L) {
        wL(a, e, n);
        return;
      } else if (a.tag === p) {
        var i = a.type, u = a.stateNode;
        if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !RL(u)) {
          var m = io(n, e), g = Dh(a, m, Te), b = ci(a, g, Te), E = On();
          b !== null && (ol(b, Te, E), In(b, E));
          return;
        }
      }
      a = a.return;
    }
    c(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function CS(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var i = On();
    Zg(e, n), OS(e), kn === e && Mo(It, n) && (Yt === ou || Yt === Vf && qg(It) && Xt() - ev < mL ? uo(e, Q) : zf = Pe(zf, n)), In(e, i);
  }
  function jL(e, t) {
    t === Zt && (t = aS(e));
    var n = On(), a = $n(e, t);
    a !== null && (ol(a, t, n), In(a, n));
  }
  function ES(e) {
    var t = e.memoizedState, n = Zt;
    t !== null && (n = t.retryLane), jL(e, n);
  }
  function NS(e, t) {
    var n = Zt, a;
    switch (e.tag) {
      case A:
        a = e.stateNode;
        var i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case pe:
        a = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    a !== null && a.delete(t), jL(e, n);
  }
  function RS(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Z2(e / 1960) * 1960;
  }
  function wS() {
    if (du > tS)
      throw du = 0, rv = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    ms > nS && (ms = 0, Bf = null, c("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function jS() {
    _a.flushLegacyContextWarning(), _a.flushPendingUnsafeLifecycleWarnings();
  }
  function TL(e, t) {
    xt(e), Gf(e, xr, W2), t && Gf(e, oc, G2), Gf(e, xr, Y2), t && Gf(e, oc, K2), Qt();
  }
  function Gf(e, t, n) {
    for (var a = e, i = null; a !== null; ) {
      var u = a.subtreeFlags & t;
      a !== i && a.child !== null && u !== xe ? a = a.child : ((a.flags & t) !== xe && n(a), a.sibling !== null ? a = a.sibling : a = i = a.return);
    }
  }
  var qf = null;
  function DL(e) {
    {
      if ((Ie & cn) !== Bt || !(e.mode & Be))
        return;
      var t = e.tag;
      if (t !== v && t !== L && t !== p && t !== h && t !== H && t !== Y && t !== X)
        return;
      var n = Fe(e) || "ReactComponent";
      if (qf !== null) {
        if (qf.has(n))
          return;
        qf.add(n);
      } else
        qf = /* @__PURE__ */ new Set([n]);
      var a = Ln;
      try {
        xt(e), c("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        a ? xt(e) : Qt();
      }
    }
  }
  var cv;
  {
    var TS = null;
    cv = function(e, t, n) {
      var a = VL(TS, t);
      try {
        return By(e, t, n);
      } catch (u) {
        if ($x() || u !== null && typeof u == "object" && typeof u.then == "function")
          throw u;
        if (tf(), Y0(), qy(e, t), VL(t, a), t.mode & ot && dh(t), Wd(null, By, null, e, t, n), l4()) {
          var i = Gd();
          typeof i == "object" && i !== null && i._suppressLogging && typeof u == "object" && u !== null && !u._suppressLogging && (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var kL = !1, fv;
  fv = /* @__PURE__ */ new Set();
  function DS(e) {
    if (Pi && !L9())
      switch (e.tag) {
        case h:
        case H:
        case X: {
          var t = St && Fe(St) || "Unknown", n = t;
          if (!fv.has(n)) {
            fv.add(n);
            var a = Fe(e) || "Unknown";
            c("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
          }
          break;
        }
        case p: {
          kL || (c("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), kL = !0);
          break;
        }
      }
  }
  function hu(e, t) {
    if (Da) {
      var n = e.memoizedUpdaters;
      n.forEach(function(a) {
        e1(e, a, t);
      });
    }
  }
  var dv = {};
  function mv(e, t) {
    {
      var n = Ha.current;
      return n !== null ? (n.push(t), dv) : zg(e, t);
    }
  }
  function OL(e) {
    if (e !== dv)
      return g4(e);
  }
  function FL() {
    return Ha.current !== null;
  }
  function kS(e) {
    {
      if (e.mode & Be) {
        if (!cL())
          return;
      } else if (!J2() || Ie !== Bt || e.tag !== h && e.tag !== H && e.tag !== X)
        return;
      if (Ha.current === null) {
        var t = Ln;
        try {
          xt(e), c(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Fe(e));
        } finally {
          t ? xt(e) : Qt();
        }
      }
    }
  }
  function OS(e) {
    e.tag !== si && cL() && Ha.current === null && c(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function vu(e) {
    vL = e;
  }
  var xa = null, ps = null, FS = function(e) {
    xa = e;
  };
  function hs(e) {
    {
      if (xa === null)
        return e;
      var t = xa(e);
      return t === void 0 ? e : t.current;
    }
  }
  function pv(e) {
    return hs(e);
  }
  function hv(e) {
    {
      if (xa === null)
        return e;
      var t = xa(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = hs(e.render);
          if (e.render !== n) {
            var a = {
              $$typeof: Ne,
              render: n
            };
            return e.displayName !== void 0 && (a.displayName = e.displayName), a;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function _L(e, t) {
    {
      if (xa === null)
        return !1;
      var n = e.elementType, a = t.type, i = !1, u = typeof a == "object" && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case p: {
          typeof a == "function" && (i = !0);
          break;
        }
        case h: {
          (typeof a == "function" || u === Ve) && (i = !0);
          break;
        }
        case H: {
          (u === Ne || u === Ve) && (i = !0);
          break;
        }
        case Y:
        case X: {
          (u === bt || u === Ve) && (i = !0);
          break;
        }
        default:
          return !1;
      }
      if (i) {
        var m = xa(n);
        if (m !== void 0 && m === xa(a))
          return !0;
      }
      return !1;
    }
  }
  function PL(e) {
    {
      if (xa === null || typeof WeakSet != "function")
        return;
      ps === null && (ps = /* @__PURE__ */ new WeakSet()), ps.add(e);
    }
  }
  var _S = function(e, t) {
    {
      if (xa === null)
        return;
      var n = t.staleFamilies, a = t.updatedFamilies;
      Ar(), Pr(function() {
        vv(e.current, a, n);
      });
    }
  }, PS = function(e, t) {
    {
      if (e.context !== aa)
        return;
      Ar(), Pr(function() {
        gu(t, e, null, null);
      });
    }
  };
  function vv(e, t, n) {
    {
      var a = e.alternate, i = e.child, u = e.sibling, m = e.tag, g = e.type, b = null;
      switch (m) {
        case h:
        case X:
        case p:
          b = g;
          break;
        case H:
          b = g.render;
          break;
      }
      if (xa === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var E = !1, R = !1;
      if (b !== null) {
        var F = xa(b);
        F !== void 0 && (n.has(F) ? R = !0 : t.has(F) && (m === p ? R = !0 : E = !0));
      }
      if (ps !== null && (ps.has(e) || a !== null && ps.has(a)) && (R = !0), R && (e._debugNeedsRemount = !0), R || E) {
        var O = $n(e, Te);
        O !== null && Kt(O, e, Te, pt);
      }
      i !== null && !R && vv(i, t, n), u !== null && vv(u, t, n);
    }
  }
  var AS = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), a = new Set(t.map(function(i) {
        return i.current;
      }));
      return gv(e.current, a, n), n;
    }
  };
  function gv(e, t, n) {
    {
      var a = e.child, i = e.sibling, u = e.tag, m = e.type, g = null;
      switch (u) {
        case h:
        case X:
        case p:
          g = m;
          break;
        case H:
          g = m.render;
          break;
      }
      var b = !1;
      g !== null && t.has(g) && (b = !0), b ? MS(e, n) : a !== null && gv(a, t, n), i !== null && gv(i, t, n);
    }
  }
  function MS(e, t) {
    {
      var n = VS(e, t);
      if (n)
        return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case N:
            t.add(a.stateNode);
            return;
          case x:
            t.add(a.stateNode.containerInfo);
            return;
          case L:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null)
          throw new Error("Expected to reach root first.");
        a = a.return;
      }
    }
  }
  function VS(e, t) {
    for (var n = e, a = !1; ; ) {
      if (n.tag === N)
        a = !0, t.add(n.stateNode);
      else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        return a;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return a;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return !1;
  }
  var yv;
  {
    yv = !1;
    try {
      var AL = Object.preventExtensions({});
    } catch {
      yv = !0;
    }
  }
  function US(e, t, n, a) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !yv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var ra = function(e, t, n, a) {
    return new US(e, t, n, a);
  };
  function Lv(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function zS(e) {
    return typeof e == "function" && !Lv(e) && e.defaultProps === void 0;
  }
  function $S(e) {
    if (typeof e == "function")
      return Lv(e) ? p : h;
    if (e != null) {
      var t = e.$$typeof;
      if (t === Ne)
        return H;
      if (t === bt)
        return Y;
    }
    return v;
  }
  function fo(e, t) {
    var n = e.alternate;
    n === null ? (n = ra(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = xe, n.subtreeFlags = xe, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & Sr, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var a = e.dependencies;
    switch (n.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case v:
      case h:
      case X:
        n.type = hs(e.type);
        break;
      case p:
        n.type = pv(e.type);
        break;
      case H:
        n.type = hv(e.type);
        break;
    }
    return n;
  }
  function HS(e, t) {
    e.flags &= Sr | _t;
    var n = e.alternate;
    if (n === null)
      e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = xe, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var a = n.dependencies;
      e.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function BS(e, t, n) {
    var a;
    return e === Yc ? (a = Be, t === !0 && (a |= Nt, a |= qa)) : a = Le, Da && (a |= ot), ra(L, null, null, a);
  }
  function bv(e, t, n, a, i, u) {
    var m = v, g = e;
    if (typeof e == "function")
      Lv(e) ? (m = p, g = pv(g)) : g = hs(g);
    else if (typeof e == "string")
      m = N;
    else
      e: switch (e) {
        case D:
          return bi(n.children, i, u, t);
        case J:
          m = k, i |= Nt, (i & Be) !== Le && (i |= qa);
          break;
        case re:
          return IS(n, i, u, t);
        case Ae:
          return YS(n, i, u, t);
        case _e:
          return KS(n, i, u, t);
        case wa:
          return ML(n, i, u, t);
        case ja:
        case Lt:
        case qt:
        case Oi:
        case yn:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case be:
                m = _;
                break e;
              case $e:
                m = z;
                break e;
              case Ne:
                m = H, g = hv(g);
                break e;
              case bt:
                m = Y;
                break e;
              case Ve:
                m = ne, g = null;
                break e;
            }
          var b = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var E = a ? Fe(a) : null;
            E && (b += `

Check the render method of \`` + E + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
        }
      }
    var R = ra(m, n, t, i);
    return R.elementType = e, R.type = g, R.lanes = u, R._debugOwner = a, R;
  }
  function xv(e, t, n) {
    var a = null;
    a = e._owner;
    var i = e.type, u = e.key, m = e.props, g = bv(i, u, m, a, t, n);
    return g._debugSource = e._source, g._debugOwner = e._owner, g;
  }
  function bi(e, t, n, a) {
    var i = ra(M, e, a, t);
    return i.lanes = n, i;
  }
  function IS(e, t, n, a) {
    typeof e.id != "string" && c('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var i = ra(w, e, a, t | ot);
    return i.elementType = re, i.lanes = n, i.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, i;
  }
  function YS(e, t, n, a) {
    var i = ra(A, e, a, t);
    return i.elementType = Ae, i.lanes = n, i;
  }
  function KS(e, t, n, a) {
    var i = ra(pe, e, a, t);
    return i.elementType = _e, i.lanes = n, i;
  }
  function ML(e, t, n, a) {
    var i = ra(ve, e, a, t);
    i.elementType = wa, i.lanes = n;
    var u = {
      isHidden: !1
    };
    return i.stateNode = u, i;
  }
  function Sv(e, t, n) {
    var a = ra(j, e, null, t);
    return a.lanes = n, a;
  }
  function WS() {
    var e = ra(N, null, null, Le);
    return e.elementType = "DELETED", e;
  }
  function GS(e) {
    var t = ra(le, null, null, Le);
    return t.stateNode = e, t;
  }
  function Cv(e, t, n) {
    var a = e.children !== null ? e.children : [], i = ra(x, a, e.key, t);
    return i.lanes = n, i.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, i;
  }
  function VL(e, t) {
    return e === null && (e = ra(v, null, null, Le)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function qS(e, t, n, a, i) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = rp, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Zt, this.eventTimes = wm(Q), this.expirationTimes = wm(pt), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = wm(Q), this.identifierPrefix = a, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var u = this.pendingUpdatersLaneMap = [], m = 0; m < rm; m++)
        u.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case Yc:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case si:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function UL(e, t, n, a, i, u, m, g, b, E) {
    var R = new qS(e, t, n, g, b), F = BS(t, u);
    R.current = F, F.stateNode = R;
    {
      var O = {
        element: a,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      F.memoizedState = O;
    }
    return Ap(F), R;
  }
  var Ev = "18.3.1";
  function QS(e, t, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return ca(a), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: Ra,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var Nv, Rv;
  Nv = !1, Rv = {};
  function zL(e) {
    if (!e)
      return aa;
    var t = To(e), n = Ox(t);
    if (t.tag === p) {
      var a = t.type;
      if (Ja(a))
        return m0(t, a, n);
    }
    return n;
  }
  function XS(e, t) {
    {
      var n = To(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
      }
      var i = Mg(n);
      if (i === null)
        return null;
      if (i.mode & Nt) {
        var u = Fe(n) || "Component";
        if (!Rv[u]) {
          Rv[u] = !0;
          var m = Ln;
          try {
            xt(i), n.mode & Nt ? c("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : c("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
          } finally {
            m ? xt(m) : Qt();
          }
        }
      }
      return i.stateNode;
    }
  }
  function $L(e, t, n, a, i, u, m, g) {
    var b = !1, E = null;
    return UL(e, t, b, E, n, a, i, u, m);
  }
  function HL(e, t, n, a, i, u, m, g, b, E) {
    var R = !0, F = UL(n, a, R, e, i, u, m, g, b);
    F.context = zL(null);
    var O = F.current, $ = On(), I = yi(O), W = kr($, I);
    return W.callback = t ?? null, ci(O, W, I), rS(F, I, $), F;
  }
  function gu(e, t, n, a) {
    N4(t, e);
    var i = t.current, u = On(), m = yi(i);
    Y4(m);
    var g = zL(n);
    t.context === null ? t.context = g : t.pendingContext = g, Pi && Ln !== null && !Nv && (Nv = !0, c(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Fe(Ln) || "Unknown"));
    var b = kr(u, m);
    b.payload = {
      element: e
    }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && c("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), b.callback = a);
    var E = ci(i, b, m);
    return E !== null && (Kt(E, i, m, u), sf(E, i, m)), m;
  }
  function Qf(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case N:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function JS(e) {
    switch (e.tag) {
      case L: {
        var t = e.stateNode;
        if (hc(t)) {
          var n = e8(t);
          lS(t, n);
        }
        break;
      }
      case A: {
        Pr(function() {
          var i = $n(e, Te);
          if (i !== null) {
            var u = On();
            Kt(i, e, Te, u);
          }
        });
        var a = Te;
        wv(e, a);
        break;
      }
    }
  }
  function BL(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = o8(n.retryLane, t));
  }
  function wv(e, t) {
    BL(e, t);
    var n = e.alternate;
    n && BL(n, t);
  }
  function ZS(e) {
    if (e.tag === A) {
      var t = nl, n = $n(e, t);
      if (n !== null) {
        var a = On();
        Kt(n, e, t, a);
      }
      wv(e, t);
    }
  }
  function eC(e) {
    if (e.tag === A) {
      var t = yi(e), n = $n(e, t);
      if (n !== null) {
        var a = On();
        Kt(n, e, t, a);
      }
      wv(e, t);
    }
  }
  function IL(e) {
    var t = v4(e);
    return t === null ? null : t.stateNode;
  }
  var YL = function(e) {
    return null;
  };
  function tC(e) {
    return YL(e);
  }
  var KL = function(e) {
    return !1;
  };
  function nC(e) {
    return KL(e);
  }
  var WL = null, GL = null, qL = null, QL = null, XL = null, JL = null, ZL = null, eb = null, tb = null;
  {
    var nb = function(e, t, n) {
      var a = t[n], i = Ze(e) ? e.slice() : ze({}, e);
      return n + 1 === t.length ? (Ze(i) ? i.splice(a, 1) : delete i[a], i) : (i[a] = nb(e[a], t, n + 1), i);
    }, ab = function(e, t) {
      return nb(e, t, 0);
    }, rb = function(e, t, n, a) {
      var i = t[a], u = Ze(e) ? e.slice() : ze({}, e);
      if (a + 1 === t.length) {
        var m = n[a];
        u[m] = u[i], Ze(u) ? u.splice(i, 1) : delete u[i];
      } else
        u[i] = rb(
          // $FlowFixMe number or string is fine here
          e[i],
          t,
          n,
          a + 1
        );
      return u;
    }, ib = function(e, t, n) {
      if (t.length !== n.length) {
        f("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var a = 0; a < n.length - 1; a++)
          if (t[a] !== n[a]) {
            f("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return rb(e, t, n, 0);
    }, ob = function(e, t, n, a) {
      if (n >= t.length)
        return a;
      var i = t[n], u = Ze(e) ? e.slice() : ze({}, e);
      return u[i] = ob(e[i], t, n + 1, a), u;
    }, sb = function(e, t, n) {
      return ob(e, t, 0, n);
    }, jv = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    WL = function(e, t, n, a) {
      var i = jv(e, t);
      if (i !== null) {
        var u = sb(i.memoizedState, n, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = ze({}, e.memoizedProps);
        var m = $n(e, Te);
        m !== null && Kt(m, e, Te, pt);
      }
    }, GL = function(e, t, n) {
      var a = jv(e, t);
      if (a !== null) {
        var i = ab(a.memoizedState, n);
        a.memoizedState = i, a.baseState = i, e.memoizedProps = ze({}, e.memoizedProps);
        var u = $n(e, Te);
        u !== null && Kt(u, e, Te, pt);
      }
    }, qL = function(e, t, n, a) {
      var i = jv(e, t);
      if (i !== null) {
        var u = ib(i.memoizedState, n, a);
        i.memoizedState = u, i.baseState = u, e.memoizedProps = ze({}, e.memoizedProps);
        var m = $n(e, Te);
        m !== null && Kt(m, e, Te, pt);
      }
    }, QL = function(e, t, n) {
      e.pendingProps = sb(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = $n(e, Te);
      a !== null && Kt(a, e, Te, pt);
    }, XL = function(e, t) {
      e.pendingProps = ab(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = $n(e, Te);
      n !== null && Kt(n, e, Te, pt);
    }, JL = function(e, t, n) {
      e.pendingProps = ib(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = $n(e, Te);
      a !== null && Kt(a, e, Te, pt);
    }, ZL = function(e) {
      var t = $n(e, Te);
      t !== null && Kt(t, e, Te, pt);
    }, eb = function(e) {
      YL = e;
    }, tb = function(e) {
      KL = e;
    };
  }
  function aC(e) {
    var t = Mg(e);
    return t === null ? null : t.stateNode;
  }
  function rC(e) {
    return null;
  }
  function iC() {
    return Ln;
  }
  function oC(e) {
    var t = e.findFiberByHostInstance, n = s.ReactCurrentDispatcher;
    return E4({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: WL,
      overrideHookStateDeletePath: GL,
      overrideHookStateRenamePath: qL,
      overrideProps: QL,
      overridePropsDeletePath: XL,
      overridePropsRenamePath: JL,
      setErrorHandler: eb,
      setSuspenseHandler: tb,
      scheduleUpdate: ZL,
      currentDispatcherRef: n,
      findHostInstanceByFiber: aC,
      findFiberByHostInstance: t || rC,
      // React Refresh
      findHostInstancesForRefresh: AS,
      scheduleRefresh: _S,
      scheduleRoot: PS,
      setRefreshHandler: FS,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: iC,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: Ev
    });
  }
  var lb = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function Tv(e) {
    this._internalRoot = e;
  }
  Xf.prototype.render = Tv.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? c("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Jf(arguments[1]) ? c("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && c("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== Ft) {
        var a = IL(t.current);
        a && a.parentNode !== n && c("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    gu(e, t, null, null);
  }, Xf.prototype.unmount = Tv.prototype.unmount = function() {
    typeof arguments[0] == "function" && c("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      bL() && c("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pr(function() {
        gu(null, e, null, null);
      }), l0(t);
    }
  };
  function sC(e, t) {
    if (!Jf(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    ub(e);
    var n = !1, a = !1, i = "", u = lb;
    t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ka && c(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var m = $L(e, Yc, null, n, a, i, u);
    Vc(m.current, e);
    var g = e.nodeType === Ft ? e.parentNode : e;
    return Cl(g), new Tv(m);
  }
  function Xf(e) {
    this._internalRoot = e;
  }
  function lC(e) {
    e && C8(e);
  }
  Xf.prototype.unstable_scheduleHydration = lC;
  function uC(e, t, n) {
    if (!Jf(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    ub(e), t === void 0 && c("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var a = n ?? null, i = n != null && n.hydratedSources || null, u = !1, m = !1, g = "", b = lb;
    n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (g = n.identifierPrefix), n.onRecoverableError !== void 0 && (b = n.onRecoverableError));
    var E = HL(t, null, e, Yc, a, u, m, g, b);
    if (Vc(E.current, e), Cl(e), i)
      for (var R = 0; R < i.length; R++) {
        var F = i[R];
        m9(E, F);
      }
    return new Xf(E);
  }
  function Jf(e) {
    return !!(e && (e.nodeType === Un || e.nodeType === yr || e.nodeType === Ad || !wt));
  }
  function yu(e) {
    return !!(e && (e.nodeType === Un || e.nodeType === yr || e.nodeType === Ad || e.nodeType === Ft && e.nodeValue === " react-mount-point-unstable "));
  }
  function ub(e) {
    e.nodeType === Un && e.tagName && e.tagName.toUpperCase() === "BODY" && c("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), _l(e) && (e._reactRootContainer ? c("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : c("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var cC = s.ReactCurrentOwner, cb;
  cb = function(e) {
    if (e._reactRootContainer && e.nodeType !== Ft) {
      var t = IL(e._reactRootContainer.current);
      t && t.parentNode !== e && c("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, a = Dv(e), i = !!(a && ii(a));
    i && !n && c("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Un && e.tagName && e.tagName.toUpperCase() === "BODY" && c("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function Dv(e) {
    return e ? e.nodeType === yr ? e.documentElement : e.firstChild : null;
  }
  function fb() {
  }
  function fC(e, t, n, a, i) {
    if (i) {
      if (typeof a == "function") {
        var u = a;
        a = function() {
          var O = Qf(m);
          u.call(O);
        };
      }
      var m = HL(
        t,
        a,
        e,
        si,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fb
      );
      e._reactRootContainer = m, Vc(m.current, e);
      var g = e.nodeType === Ft ? e.parentNode : e;
      return Cl(g), Pr(), m;
    } else {
      for (var b; b = e.lastChild; )
        e.removeChild(b);
      if (typeof a == "function") {
        var E = a;
        a = function() {
          var O = Qf(R);
          E.call(O);
        };
      }
      var R = $L(
        e,
        si,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fb
      );
      e._reactRootContainer = R, Vc(R.current, e);
      var F = e.nodeType === Ft ? e.parentNode : e;
      return Cl(F), Pr(function() {
        gu(t, R, n, a);
      }), R;
    }
  }
  function dC(e, t) {
    e !== null && typeof e != "function" && c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Zf(e, t, n, a, i) {
    cb(n), dC(i === void 0 ? null : i, "render");
    var u = n._reactRootContainer, m;
    if (!u)
      m = fC(n, t, e, i, a);
    else {
      if (m = u, typeof i == "function") {
        var g = i;
        i = function() {
          var b = Qf(m);
          g.call(b);
        };
      }
      gu(t, m, e, i);
    }
    return Qf(m);
  }
  var db = !1;
  function mC(e) {
    {
      db || (db = !0, c("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = cC.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || c("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Un ? e : XS(e, "findDOMNode");
  }
  function pC(e, t, n) {
    if (c("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = _l(t) && t._reactRootContainer === void 0;
      a && c("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Zf(null, e, t, !0, n);
  }
  function hC(e, t, n) {
    if (c("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yu(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = _l(t) && t._reactRootContainer === void 0;
      a && c("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Zf(null, e, t, !1, n);
  }
  function vC(e, t, n, a) {
    if (c("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yu(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !u4(e))
      throw new Error("parentComponent must be a valid React Component");
    return Zf(e, t, n, !1, a);
  }
  var mb = !1;
  function gC(e) {
    if (mb || (mb = !0, c("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !yu(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = _l(e) && e._reactRootContainer === void 0;
      t && c("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = Dv(e), a = n && !ii(n);
        a && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Pr(function() {
        Zf(null, null, e, !1, function() {
          e._reactRootContainer = null, l0(e);
        });
      }), !0;
    } else {
      {
        var i = Dv(e), u = !!(i && ii(i)), m = e.nodeType === Un && yu(e.parentNode) && !!e.parentNode._reactRootContainer;
        u && c("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  m8(JS), h8(ZS), v8(eC), g8(ka), y8(c8), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && c("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), J5(L7), t4(sv, uS, Pr);
  function yC(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jf(t))
      throw new Error("Target container is not a DOM element.");
    return QS(e, t, null, n);
  }
  function LC(e, t, n, a) {
    return vC(e, t, n, a);
  }
  var kv = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [ii, Ko, Uc, Ng, Rg, sv]
  };
  function bC(e, t) {
    return kv.usingClientEntryPoint || c('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sC(e, t);
  }
  function xC(e, t, n) {
    return kv.usingClientEntryPoint || c('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uC(e, t, n);
  }
  function SC(e) {
    return bL() && c("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pr(e);
  }
  var CC = oC({
    findFiberByHostInstance: Qi,
    bundleType: 1,
    version: Ev,
    rendererPackageName: "react-dom"
  });
  if (!CC && Ot && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var pb = window.location.protocol;
    /^(https?|file):$/.test(pb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (pb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kv, oa.createPortal = yC, oa.createRoot = bC, oa.findDOMNode = mC, oa.flushSync = SC, oa.hydrate = pC, oa.hydrateRoot = xC, oa.render = hC, oa.unmountComponentAtNode = gC, oa.unstable_batchedUpdates = sv, oa.unstable_renderSubtreeIntoContainer = LC, oa.version = Ev, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
o3.exports = oa;
var kC = o3.exports, u3, vb = kC;
{
  var gb = vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  u3 = function(o, r) {
    gb.usingClientEntryPoint = !0;
    try {
      return vb.createRoot(o, r);
    } finally {
      gb.usingClientEntryPoint = !1;
    }
  };
}
var c3 = { exports: {} }, f3 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var o = P;
  function r(p, v) {
    return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
  }
  var s = typeof Object.is == "function" ? Object.is : r, l = o.useSyncExternalStore, d = o.useRef, f = o.useEffect, c = o.useMemo, y = o.useDebugValue;
  function h(p, v, L, x, N) {
    var j = d(null), M;
    j.current === null ? (M = {
      hasValue: !1,
      value: null
    }, j.current = M) : M = j.current;
    var k = c(function() {
      var w = !1, A, Y, X = function(pe) {
        if (!w) {
          w = !0, A = pe;
          var Xe = x(pe);
          if (N !== void 0 && M.hasValue) {
            var ve = M.value;
            if (N(ve, Xe))
              return Y = ve, ve;
          }
          return Y = Xe, Xe;
        }
        var Ee = A, Re = Y;
        if (s(Ee, pe))
          return Re;
        var tt = x(pe);
        return N !== void 0 && N(Re, tt) ? Re : (A = pe, Y = tt, tt);
      }, ne = L === void 0 ? null : L, fe = function() {
        return X(v());
      }, le = ne === null ? void 0 : function() {
        return X(ne());
      };
      return [fe, le];
    }, [v, L, x, N]), z = k[0], _ = k[1], H = l(p, z, _);
    return f(function() {
      M.hasValue = !0, M.value = H;
    }, [H]), y(H), H;
  }
  f3.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
c3.exports = f3;
var OC = c3.exports, la = (
  // prettier-ignore
  // @ts-ignore
  "default" in zv ? Sd : zv
), yb = Symbol.for("react-redux-context"), Lb = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function FC() {
  if (!la.createContext)
    return {};
  const o = Lb[yb] ?? (Lb[yb] = /* @__PURE__ */ new Map());
  let r = o.get(la.createContext);
  return r || (r = la.createContext(
    null
  ), r.displayName = "ReactRedux", o.set(la.createContext, r)), r;
}
var Ni = /* @__PURE__ */ FC(), _C = () => {
  throw new Error("uSES not initialized!");
};
function eg(o = Ni) {
  return function() {
    const s = la.useContext(o);
    if (!s)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return s;
  };
}
var d3 = /* @__PURE__ */ eg(), m3 = _C, PC = (o) => {
  m3 = o;
}, AC = (o, r) => o === r;
function MC(o = Ni) {
  const r = o === Ni ? d3 : eg(o), s = (l, d = {}) => {
    const { equalityFn: f = AC, devModeChecks: c = {} } = typeof d == "function" ? { equalityFn: d } : d;
    {
      if (!l)
        throw new Error("You must pass a selector to useSelector");
      if (typeof l != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof f != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: y,
      subscription: h,
      getServerState: p,
      stabilityCheck: v,
      identityFunctionCheck: L
    } = r(), x = la.useRef(!0), N = la.useCallback(
      {
        [l.name](M) {
          const k = l(M);
          {
            const {
              identityFunctionCheck: z,
              stabilityCheck: _
            } = {
              stabilityCheck: v,
              identityFunctionCheck: L,
              ...c
            };
            if (_ === "always" || _ === "once" && x.current) {
              const H = l(M);
              if (!f(k, H)) {
                let w;
                try {
                  throw new Error();
                } catch (A) {
                  ({ stack: w } = A);
                }
                console.warn(
                  "Selector " + (l.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: M,
                    selected: k,
                    selected2: H,
                    stack: w
                  }
                );
              }
            }
            if ((z === "always" || z === "once" && x.current) && k === M) {
              let H;
              try {
                throw new Error();
              } catch (w) {
                ({ stack: H } = w);
              }
              console.warn(
                "Selector " + (l.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: H }
              );
            }
            x.current && (x.current = !1);
          }
          return k;
        }
      }[l.name],
      [l, v, c.stabilityCheck]
    ), j = m3(
      h.addNestedSub,
      y.getState,
      p || y.getState,
      N,
      f
    );
    return la.useDebugValue(j), j;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var wi = /* @__PURE__ */ MC();
function VC(o) {
  o();
}
function UC() {
  let o = null, r = null;
  return {
    clear() {
      o = null, r = null;
    },
    notify() {
      VC(() => {
        let s = o;
        for (; s; )
          s.callback(), s = s.next;
      });
    },
    get() {
      const s = [];
      let l = o;
      for (; l; )
        s.push(l), l = l.next;
      return s;
    },
    subscribe(s) {
      let l = !0;
      const d = r = {
        callback: s,
        next: null,
        prev: r
      };
      return d.prev ? d.prev.next = d : o = d, function() {
        !l || o === null || (l = !1, d.next ? d.next.prev = d.prev : r = d.prev, d.prev ? d.prev.next = d.next : o = d.next);
      };
    }
  };
}
var bb = {
  notify() {
  },
  get: () => []
};
function zC(o, r) {
  let s, l = bb, d = 0, f = !1;
  function c(M) {
    v();
    const k = l.subscribe(M);
    let z = !1;
    return () => {
      z || (z = !0, k(), L());
    };
  }
  function y() {
    l.notify();
  }
  function h() {
    j.onStateChange && j.onStateChange();
  }
  function p() {
    return f;
  }
  function v() {
    d++, s || (s = o.subscribe(h), l = UC());
  }
  function L() {
    d--, s && d === 0 && (s(), s = void 0, l.clear(), l = bb);
  }
  function x() {
    f || (f = !0, v());
  }
  function N() {
    f && (f = !1, L());
  }
  const j = {
    addNestedSub: c,
    notifyNestedSubs: y,
    handleChangeWrapper: h,
    isSubscribed: p,
    trySubscribe: x,
    tryUnsubscribe: N,
    getListeners: () => l
  };
  return j;
}
var $C = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", HC = typeof navigator < "u" && navigator.product === "ReactNative", BC = $C || HC ? la.useLayoutEffect : la.useEffect;
function IC({
  store: o,
  context: r,
  children: s,
  serverState: l,
  stabilityCheck: d = "once",
  identityFunctionCheck: f = "once"
}) {
  const c = la.useMemo(() => {
    const p = zC(o);
    return {
      store: o,
      subscription: p,
      getServerState: l ? () => l : void 0,
      stabilityCheck: d,
      identityFunctionCheck: f
    };
  }, [o, l, d, f]), y = la.useMemo(() => o.getState(), [o]);
  BC(() => {
    const { subscription: p } = c;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), y !== o.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [c, y]);
  const h = r || Ni;
  return /* @__PURE__ */ la.createElement(h.Provider, { value: c }, s);
}
var YC = IC;
function p3(o = Ni) {
  const r = o === Ni ? d3 : (
    // @ts-ignore
    eg(o)
  ), s = () => {
    const { store: l } = r();
    return l;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var KC = /* @__PURE__ */ p3();
function WC(o = Ni) {
  const r = o === Ni ? KC : p3(o), s = () => r().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Fu = /* @__PURE__ */ WC();
PC(OC.useSyncExternalStoreWithSelector);
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
function wu() {
  return wu = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, wu.apply(this, arguments);
}
var Ci;
(function(o) {
  o.Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
})(Ci || (Ci = {}));
const xb = "popstate";
function GC(o) {
  o === void 0 && (o = {});
  function r(l, d) {
    let {
      pathname: f,
      search: c,
      hash: y
    } = l.location;
    return $v(
      "",
      {
        pathname: f,
        search: c,
        hash: y
      },
      // state defaults to `null` because `window.history.state` does
      d.state && d.state.usr || null,
      d.state && d.state.key || "default"
    );
  }
  function s(l, d) {
    return typeof d == "string" ? d : ju(d);
  }
  return QC(r, s, null, o);
}
function Ct(o, r) {
  if (o === !1 || o === null || typeof o > "u")
    throw new Error(r);
}
function lr(o, r) {
  if (!o) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function qC() {
  return Math.random().toString(36).substr(2, 8);
}
function Sb(o, r) {
  return {
    usr: o.state,
    key: o.key,
    idx: r
  };
}
function $v(o, r, s, l) {
  return s === void 0 && (s = null), wu({
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: ""
  }, typeof r == "string" ? Ns(r) : r, {
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || l || qC()
  });
}
function ju(o) {
  let {
    pathname: r = "/",
    search: s = "",
    hash: l = ""
  } = o;
  return s && s !== "?" && (r += s.charAt(0) === "?" ? s : "?" + s), l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l), r;
}
function Ns(o) {
  let r = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && (r.hash = o.substr(s), o = o.substr(0, s));
    let l = o.indexOf("?");
    l >= 0 && (r.search = o.substr(l), o = o.substr(0, l)), o && (r.pathname = o);
  }
  return r;
}
function QC(o, r, s, l) {
  l === void 0 && (l = {});
  let {
    window: d = document.defaultView,
    v5Compat: f = !1
  } = l, c = d.history, y = Ci.Pop, h = null, p = v();
  p == null && (p = 0, c.replaceState(wu({}, c.state, {
    idx: p
  }), ""));
  function v() {
    return (c.state || {
      idx: null
    }).idx;
  }
  function L() {
    y = Ci.Pop;
    let k = v(), z = k == null ? null : k - p;
    p = k, h && h({
      action: y,
      location: M.location,
      delta: z
    });
  }
  function x(k, z) {
    y = Ci.Push;
    let _ = $v(M.location, k, z);
    p = v() + 1;
    let H = Sb(_, p), w = M.createHref(_);
    try {
      c.pushState(H, "", w);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError")
        throw A;
      d.location.assign(w);
    }
    f && h && h({
      action: y,
      location: M.location,
      delta: 1
    });
  }
  function N(k, z) {
    y = Ci.Replace;
    let _ = $v(M.location, k, z);
    p = v();
    let H = Sb(_, p), w = M.createHref(_);
    c.replaceState(H, "", w), f && h && h({
      action: y,
      location: M.location,
      delta: 0
    });
  }
  function j(k) {
    let z = d.location.origin !== "null" ? d.location.origin : d.location.href, _ = typeof k == "string" ? k : ju(k);
    return _ = _.replace(/ $/, "%20"), Ct(z, "No window.location.(origin|href) available to create URL for href: " + _), new URL(_, z);
  }
  let M = {
    get action() {
      return y;
    },
    get location() {
      return o(d, c);
    },
    listen(k) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(xb, L), h = k, () => {
        d.removeEventListener(xb, L), h = null;
      };
    },
    createHref(k) {
      return r(d, k);
    },
    createURL: j,
    encodeLocation(k) {
      let z = j(k);
      return {
        pathname: z.pathname,
        search: z.search,
        hash: z.hash
      };
    },
    push: x,
    replace: N,
    go(k) {
      return c.go(k);
    }
  };
  return M;
}
var Cb;
(function(o) {
  o.data = "data", o.deferred = "deferred", o.redirect = "redirect", o.error = "error";
})(Cb || (Cb = {}));
function XC(o, r, s) {
  return s === void 0 && (s = "/"), JC(o, r, s, !1);
}
function JC(o, r, s, l) {
  let d = typeof r == "string" ? Ns(r) : r, f = Ri(d.pathname || "/", s);
  if (f == null)
    return null;
  let c = h3(o);
  ZC(c);
  let y = null;
  for (let h = 0; y == null && h < c.length; ++h) {
    let p = cE(f);
    y = lE(c[h], p, l);
  }
  return y;
}
function h3(o, r, s, l) {
  r === void 0 && (r = []), s === void 0 && (s = []), l === void 0 && (l = "");
  let d = (f, c, y) => {
    let h = {
      relativePath: y === void 0 ? f.path || "" : y,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: c,
      route: f
    };
    h.relativePath.startsWith("/") && (Ct(h.relativePath.startsWith(l), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(l.length));
    let p = $r([l, h.relativePath]), v = s.concat(h);
    f.children && f.children.length > 0 && (Ct(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), h3(f.children, r, v, p)), !(f.path == null && !f.index) && r.push({
      path: p,
      score: oE(p, f.index),
      routesMeta: v
    });
  };
  return o.forEach((f, c) => {
    var y;
    if (f.path === "" || !((y = f.path) != null && y.includes("?")))
      d(f, c);
    else
      for (let h of v3(f.path))
        d(f, c, h);
  }), r;
}
function v3(o) {
  let r = o.split("/");
  if (r.length === 0) return [];
  let [s, ...l] = r, d = s.endsWith("?"), f = s.replace(/\?$/, "");
  if (l.length === 0)
    return d ? [f, ""] : [f];
  let c = v3(l.join("/")), y = [];
  return y.push(...c.map((h) => h === "" ? f : [f, h].join("/"))), d && y.push(...c), y.map((h) => o.startsWith("/") && h === "" ? "/" : h);
}
function ZC(o) {
  o.sort((r, s) => r.score !== s.score ? s.score - r.score : sE(r.routesMeta.map((l) => l.childrenIndex), s.routesMeta.map((l) => l.childrenIndex)));
}
const eE = /^:[\w-]+$/, tE = 3, nE = 2, aE = 1, rE = 10, iE = -2, Eb = (o) => o === "*";
function oE(o, r) {
  let s = o.split("/"), l = s.length;
  return s.some(Eb) && (l += iE), r && (l += nE), s.filter((d) => !Eb(d)).reduce((d, f) => d + (eE.test(f) ? tE : f === "" ? aE : rE), l);
}
function sE(o, r) {
  return o.length === r.length && o.slice(0, -1).every((l, d) => l === r[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    o[o.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function lE(o, r, s) {
  let {
    routesMeta: l
  } = o, d = {}, f = "/", c = [];
  for (let y = 0; y < l.length; ++y) {
    let h = l[y], p = y === l.length - 1, v = f === "/" ? r : r.slice(f.length) || "/", L = pd({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: p
    }, v), x = h.route;
    if (!L && p && s && !l[l.length - 1].route.index && (L = pd({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: !1
    }, v)), !L)
      return null;
    Object.assign(d, L.params), c.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: $r([f, L.pathname]),
      pathnameBase: pE($r([f, L.pathnameBase])),
      route: x
    }), L.pathnameBase !== "/" && (f = $r([f, L.pathnameBase]));
  }
  return c;
}
function pd(o, r) {
  typeof o == "string" && (o = {
    path: o,
    caseSensitive: !1,
    end: !0
  });
  let [s, l] = uE(o.path, o.caseSensitive, o.end), d = r.match(s);
  if (!d) return null;
  let f = d[0], c = f.replace(/(.)\/+$/, "$1"), y = d.slice(1);
  return {
    params: l.reduce((p, v, L) => {
      let {
        paramName: x,
        isOptional: N
      } = v;
      if (x === "*") {
        let M = y[L] || "";
        c = f.slice(0, f.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const j = y[L];
      return N && !j ? p[x] = void 0 : p[x] = (j || "").replace(/%2F/g, "/"), p;
    }, {}),
    pathname: f,
    pathnameBase: c,
    pattern: o
  };
}
function uE(o, r, s) {
  r === void 0 && (r = !1), s === void 0 && (s = !0), lr(o === "*" || !o.endsWith("*") || o.endsWith("/*"), 'Route path "' + o + '" will be treated as if it were ' + ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + o.replace(/\*$/, "/*") + '".'));
  let l = [], d = "^" + o.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, y, h) => (l.push({
    paramName: y,
    isOptional: h != null
  }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return o.endsWith("*") ? (l.push({
    paramName: "*"
  }), d += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : o !== "" && o !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, r ? void 0 : "i"), l];
}
function cE(o) {
  try {
    return o.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return lr(!1, 'The URL path "' + o + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")), o;
  }
}
function Ri(o, r) {
  if (r === "/") return o;
  if (!o.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, l = o.charAt(s);
  return l && l !== "/" ? null : o.slice(s) || "/";
}
function fE(o, r) {
  r === void 0 && (r = "/");
  let {
    pathname: s,
    search: l = "",
    hash: d = ""
  } = typeof o == "string" ? Ns(o) : o;
  return {
    pathname: s ? s.startsWith("/") ? s : dE(s, r) : r,
    search: hE(l),
    hash: vE(d)
  };
}
function dE(o, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return o.split("/").forEach((d) => {
    d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
  }), s.length > 1 ? s.join("/") : "/";
}
function Fv(o, r, s, l) {
  return "Cannot include a '" + o + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function mE(o) {
  return o.filter((r, s) => s === 0 || r.route.path && r.route.path.length > 0);
}
function g3(o, r) {
  let s = mE(o);
  return r ? s.map((l, d) => d === s.length - 1 ? l.pathname : l.pathnameBase) : s.map((l) => l.pathnameBase);
}
function y3(o, r, s, l) {
  l === void 0 && (l = !1);
  let d;
  typeof o == "string" ? d = Ns(o) : (d = wu({}, o), Ct(!d.pathname || !d.pathname.includes("?"), Fv("?", "pathname", "search", d)), Ct(!d.pathname || !d.pathname.includes("#"), Fv("#", "pathname", "hash", d)), Ct(!d.search || !d.search.includes("#"), Fv("#", "search", "hash", d)));
  let f = o === "" || d.pathname === "", c = f ? "/" : d.pathname, y;
  if (c == null)
    y = s;
  else {
    let L = r.length - 1;
    if (!l && c.startsWith("..")) {
      let x = c.split("/");
      for (; x[0] === ".."; )
        x.shift(), L -= 1;
      d.pathname = x.join("/");
    }
    y = L >= 0 ? r[L] : "/";
  }
  let h = fE(d, y), p = c && c !== "/" && c.endsWith("/"), v = (f || c === ".") && s.endsWith("/");
  return !h.pathname.endsWith("/") && (p || v) && (h.pathname += "/"), h;
}
const $r = (o) => o.join("/").replace(/\/\/+/g, "/"), pE = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), hE = (o) => !o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o, vE = (o) => !o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o;
function gE(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
const L3 = ["post", "put", "patch", "delete"];
new Set(L3);
const yE = ["get", ...L3];
new Set(yE);
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
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, Tu.apply(this, arguments);
}
const _u = /* @__PURE__ */ P.createContext(null);
_u.displayName = "DataRouter";
const tg = /* @__PURE__ */ P.createContext(null);
tg.displayName = "DataRouterState";
const LE = /* @__PURE__ */ P.createContext(null);
LE.displayName = "Await";
const Ba = /* @__PURE__ */ P.createContext(null);
Ba.displayName = "Navigation";
const Pu = /* @__PURE__ */ P.createContext(null);
Pu.displayName = "Location";
const Hr = /* @__PURE__ */ P.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Hr.displayName = "Route";
const ng = /* @__PURE__ */ P.createContext(null);
ng.displayName = "RouteError";
function bE(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r;
  Au() || Ct(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: l,
    navigator: d
  } = P.useContext(Ba), {
    hash: f,
    pathname: c,
    search: y
  } = Vu(o, {
    relative: s
  }), h = c;
  return l !== "/" && (h = c === "/" ? l : $r([l, c])), d.createHref({
    pathname: h,
    search: y,
    hash: f
  });
}
function Au() {
  return P.useContext(Pu) != null;
}
function Rs() {
  return Au() || Ct(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), P.useContext(Pu).location;
}
const b3 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function x3(o) {
  P.useContext(Ba).static || P.useLayoutEffect(o);
}
function Mu() {
  let {
    isDataRoute: o
  } = P.useContext(Hr);
  return o ? _E() : xE();
}
function xE() {
  Au() || Ct(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = P.useContext(_u), {
    basename: r,
    future: s,
    navigator: l
  } = P.useContext(Ba), {
    matches: d
  } = P.useContext(Hr), {
    pathname: f
  } = Rs(), c = JSON.stringify(g3(d, s.v7_relativeSplatPath)), y = P.useRef(!1);
  return x3(() => {
    y.current = !0;
  }), P.useCallback(function(p, v) {
    if (v === void 0 && (v = {}), lr(y.current, b3), !y.current) return;
    if (typeof p == "number") {
      l.go(p);
      return;
    }
    let L = y3(p, JSON.parse(c), f, v.relative === "path");
    o == null && r !== "/" && (L.pathname = L.pathname === "/" ? r : $r([r, L.pathname])), (v.replace ? l.replace : l.push)(L, v.state, v);
  }, [r, l, c, f, o]);
}
function Vu(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r, {
    future: l
  } = P.useContext(Ba), {
    matches: d
  } = P.useContext(Hr), {
    pathname: f
  } = Rs(), c = JSON.stringify(g3(d, l.v7_relativeSplatPath));
  return P.useMemo(() => y3(o, JSON.parse(c), f, s === "path"), [o, c, f, s]);
}
function SE(o, r) {
  return CE(o, r);
}
function CE(o, r, s, l) {
  Au() || Ct(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    navigator: d
  } = P.useContext(Ba), {
    matches: f
  } = P.useContext(Hr), c = f[f.length - 1], y = c ? c.params : {}, h = c ? c.pathname : "/", p = c ? c.pathnameBase : "/", v = c && c.route;
  {
    let _ = v && v.path || "";
    C3(h, !v || _.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + h + '" (under <Route path="' + _ + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + _ + '"> to <Route ') + ('path="' + (_ === "/" ? "*" : _ + "/*") + '">.'));
  }
  let L = Rs(), x;
  if (r) {
    var N;
    let _ = typeof r == "string" ? Ns(r) : r;
    p === "/" || (N = _.pathname) != null && N.startsWith(p) || Ct(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + p + '" ') + ('but pathname "' + _.pathname + '" was given in the `location` prop.')), x = _;
  } else
    x = L;
  let j = x.pathname || "/", M = j;
  if (p !== "/") {
    let _ = p.replace(/^\//, "").split("/");
    M = "/" + j.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let k = XC(o, {
    pathname: M
  });
  lr(v || k != null, 'No routes matched location "' + x.pathname + x.search + x.hash + '" '), lr(k == null || k[k.length - 1].route.element !== void 0 || k[k.length - 1].route.Component !== void 0 || k[k.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + x.pathname + x.search + x.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
  let z = jE(k && k.map((_) => Object.assign({}, _, {
    params: Object.assign({}, y, _.params),
    pathname: $r([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(_.pathname).pathname : _.pathname
    ]),
    pathnameBase: _.pathnameBase === "/" ? p : $r([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      d.encodeLocation ? d.encodeLocation(_.pathnameBase).pathname : _.pathnameBase
    ])
  })), f, s, l);
  return r && z ? /* @__PURE__ */ P.createElement(Pu.Provider, {
    value: {
      location: Tu({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, x),
      navigationType: Ci.Pop
    }
  }, z) : z;
}
function EE() {
  let o = FE(), r = gE(o) ? o.status + " " + o.statusText : o instanceof Error ? o.message : JSON.stringify(o), s = o instanceof Error ? o.stack : null, l = "rgba(200,200,200, 0.5)", d = {
    padding: "0.5rem",
    backgroundColor: l
  }, f = {
    padding: "2px 4px",
    backgroundColor: l
  }, c = null;
  return console.error("Error handled by React Router default ErrorBoundary:", o), c = /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ P.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ P.createElement("code", {
    style: f
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ P.createElement("code", {
    style: f
  }, "errorElement"), " prop on your route.")), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ P.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, r), s ? /* @__PURE__ */ P.createElement("pre", {
    style: d
  }, s) : null, c);
}
const NE = /* @__PURE__ */ P.createElement(EE, null);
class RE extends P.Component {
  constructor(r) {
    super(r), this.state = {
      location: r.location,
      revalidation: r.revalidation,
      error: r.error
    };
  }
  static getDerivedStateFromError(r) {
    return {
      error: r
    };
  }
  static getDerivedStateFromProps(r, s) {
    return s.location !== r.location || s.revalidation !== "idle" && r.revalidation === "idle" ? {
      error: r.error,
      location: r.location,
      revalidation: r.revalidation
    } : {
      error: r.error !== void 0 ? r.error : s.error,
      location: s.location,
      revalidation: r.revalidation || s.revalidation
    };
  }
  componentDidCatch(r, s) {
    console.error("React Router caught the following error during render", r, s);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ P.createElement(Hr.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ P.createElement(ng.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function wE(o) {
  let {
    routeContext: r,
    match: s,
    children: l
  } = o, d = P.useContext(_u);
  return d && d.static && d.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (d.staticContext._deepestRenderedBoundaryId = s.route.id), /* @__PURE__ */ P.createElement(Hr.Provider, {
    value: r
  }, l);
}
function jE(o, r, s, l) {
  var d;
  if (r === void 0 && (r = []), s === void 0 && (s = null), l === void 0 && (l = null), o == null) {
    var f;
    if ((f = s) != null && f.errors)
      o = s.matches;
    else
      return null;
  }
  let c = o, y = (d = s) == null ? void 0 : d.errors;
  if (y != null) {
    let v = c.findIndex((L) => L.route.id && (y == null ? void 0 : y[L.route.id]) !== void 0);
    v >= 0 || Ct(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(y).join(",")), c = c.slice(0, Math.min(c.length, v + 1));
  }
  let h = !1, p = -1;
  if (s && l && l.v7_partialHydration)
    for (let v = 0; v < c.length; v++) {
      let L = c[v];
      if ((L.route.HydrateFallback || L.route.hydrateFallbackElement) && (p = v), L.route.id) {
        let {
          loaderData: x,
          errors: N
        } = s, j = L.route.loader && x[L.route.id] === void 0 && (!N || N[L.route.id] === void 0);
        if (L.route.lazy || j) {
          h = !0, p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  return c.reduceRight((v, L, x) => {
    let N, j = !1, M = null, k = null;
    s && (N = y && L.route.id ? y[L.route.id] : void 0, M = L.route.errorElement || NE, h && (p < 0 && x === 0 ? (C3("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), j = !0, k = null) : p === x && (j = !0, k = L.route.hydrateFallbackElement || null)));
    let z = r.concat(c.slice(0, x + 1)), _ = () => {
      let H;
      return N ? H = M : j ? H = k : L.route.Component ? H = /* @__PURE__ */ P.createElement(L.route.Component, null) : L.route.element ? H = L.route.element : H = v, /* @__PURE__ */ P.createElement(wE, {
        match: L,
        routeContext: {
          outlet: v,
          matches: z,
          isDataRoute: s != null
        },
        children: H
      });
    };
    return s && (L.route.ErrorBoundary || L.route.errorElement || x === 0) ? /* @__PURE__ */ P.createElement(RE, {
      location: s.location,
      revalidation: s.revalidation,
      component: M,
      error: N,
      children: _(),
      routeContext: {
        outlet: null,
        matches: z,
        isDataRoute: !0
      }
    }) : _();
  }, null);
}
var S3 = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o;
}(S3 || {}), Du = /* @__PURE__ */ function(o) {
  return o.UseBlocker = "useBlocker", o.UseLoaderData = "useLoaderData", o.UseActionData = "useActionData", o.UseRouteError = "useRouteError", o.UseNavigation = "useNavigation", o.UseRouteLoaderData = "useRouteLoaderData", o.UseMatches = "useMatches", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o.UseRouteId = "useRouteId", o;
}(Du || {});
function ag(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function TE(o) {
  let r = P.useContext(_u);
  return r || Ct(!1, ag(o)), r;
}
function DE(o) {
  let r = P.useContext(tg);
  return r || Ct(!1, ag(o)), r;
}
function kE(o) {
  let r = P.useContext(Hr);
  return r || Ct(!1, ag(o)), r;
}
function rg(o) {
  let r = kE(o), s = r.matches[r.matches.length - 1];
  return s.route.id || Ct(!1, o + ' can only be used on routes that contain a unique "id"'), s.route.id;
}
function OE() {
  return rg(Du.UseRouteId);
}
function FE() {
  var o;
  let r = P.useContext(ng), s = DE(Du.UseRouteError), l = rg(Du.UseRouteError);
  return r !== void 0 ? r : (o = s.errors) == null ? void 0 : o[l];
}
function _E() {
  let {
    router: o
  } = TE(S3.UseNavigateStable), r = rg(Du.UseNavigateStable), s = P.useRef(!1);
  return x3(() => {
    s.current = !0;
  }), P.useCallback(function(d, f) {
    f === void 0 && (f = {}), lr(s.current, b3), s.current && (typeof d == "number" ? o.navigate(d) : o.navigate(d, Tu({
      fromRouteId: r
    }, f)));
  }, [o, r]);
}
const Nb = {};
function C3(o, r, s) {
  !r && !Nb[o] && (Nb[o] = !0, lr(!1, s));
}
function Ur(o) {
  Ct(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function PE(o) {
  let {
    basename: r = "/",
    children: s = null,
    location: l,
    navigationType: d = Ci.Pop,
    navigator: f,
    static: c = !1,
    future: y
  } = o;
  Au() && Ct(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let h = r.replace(/^\/*/, "/"), p = P.useMemo(() => ({
    basename: h,
    navigator: f,
    static: c,
    future: Tu({
      v7_relativeSplatPath: !1
    }, y)
  }), [h, y, f, c]);
  typeof l == "string" && (l = Ns(l));
  let {
    pathname: v = "/",
    search: L = "",
    hash: x = "",
    state: N = null,
    key: j = "default"
  } = l, M = P.useMemo(() => {
    let k = Ri(v, h);
    return k == null ? null : {
      location: {
        pathname: k,
        search: L,
        hash: x,
        state: N,
        key: j
      },
      navigationType: d
    };
  }, [h, v, L, x, N, j, d]);
  return lr(M != null, '<Router basename="' + h + '"> is not able to match the URL ' + ('"' + v + L + x + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), M == null ? null : /* @__PURE__ */ P.createElement(Ba.Provider, {
    value: p
  }, /* @__PURE__ */ P.createElement(Pu.Provider, {
    children: s,
    value: M
  }));
}
function AE(o) {
  let {
    children: r,
    location: s
  } = o;
  return SE(Hv(r), s);
}
new Promise(() => {
});
function Hv(o, r) {
  r === void 0 && (r = []);
  let s = [];
  return P.Children.forEach(o, (l, d) => {
    if (!/* @__PURE__ */ P.isValidElement(l))
      return;
    let f = [...r, d];
    if (l.type === P.Fragment) {
      s.push.apply(s, Hv(l.props.children, f));
      return;
    }
    l.type !== Ur && Ct(!1, "[" + (typeof l.type == "string" ? l.type : l.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !l.props.index || !l.props.children || Ct(!1, "An index route cannot have child routes.");
    let c = {
      id: l.props.id || f.join("-"),
      caseSensitive: l.props.caseSensitive,
      element: l.props.element,
      Component: l.props.Component,
      index: l.props.index,
      path: l.props.path,
      loader: l.props.loader,
      action: l.props.action,
      errorElement: l.props.errorElement,
      ErrorBoundary: l.props.ErrorBoundary,
      hasErrorBoundary: l.props.ErrorBoundary != null || l.props.errorElement != null,
      shouldRevalidate: l.props.shouldRevalidate,
      handle: l.props.handle,
      lazy: l.props.lazy
    };
    l.props.children && (c.children = Hv(l.props.children, f)), s.push(c);
  }), s;
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
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, Es.apply(this, arguments);
}
function ig(o, r) {
  if (o == null) return {};
  var s = {}, l = Object.keys(o), d, f;
  for (f = 0; f < l.length; f++)
    d = l[f], !(r.indexOf(d) >= 0) && (s[d] = o[d]);
  return s;
}
const ld = "get", ud = "application/x-www-form-urlencoded";
function Cd(o) {
  return o != null && typeof o.tagName == "string";
}
function ME(o) {
  return Cd(o) && o.tagName.toLowerCase() === "button";
}
function VE(o) {
  return Cd(o) && o.tagName.toLowerCase() === "form";
}
function UE(o) {
  return Cd(o) && o.tagName.toLowerCase() === "input";
}
function zE(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function $E(o, r) {
  return o.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !zE(o);
}
let td = null;
function HE() {
  if (td === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), td = !1;
    } catch {
      td = !0;
    }
  return td;
}
const BE = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function _v(o) {
  return o != null && !BE.has(o) ? (lr(!1, '"' + o + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + ud + '"')), null) : o;
}
function IE(o, r) {
  let s, l, d, f, c;
  if (VE(o)) {
    let y = o.getAttribute("action");
    l = y ? Ri(y, r) : null, s = o.getAttribute("method") || ld, d = _v(o.getAttribute("enctype")) || ud, f = new FormData(o);
  } else if (ME(o) || UE(o) && (o.type === "submit" || o.type === "image")) {
    let y = o.form;
    if (y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let h = o.getAttribute("formaction") || y.getAttribute("action");
    if (l = h ? Ri(h, r) : null, s = o.getAttribute("formmethod") || y.getAttribute("method") || ld, d = _v(o.getAttribute("formenctype")) || _v(y.getAttribute("enctype")) || ud, f = new FormData(y, o), !HE()) {
      let {
        name: p,
        type: v,
        value: L
      } = o;
      if (v === "image") {
        let x = p ? p + "." : "";
        f.append(x + "x", "0"), f.append(x + "y", "0");
      } else p && f.append(p, L);
    }
  } else {
    if (Cd(o))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    s = ld, l = null, d = ud, c = o;
  }
  return f && d === "text/plain" && (c = f, f = void 0), {
    action: l,
    method: s.toLowerCase(),
    encType: d,
    formData: f,
    body: c
  };
}
const YE = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], KE = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], WE = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], GE = "6";
try {
  window.__reactRouterVersion = GE;
} catch {
}
const E3 = /* @__PURE__ */ P.createContext({
  isTransitioning: !1
});
E3.displayName = "ViewTransition";
const qE = /* @__PURE__ */ P.createContext(/* @__PURE__ */ new Map());
qE.displayName = "Fetchers";
const QE = "startTransition", Rb = zv[QE];
function XE(o) {
  let {
    basename: r,
    children: s,
    future: l,
    window: d
  } = o, f = P.useRef();
  f.current == null && (f.current = GC({
    window: d,
    v5Compat: !0
  }));
  let c = f.current, [y, h] = P.useState({
    action: c.action,
    location: c.location
  }), {
    v7_startTransition: p
  } = l || {}, v = P.useCallback((L) => {
    p && Rb ? Rb(() => h(L)) : h(L);
  }, [h, p]);
  return P.useLayoutEffect(() => c.listen(v), [c, v]), /* @__PURE__ */ P.createElement(PE, {
    basename: r,
    children: s,
    location: y.location,
    navigationType: y.action,
    navigator: c,
    future: l
  });
}
const JE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ZE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, sa = /* @__PURE__ */ P.forwardRef(function(r, s) {
  let {
    onClick: l,
    relative: d,
    reloadDocument: f,
    replace: c,
    state: y,
    target: h,
    to: p,
    preventScrollReset: v,
    unstable_viewTransition: L
  } = r, x = ig(r, YE), {
    basename: N
  } = P.useContext(Ba), j, M = !1;
  if (typeof p == "string" && ZE.test(p) && (j = p, JE))
    try {
      let H = new URL(window.location.href), w = p.startsWith("//") ? new URL(H.protocol + p) : new URL(p), A = Ri(w.pathname, N);
      w.origin === H.origin && A != null ? p = A + w.search + w.hash : M = !0;
    } catch {
      lr(!1, '<Link to="' + p + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let k = bE(p, {
    relative: d
  }), z = aN(p, {
    replace: c,
    state: y,
    target: h,
    preventScrollReset: v,
    relative: d,
    unstable_viewTransition: L
  });
  function _(H) {
    l && l(H), H.defaultPrevented || z(H);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ P.createElement("a", Es({}, x, {
      href: j || k,
      onClick: M || f ? l : _,
      ref: s,
      target: h
    }))
  );
});
sa.displayName = "Link";
const eN = /* @__PURE__ */ P.forwardRef(function(r, s) {
  let {
    "aria-current": l = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: c = !1,
    style: y,
    to: h,
    unstable_viewTransition: p,
    children: v
  } = r, L = ig(r, KE), x = Vu(h, {
    relative: L.relative
  }), N = Rs(), j = P.useContext(tg), {
    navigator: M,
    basename: k
  } = P.useContext(Ba), z = j != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  uN(x) && p === !0, _ = M.encodeLocation ? M.encodeLocation(x).pathname : x.pathname, H = N.pathname, w = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  d || (H = H.toLowerCase(), w = w ? w.toLowerCase() : null, _ = _.toLowerCase()), w && k && (w = Ri(w, k) || w);
  const A = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let Y = H === _ || !c && H.startsWith(_) && H.charAt(A) === "/", X = w != null && (w === _ || !c && w.startsWith(_) && w.charAt(_.length) === "/"), ne = {
    isActive: Y,
    isPending: X,
    isTransitioning: z
  }, fe = Y ? l : void 0, le;
  typeof f == "function" ? le = f(ne) : le = [f, Y ? "active" : null, X ? "pending" : null, z ? "transitioning" : null].filter(Boolean).join(" ");
  let pe = typeof y == "function" ? y(ne) : y;
  return /* @__PURE__ */ P.createElement(sa, Es({}, L, {
    "aria-current": fe,
    className: le,
    ref: s,
    style: pe,
    to: h,
    unstable_viewTransition: p
  }), typeof v == "function" ? v(ne) : v);
});
eN.displayName = "NavLink";
const tN = /* @__PURE__ */ P.forwardRef((o, r) => {
  let {
    fetcherKey: s,
    navigate: l,
    reloadDocument: d,
    replace: f,
    state: c,
    method: y = ld,
    action: h,
    onSubmit: p,
    relative: v,
    preventScrollReset: L,
    unstable_viewTransition: x
  } = o, N = ig(o, WE), j = sN(), M = lN(h, {
    relative: v
  }), k = y.toLowerCase() === "get" ? "get" : "post", z = (_) => {
    if (p && p(_), _.defaultPrevented) return;
    _.preventDefault();
    let H = _.nativeEvent.submitter, w = (H == null ? void 0 : H.getAttribute("formmethod")) || y;
    j(H || _.currentTarget, {
      fetcherKey: s,
      method: w,
      navigate: l,
      replace: f,
      state: c,
      relative: v,
      preventScrollReset: L,
      unstable_viewTransition: x
    });
  };
  return /* @__PURE__ */ P.createElement("form", Es({
    ref: r,
    method: k,
    action: M,
    onSubmit: d ? p : z
  }, N));
});
tN.displayName = "Form";
var hd;
(function(o) {
  o.UseScrollRestoration = "useScrollRestoration", o.UseSubmit = "useSubmit", o.UseSubmitFetcher = "useSubmitFetcher", o.UseFetcher = "useFetcher", o.useViewTransitionState = "useViewTransitionState";
})(hd || (hd = {}));
var wb;
(function(o) {
  o.UseFetcher = "useFetcher", o.UseFetchers = "useFetchers", o.UseScrollRestoration = "useScrollRestoration";
})(wb || (wb = {}));
function nN(o) {
  return o + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function N3(o) {
  let r = P.useContext(_u);
  return r || Ct(!1, nN(o)), r;
}
function aN(o, r) {
  let {
    target: s,
    replace: l,
    state: d,
    preventScrollReset: f,
    relative: c,
    unstable_viewTransition: y
  } = r === void 0 ? {} : r, h = Mu(), p = Rs(), v = Vu(o, {
    relative: c
  });
  return P.useCallback((L) => {
    if ($E(L, s)) {
      L.preventDefault();
      let x = l !== void 0 ? l : ju(p) === ju(v);
      h(o, {
        replace: x,
        state: d,
        preventScrollReset: f,
        relative: c,
        unstable_viewTransition: y
      });
    }
  }, [p, h, v, l, d, s, o, f, c, y]);
}
function rN() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let iN = 0, oN = () => "__" + String(++iN) + "__";
function sN() {
  let {
    router: o
  } = N3(hd.UseSubmit), {
    basename: r
  } = P.useContext(Ba), s = OE();
  return P.useCallback(function(l, d) {
    d === void 0 && (d = {}), rN();
    let {
      action: f,
      method: c,
      encType: y,
      formData: h,
      body: p
    } = IE(l, r);
    if (d.navigate === !1) {
      let v = d.fetcherKey || oN();
      o.fetch(v, s, d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: h,
        body: p,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        unstable_flushSync: d.unstable_flushSync
      });
    } else
      o.navigate(d.action || f, {
        preventScrollReset: d.preventScrollReset,
        formData: h,
        body: p,
        formMethod: d.method || c,
        formEncType: d.encType || y,
        replace: d.replace,
        state: d.state,
        fromRouteId: s,
        unstable_flushSync: d.unstable_flushSync,
        unstable_viewTransition: d.unstable_viewTransition
      });
  }, [o, r, s]);
}
function lN(o, r) {
  let {
    relative: s
  } = r === void 0 ? {} : r, {
    basename: l
  } = P.useContext(Ba), d = P.useContext(Hr);
  d || Ct(!1, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1), c = Es({}, Vu(o || ".", {
    relative: s
  })), y = Rs();
  if (o == null) {
    c.search = y.search;
    let h = new URLSearchParams(c.search);
    h.has("index") && h.get("index") === "" && (h.delete("index"), c.search = h.toString() ? "?" + h.toString() : "");
  }
  return (!o || o === ".") && f.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (c.pathname = c.pathname === "/" ? l : $r([l, c.pathname])), ju(c);
}
function uN(o, r) {
  r === void 0 && (r = {});
  let s = P.useContext(E3);
  s == null && Ct(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: l
  } = N3(hd.useViewTransitionState), d = Vu(o, {
    relative: r.relative
  });
  if (!s.isTransitioning)
    return !1;
  let f = Ri(s.currentLocation.pathname, l) || s.currentLocation.pathname, c = Ri(s.nextLocation.pathname, l) || s.nextLocation.pathname;
  return pd(d.pathname, c) != null || pd(d.pathname, f) != null;
}
var cN = {
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
const fN = /* @__PURE__ */ xd(cN);
var dN = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function jb(o) {
  var r = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, s = o.match(/<\/?([^\s]+?)[/\s>]/);
  if (s && (r.name = s[1], (fN[s[1]] || o.charAt(o.length - 2) === "/") && (r.voidElement = !0), r.name.startsWith("!--"))) {
    var l = o.indexOf("-->");
    return { type: "comment", comment: l !== -1 ? o.slice(4, l) : "" };
  }
  for (var d = new RegExp(dN), f = null; (f = d.exec(o)) !== null; ) if (f[0].trim()) if (f[1]) {
    var c = f[1].trim(), y = [c, ""];
    c.indexOf("=") > -1 && (y = c.split("=")), r.attrs[y[0]] = y[1], d.lastIndex--;
  } else f[2] && (r.attrs[f[2]] = f[3].trim().substring(1, f[3].length - 1));
  return r;
}
var mN = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, pN = /^\s*$/, hN = /* @__PURE__ */ Object.create(null);
function R3(o, r) {
  switch (r.type) {
    case "text":
      return o + r.content;
    case "tag":
      return o += "<" + r.name + (r.attrs ? function(s) {
        var l = [];
        for (var d in s) l.push(d + '="' + s[d] + '"');
        return l.length ? " " + l.join(" ") : "";
      }(r.attrs) : "") + (r.voidElement ? "/>" : ">"), r.voidElement ? o : o + r.children.reduce(R3, "") + "</" + r.name + ">";
    case "comment":
      return o + "<!--" + r.comment + "-->";
  }
}
var vN = { parse: function(o, r) {
  r || (r = {}), r.components || (r.components = hN);
  var s, l = [], d = [], f = -1, c = !1;
  if (o.indexOf("<") !== 0) {
    var y = o.indexOf("<");
    l.push({ type: "text", content: y === -1 ? o : o.substring(0, y) });
  }
  return o.replace(mN, function(h, p) {
    if (c) {
      if (h !== "</" + s.name + ">") return;
      c = !1;
    }
    var v, L = h.charAt(1) !== "/", x = h.startsWith("<!--"), N = p + h.length, j = o.charAt(N);
    if (x) {
      var M = jb(h);
      return f < 0 ? (l.push(M), l) : ((v = d[f]).children.push(M), l);
    }
    if (L && (f++, (s = jb(h)).type === "tag" && r.components[s.name] && (s.type = "component", c = !0), s.voidElement || c || !j || j === "<" || s.children.push({ type: "text", content: o.slice(N, o.indexOf("<", N)) }), f === 0 && l.push(s), (v = d[f - 1]) && v.children.push(s), d[f] = s), (!L || s.voidElement) && (f > -1 && (s.voidElement || s.name === h.slice(2, -1)) && (f--, s = f === -1 ? l : d[f]), !c && j !== "<" && j)) {
      v = f === -1 ? l : d[f].children;
      var k = o.indexOf("<", N), z = o.slice(N, k === -1 ? void 0 : k);
      pN.test(z) && (z = " "), (k > -1 && f + v.length >= 0 || z !== " ") && v.push({ type: "text", content: z });
    }
  }), l;
}, stringify: function(o) {
  return o.reduce(function(r, s) {
    return r + R3("", s);
  }, "");
} };
function cd() {
  if (console && console.warn) {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    typeof r[0] == "string" && (r[0] = `react-i18next:: ${r[0]}`), console.warn(...r);
  }
}
const Tb = {};
function vd() {
  for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
    r[s] = arguments[s];
  typeof r[0] == "string" && Tb[r[0]] || (typeof r[0] == "string" && (Tb[r[0]] = /* @__PURE__ */ new Date()), cd(...r));
}
const w3 = (o, r) => () => {
  if (o.isInitialized)
    r();
  else {
    const s = () => {
      setTimeout(() => {
        o.off("initialized", s);
      }, 0), r();
    };
    o.on("initialized", s);
  }
};
function Db(o, r, s) {
  o.loadNamespaces(r, w3(o, s));
}
function kb(o, r, s, l) {
  typeof s == "string" && (s = [s]), s.forEach((d) => {
    o.options.ns.indexOf(d) < 0 && o.options.ns.push(d);
  }), o.loadLanguages(r, w3(o, l));
}
function gN(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const l = r.languages[0], d = r.options ? r.options.fallbackLng : !1, f = r.languages[r.languages.length - 1];
  if (l.toLowerCase() === "cimode") return !0;
  const c = (y, h) => {
    const p = r.services.backendConnector.state[`${y}|${h}`];
    return p === -1 || p === 2;
  };
  return s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !c(r.isLanguageChangingTo, o) ? !1 : !!(r.hasResourceBundle(l, o) || !r.services.backendConnector.backend || r.options.resources && !r.options.partialBundledLanguages || c(l, o) && (!d || c(f, o)));
}
function yN(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !r.languages || !r.languages.length ? (vd("i18n.languages were undefined or empty", r.languages), !0) : r.options.ignoreJSONStructure !== void 0 ? r.hasLoadedNamespace(o, {
    lng: s.lng,
    precheck: (d, f) => {
      if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && d.services.backendConnector.backend && d.isLanguageChangingTo && !f(d.isLanguageChangingTo, o)) return !1;
    }
  }) : gN(o, r, s);
}
const LN = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, bN = {
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
}, xN = (o) => bN[o], SN = (o) => o.replace(LN, xN);
let Bv = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: SN
};
function CN() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Bv = {
    ...Bv,
    ...o
  };
}
function j3() {
  return Bv;
}
let T3;
function EN(o) {
  T3 = o;
}
function og() {
  return T3;
}
function Pv(o, r) {
  if (!o) return !1;
  const s = o.props ? o.props.children : o.children;
  return r ? s.length > 0 : !!s;
}
function Av(o) {
  if (!o) return [];
  const r = o.props ? o.props.children : o.children;
  return o.props && o.props.i18nIsDynamicList ? bs(r) : r;
}
function NN(o) {
  return Object.prototype.toString.call(o) !== "[object Array]" ? !1 : o.every((r) => P.isValidElement(r));
}
function bs(o) {
  return Array.isArray(o) ? o : [o];
}
function RN(o, r) {
  const s = {
    ...r
  };
  return s.props = Object.assign(o.props, r.props), s;
}
function D3(o, r) {
  if (!o) return "";
  let s = "";
  const l = bs(o), d = r.transSupportBasicHtmlNodes && r.transKeepBasicHtmlNodesFor ? r.transKeepBasicHtmlNodesFor : [];
  return l.forEach((f, c) => {
    if (typeof f == "string")
      s += `${f}`;
    else if (P.isValidElement(f)) {
      const y = Object.keys(f.props).length, h = d.indexOf(f.type) > -1, p = f.props.children;
      if (!p && h && y === 0)
        s += `<${f.type}/>`;
      else if (!p && (!h || y !== 0))
        s += `<${c}></${c}>`;
      else if (f.props.i18nIsDynamicList)
        s += `<${c}></${c}>`;
      else if (h && y === 1 && typeof p == "string")
        s += `<${f.type}>${p}</${f.type}>`;
      else {
        const v = D3(p, r);
        s += `<${c}>${v}</${c}>`;
      }
    } else if (f === null)
      cd("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof f == "object") {
      const {
        format: y,
        ...h
      } = f, p = Object.keys(h);
      if (p.length === 1) {
        const v = y ? `${p[0]}, ${y}` : p[0];
        s += `{{${v}}}`;
      } else
        cd("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", f);
    } else
      cd("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", f);
  }), s;
}
function wN(o, r, s, l, d, f) {
  if (r === "") return [];
  const c = l.transKeepBasicHtmlNodesFor || [], y = r && new RegExp(c.map((k) => `<${k}`).join("|")).test(r);
  if (!o && !y && !f) return [r];
  const h = {};
  function p(k) {
    bs(k).forEach((_) => {
      typeof _ != "string" && (Pv(_) ? p(Av(_)) : typeof _ == "object" && !P.isValidElement(_) && Object.assign(h, _));
    });
  }
  p(o);
  const v = vN.parse(`<0>${r}</0>`), L = {
    ...h,
    ...d
  };
  function x(k, z, _) {
    const H = Av(k), w = j(H, z.children, _);
    return NN(H) && w.length === 0 || k.props && k.props.i18nIsDynamicList ? H : w;
  }
  function N(k, z, _, H, w) {
    k.dummy ? (k.children = z, _.push(P.cloneElement(k, {
      key: H
    }, w ? void 0 : z))) : _.push(...P.Children.map([k], (A) => {
      const Y = {
        ...A.props
      };
      return delete Y.i18nIsDynamicList, P.createElement(A.type, {
        ...Y,
        key: H,
        ref: A.ref
      }, w ? null : z);
    }));
  }
  function j(k, z, _) {
    const H = bs(k);
    return bs(z).reduce((A, Y, X) => {
      const ne = Y.children && Y.children[0] && Y.children[0].content && s.services.interpolator.interpolate(Y.children[0].content, L, s.language);
      if (Y.type === "tag") {
        let fe = H[parseInt(Y.name, 10)];
        _.length === 1 && !fe && (fe = _[0][Y.name]), fe || (fe = {});
        const le = Object.keys(Y.attrs).length !== 0 ? RN({
          props: Y.attrs
        }, fe) : fe, pe = P.isValidElement(le), Xe = pe && Pv(Y, !0) && !Y.voidElement, ve = y && typeof le == "object" && le.dummy && !pe, Ee = typeof o == "object" && o !== null && Object.hasOwnProperty.call(o, Y.name);
        if (typeof le == "string") {
          const Re = s.services.interpolator.interpolate(le, L, s.language);
          A.push(Re);
        } else if (Pv(le) || Xe) {
          const Re = x(le, Y, _);
          N(le, Re, A, X);
        } else if (ve) {
          const Re = j(H, Y.children, _);
          N(le, Re, A, X);
        } else if (Number.isNaN(parseFloat(Y.name)))
          if (Ee) {
            const Re = x(le, Y, _);
            N(le, Re, A, X, Y.voidElement);
          } else if (l.transSupportBasicHtmlNodes && c.indexOf(Y.name) > -1)
            if (Y.voidElement)
              A.push(P.createElement(Y.name, {
                key: `${Y.name}-${X}`
              }));
            else {
              const Re = j(H, Y.children, _);
              A.push(P.createElement(Y.name, {
                key: `${Y.name}-${X}`
              }, Re));
            }
          else if (Y.voidElement)
            A.push(`<${Y.name} />`);
          else {
            const Re = j(H, Y.children, _);
            A.push(`<${Y.name}>${Re}</${Y.name}>`);
          }
        else if (typeof le == "object" && !pe) {
          const Re = Y.children[0] ? ne : null;
          Re && A.push(Re);
        } else
          N(le, ne, A, X, Y.children.length !== 1 || !ne);
      } else if (Y.type === "text") {
        const fe = l.transWrapTextNodes, le = f ? l.unescape(s.services.interpolator.interpolate(Y.content, L, s.language)) : s.services.interpolator.interpolate(Y.content, L, s.language);
        fe ? A.push(P.createElement(fe, {
          key: `${Y.name}-${X}`
        }, le)) : A.push(le);
      }
      return A;
    }, []);
  }
  const M = j([{
    dummy: !0,
    children: o || []
  }], v, bs(o || []));
  return Av(M[0]);
}
function jN(o) {
  let {
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: h,
    components: p,
    ns: v,
    i18n: L,
    t: x,
    shouldUnescape: N,
    ...j
  } = o;
  const M = L || og();
  if (!M)
    return vd("You will need to pass in an i18next instance by using i18nextReactModule"), r;
  const k = x || M.t.bind(M) || ((Xe) => Xe), z = {
    ...j3(),
    ...M.options && M.options.react
  };
  let _ = v || k.ns || M.options && M.options.defaultNS;
  _ = typeof _ == "string" ? [_] : _ || ["translation"];
  const H = D3(r, z), w = h || H || z.transEmptyNodeValue || d, {
    hashTransKey: A
  } = z, Y = d || (A ? A(H || w) : H || w);
  M.options && M.options.interpolation && M.options.interpolation.defaultVariables && (y = y && Object.keys(y).length > 0 ? {
    ...y,
    ...M.options.interpolation.defaultVariables
  } : {
    ...M.options.interpolation.defaultVariables
  });
  const X = y || s !== void 0 || !r ? c.interpolation : {
    interpolation: {
      ...c.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, ne = {
    ...c,
    context: f || c.context,
    count: s,
    ...y,
    ...X,
    defaultValue: w,
    ns: _
  }, fe = Y ? k(Y, ne) : w;
  p && Object.keys(p).forEach((Xe) => {
    const ve = p[Xe];
    if (typeof ve.type == "function" || !ve.props || !ve.props.children || fe.indexOf(`${Xe}/>`) < 0 && fe.indexOf(`${Xe} />`) < 0) return;
    function Ee() {
      return P.createElement(P.Fragment, null, ve);
    }
    p[Xe] = P.createElement(Ee);
  });
  const le = wN(p || r, fe, M, z, ne, N), pe = l !== void 0 ? l : z.defaultTransParent;
  return pe ? P.createElement(pe, j, le) : le;
}
const TN = {
  type: "3rdParty",
  init(o) {
    CN(o.options.react), EN(o);
  }
}, k3 = P.createContext();
class DN {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(r) {
    r.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function bu(o) {
  let {
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c = {},
    values: y,
    defaults: h,
    components: p,
    ns: v,
    i18n: L,
    t: x,
    shouldUnescape: N,
    ...j
  } = o;
  const {
    i18n: M,
    defaultNS: k
  } = P.useContext(k3) || {}, z = L || M || og(), _ = x || z && z.t.bind(z);
  return jN({
    children: r,
    count: s,
    parent: l,
    i18nKey: d,
    context: f,
    tOptions: c,
    values: y,
    defaults: h,
    components: p,
    ns: v || _ && _.ns || k || z && z.options && z.options.defaultNS,
    i18n: z,
    t: x,
    shouldUnescape: N,
    ...j
  });
}
const kN = (o, r) => {
  const s = P.useRef();
  return P.useEffect(() => {
    s.current = o;
  }, [o, r]), s.current;
};
function O3(o, r, s, l) {
  return o.getFixedT(r, s, l);
}
function ON(o, r, s, l) {
  return P.useCallback(O3(o, r, s, l), [o, r, s, l]);
}
function ji(o) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: s
  } = r, {
    i18n: l,
    defaultNS: d
  } = P.useContext(k3) || {}, f = s || l || og();
  if (f && !f.reportNamespaces && (f.reportNamespaces = new DN()), !f) {
    vd("You will need to pass in an i18next instance by using initReactI18next");
    const w = (Y, X) => typeof X == "string" ? X : X && typeof X == "object" && typeof X.defaultValue == "string" ? X.defaultValue : Array.isArray(Y) ? Y[Y.length - 1] : Y, A = [w, {}, !1];
    return A.t = w, A.i18n = {}, A.ready = !1, A;
  }
  f.options.react && f.options.react.wait !== void 0 && vd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...j3(),
    ...f.options.react,
    ...r
  }, {
    useSuspense: y,
    keyPrefix: h
  } = c;
  let p = d || f.options && f.options.defaultNS;
  p = typeof p == "string" ? [p] : p || ["translation"], f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(p);
  const v = (f.isInitialized || f.initializedStoreOnce) && p.every((w) => yN(w, f, c)), L = ON(f, r.lng || null, c.nsMode === "fallback" ? p : p[0], h), x = () => L, N = () => O3(f, r.lng || null, c.nsMode === "fallback" ? p : p[0], h), [j, M] = P.useState(x);
  let k = p.join();
  r.lng && (k = `${r.lng}${k}`);
  const z = kN(k), _ = P.useRef(!0);
  P.useEffect(() => {
    const {
      bindI18n: w,
      bindI18nStore: A
    } = c;
    _.current = !0, !v && !y && (r.lng ? kb(f, r.lng, p, () => {
      _.current && M(N);
    }) : Db(f, p, () => {
      _.current && M(N);
    })), v && z && z !== k && _.current && M(N);
    function Y() {
      _.current && M(N);
    }
    return w && f && f.on(w, Y), A && f && f.store.on(A, Y), () => {
      _.current = !1, w && f && w.split(" ").forEach((X) => f.off(X, Y)), A && f && A.split(" ").forEach((X) => f.store.off(X, Y));
    };
  }, [f, k]), P.useEffect(() => {
    _.current && v && M(x);
  }, [f, h, v]);
  const H = [j, f, v];
  if (H.t = j, H.i18n = f, H.ready = v, v || !v && !y) return H;
  throw new Promise((w) => {
    r.lng ? kb(f, r.lng, p, () => w()) : Db(f, p, () => w());
  });
}
const FN = "Management", _N = "Comment", PN = "Login", AN = "Logout", MN = "Register", VN = "Email", UN = "Password", zN = "Nickname", $N = "Personal Website", HN = "Setting", BN = "Profile", IN = "Homepage", YN = "All", KN = "Mine", WN = "Approved", GN = "Waiting", qN = "Spam", QN = "Sticky", XN = "Edit", JN = "Reply", ZN = "Action", eR = "Filter", tR = "Author", nR = "Content", aR = "Username", rR = "Submit", iR = "Cancel", oR = "At", sR = "Migration", lR = "Exporting…", uR = "Under verification", cR = "Administrator", fR = "Guest", dR = "User", mR = "Role", nd = {
  management: FN,
  comment: _N,
  login: PN,
  logout: AN,
  register: MN,
  email: VN,
  password: UN,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: zN,
  website: $N,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: HN,
  profile: BN,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: IN,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: YN,
  mine: KN,
  approved: WN,
  "approved button": "Approved",
  waiting: GN,
  spam: qN,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: QN,
  edit: XN,
  reply: JN,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: ZN,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: eR,
  author: tR,
  content: nR,
  username: aR,
  submit: rR,
  cancel: iR,
  at: oR,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: sR,
  exporting: lR,
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
  verify: uR,
  administrator: cR,
  guest: fR,
  user: dR,
  "manage users": "Manage Users",
  role: mR,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, pR = "管理", hR = "评论", vR = "登录", gR = "登出", yR = "用户注册", LR = "邮箱", bR = "密码", xR = "昵称", SR = "个人网站", CR = "个人设置", ER = "个人资料", NR = "个人主页地址", RR = "所有", wR = "我的", jR = "已通过", TR = "待审核", DR = "垃圾", kR = "置顶评论", OR = "编辑", FR = "回复", _R = "操作", PR = "筛选", AR = "作者", MR = "内容", VR = "用户名", UR = "提交", zR = "取消", $R = "于", HR = "导入导出", BR = "导出中...", IR = "待认证", YR = "管理员", KR = "普通用户", WR = "用户", GR = "角色", Ob = {
  management: pR,
  comment: hR,
  login: vR,
  logout: gR,
  register: yR,
  email: LR,
  password: bR,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: xR,
  website: SR,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: CR,
  profile: ER,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: NR,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: RR,
  mine: wR,
  approved: jR,
  "approved button": "通过",
  waiting: TR,
  spam: DR,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: kR,
  edit: OR,
  reply: FR,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: _R,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: PR,
  author: AR,
  content: MR,
  username: VR,
  submit: UR,
  cancel: zR,
  at: $R,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: HR,
  exporting: BR,
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
  verify: IR,
  administrator: YR,
  guest: KR,
  user: WR,
  "manage users": "管理用户",
  role: GR,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, qR = "管理", QR = "留言", XR = "登入", JR = "登出", ZR = "使用者註冊", ew = "信箱", tw = "密碼", nw = "暱稱", aw = "個人網站", rw = "個人設定", iw = "個人資料", ow = "個人首頁網址", sw = "所有", lw = "我的", uw = "已通過", cw = "待審核", fw = "垃圾", dw = "置頂留言", mw = "編輯", pw = "回覆", hw = "動作", vw = "篩選", gw = "作者", yw = "內容", Lw = "使用者名稱", bw = "送出", xw = "取消", Sw = "於", Cw = "匯入匯出", Ew = "匯出中...", Nw = "待認證", Rw = "管理員", ww = "使用者", jw = "使用者", Tw = "角色", Dw = {
  management: qR,
  comment: QR,
  login: XR,
  logout: JR,
  register: ZR,
  email: ew,
  password: tw,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: nw,
  website: aw,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: rw,
  profile: iw,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: ow,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: sw,
  mine: lw,
  approved: uw,
  "approved button": "通過",
  waiting: cw,
  spam: fw,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: dw,
  edit: mw,
  reply: pw,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: hw,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: vw,
  author: gw,
  content: yw,
  username: Lw,
  submit: bw,
  cancel: xw,
  at: Sw,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: Cw,
  exporting: Ew,
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
  verify: Nw,
  administrator: Rw,
  guest: ww,
  user: jw,
  "manage users": "使用者管理",
  role: Tw,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, kw = [
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
], Ow = {
  "zh-cn": { translations: Ob },
  "zh-CN": { translations: Ob },
  en: { translations: nd },
  "en-US": { translations: nd },
  "zh-TW": { translations: Dw },
  jp: { translations: nd },
  "jp-JP": { translations: nd }
};
function ho() {
  const o = Fu(), r = Mu(), s = wi((h) => h.user), { t: l, i18n: d } = ji(), [f, c] = P.useState(null);
  P.useMemo(() => {
    const h = kw.find(
      (p) => p.alias.includes(d.language)
    );
    return (h == null ? void 0 : h.value) ?? "";
  }, [d.language]), P.useEffect(() => {
    !(s != null && s.email) || !(s != null && s.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((h) => h.json()).then((h) => {
      s.__version !== h.version && c(h.version);
    });
  }, [s == null ? void 0 : s.email]);
  const y = function(h) {
    h.preventDefault(), o.user.logout(), r("/ui/login");
  };
  return [
    /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (s == null ? void 0 : s.type) === "administrator" ? /* @__PURE__ */ C.jsxDEV("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ C.jsxDEV("ul", { className: "root", children: [
        /* @__PURE__ */ C.jsxDEV("li", { className: "parent", children: /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui", children: l("management") }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("ul", { className: "child", children: [
          /* @__PURE__ */ C.jsxDEV("li", { className: "last", children: /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui", children: l("comment") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV("li", { className: "last", children: /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui/user", children: l("user") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV("li", { className: "last", children: /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui/migration", children: l("migration") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ C.jsxDEV("div", { className: "operate", children: [
        s != null && s.type ? /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui/profile", className: "author", children: s.display_name }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
          lineNumber: 73,
          columnNumber: 11
        }, this) : null,
        s != null && s.type ? /* @__PURE__ */ C.jsxDEV("a", { className: "exit", href: "#", onClick: y, children: l("logout") }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this) : null
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ] }, "header", !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Header.jsx",
      lineNumber: 49,
      columnNumber: 5
    }, this)
  ];
}
function Fw() {
  const { t: o } = ji(), r = Fu(), s = Mu(), l = wi((p) => p.user), [d, f] = P.useState(!1), [c, y] = P.useState(!1);
  P.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const h = async function(p) {
    p.preventDefault(), f(!1);
    const v = p.target.email.value;
    if (!v)
      return f(o("please input email"));
    try {
      y(!0), await r.user.forgot({
        email: v
      }), alert(o("find password success! please go to your mailbox to reset it!")), s("/ui/login");
    } catch {
      f(o("find password error! try again later"));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ C.jsxDEV("ul", { children: d ? /* @__PURE__ */ C.jsxDEV("li", { children: d }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 57,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login", style: { padding: "0 8px" }, children: [
      /* @__PURE__ */ C.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: h, children: [
        /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: [
          /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: o("email"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
              lineNumber: 67,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ C.jsxDEV("p", { className: "description", style: { textAlign: "left" }, children: o(
            "you will receive an email which contains a link to create new password"
          ) }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ C.jsxDEV(
          "button",
          {
            type: "submit",
            disabled: c,
            className: "btn btn-l w-100 primary",
            children: o("get new password")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
            lineNumber: 82,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/forgot/index.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
const _w = (o) => /* @__PURE__ */ P.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ P.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), Pw = (o) => /* @__PURE__ */ P.createElement("svg", { width: 21, height: 20, viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ P.createElement("g", { clipPath: "url(#clip0_13131_3958)" }, /* @__PURE__ */ P.createElement("mask", { id: "mask0_13131_3958", style: {
  maskType: "luminance"
}, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 21, height: 20 }, /* @__PURE__ */ P.createElement("path", { d: "M0.5 0H20.5V20H0.5V0Z", fill: "white" })), /* @__PURE__ */ P.createElement("g", { mask: "url(#mask0_13131_3958)" }, /* @__PURE__ */ P.createElement("path", { d: "M16.25 0.9375H19.3171L12.6171 8.61464L20.5 19.0632H14.3286L9.49143 12.7275L3.96286 19.0632H0.892857L8.05857 10.8489L0.5 0.938929H6.82857L11.1943 6.72893L16.25 0.9375ZM15.1714 17.2232H16.8714L5.9 2.68179H4.07714L15.1714 17.2232Z", fill: "black" }))), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", { id: "clip0_13131_3958" }, /* @__PURE__ */ P.createElement("rect", { width: 20, height: 20, fill: "white", transform: "translate(0.5)" })))), Aw = (o) => /* @__PURE__ */ P.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ P.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), Mw = (o) => /* @__PURE__ */ P.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...o }, /* @__PURE__ */ P.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ P.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), Vw = (o) => /* @__PURE__ */ P.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), Uw = (o) => /* @__PURE__ */ P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...o }, /* @__PURE__ */ P.createElement("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ P.createElement("path", { fill: "#4285F4", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ P.createElement("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ P.createElement("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), zw = (o) => /* @__PURE__ */ P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 100, height: 100, viewBox: "0 0 127 115", id: "shinigami", ...o }, /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", { d: "M 74.96,6.01 L 81.77,6.32 L 85.92,6.86 L 87.92,7.31 L 91.89,8.36 L 93.92,9.10 L 98.04,10.73 L 100.27,11.80 L 105.99,14.91 L 109.79,17.27 L 111.31,18.34 L 112.74,19.36 L 113.29,19.80 L 114.27,20.61 L 114.54,20.90 L 114.92,21.40 L 114.85,21.50 L 114.50,21.58 L 114.00,21.43 L 107.94,19.93 L 104.11,19.28 L 102.28,19.13 L 98.70,18.95 L 97.00,19.03 L 93.66,19.32 L 92.07,19.64 L 88.90,20.27 L 94.15,23.27 L 100.07,27.34 L 103.76,30.58 L 105.44,32.41 L 108.67,36.21 L 110.07,38.27 L 112.70,42.49 L 113.76,44.71 L 114.87,47.09 L 115.48,48.50 L 115.74,49.14 L 116.62,51.58 L 116.90,52.78 L 117.37,55.24 L 117.52,56.73 L 117.64,58.28 L 117.70,59.17 L 117.79,61.03 L 117.84,62.10 L 117.83,67.72 L 117.59,71.28 L 117.35,72.97 L 116.79,76.31 L 116.39,77.90 L 115.49,81.02 L 114.91,82.52 L 113.68,85.47 L 112.93,86.88 L 111.34,89.66 L 110.42,91.00 L 108.48,93.64 L 107.37,94.91 L 105.06,97.43 L 103.77,98.65 L 99.03,102.73 L 95.86,105.03 L 94.25,106.00 L 91.00,107.80 L 89.31,108.53 L 85.88,109.88 L 84.07,110.41 L 82.04,110.94 L 80.92,111.15 L 78.61,111.52 L 77.38,111.65 L 72.30,112.01 L 69.69,111.96 L 64.48,111.72 L 62.08,111.38 L 59.72,111.00 L 58.63,110.75 L 56.53,110.22 L 55.61,109.91 L 51.28,108.18 L 48.48,106.83 L 47.14,106.06 L 44.49,104.47 L 43.23,103.58 L 40.75,101.76 L 39.59,100.77 L 37.31,98.75 L 36.25,97.67 L 34.19,95.46 L 33.25,94.30 L 31.44,91.93 L 30.64,90.70 L 29.10,88.19 L 28.44,86.89 L 27.59,85.23 L 27.12,84.34 L 26.92,83.99 L 26.21,82.87 L 25.94,82.65 L 25.43,82.42 L 25.18,82.59 L 24.65,83.09 L 24.30,83.55 L 23.69,84.70 L 23.40,85.64 L 23.31,86.20 L 23.18,87.37 L 23.17,88.04 L 23.20,89.45 L 23.27,90.25 L 23.48,93.60 L 23.49,94.38 L 23.47,94.63 L 23.42,95.00 L 23.37,95.00 L 22.80,94.53 L 22.27,93.79 L 21.94,93.26 L 21.27,92.11 L 20.91,91.44 L 20.17,90.03 L 19.81,89.28 L 18.38,86.22 L 17.86,84.90 L 17.39,83.64 L 17.24,83.13 L 17.01,82.23 L 17.01,81.96 L 17.24,80.70 L 17.60,79.70 L 17.87,79.15 L 19.15,76.91 L 19.96,75.96 L 21.68,73.69 L 22.50,72.29 L 22.73,71.63 L 23.08,70.33 L 23.08,69.71 L 22.94,68.48 L 22.69,67.87 L 22.05,66.65 L 21.54,66.03 L 20.38,64.78 L 19.60,64.13 L 17.91,62.80 L 16.85,62.10 L 14.59,60.65 L 13.25,59.87 L 9.37,57.43 L 8.39,56.74 L 8.05,56.47 L 7.49,55.99 L 7.41,55.86 L 7.32,54.88 L 7.40,53.70 L 7.51,52.92 L 7.75,51.24 L 7.93,50.27 L 8.32,48.26 L 8.56,47.20 L 9.07,44.99 L 9.36,43.79 L 9.49,43.31 L 9.73,42.43 L 9.84,42.11 L 10.04,41.53 L 10.13,41.36 L 10.45,40.92 L 10.60,41.08 L 10.89,41.63 L 11.05,42.21 L 11.61,43.77 L 12.15,45.02 L 12.49,45.72 L 14.01,48.69 L 14.93,50.27 L 16.84,53.43 L 17.81,54.86 L 18.77,56.25 L 19.23,56.86 L 20.13,58.03 L 20.54,58.50 L 21.50,59.57 L 22.00,60.08 L 22.18,60.21 L 22.49,60.40 L 22.57,60.36 L 22.68,60.19 L 22.67,59.96 L 22.58,59.39 L 22.46,58.95 L 22.18,57.95 L 21.96,57.28 L 21.47,55.81 L 21.15,54.88 L 20.45,52.91 L 20.02,51.71 L 18.39,46.36 L 17.93,44.55 L 17.75,43.74 L 17.44,42.20 L 17.36,41.61 L 17.11,39.26 L 17.12,38.22 L 17.24,37.88 L 17.56,37.31 L 17.87,37.12 L 18.60,36.80 L 19.13,36.66 L 21.69,36.21 L 23.67,36.01 L 24.50,36.01 L 26.14,35.85 L 26.97,35.52 L 27.32,35.18 L 27.98,34.39 L 28.32,33.75 L 29.01,32.29 L 29.44,31.25 L 30.66,28.84 L 31.74,27.15 L 32.39,26.28 L 35.27,22.74 L 37.02,21.00 L 40.68,17.60 L 42.64,16.11 L 46.62,13.29 L 48.58,12.26 L 54.79,9.44 L 58.96,8.00 L 61.10,7.49 L 65.45,6.61 L 67.74,6.37 L 72.43,6.01 M 33.94,75.66 L 33.78,75.82 L 33.83,76.85 L 34.39,78.07 L 34.92,78.94 L 36.16,80.85 L 37.03,82.06 L 38.93,84.63 L 40.12,86.15 L 43.03,89.83 L 44.79,92.03 L 45.53,92.93 L 46.90,94.58 L 47.37,95.12 L 47.80,95.62 L 47.95,95.78 L 48.21,96.05 L 48.27,96.09 L 48.78,96.78 L 48.91,97.34 L 48.84,97.59 L 49.02,98.89 L 49.48,100.13 L 49.82,100.75 L 50.59,101.93 L 50.99,102.34 L 51.77,103.00 L 52.04,103.00 L 52.76,102.87 L 52.95,102.58 L 52.88,102.27 L 52.62,101.53 L 52.32,100.92 L 51.58,99.53 L 51.01,98.52 L 49.61,95.81 L 49.28,95.08 L 49.17,94.81 L 49.01,94.34 L 49.01,94.24 L 48.73,93.72 L 48.34,93.50 L 48.08,93.50 L 47.19,93.23 L 46.56,92.84 L 46.33,92.59 L 46.09,92.14 L 46.39,92.19 L 46.75,92.40 L 47.63,92.63 L 48.00,92.44 L 48.00,92.18 L 47.58,91.07 L 46.97,90.38 L 46.59,90.11 L 45.80,89.66 L 45.43,89.58 L 44.73,89.55 L 44.50,89.76 L 44.16,89.87 L 44.27,89.48 L 44.49,89.10 L 44.82,88.23 L 44.60,88.13 L 44.27,88.33 L 43.57,88.29 L 43.32,87.73 L 43.36,87.24 L 43.07,86.09 L 42.54,85.70 L 42.18,85.77 L 41.42,85.65 L 41.36,85.22 L 41.58,84.87 L 41.81,84.20 L 41.57,84.15 L 41.27,84.33 L 40.57,84.29 L 40.32,83.73 L 40.36,83.24 L 40.06,82.06 L 39.46,81.73 L 39.00,81.83 L 38.15,81.86 L 38.02,81.64 L 38.22,81.45 L 38.34,80.93 L 38.24,80.41 L 38.11,80.07 L 37.42,78.59 L 36.85,77.79 L 35.88,76.58 L 35.30,76.01 L 35.04,75.85 L 34.54,75.60 L 34.33,75.59 M 94.28,27.80 L 94.19,28.01 L 94.30,28.28 L 94.64,28.95 L 94.97,29.46 L 95.77,30.61 L 96.35,31.37 L 97.75,33.55 L 98.61,35.24 L 99.00,36.20 L 99.76,38.23 L 100.11,39.37 L 100.77,41.74 L 101.07,43.06 L 101.64,45.79 L 101.89,47.29 L 102.37,50.40 L 102.58,52.10 L 102.98,55.59 L 103.14,57.49 L 103.45,61.39 L 103.58,63.50 L 103.79,68.32 L 103.82,71.06 L 103.76,72.22 L 103.60,74.42 L 103.43,75.35 L 103.04,77.11 L 102.75,77.86 L 102.08,79.27 L 101.64,79.88 L 100.67,81.04 L 100.06,81.56 L 98.75,82.57 L 97.95,83.05 L 96.25,84.01 L 95.25,84.50 L 92.86,85.76 L 91.46,86.60 L 90.89,86.99 L 89.87,87.73 L 89.56,88.03 L 89.06,88.58 L 89.05,88.75 L 88.72,89.63 L 88.27,90.00 L 88.00,90.00 L 87.13,90.35 L 87.02,90.92 L 87.19,91.37 L 87.69,92.40 L 88.17,93.07 L 89.29,94.54 L 90.08,95.43 L 91.47,97.17 L 92.11,98.18 L 92.31,98.63 L 92.60,99.49 L 92.63,99.89 L 92.60,100.67 L 92.48,101.06 L 92.22,101.91 L 92.18,102.17 L 92.16,102.59 L 92.27,102.65 L 92.58,102.67 L 92.88,102.55 L 93.59,102.22 L 94.12,101.94 L 96.06,100.67 L 97.47,99.55 L 98.22,98.88 L 101.28,95.93 L 102.79,94.20 L 105.75,90.62 L 107.01,88.81 L 108.22,87.01 L 108.74,86.14 L 109.71,84.44 L 110.08,83.65 L 112.57,77.19 L 113.73,72.87 L 114.05,70.71 L 114.54,66.40 L 114.54,64.26 L 114.36,60.00 L 114.03,57.91 L 113.20,53.76 L 112.54,51.74 L 111.06,47.73 L 110.08,45.79 L 107.96,41.97 L 106.66,40.15 L 103.91,36.56 L 102.30,34.87 L 99.77,32.29 L 98.28,30.84 L 97.65,30.26 L 96.47,29.19 L 96.00,28.81 L 95.15,28.16 L 94.86,27.99 L 94.37,27.75 M 29.51,77.19 L 29.18,77.46 L 29.09,77.67 L 28.91,78.71 L 29.08,79.48 L 29.58,81.17 L 30.05,82.19 L 31.11,84.34 L 31.82,85.51 L 33.33,87.91 L 34.22,89.15 L 36.07,91.62 L 37.08,92.81 L 39.15,95.16 L 40.22,96.22 L 42.39,98.24 L 43.48,99.07 L 44.83,100.08 L 45.44,100.52 L 46.63,101.32 L 47.13,101.63 L 48.03,102.16 L 48.34,102.30 L 48.85,102.49 L 48.91,102.42 L 48.88,101.75 L 48.51,101.11 L 48.18,100.78 L 47.35,99.56 L 47.00,98.64 L 47.00,98.27 L 46.83,97.72 L 46.55,97.18 L 46.34,96.82 L 45.32,95.21 L 44.60,94.17 L 43.02,91.97 L 42.10,90.75 L 40.19,88.24 L 39.19,86.97 L 37.18,84.45 L 36.22,83.29 L 34.33,81.04 L 33.51,80.12 L 31.97,78.43 L 31.41,77.89 L 30.88,77.41 L 30.69,77.27 L 30.34,77.05 L 30.25,77.04 M 52.21,94.45 L 52.24,95.26 L 52.65,96.07 L 53.00,96.50 L 53.73,97.26 L 54.05,97.45 L 54.65,97.69 L 54.79,97.55 L 54.76,96.74 L 54.35,95.93 L 54.00,95.50 L 52.95,94.55 L 52.35,94.31 M 35.63,56.33 L 35.40,56.85 L 35.31,57.31 L 35.15,58.36 L 35.10,59.09 L 35.02,60.69 L 35.02,61.69 L 34.71,64.84 L 34.50,65.65 L 34.38,65.94 L 34.12,66.42 L 33.98,66.51 L 33.70,66.98 L 33.71,67.45 L 33.80,67.76 L 34.04,68.42 L 34.25,68.80 L 34.72,69.61 L 35.05,70.06 L 36.35,72.39 L 36.59,73.04 L 36.63,73.30 L 36.65,73.75 L 36.58,73.88 L 36.49,74.73 L 36.66,75.16 L 36.83,75.46 L 37.22,76.12 L 37.53,76.57 L 38.21,77.54 L 38.68,78.17 L 39.71,79.53 L 40.37,80.38 L 41.79,82.22 L 42.68,83.34 L 44.56,85.73 L 45.69,87.17 L 46.89,88.67 L 47.43,89.30 L 48.47,90.49 L 48.93,90.97 L 49.83,91.86 L 50.23,92.20 L 51.01,92.80 L 51.37,93.00 L 52.05,93.34 L 52.37,93.41 L 52.99,93.49 L 53.29,93.43 L 54.42,92.98 L 54.98,92.42 L 55.65,90.75 L 55.37,89.39 L 54.89,88.62 L 53.70,87.02 L 52.77,86.15 L 50.71,84.37 L 49.36,83.45 L 44.78,79.67 L 42.43,76.95 L 41.54,75.38 L 40.70,73.76 L 40.34,72.87 L 39.65,71.05 L 39.36,70.04 L 38.81,67.97 L 38.58,66.83 L 38.13,64.46 L 37.94,63.15 L 37.46,60.27 L 37.13,58.72 L 36.96,58.13 L 36.63,57.09 L 36.48,56.76 L 36.17,56.22 L 36.02,56.15 L 35.75,56.14 M 64.09,46.78 L 63.48,47.00 L 62.24,47.54 L 61.61,47.91 L 60.35,48.73 L 59.73,49.24 L 57.26,51.50 L 56.16,52.93 L 54.08,55.95 L 53.30,57.65 L 52.05,60.69 L 51.49,62.45 L 51.34,63.33 L 51.10,65.10 L 51.08,66.10 L 51.10,68.22 L 51.18,69.53 L 51.41,72.14 L 51.63,73.64 L 51.80,74.29 L 52.17,75.54 L 52.44,76.11 L 53.03,77.20 L 53.43,77.71 L 54.32,78.73 L 54.89,79.24 L 56.12,80.27 L 56.90,80.82 L 58.55,81.94 L 59.56,82.56 L 61.70,83.87 L 62.98,84.62 L 65.03,85.79 L 65.99,86.32 L 67.85,87.31 L 68.64,87.71 L 70.13,88.43 L 70.66,88.65 L 71.58,89.00 L 71.76,89.00 L 72.90,88.75 L 73.98,88.36 L 74.65,88.08 L 76.06,87.45 L 76.84,87.07 L 78.44,86.27 L 79.28,85.83 L 82.66,83.96 L 84.18,83.02 L 85.64,82.09 L 86.27,81.66 L 87.45,80.81 L 87.89,80.44 L 90.56,77.72 L 92.05,75.75 L 92.58,74.83 L 93.45,73.08 L 93.56,72.44 L 93.61,71.84 L 93.55,71.64 L 93.34,71.28 L 93.13,71.21 L 92.32,70.16 L 91.98,68.90 L 91.97,68.17 L 91.90,66.69 L 91.75,66.24 L 91.55,66.31 L 91.07,66.64 L 90.64,67.13 L 90.17,67.67 L 89.88,68.02 L 89.25,68.78 L 88.87,69.25 L 87.22,71.08 L 86.24,71.95 L 85.76,72.23 L 84.79,72.71 L 84.27,72.83 L 83.17,73.00 L 82.53,73.00 L 79.86,72.58 L 79.09,72.30 L 78.78,72.13 L 78.23,71.77 L 78.06,71.58 L 77.56,70.61 L 77.37,69.79 L 77.34,69.32 L 77.40,67.30 L 77.66,66.18 L 78.32,63.93 L 78.84,62.89 L 80.00,60.91 L 83.15,57.75 L 79.83,54.29 L 76.97,51.72 L 74.85,50.18 L 73.73,49.52 L 71.46,48.28 L 70.30,47.79 L 68.00,46.92 L 66.88,46.66 L 65.25,46.57 M 90.75,70.49 L 90.70,70.85 L 90.53,71.76 L 90.38,72.50 L 89.38,75.76 L 88.39,77.59 L 87.66,78.41 L 86.04,80.02 L 84.90,80.82 L 83.72,81.64 L 83.03,82.06 L 81.59,82.92 L 80.76,83.38 L 78.67,84.56 L 77.80,85.03 L 76.19,85.89 L 75.52,86.21 L 74.26,86.78 L 73.72,86.95 L 72.70,87.23 L 72.22,87.26 L 71.30,87.25 L 70.83,87.15 L 69.88,86.87 L 69.35,86.62 L 68.25,86.08 L 67.60,85.71 L 66.22,84.91 L 65.39,84.41 L 62.43,82.62 L 60.73,81.54 L 60.00,81.04 L 58.61,80.08 L 58.02,79.63 L 56.92,78.75 L 56.46,78.34 L 54.89,76.73 L 54.41,75.94 L 53.62,74.36 L 53.43,73.50 L 52.78,70.50 L 56.08,74.40 L 57.84,76.21 L 59.33,77.57 L 60.18,78.26 L 63.73,81.04 L 65.37,82.08 L 71.35,85.86 L 75.40,83.79 L 80.44,81.00 L 83.21,79.22 L 84.33,78.34 L 86.39,76.60 L 87.17,75.72 L 88.58,73.97 L 89.07,73.07 L 90.16,71.09 L 90.58,70.40 L 90.66,70.36 M 31.05,68.79 L 30.63,69.01 L 29.72,69.53 L 29.17,69.88 L 28.03,70.65 L 27.41,71.10 L 24.84,73.05 L 23.63,74.09 L 22.46,75.13 L 21.95,75.63 L 20.98,76.61 L 20.62,77.05 L 18.78,79.73 L 18.36,80.57 L 18.23,80.93 L 18.04,81.60 L 18.04,81.83 L 18.11,82.18 L 18.21,82.19 L 18.46,82.12 L 18.64,81.94 L 19.03,81.49 L 19.27,81.13 L 19.76,80.34 L 20.03,79.83 L 21.18,78.13 L 22.22,76.91 L 22.85,76.29 L 25.55,73.84 L 26.98,72.92 L 28.93,71.58 L 30.07,70.73 L 30.53,70.36 L 31.35,69.65 L 31.60,69.38 L 32.00,68.90 L 32.00,68.78 L 31.63,68.61 M 34.63,76.20 L 34.93,76.51 L 35.12,76.73 L 35.96,77.81 L 36.41,78.50 L 37.14,79.68 L 37.34,80.09 L 37.63,80.79 L 37.62,80.92 L 37.49,81.04 L 37.26,80.86 L 36.71,80.31 L 36.28,79.75 L 35.27,78.35 L 34.74,77.50 L 34.56,77.15 L 34.26,76.51 L 34.21,76.31 L 34.20,76.00 L 34.33,76.00 M 59.80,58.38 L 61.07,58.98 L 61.66,59.42 L 62.82,60.39 L 63.34,60.98 L 64.34,62.21 L 64.75,62.89 L 65.52,64.30 L 65.80,65.03 L 66.28,66.50 L 66.40,67.23 L 66.53,68.67 L 66.45,69.35 L 66.18,70.66 L 65.87,71.24 L 65.42,71.89 L 65.11,72.14 L 64.43,72.59 L 64.02,72.74 L 62.23,73.14 L 61.21,73.06 L 59.12,72.70 L 58.12,72.24 L 56.19,71.16 L 55.45,70.35 L 54.11,68.50 L 53.48,67.16 L 53.29,66.48 L 53.00,65.10 L 52.97,64.42 L 52.98,63.07 L 53.11,62.45 L 53.42,61.23 L 53.69,60.69 L 54.29,59.68 L 54.69,59.28 L 55.56,58.56 L 56.08,58.34 L 57.20,58.00 L 57.85,58.00 M 84.91,64.77 L 84.56,64.95 L 82.99,65.90 L 82.16,66.55 L 80.55,67.89 L 79.96,68.53 L 79.43,69.15 L 79.26,69.41 L 79.00,69.91 L 79.00,70.09 L 79.23,70.74 L 79.59,70.88 L 80.46,71.04 L 81.01,70.95 L 82.16,70.66 L 82.72,70.37 L 83.80,69.71 L 84.19,69.25 L 85.64,67.43 L 86.26,66.47 L 86.42,66.10 L 86.61,65.42 L 86.56,65.17 L 86.35,64.72 L 86.10,64.56 L 85.50,64.56 M 57.88,64.57 L 57.16,65.32 L 57.02,65.94 L 57.11,66.30 L 57.40,67.07 L 57.72,67.52 L 58.46,68.46 L 59.00,69.00 L 60.18,70.04 L 60.76,70.36 L 61.89,70.88 L 62.37,70.93 L 63.26,70.90 L 63.55,70.68 L 64.00,70.09 L 64.00,69.57 L 63.79,68.82 L 63.45,68.25 L 63.22,67.95 L 62.09,66.70 L 61.40,66.13 L 59.98,65.09 L 59.35,64.79 L 58.75,64.54 L 58.50,64.50 L 58.03,64.48 M 64.71,19.14 L 64.20,19.18 L 62.33,19.41 L 61.48,19.72 L 59.78,20.49 L 58.73,21.17 L 57.64,21.91 L 57.00,22.36 L 55.66,23.34 L 54.85,23.93 L 49.87,28.08 L 47.06,30.93 L 45.90,32.44 L 43.72,35.50 L 42.85,37.13 L 41.24,40.48 L 40.62,42.28 L 40.05,44.43 L 39.72,46.09 L 39.59,47.01 L 39.15,50.88 L 39.07,52.94 L 39.00,57.08 L 39.11,59.00 L 39.25,60.88 L 39.35,61.75 L 39.59,63.41 L 39.75,64.12 L 39.88,64.67 L 39.95,64.83 L 40.07,65.08 L 40.13,65.09 L 40.24,65.02 L 40.30,64.87 L 40.40,64.48 L 40.45,64.16 L 40.56,63.43 L 40.61,62.93 L 40.70,61.85 L 40.75,61.18 L 40.85,59.74 L 40.90,58.87 L 41.00,57.05 L 41.05,56.00 L 41.40,50.54 L 41.71,47.54 L 41.90,46.31 L 42.31,44.02 L 42.56,43.10 L 43.10,41.40 L 43.42,40.73 L 44.84,38.14 L 45.69,36.90 L 46.00,36.59 L 46.28,36.33 L 46.39,36.29 L 46.57,36.27 L 46.62,36.35 L 46.67,36.59 L 46.64,36.81 L 46.54,37.33 L 46.43,37.70 L 46.32,38.30 L 46.39,38.44 L 46.50,38.39 L 46.76,38.18 L 46.96,37.95 L 47.40,37.40 L 47.69,37.00 L 50.86,33.06 L 53.40,30.26 L 54.72,28.93 L 57.35,26.35 L 58.55,25.30 L 59.71,24.31 L 60.23,23.91 L 61.23,23.17 L 61.65,22.91 L 63.33,22.04 L 64.68,21.47 L 65.41,21.21 L 68.45,20.25 L 69.75,20.03 L 74.50,19.24 L 68.00,19.13 L 65.90,19.12 M 69.98,9.20 L 67.26,9.47 L 66.00,9.68 L 63.56,10.15 L 62.47,10.47 L 57.44,12.21 L 53.88,13.66 L 52.30,14.39 L 50.78,15.11 L 50.13,15.45 L 48.90,16.10 L 48.44,16.38 L 47.62,16.90 L 47.40,17.10 L 47.11,17.44 L 47.20,17.53 L 47.83,17.49 L 48.68,17.28 L 49.27,17.09 L 50.55,16.67 L 51.29,16.39 L 52.85,15.81 L 53.69,15.47 L 60.33,13.30 L 65.07,12.19 L 67.31,11.83 L 69.51,11.52 L 70.53,11.42 L 72.50,11.26 L 73.36,11.25 L 74.98,11.27 L 75.63,11.36 L 76.82,11.57 L 77.21,11.76 L 78.25,12.34 L 78.44,12.60 L 78.24,12.69 L 77.66,12.82 L 77.04,12.86 L 75.56,12.92 L 74.46,12.93 L 67.79,13.55 L 63.27,14.46 L 61.02,15.13 L 56.56,16.61 L 54.41,17.53 L 50.18,19.48 L 48.22,20.59 L 44.39,22.92 L 42.70,24.19 L 39.45,26.78 L 38.11,28.15 L 35.61,30.93 L 34.71,32.35 L 33.86,33.78 L 33.53,34.49 L 32.94,35.92 L 32.75,36.63 L 31.59,41.00 L 26.29,41.00 L 24.27,41.04 L 23.18,41.13 L 22.76,41.23 L 22.00,41.47 L 21.73,41.66 L 21.27,42.11 L 21.15,42.43 L 20.96,43.16 L 20.96,43.65 L 21.03,44.71 L 21.15,45.40 L 21.44,46.87 L 21.66,47.78 L 22.15,49.73 L 22.46,50.90 L 23.12,53.16 L 23.56,54.47 L 23.77,55.01 L 24.18,56.02 L 24.37,56.40 L 24.73,57.07 L 24.88,57.27 L 25.16,57.57 L 25.27,57.57 L 25.45,57.48 L 25.50,57.27 L 25.56,56.74 L 25.53,56.31 L 25.44,55.32 L 25.33,54.64 L 25.34,51.56 L 25.87,49.81 L 26.37,49.14 L 27.51,47.94 L 28.27,47.58 L 29.92,47.05 L 30.90,47.08 L 32.36,47.28 L 32.54,47.40 L 32.52,47.46 L 32.40,47.60 L 32.23,47.67 L 31.08,48.52 L 30.37,49.42 L 30.05,50.01 L 29.45,51.25 L 29.19,51.97 L 28.71,53.45 L 28.53,54.25 L 27.96,57.54 L 27.95,59.14 L 28.00,60.71 L 28.11,61.43 L 28.38,62.82 L 28.61,63.42 L 29.14,64.59 L 29.40,64.79 L 29.65,64.92 L 29.78,64.89 L 30.03,64.75 L 30.16,64.58 L 30.42,64.17 L 30.55,63.86 L 30.81,63.16 L 30.95,62.71 L 31.22,61.73 L 31.37,61.13 L 31.66,59.86 L 31.81,59.12 L 33.40,53.89 L 34.10,52.20 L 34.45,51.46 L 35.17,50.08 L 35.51,49.57 L 37.28,46.63 L 37.69,45.79 L 37.82,45.46 L 38.02,44.87 L 38.02,44.71 L 38.20,43.68 L 38.47,42.78 L 38.67,42.25 L 39.64,39.96 L 40.29,38.66 L 41.68,36.03 L 42.44,34.78 L 43.97,32.38 L 44.69,31.45 L 46.33,29.66 L 47.83,28.21 L 48.72,27.43 L 52.54,24.18 L 54.46,22.78 L 56.76,21.11 L 58.05,20.20 L 58.62,19.83 L 60.74,18.60 L 61.81,18.21 L 62.91,17.87 L 63.52,17.73 L 64.81,17.48 L 65.57,17.37 L 67.18,17.16 L 68.15,17.06 L 70.21,16.86 L 71.46,16.75 L 76.24,16.42 L 79.93,16.25 L 81.86,16.21 L 85.74,16.14 L 87.60,16.14 L 91.22,16.17 L 92.76,16.22 L 97.08,16.32 L 99.54,16.32 L 100.50,16.28 L 102.19,16.20 L 102.67,16.13 L 103.09,16.05 L 103.19,16.01 L 103.32,15.92 L 103.26,15.86 L 102.41,15.35 L 101.37,14.85 L 100.67,14.53 L 99.15,13.88 L 98.28,13.52 L 96.46,12.78 L 95.50,12.42 L 91.75,11.20 L 89.04,10.52 L 87.61,10.24 L 81.73,9.33 L 78.73,9.15 L 72.75,8.99 M 10.88,48.08 L 10.42,48.38 L 10.26,48.83 L 10.01,49.92 L 10.02,50.75 L 10.20,52.99 L 10.59,54.21 L 11.03,54.82 L 12.08,56.09 L 12.97,56.89 L 13.92,57.73 L 14.51,58.22 L 15.75,59.25 L 16.50,59.86 L 17.87,60.96 L 18.51,61.44 L 19.75,62.37 L 20.28,62.74 L 21.26,63.42 L 21.61,63.63 L 22.22,63.96 L 22.33,63.96 L 22.25,63.52 L 21.80,62.82 L 21.41,62.30 L 20.53,61.17 L 19.96,60.48 L 18.74,59.04 L 18.04,58.25 L 14.25,53.53 L 13.30,52.14 L 12.97,51.58 L 12.43,50.56 L 12.35,50.25 L 11.65,48.54 L 11.12,48.03 M 83.48,23.18 L 83.67,23.63 L 84.13,24.16 L 84.51,24.52 L 85.34,25.27 L 85.86,25.70 L 86.98,26.60 L 87.61,27.07 L 90.12,29.16 L 91.60,30.63 L 92.26,31.43 L 93.53,33.08 L 94.08,33.98 L 95.15,35.84 L 95.61,36.87 L 96.50,39.00 L 96.89,40.19 L 97.63,42.64 L 97.95,44.01 L 98.56,46.85 L 98.82,48.42 L 99.33,51.69 L 99.55,53.50 L 100.14,57.57 L 100.34,58.75 L 100.43,59.22 L 100.61,60.07 L 100.68,60.33 L 101.00,61.23 L 101.18,61.47 L 101.54,61.80 L 101.67,61.66 L 101.81,61.24 L 101.85,60.74 L 101.84,60.40 L 101.76,58.77 L 101.63,57.66 L 101.33,55.28 L 101.12,53.91 L 100.66,51.06 L 100.39,49.57 L 99.82,46.55 L 99.52,45.09 L 98.89,42.20 L 98.58,40.90 L 97.96,38.43 L 97.67,37.46 L 97.10,35.70 L 96.85,35.19 L 95.77,33.49 L 94.74,32.18 L 94.12,31.48 L 91.37,28.58 L 89.89,27.26 L 88.42,25.97 L 87.73,25.42 L 86.38,24.38 L 85.80,24.00 L 84.72,23.34 L 84.32,23.20 L 83.63,23.03 Z", fill: "var(--color-shinigami-1, #373c42)" }), /* @__PURE__ */ P.createElement("path", { d: "M 60.00,113.44 L 59.11,113.24 L 56.98,112.64 L 55.89,112.32 L 53.58,111.52 L 52.43,111.11 L 50.20,110.21 L 47.27,108.88 L 46.42,108.45 L 44.57,107.31 L 43.63,106.70 L 41.66,105.28 L 39.68,103.80 L 35.80,100.37 L 34.87,99.50 L 33.14,97.76 L 32.30,96.90 L 30.85,95.23 L 30.17,94.41 L 29.08,92.91 L 27.97,90.93 L 27.69,90.26 L 27.16,89.26 L 26.90,88.82 L 26.42,88.28 L 26.20,88.06 L 25.81,87.92 L 25.64,87.90 L 25.37,88.14 L 25.25,88.30 L 25.13,88.88 L 25.08,89.20 L 25.13,90.07 L 25.18,90.54 L 25.42,91.67 L 26.04,93.61 L 26.25,94.15 L 26.48,95.01 L 26.56,95.42 L 26.55,96.10 L 26.52,96.42 L 26.25,97.01 L 25.55,97.88 L 25.08,98.35 L 24.33,98.77 L 24.14,98.82 L 23.75,98.75 L 23.55,98.68 L 23.11,98.33 L 22.88,98.12 L 22.33,97.46 L 22.05,97.09 L 21.36,96.09 L 21.00,95.54 L 20.13,94.14 L 18.57,91.56 L 17.99,90.61 L 17.06,88.85 L 16.62,88.00 L 15.97,86.43 L 15.67,85.66 L 15.29,84.23 L 15.13,83.52 L 15.03,82.20 L 15.01,81.54 L 15.17,80.28 L 15.29,79.66 L 15.73,78.44 L 15.99,77.83 L 16.70,76.60 L 18.07,74.73 L 18.92,73.70 L 20.15,71.58 L 20.40,71.08 L 20.70,70.22 L 20.82,69.25 L 20.78,69.01 L 20.18,68.23 L 19.81,67.81 L 18.68,66.76 L 18.06,66.22 L 16.55,65.04 L 14.00,63.25 L 12.79,62.46 L 10.83,61.17 L 9.92,60.56 L 8.48,59.57 L 7.82,59.10 L 6.84,58.31 L 6.41,57.92 L 5.81,57.22 L 5.55,56.87 L 5.25,56.15 L 5.13,55.79 L 5.07,54.96 L 5.05,54.52 L 5.14,53.49 L 5.36,51.58 L 5.60,49.55 L 6.34,45.88 L 6.75,44.14 L 7.75,41.25 L 8.01,40.59 L 8.55,39.48 L 8.82,38.95 L 9.39,38.14 L 9.67,37.77 L 10.25,37.29 L 11.09,37.00 L 11.74,37.00 L 12.54,37.55 L 13.05,39.25 L 13.06,39.81 L 13.50,41.59 L 13.76,42.53 L 14.45,44.43 L 14.62,44.88 L 14.96,45.64 L 15.12,45.99 L 15.41,46.49 L 15.54,46.70 L 15.73,46.83 L 15.88,46.50 L 15.88,46.36 L 15.82,45.76 L 15.78,45.41 L 15.65,44.47 L 15.04,41.00 L 14.90,40.28 L 14.73,39.04 L 14.67,38.46 L 14.66,37.47 L 14.67,37.01 L 14.85,36.25 L 14.96,35.90 L 15.34,35.34 L 15.55,35.08 L 16.16,34.69 L 16.49,34.52 L 17.35,34.28 L 17.81,34.18 L 18.93,34.06 L 20.95,34.00 L 22.12,34.00 L 23.70,33.92 L 24.40,33.83 L 25.36,33.35 L 25.81,33.03 L 26.59,31.84 L 26.80,31.49 L 27.25,30.59 L 28.04,28.92 L 28.40,28.14 L 29.43,26.45 L 29.99,25.59 L 31.35,23.81 L 32.77,22.01 L 36.34,18.39 L 38.19,16.62 L 42.21,13.43 L 43.22,12.69 L 45.23,11.36 L 48.17,9.69 L 49.63,8.96 L 52.64,7.68 L 54.17,7.07 L 57.30,6.04 L 60.45,5.07 L 66.93,3.90 L 68.55,3.67 L 71.80,3.41 L 73.42,3.32 L 76.64,3.33 L 78.24,3.37 L 81.39,3.65 L 86.00,4.39 L 87.58,4.72 L 91.04,5.77 L 92.80,6.34 L 96.47,7.79 L 98.32,8.55 L 101.98,10.26 L 103.79,11.15 L 107.23,13.01 L 108.89,13.96 L 111.88,15.85 L 113.30,16.79 L 115.62,18.59 L 116.67,19.46 L 118.10,21.03 L 118.39,21.41 L 118.77,22.09 L 119.00,23.01 L 119.00,23.60 L 118.74,24.35 L 118.55,24.66 L 117.77,24.88 L 117.29,24.92 L 115.79,24.61 L 115.36,24.50 L 114.33,24.19 L 112.50,23.58 L 111.04,23.08 L 107.62,22.27 L 105.89,21.91 L 102.56,21.46 L 101.78,21.37 L 100.37,21.28 L 99.70,21.25 L 98.60,21.28 L 98.10,21.31 L 97.43,21.48 L 97.00,21.88 L 97.00,22.19 L 97.27,22.67 L 97.92,23.00 L 98.14,23.00 L 98.94,23.44 L 99.39,23.73 L 100.57,24.65 L 101.19,25.15 L 102.62,26.43 L 103.36,27.11 L 104.92,28.63 L 106.49,30.18 L 109.51,33.50 L 110.22,34.31 L 111.45,35.83 L 112.90,37.84 L 113.95,39.48 L 115.79,43.12 L 116.66,44.99 L 118.09,48.98 L 118.75,51.00 L 119.73,55.18 L 120.64,61.50 L 120.76,63.04 L 120.77,66.11 L 120.74,67.63 L 120.44,70.66 L 120.25,72.17 L 119.66,75.15 L 119.33,76.62 L 118.46,79.53 L 117.99,80.96 L 116.85,83.77 L 116.25,85.17 L 114.87,87.86 L 114.15,89.20 L 112.53,91.77 L 111.69,93.04 L 109.85,95.46 L 108.90,96.65 L 106.86,98.91 L 105.81,100.01 L 103.58,102.09 L 102.44,103.10 L 100.02,104.97 L 98.80,105.87 L 96.23,107.52 L 94.92,108.32 L 92.20,109.72 L 90.83,110.40 L 87.97,111.55 L 86.53,112.09 L 83.57,112.96 L 79.00,113.94 L 77.98,114.10 L 76.17,114.36 L 75.30,114.49 L 73.72,114.66 L 72.19,114.81 L 69.47,114.84 L 68.11,114.80 L 65.23,114.44 L 64.47,114.32 L 62.80,114.01 L 61.94,113.85 M 84.07,110.41 L 85.88,109.88 L 89.31,108.53 L 91.00,107.80 L 94.25,106.00 L 95.86,105.03 L 99.03,102.73 L 103.77,98.65 L 105.06,97.43 L 107.37,94.91 L 108.48,93.64 L 110.42,91.00 L 111.34,89.66 L 112.93,86.88 L 113.68,85.47 L 114.91,82.52 L 115.49,81.02 L 116.39,77.90 L 116.79,76.31 L 117.35,72.97 L 117.59,71.28 L 117.83,67.72 L 117.84,62.10 L 117.79,61.03 L 117.70,59.17 L 117.64,58.28 L 117.52,56.73 L 117.37,55.24 L 116.90,52.78 L 116.62,51.58 L 115.74,49.14 L 115.48,48.50 L 114.87,47.09 L 113.76,44.71 L 112.70,42.49 L 110.07,38.27 L 108.67,36.21 L 105.44,32.41 L 103.76,30.58 L 100.07,27.34 L 94.15,23.27 L 88.90,20.27 L 92.07,19.64 L 93.66,19.32 L 97.00,19.03 L 98.70,18.95 L 102.28,19.13 L 104.11,19.28 L 107.94,19.93 L 114.00,21.43 L 114.50,21.58 L 114.85,21.50 L 114.92,21.40 L 114.54,20.90 L 114.27,20.61 L 113.29,19.80 L 112.74,19.36 L 111.31,18.34 L 109.79,17.27 L 105.99,14.91 L 100.27,11.80 L 98.04,10.73 L 93.92,9.10 L 91.89,8.36 L 87.92,7.31 L 85.92,6.86 L 81.77,6.32 L 74.96,6.01 L 72.43,6.01 L 67.74,6.37 L 65.45,6.61 L 61.10,7.49 L 58.96,8.00 L 54.79,9.44 L 48.58,12.26 L 46.62,13.29 L 42.64,16.11 L 40.68,17.60 L 37.02,21.00 L 35.27,22.74 L 32.39,26.28 L 31.74,27.15 L 30.66,28.84 L 29.44,31.25 L 29.01,32.29 L 28.32,33.75 L 27.98,34.39 L 27.32,35.18 L 26.97,35.52 L 26.14,35.85 L 24.50,36.01 L 23.67,36.01 L 21.69,36.21 L 19.13,36.66 L 18.60,36.80 L 17.87,37.12 L 17.56,37.31 L 17.24,37.88 L 17.12,38.22 L 17.11,39.26 L 17.36,41.61 L 17.44,42.20 L 17.75,43.74 L 17.93,44.55 L 18.39,46.36 L 20.02,51.71 L 20.45,52.91 L 21.15,54.88 L 21.47,55.81 L 21.96,57.28 L 22.18,57.95 L 22.46,58.95 L 22.58,59.39 L 22.67,59.96 L 22.68,60.19 L 22.57,60.36 L 22.49,60.40 L 22.18,60.21 L 22.00,60.08 L 21.50,59.57 L 20.54,58.50 L 20.13,58.03 L 19.23,56.86 L 18.77,56.25 L 17.81,54.86 L 16.84,53.43 L 14.93,50.27 L 14.01,48.69 L 12.49,45.72 L 12.15,45.02 L 11.61,43.77 L 11.05,42.21 L 10.89,41.63 L 10.60,41.08 L 10.45,40.92 L 10.13,41.36 L 10.04,41.53 L 9.84,42.11 L 9.73,42.43 L 9.49,43.31 L 9.36,43.79 L 9.07,44.99 L 8.56,47.20 L 8.32,48.26 L 7.93,50.27 L 7.75,51.24 L 7.51,52.92 L 7.40,53.70 L 7.32,54.88 L 7.41,55.86 L 7.49,55.99 L 8.05,56.47 L 8.39,56.74 L 9.37,57.43 L 13.25,59.87 L 14.59,60.65 L 16.85,62.10 L 17.91,62.80 L 19.60,64.13 L 20.38,64.78 L 21.54,66.03 L 22.05,66.65 L 22.69,67.87 L 22.94,68.48 L 23.08,69.71 L 23.08,70.33 L 22.73,71.63 L 22.50,72.29 L 21.68,73.69 L 19.96,75.96 L 19.15,76.91 L 17.87,79.15 L 17.60,79.70 L 17.24,80.70 L 17.01,81.96 L 17.01,82.23 L 17.24,83.13 L 17.39,83.64 L 17.86,84.90 L 18.38,86.22 L 19.81,89.28 L 20.17,90.03 L 20.91,91.44 L 21.27,92.11 L 21.94,93.26 L 22.27,93.79 L 22.80,94.53 L 23.37,95.00 L 23.42,95.00 L 23.47,94.63 L 23.49,94.38 L 23.48,93.60 L 23.27,90.25 L 23.20,89.45 L 23.17,88.04 L 23.18,87.37 L 23.31,86.20 L 23.40,85.64 L 23.69,84.70 L 24.30,83.55 L 24.65,83.09 L 25.18,82.59 L 25.43,82.42 L 25.94,82.65 L 26.21,82.87 L 26.92,83.99 L 27.12,84.34 L 27.59,85.23 L 28.44,86.89 L 29.10,88.19 L 30.64,90.70 L 31.44,91.93 L 33.25,94.30 L 34.19,95.46 L 36.25,97.67 L 37.31,98.75 L 39.59,100.77 L 40.75,101.76 L 43.23,103.58 L 44.49,104.47 L 47.14,106.06 L 48.48,106.83 L 51.28,108.18 L 55.61,109.91 L 56.53,110.22 L 58.63,110.75 L 59.72,111.00 L 62.08,111.38 L 64.48,111.72 L 69.69,111.96 L 72.30,112.01 L 77.38,111.65 L 78.61,111.52 L 80.92,111.15 L 82.04,110.94 M 43.48,99.07 L 42.39,98.24 L 40.22,96.22 L 39.15,95.16 L 37.08,92.81 L 36.07,91.62 L 34.22,89.15 L 33.33,87.91 L 31.82,85.51 L 31.11,84.34 L 30.05,82.19 L 29.58,81.17 L 29.08,79.48 L 28.91,78.71 L 29.09,77.67 L 29.18,77.46 L 29.51,77.19 L 30.25,77.04 L 30.34,77.05 L 30.69,77.27 L 30.88,77.41 L 31.41,77.89 L 31.97,78.43 L 33.51,80.12 L 34.33,81.04 L 36.22,83.29 L 37.18,84.45 L 39.19,86.97 L 40.19,88.24 L 42.10,90.75 L 43.02,91.97 L 44.60,94.17 L 45.32,95.21 L 46.34,96.82 L 46.55,97.18 L 46.83,97.72 L 47.00,98.27 L 47.00,98.64 L 47.35,99.56 L 48.18,100.78 L 48.51,101.11 L 48.88,101.75 L 48.91,102.42 L 48.85,102.49 L 48.34,102.30 L 48.03,102.16 L 47.13,101.63 L 46.63,101.32 L 45.44,100.52 L 44.83,100.08 M 49.82,100.75 L 49.48,100.13 L 49.02,98.89 L 48.84,97.59 L 48.91,97.34 L 48.78,96.78 L 48.27,96.09 L 48.21,96.05 L 47.95,95.78 L 47.80,95.62 L 47.37,95.12 L 46.90,94.58 L 45.53,92.93 L 44.79,92.03 L 43.03,89.83 L 40.12,86.15 L 38.93,84.63 L 37.03,82.06 L 36.16,80.85 L 34.92,78.94 L 34.39,78.07 L 33.83,76.85 L 33.78,75.82 L 33.94,75.66 L 34.33,75.59 L 34.54,75.60 L 35.04,75.85 L 35.30,76.01 L 35.88,76.58 L 36.85,77.79 L 37.42,78.59 L 38.11,80.07 L 38.24,80.41 L 38.34,80.93 L 38.22,81.45 L 38.02,81.64 L 38.15,81.86 L 39.00,81.83 L 39.46,81.73 L 40.06,82.06 L 40.36,83.24 L 40.32,83.73 L 40.57,84.29 L 41.27,84.33 L 41.57,84.15 L 41.81,84.20 L 41.58,84.87 L 41.36,85.22 L 41.42,85.65 L 42.18,85.77 L 42.54,85.70 L 43.07,86.09 L 43.36,87.24 L 43.32,87.73 L 43.57,88.29 L 44.27,88.33 L 44.60,88.13 L 44.82,88.23 L 44.49,89.10 L 44.27,89.48 L 44.16,89.87 L 44.50,89.76 L 44.73,89.55 L 45.43,89.58 L 45.80,89.66 L 46.59,90.11 L 46.97,90.38 L 47.58,91.07 L 48.00,92.18 L 48.00,92.44 L 47.63,92.63 L 46.75,92.40 L 46.39,92.19 L 46.09,92.14 L 46.33,92.59 L 46.56,92.84 L 47.19,93.23 L 48.08,93.50 L 48.34,93.50 L 48.73,93.72 L 49.01,94.24 L 49.01,94.34 L 49.17,94.81 L 49.28,95.08 L 49.61,95.81 L 51.01,98.52 L 51.58,99.53 L 52.32,100.92 L 52.62,101.53 L 52.88,102.27 L 52.95,102.58 L 52.76,102.87 L 52.04,103.00 L 51.77,103.00 L 50.99,102.34 L 50.59,101.93 M 36.41,78.50 L 35.96,77.81 L 35.12,76.73 L 34.93,76.51 L 34.63,76.20 L 34.33,76.00 L 34.20,76.00 L 34.21,76.31 L 34.26,76.51 L 34.56,77.15 L 34.74,77.50 L 35.27,78.35 L 36.28,79.75 L 36.71,80.31 L 37.26,80.86 L 37.49,81.04 L 37.62,80.92 L 37.63,80.79 L 37.34,80.09 L 37.14,79.68 M 92.48,101.06 L 92.60,100.67 L 92.63,99.89 L 92.60,99.49 L 92.31,98.63 L 92.11,98.18 L 91.47,97.17 L 90.08,95.43 L 89.29,94.54 L 88.17,93.07 L 87.69,92.40 L 87.19,91.37 L 87.02,90.92 L 87.13,90.35 L 88.00,90.00 L 88.27,90.00 L 88.72,89.63 L 89.05,88.75 L 89.06,88.58 L 89.56,88.03 L 89.87,87.73 L 90.89,86.99 L 91.46,86.60 L 92.86,85.76 L 95.25,84.50 L 96.25,84.01 L 97.95,83.05 L 98.75,82.57 L 100.06,81.56 L 100.67,81.04 L 101.64,79.88 L 102.08,79.27 L 102.75,77.86 L 103.04,77.11 L 103.43,75.35 L 103.60,74.42 L 103.76,72.22 L 103.82,71.06 L 103.79,68.32 L 103.58,63.50 L 103.45,61.39 L 103.14,57.49 L 102.98,55.59 L 102.58,52.10 L 102.37,50.40 L 101.89,47.29 L 101.64,45.79 L 101.07,43.06 L 100.77,41.74 L 100.11,39.37 L 99.76,38.23 L 99.00,36.20 L 98.61,35.24 L 97.75,33.55 L 96.35,31.37 L 95.77,30.61 L 94.97,29.46 L 94.64,28.95 L 94.30,28.28 L 94.19,28.01 L 94.28,27.80 L 94.37,27.75 L 94.86,27.99 L 95.15,28.16 L 96.00,28.81 L 96.47,29.19 L 97.65,30.26 L 98.28,30.84 L 99.77,32.29 L 102.30,34.87 L 103.91,36.56 L 106.66,40.15 L 107.96,41.97 L 110.08,45.79 L 111.06,47.73 L 112.54,51.74 L 113.20,53.76 L 114.03,57.91 L 114.36,60.00 L 114.54,64.26 L 114.54,66.40 L 114.05,70.71 L 113.73,72.87 L 112.57,77.19 L 110.08,83.65 L 109.71,84.44 L 108.74,86.14 L 108.22,87.01 L 107.01,88.81 L 105.75,90.62 L 102.79,94.20 L 101.28,95.93 L 98.22,98.88 L 97.47,99.55 L 96.06,100.67 L 94.12,101.94 L 93.59,102.22 L 92.88,102.55 L 92.58,102.67 L 92.27,102.65 L 92.16,102.59 L 92.18,102.17 L 92.22,101.91 M 53.00,96.50 L 52.65,96.07 L 52.24,95.26 L 52.21,94.45 L 52.35,94.31 L 52.95,94.55 L 54.00,95.50 L 54.35,95.93 L 54.76,96.74 L 54.79,97.55 L 54.65,97.69 L 54.05,97.45 L 53.73,97.26 M 45.69,87.17 L 44.56,85.73 L 42.68,83.34 L 41.79,82.22 L 40.37,80.38 L 39.71,79.53 L 38.68,78.17 L 38.21,77.54 L 37.53,76.57 L 37.22,76.12 L 36.83,75.46 L 36.66,75.16 L 36.49,74.73 L 36.58,73.88 L 36.65,73.75 L 36.63,73.30 L 36.59,73.04 L 36.35,72.39 L 35.05,70.06 L 34.72,69.61 L 34.25,68.80 L 34.04,68.42 L 33.80,67.76 L 33.71,67.45 L 33.70,66.98 L 33.98,66.51 L 34.12,66.42 L 34.38,65.94 L 34.50,65.65 L 34.71,64.84 L 35.02,61.69 L 35.02,60.69 L 35.10,59.09 L 35.15,58.36 L 35.31,57.31 L 35.40,56.85 L 35.63,56.33 L 35.75,56.14 L 36.02,56.15 L 36.17,56.22 L 36.48,56.76 L 36.63,57.09 L 36.96,58.13 L 37.13,58.72 L 37.46,60.27 L 37.94,63.15 L 38.13,64.46 L 38.58,66.83 L 38.81,67.97 L 39.36,70.04 L 39.65,71.05 L 40.34,72.87 L 40.70,73.76 L 41.54,75.38 L 42.43,76.95 L 44.78,79.67 L 49.36,83.45 L 50.71,84.37 L 52.77,86.15 L 53.70,87.02 L 54.89,88.62 L 55.37,89.39 L 55.65,90.75 L 54.98,92.42 L 54.42,92.98 L 53.29,93.43 L 52.99,93.49 L 52.37,93.41 L 52.05,93.34 L 51.37,93.00 L 51.01,92.80 L 50.23,92.20 L 49.83,91.86 L 48.93,90.97 L 48.47,90.49 L 47.43,89.30 L 46.89,88.67 M 62.98,84.62 L 61.70,83.87 L 59.56,82.56 L 58.55,81.94 L 56.90,80.82 L 56.12,80.27 L 54.89,79.24 L 54.32,78.73 L 53.43,77.71 L 53.03,77.20 L 52.44,76.11 L 52.17,75.54 L 51.80,74.29 L 51.63,73.64 L 51.41,72.14 L 51.18,69.53 L 51.10,68.22 L 51.08,66.10 L 51.10,65.10 L 51.34,63.33 L 51.49,62.45 L 52.05,60.69 L 53.30,57.65 L 54.08,55.95 L 56.16,52.93 L 57.26,51.50 L 59.73,49.24 L 60.35,48.73 L 61.61,47.91 L 62.24,47.54 L 63.48,47.00 L 64.09,46.78 L 65.25,46.57 L 66.88,46.66 L 68.00,46.92 L 70.30,47.79 L 71.46,48.28 L 73.73,49.52 L 74.85,50.18 L 76.97,51.72 L 79.83,54.29 L 83.15,57.75 L 80.72,60.18 L 80.00,60.91 L 78.84,62.89 L 78.32,63.93 L 77.66,66.18 L 77.40,67.30 L 77.34,69.32 L 77.37,69.79 L 77.56,70.61 L 78.06,71.58 L 78.23,71.77 L 78.78,72.13 L 79.09,72.30 L 79.86,72.58 L 82.53,73.00 L 83.17,73.00 L 84.27,72.83 L 84.79,72.71 L 85.76,72.23 L 86.24,71.95 L 87.22,71.08 L 88.87,69.25 L 89.25,68.78 L 89.88,68.02 L 90.17,67.67 L 90.64,67.13 L 91.07,66.64 L 91.55,66.31 L 91.75,66.24 L 91.90,66.69 L 91.97,68.17 L 91.98,68.90 L 92.32,70.16 L 93.13,71.21 L 93.34,71.28 L 93.55,71.64 L 93.61,71.84 L 93.56,72.44 L 93.45,73.08 L 92.58,74.83 L 92.05,75.75 L 90.56,77.72 L 87.89,80.44 L 87.45,80.81 L 86.27,81.66 L 85.64,82.09 L 84.18,83.02 L 82.66,83.96 L 79.28,85.83 L 78.44,86.27 L 76.84,87.07 L 76.06,87.45 L 74.65,88.08 L 73.98,88.36 L 72.90,88.75 L 71.76,89.00 L 71.58,89.00 L 70.66,88.65 L 70.13,88.43 L 68.64,87.71 L 67.85,87.31 L 65.99,86.32 L 65.03,85.79 M 80.76,83.38 L 81.59,82.92 L 83.03,82.06 L 83.72,81.64 L 84.90,80.82 L 86.04,80.02 L 87.66,78.41 L 88.39,77.59 L 89.38,75.76 L 90.38,72.50 L 90.53,71.76 L 90.70,70.85 L 90.75,70.49 L 90.66,70.36 L 90.58,70.40 L 90.16,71.09 L 89.07,73.07 L 88.58,73.97 L 87.17,75.72 L 86.39,76.60 L 84.33,78.34 L 83.21,79.22 L 80.44,81.00 L 75.40,83.79 L 71.35,85.86 L 65.37,82.08 L 63.73,81.04 L 60.18,78.26 L 59.33,77.57 L 57.84,76.21 L 56.08,74.40 L 52.78,70.50 L 53.43,73.50 L 53.62,74.36 L 54.41,75.94 L 54.89,76.73 L 56.46,78.34 L 56.92,78.75 L 58.02,79.63 L 58.61,80.08 L 60.00,81.04 L 60.73,81.54 L 62.43,82.62 L 65.39,84.41 L 66.22,84.91 L 67.60,85.71 L 68.25,86.08 L 69.35,86.62 L 69.88,86.87 L 70.83,87.15 L 71.30,87.25 L 72.22,87.26 L 72.70,87.23 L 73.72,86.95 L 74.26,86.78 L 75.52,86.21 L 76.19,85.89 L 77.80,85.03 L 78.67,84.56 M 65.87,71.24 L 66.18,70.66 L 66.45,69.35 L 66.53,68.67 L 66.40,67.23 L 66.28,66.50 L 65.80,65.03 L 65.52,64.30 L 64.75,62.89 L 64.34,62.21 L 63.34,60.98 L 62.82,60.39 L 61.66,59.42 L 61.07,58.98 L 59.80,58.38 L 57.85,58.00 L 57.20,58.00 L 56.08,58.34 L 55.56,58.56 L 54.69,59.28 L 54.29,59.68 L 53.69,60.69 L 53.42,61.23 L 53.11,62.45 L 52.98,63.07 L 52.97,64.42 L 53.00,65.10 L 53.29,66.48 L 53.48,67.16 L 54.11,68.50 L 55.45,70.35 L 56.19,71.16 L 58.12,72.24 L 59.12,72.70 L 61.21,73.06 L 62.23,73.14 L 64.02,72.74 L 64.43,72.59 L 65.11,72.14 L 65.42,71.89 M 18.04,81.83 L 18.04,81.60 L 18.23,80.93 L 18.36,80.57 L 18.78,79.73 L 20.62,77.05 L 20.98,76.61 L 21.95,75.63 L 22.46,75.13 L 23.63,74.09 L 24.84,73.05 L 27.41,71.10 L 28.03,70.65 L 29.17,69.88 L 29.72,69.53 L 30.63,69.01 L 31.05,68.79 L 31.63,68.61 L 32.00,68.78 L 32.00,68.90 L 31.60,69.38 L 31.35,69.65 L 30.53,70.36 L 30.07,70.73 L 28.93,71.58 L 26.98,72.92 L 25.55,73.84 L 22.85,76.29 L 22.22,76.91 L 21.18,78.13 L 20.03,79.83 L 19.76,80.34 L 19.27,81.13 L 19.03,81.49 L 18.64,81.94 L 18.46,82.12 L 18.21,82.19 L 18.11,82.18 M 79.00,70.09 L 79.00,69.91 L 79.26,69.41 L 79.43,69.15 L 79.96,68.53 L 80.55,67.89 L 82.16,66.55 L 82.99,65.90 L 84.56,64.95 L 84.91,64.77 L 85.50,64.56 L 86.10,64.56 L 86.35,64.72 L 86.56,65.17 L 86.61,65.42 L 86.42,66.10 L 86.26,66.47 L 85.64,67.43 L 84.19,69.25 L 83.80,69.71 L 82.72,70.37 L 82.16,70.66 L 81.01,70.95 L 80.46,71.04 L 79.59,70.88 L 79.23,70.74 M 39.75,64.12 L 39.59,63.41 L 39.35,61.75 L 39.25,60.88 L 39.11,59.00 L 39.00,57.08 L 39.07,52.94 L 39.15,50.88 L 39.59,47.01 L 39.72,46.09 L 40.05,44.43 L 40.62,42.28 L 41.24,40.48 L 42.85,37.13 L 43.72,35.50 L 45.90,32.44 L 47.06,30.93 L 49.87,28.08 L 54.85,23.93 L 55.66,23.34 L 57.00,22.36 L 57.64,21.91 L 58.73,21.17 L 59.78,20.49 L 61.48,19.72 L 62.33,19.41 L 64.20,19.18 L 64.71,19.14 L 65.90,19.12 L 68.00,19.13 L 74.50,19.24 L 69.75,20.03 L 68.45,20.25 L 65.41,21.21 L 64.68,21.47 L 63.33,22.04 L 61.65,22.91 L 61.23,23.17 L 60.23,23.91 L 59.71,24.31 L 58.55,25.30 L 57.35,26.35 L 54.72,28.93 L 53.40,30.26 L 50.86,33.06 L 47.69,37.00 L 47.40,37.40 L 46.96,37.95 L 46.76,38.18 L 46.50,38.39 L 46.39,38.44 L 46.32,38.30 L 46.43,37.70 L 46.54,37.33 L 46.64,36.81 L 46.67,36.59 L 46.62,36.35 L 46.57,36.27 L 46.39,36.29 L 46.28,36.33 L 46.00,36.59 L 45.69,36.90 L 44.84,38.14 L 43.42,40.73 L 43.10,41.40 L 42.56,43.10 L 42.31,44.02 L 41.90,46.31 L 41.71,47.54 L 41.40,50.54 L 41.05,56.00 L 41.00,57.05 L 40.90,58.87 L 40.85,59.74 L 40.75,61.18 L 40.70,61.85 L 40.61,62.93 L 40.56,63.43 L 40.45,64.16 L 40.40,64.48 L 40.30,64.87 L 40.24,65.02 L 40.13,65.09 L 40.07,65.08 L 39.95,64.83 L 39.88,64.67 M 28.61,63.42 L 28.38,62.82 L 28.11,61.43 L 28.00,60.71 L 27.95,59.14 L 27.96,57.54 L 28.53,54.25 L 28.71,53.45 L 29.19,51.97 L 29.45,51.25 L 30.05,50.01 L 30.37,49.42 L 31.08,48.52 L 32.23,47.67 L 32.40,47.60 L 32.52,47.46 L 32.54,47.40 L 32.36,47.28 L 30.90,47.08 L 29.92,47.05 L 28.27,47.58 L 27.51,47.94 L 26.37,49.14 L 25.87,49.81 L 25.34,51.56 L 25.33,54.64 L 25.44,55.32 L 25.53,56.31 L 25.56,56.74 L 25.50,57.27 L 25.45,57.48 L 25.27,57.57 L 25.16,57.57 L 24.88,57.27 L 24.73,57.07 L 24.37,56.40 L 24.18,56.02 L 23.77,55.01 L 23.56,54.47 L 23.12,53.16 L 22.46,50.90 L 22.15,49.73 L 21.66,47.78 L 21.44,46.87 L 21.15,45.40 L 21.03,44.71 L 20.96,43.65 L 20.96,43.16 L 21.15,42.43 L 21.27,42.11 L 21.73,41.66 L 22.00,41.47 L 22.76,41.23 L 23.18,41.13 L 24.27,41.04 L 26.29,41.00 L 31.59,41.00 L 32.75,36.63 L 32.94,35.92 L 33.53,34.49 L 33.86,33.78 L 34.71,32.35 L 35.61,30.93 L 38.11,28.15 L 39.45,26.78 L 42.70,24.19 L 44.39,22.92 L 48.22,20.59 L 50.18,19.48 L 54.41,17.53 L 56.56,16.61 L 61.02,15.13 L 63.27,14.46 L 67.79,13.55 L 74.46,12.93 L 75.56,12.92 L 77.04,12.86 L 77.66,12.82 L 78.24,12.69 L 78.44,12.60 L 78.25,12.34 L 77.21,11.76 L 76.82,11.57 L 75.63,11.36 L 74.98,11.27 L 73.36,11.25 L 72.50,11.26 L 70.53,11.42 L 69.51,11.52 L 67.31,11.83 L 65.07,12.19 L 60.33,13.30 L 53.69,15.47 L 52.85,15.81 L 51.29,16.39 L 50.55,16.67 L 49.27,17.09 L 48.68,17.28 L 47.83,17.49 L 47.20,17.53 L 47.11,17.44 L 47.40,17.10 L 47.62,16.90 L 48.44,16.38 L 48.90,16.10 L 50.13,15.45 L 50.78,15.11 L 52.30,14.39 L 53.88,13.66 L 57.44,12.21 L 62.47,10.47 L 63.56,10.15 L 66.00,9.68 L 67.26,9.47 L 69.98,9.20 L 72.75,8.99 L 78.73,9.15 L 81.73,9.33 L 87.61,10.24 L 89.04,10.52 L 91.75,11.20 L 95.50,12.42 L 96.46,12.78 L 98.28,13.52 L 99.15,13.88 L 100.67,14.53 L 101.37,14.85 L 102.41,15.35 L 103.26,15.86 L 103.32,15.92 L 103.19,16.01 L 103.09,16.05 L 102.67,16.13 L 102.19,16.20 L 100.50,16.28 L 99.54,16.32 L 97.08,16.32 L 92.76,16.22 L 91.22,16.17 L 87.60,16.14 L 85.74,16.14 L 81.86,16.21 L 79.93,16.25 L 76.24,16.42 L 71.46,16.75 L 70.21,16.86 L 68.15,17.06 L 67.18,17.16 L 65.57,17.37 L 64.81,17.48 L 63.52,17.73 L 62.91,17.87 L 61.81,18.21 L 60.74,18.60 L 58.62,19.83 L 58.05,20.20 L 56.76,21.11 L 54.46,22.78 L 52.54,24.18 L 48.72,27.43 L 47.83,28.21 L 46.33,29.66 L 44.69,31.45 L 43.97,32.38 L 42.44,34.78 L 41.68,36.03 L 40.29,38.66 L 39.64,39.96 L 38.67,42.25 L 38.47,42.78 L 38.20,43.68 L 38.02,44.71 L 38.02,44.87 L 37.82,45.46 L 37.69,45.79 L 37.28,46.63 L 35.51,49.57 L 35.17,50.08 L 34.45,51.46 L 34.10,52.20 L 33.40,53.89 L 31.81,59.12 L 31.66,59.86 L 31.37,61.13 L 31.22,61.73 L 30.95,62.71 L 30.81,63.16 L 30.55,63.86 L 30.42,64.17 L 30.16,64.58 L 30.03,64.75 L 29.78,64.89 L 29.65,64.92 L 29.40,64.79 L 29.14,64.59 M 16.50,59.86 L 15.75,59.25 L 14.51,58.22 L 13.92,57.73 L 12.97,56.89 L 12.08,56.09 L 11.03,54.82 L 10.59,54.21 L 10.20,52.99 L 10.02,50.75 L 10.01,49.92 L 10.26,48.83 L 10.42,48.38 L 10.88,48.08 L 11.12,48.03 L 11.65,48.54 L 12.35,50.25 L 12.43,50.56 L 12.97,51.58 L 13.30,52.14 L 14.25,53.53 L 18.04,58.25 L 18.74,59.04 L 19.96,60.48 L 20.53,61.17 L 21.41,62.30 L 21.80,62.82 L 22.25,63.52 L 22.33,63.96 L 22.22,63.96 L 21.61,63.63 L 21.26,63.42 L 20.28,62.74 L 19.75,62.37 L 18.51,61.44 L 17.87,60.96 M 100.68,60.33 L 100.61,60.07 L 100.43,59.22 L 100.34,58.75 L 100.14,57.57 L 99.55,53.50 L 99.33,51.69 L 98.82,48.42 L 98.56,46.85 L 97.95,44.01 L 97.63,42.64 L 96.89,40.19 L 96.50,39.00 L 95.61,36.87 L 95.15,35.84 L 94.08,33.98 L 93.53,33.08 L 92.26,31.43 L 91.60,30.63 L 90.12,29.16 L 87.61,27.07 L 86.98,26.60 L 85.86,25.70 L 85.34,25.27 L 84.51,24.52 L 84.13,24.16 L 83.67,23.63 L 83.48,23.18 L 83.63,23.03 L 84.32,23.20 L 84.72,23.34 L 85.80,24.00 L 86.38,24.38 L 87.73,25.42 L 88.42,25.97 L 89.89,27.26 L 91.37,28.58 L 94.12,31.48 L 94.74,32.18 L 95.77,33.49 L 96.85,35.19 L 97.10,35.70 L 97.67,37.46 L 97.96,38.43 L 98.58,40.90 L 98.89,42.20 L 99.52,45.09 L 99.82,46.55 L 100.39,49.57 L 100.66,51.06 L 101.12,53.91 L 101.33,55.28 L 101.63,57.66 L 101.76,58.77 L 101.84,60.40 L 101.85,60.74 L 101.81,61.24 L 101.67,61.66 L 101.54,61.80 L 101.18,61.47 L 101.00,61.23 M 59.00,69.00 L 58.46,68.46 L 57.72,67.52 L 57.40,67.07 L 57.11,66.30 L 57.02,65.94 L 57.16,65.32 L 57.88,64.57 L 58.03,64.48 L 58.50,64.50 L 58.75,64.54 L 59.35,64.79 L 59.98,65.09 L 61.40,66.13 L 62.09,66.70 L 63.22,67.95 L 63.45,68.25 L 63.79,68.82 L 64.00,69.57 L 64.00,70.09 L 63.55,70.68 L 63.26,70.90 L 62.37,70.93 L 61.89,70.88 L 60.76,70.36 L 60.18,70.04 Z", fill: "var(--color-shinigami-2, #808080)" }))), $w = (o) => /* @__PURE__ */ P.createElement("svg", { width: 25, height: 20, viewBox: "0 0 25 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ P.createElement("g", { clipPath: "url(#clip0_13131_1211)" }, /* @__PURE__ */ P.createElement("path", { d: "M20.8302 2.22784C19.2563 1.49141 17.5912 0.968141 15.8789 0.671875C15.6656 1.05747 15.4165 1.57609 15.2446 1.98869C13.3985 1.71106 11.5693 1.71106 9.75715 1.98869C9.5854 1.57619 9.33059 1.05747 9.11534 0.671875C7.40139 0.96827 5.73486 1.49287 4.16018 2.23169C1.02668 6.96691 0.177212 11.5844 0.6019 16.1365C2.68024 17.6885 4.69437 18.6314 6.67456 19.2483C7.16672 18.5716 7.60175 17.8551 7.97515 17.1063C7.26417 16.8356 6.57877 16.502 5.92709 16.1095C6.09857 15.9824 6.26603 15.8499 6.42921 15.7123C10.3781 17.5593 14.6689 17.5593 18.5708 15.7123C18.7347 15.849 18.9021 15.9814 19.0728 16.1095C18.4201 16.5031 17.7334 16.8373 17.021 17.1082C17.3966 17.8601 17.8308 18.5773 18.3216 19.2502C20.3036 18.6333 22.3196 17.6905 24.398 16.1365C24.8964 10.8595 23.5467 6.28441 20.8302 2.22784ZM8.51318 13.337C7.32771 13.337 6.35553 12.2303 6.35553 10.8827C6.35553 9.535 7.30699 8.42641 8.51318 8.42641C9.71937 8.42641 10.6916 9.53303 10.6708 10.8827C10.6727 12.2303 9.71946 13.337 8.51318 13.337ZM16.4867 13.337C15.3012 13.337 14.3291 12.2303 14.3291 10.8827C14.3291 9.535 15.2805 8.42641 16.4867 8.42641C17.693 8.42641 18.6651 9.53303 18.6444 10.8827C18.6444 12.2303 17.693 13.337 16.4867 13.337Z", fill: "#5865F2" })), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", { id: "clip0_13131_1211" }, /* @__PURE__ */ P.createElement("rect", { width: 24, height: 18.6562, fill: "white", transform: "translate(0.5 0.671875)" })))), Hw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  discord: $w,
  facebook: Aw,
  github: _w,
  google: Uw,
  qq: Vw,
  shinigami: zw,
  twitter: Pw,
  weibo: Mw
}, Symbol.toStringTag, { value: "Module" })), fd = {}, Fb = (o) => {
  const r = document.querySelector(`script[src="${o}"]`);
  if (r)
    return fd[o] = {
      loading: !1,
      error: null,
      scriptEl: r
    };
};
function F3({
  src: o,
  checkForExisting: r = !1,
  ...s
}) {
  let l = o ? fd[o] : void 0;
  !l && r && o && _b && (l = Fb(o));
  const [d, f] = P.useState(
    l ? l.loading : !!o
  ), [c, y] = P.useState(l ? l.error : null), [h, p] = P.useState(!1);
  return P.useEffect(() => {
    if (!_b || !o || h || c) return;
    l = fd[o], !l && r && (l = Fb(o));
    let v;
    l ? v = l.scriptEl : (v = document.createElement("script"), v.src = o, Object.keys(s).forEach((N) => {
      v[N] === void 0 ? v.setAttribute(N, s[N]) : v[N] = s[N];
    }), l = fd[o] = {
      loading: !0,
      error: null,
      scriptEl: v
    });
    const L = () => {
      l && (l.loading = !1), f(!1), p(!0);
    }, x = (N) => {
      l && (l.error = N), y(N);
    };
    return v.addEventListener("load", L), v.addEventListener("error", x), document.body.appendChild(v), () => {
      v.removeEventListener("load", L), v.removeEventListener("error", x);
    };
  }, [o]), [d, c];
}
const _b = typeof window < "u" && typeof window.document < "u";
function Bw({
  sitekey: o,
  hideDefaultBadge: r = !1,
  checkForExisting: s = !0
}) {
  const [l, d] = P.useState();
  return P.useEffect(() => {
    Iw && r && Yw(".grecaptcha-badge { visibility: hidden; }");
  }, [r]), F3({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${o}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    }),
    checkForExisting: s
  }), P.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      d(window.grecaptcha);
    });
  }, []), (f) => new Promise((c, y) => {
    l ? c(l.execute(o, { action: f })) : y(new Error("Recaptcha script not available"));
  });
}
const Iw = typeof window < "u" && typeof window.document < "u", Yw = (o) => {
  const r = document.createElement("style");
  document.head.appendChild(r);
  const s = r.sheet;
  s && s.insertRule(o, s.cssRules.length);
};
function Kw({ sitekey: o, checkForExisting: r = !0 }) {
  const [s, l] = P.useState();
  return F3({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      l(window.turnstile);
    }),
    async: !1,
    checkForExisting: r
  }), P.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      l(window.turnstile);
    });
  }, []), (d) => new Promise((f, c) => {
    if (!s)
      return c(new Error("Turnstile script not available"));
    s.render(".captcha-container", {
      sitekey: o,
      action: d,
      callback: f
    });
  });
}
function _3(o) {
  const r = Bw(o), s = Kw(o);
  return window.turnstileKey ? s : window.recaptchaV3Key ? r : () => {
  };
}
const Ww = {
  type: "logger",
  log(o) {
    this.output("log", o);
  },
  warn(o) {
    this.output("warn", o);
  },
  error(o) {
    this.output("error", o);
  },
  output(o, r) {
    console && console[o] && console[o].apply(console, r);
  }
};
class gd {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, s);
  }
  init(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = s.prefix || "i18next:", this.logger = r || Ww, this.options = s, this.debug = s.debug;
  }
  log() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "log", "", !0);
  }
  warn() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "warn", "", !0);
  }
  error() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "error", "");
  }
  deprecate() {
    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
      s[l] = arguments[l];
    return this.forward(s, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(r, s, l, d) {
    return d && !this.debug ? null : (typeof r[0] == "string" && (r[0] = `${l}${this.prefix} ${r[0]}`), this.logger[s](r));
  }
  create(r) {
    return new gd(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options
    });
  }
  clone(r) {
    return r = r || this.options, r.prefix = r.prefix || this.prefix, new gd(this.logger, r);
  }
}
var sr = new gd();
class Ed {
  constructor() {
    this.observers = {};
  }
  on(r, s) {
    return r.split(" ").forEach((l) => {
      this.observers[l] || (this.observers[l] = /* @__PURE__ */ new Map());
      const d = this.observers[l].get(s) || 0;
      this.observers[l].set(s, d + 1);
    }), this;
  }
  off(r, s) {
    if (this.observers[r]) {
      if (!s) {
        delete this.observers[r];
        return;
      }
      this.observers[r].delete(s);
    }
  }
  emit(r) {
    for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
      l[d - 1] = arguments[d];
    this.observers[r] && Array.from(this.observers[r].entries()).forEach((c) => {
      let [y, h] = c;
      for (let p = 0; p < h; p++)
        y(...l);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [y, h] = c;
      for (let p = 0; p < h; p++)
        y.apply(y, [r, ...l]);
    });
  }
}
function xu() {
  let o, r;
  const s = new Promise((l, d) => {
    o = l, r = d;
  });
  return s.resolve = o, s.reject = r, s;
}
function Pb(o) {
  return o == null ? "" : "" + o;
}
function Gw(o, r, s) {
  o.forEach((l) => {
    r[l] && (s[l] = r[l]);
  });
}
const qw = /###/g;
function Ru(o, r, s) {
  function l(y) {
    return y && y.indexOf("###") > -1 ? y.replace(qw, ".") : y;
  }
  function d() {
    return !o || typeof o == "string";
  }
  const f = typeof r != "string" ? r : r.split(".");
  let c = 0;
  for (; c < f.length - 1; ) {
    if (d()) return {};
    const y = l(f[c]);
    !o[y] && s && (o[y] = new s()), Object.prototype.hasOwnProperty.call(o, y) ? o = o[y] : o = {}, ++c;
  }
  return d() ? {} : {
    obj: o,
    k: l(f[c])
  };
}
function Ab(o, r, s) {
  const {
    obj: l,
    k: d
  } = Ru(o, r, Object);
  if (l !== void 0 || r.length === 1) {
    l[d] = s;
    return;
  }
  let f = r[r.length - 1], c = r.slice(0, r.length - 1), y = Ru(o, c, Object);
  for (; y.obj === void 0 && c.length; )
    f = `${c[c.length - 1]}.${f}`, c = c.slice(0, c.length - 1), y = Ru(o, c, Object), y && y.obj && typeof y.obj[`${y.k}.${f}`] < "u" && (y.obj = void 0);
  y.obj[`${y.k}.${f}`] = s;
}
function Qw(o, r, s, l) {
  const {
    obj: d,
    k: f
  } = Ru(o, r, Object);
  d[f] = d[f] || [], d[f].push(s);
}
function yd(o, r) {
  const {
    obj: s,
    k: l
  } = Ru(o, r);
  if (s)
    return s[l];
}
function Xw(o, r, s) {
  const l = yd(o, s);
  return l !== void 0 ? l : yd(r, s);
}
function P3(o, r, s) {
  for (const l in r)
    l !== "__proto__" && l !== "constructor" && (l in o ? typeof o[l] == "string" || o[l] instanceof String || typeof r[l] == "string" || r[l] instanceof String ? s && (o[l] = r[l]) : P3(o[l], r[l], s) : o[l] = r[l]);
  return o;
}
function ys(o) {
  return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Jw = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Zw(o) {
  return typeof o == "string" ? o.replace(/[&<>"'\/]/g, (r) => Jw[r]) : o;
}
class ej {
  constructor(r) {
    this.capacity = r, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(r) {
    const s = this.regExpMap.get(r);
    if (s !== void 0)
      return s;
    const l = new RegExp(r);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(r, l), this.regExpQueue.push(r), l;
  }
}
const tj = [" ", ",", "?", "!", ";"], nj = new ej(20);
function aj(o, r, s) {
  r = r || "", s = s || "";
  const l = tj.filter((c) => r.indexOf(c) < 0 && s.indexOf(c) < 0);
  if (l.length === 0) return !0;
  const d = nj.getRegExp(`(${l.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let f = !d.test(o);
  if (!f) {
    const c = o.indexOf(s);
    c > 0 && !d.test(o.substring(0, c)) && (f = !0);
  }
  return f;
}
function Iv(o, r) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!o) return;
  if (o[r]) return o[r];
  const l = r.split(s);
  let d = o;
  for (let f = 0; f < l.length; ) {
    if (!d || typeof d != "object")
      return;
    let c, y = "";
    for (let h = f; h < l.length; ++h)
      if (h !== f && (y += s), y += l[h], c = d[y], c !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof c) > -1 && h < l.length - 1)
          continue;
        f += h - f + 1;
        break;
      }
    d = c;
  }
  return d;
}
function Ld(o) {
  return o && o.indexOf("_") > 0 ? o.replace("_", "-") : o;
}
class Mb extends Ed {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = r || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
  }
  removeNamespaces(r) {
    const s = this.options.ns.indexOf(r);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const f = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator, c = d.ignoreJSONStructure !== void 0 ? d.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let y;
    r.indexOf(".") > -1 ? y = r.split(".") : (y = [r, s], l && (Array.isArray(l) ? y.push(...l) : typeof l == "string" && f ? y.push(...l.split(f)) : y.push(l)));
    const h = yd(this.data, y);
    return !h && !s && !l && r.indexOf(".") > -1 && (r = y[0], s = y[1], l = y.slice(2).join(".")), h || !c || typeof l != "string" ? h : Iv(this.data && this.data[r] && this.data[r][s], l, f);
  }
  addResource(r, s, l, d) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let y = [r, s];
    l && (y = y.concat(c ? l.split(c) : l)), r.indexOf(".") > -1 && (y = r.split("."), d = s, s = y[1]), this.addNamespaces(s), Ab(this.data, y, d), f.silent || this.emit("added", r, s, l, d);
  }
  addResources(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const f in l)
      (typeof l[f] == "string" || Array.isArray(l[f])) && this.addResource(r, s, f, l[f], {
        silent: !0
      });
    d.silent || this.emit("added", r, s, l);
  }
  addResourceBundle(r, s, l, d, f) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, y = [r, s];
    r.indexOf(".") > -1 && (y = r.split("."), d = l, l = s, s = y[1]), this.addNamespaces(s);
    let h = yd(this.data, y) || {};
    c.skipCopy || (l = JSON.parse(JSON.stringify(l))), d ? P3(h, l, f) : h = {
      ...h,
      ...l
    }, Ab(this.data, y, h), c.silent || this.emit("added", r, s, l);
  }
  removeResourceBundle(r, s) {
    this.hasResourceBundle(r, s) && delete this.data[r][s], this.removeNamespaces(s), this.emit("removed", r, s);
  }
  hasResourceBundle(r, s) {
    return this.getResource(r, s) !== void 0;
  }
  getResourceBundle(r, s) {
    return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(r, s)
    } : this.getResource(r, s);
  }
  getDataByLanguage(r) {
    return this.data[r];
  }
  hasLanguageSomeTranslations(r) {
    const s = this.getDataByLanguage(r);
    return !!(s && Object.keys(s) || []).find((d) => s[d] && Object.keys(s[d]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var A3 = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, r, s, l, d) {
    return o.forEach((f) => {
      this.processors[f] && (r = this.processors[f].process(r, s, l, d));
    }), r;
  }
};
const Vb = {};
class bd extends Ed {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Gw(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = sr.create("translator");
  }
  changeLanguage(r) {
    r && (this.language = r);
  }
  exists(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (r == null)
      return !1;
    const l = this.resolve(r, s);
    return l && l.res !== void 0;
  }
  extractFromKey(r, s) {
    let l = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ":");
    const d = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let f = s.ns || this.options.defaultNS || [];
    const c = l && r.indexOf(l) > -1, y = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !aj(r, l, d);
    if (c && !y) {
      const h = r.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0)
        return {
          key: r,
          namespaces: f
        };
      const p = r.split(l);
      (l !== d || l === d && this.options.ns.indexOf(p[0]) > -1) && (f = p.shift()), r = p.join(d);
    }
    return typeof f == "string" && (f = [f]), {
      key: r,
      namespaces: f
    };
  }
  translate(r, s, l) {
    if (typeof s != "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), typeof s == "object" && (s = {
      ...s
    }), s || (s = {}), r == null) return "";
    Array.isArray(r) || (r = [String(r)]);
    const d = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, f = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, {
      key: c,
      namespaces: y
    } = this.extractFromKey(r[r.length - 1], s), h = y[y.length - 1], p = s.lng || this.language, v = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p && p.toLowerCase() === "cimode") {
      if (v) {
        const w = s.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${h}${w}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: p,
          usedNS: h,
          usedParams: this.getUsedParamsDetails(s)
        } : `${h}${w}${c}`;
      }
      return d ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: p,
        usedNS: h,
        usedParams: this.getUsedParamsDetails(s)
      } : c;
    }
    const L = this.resolve(r, s);
    let x = L && L.res;
    const N = L && L.usedKey || c, j = L && L.exactUsedKey || c, M = Object.prototype.toString.apply(x), k = ["[object Number]", "[object Function]", "[object RegExp]"], z = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, _ = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (_ && x && (typeof x != "string" && typeof x != "boolean" && typeof x != "number") && k.indexOf(M) < 0 && !(typeof z == "string" && Array.isArray(x))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(N, x, {
          ...s,
          ns: y
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return d ? (L.res = w, L.usedParams = this.getUsedParamsDetails(s), L) : w;
      }
      if (f) {
        const w = Array.isArray(x), A = w ? [] : {}, Y = w ? j : N;
        for (const X in x)
          if (Object.prototype.hasOwnProperty.call(x, X)) {
            const ne = `${Y}${f}${X}`;
            A[X] = this.translate(ne, {
              ...s,
              joinArrays: !1,
              ns: y
            }), A[X] === ne && (A[X] = x[X]);
          }
        x = A;
      }
    } else if (_ && typeof z == "string" && Array.isArray(x))
      x = x.join(z), x && (x = this.extendTranslation(x, r, s, l));
    else {
      let w = !1, A = !1;
      const Y = s.count !== void 0 && typeof s.count != "string", X = bd.hasDefaultValue(s), ne = Y ? this.pluralResolver.getSuffix(p, s.count, s) : "", fe = s.ordinal && Y ? this.pluralResolver.getSuffix(p, s.count, {
        ordinal: !1
      }) : "", le = Y && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), pe = le && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${ne}`] || s[`defaultValue${fe}`] || s.defaultValue;
      !this.isValidLookup(x) && X && (w = !0, x = pe), this.isValidLookup(x) || (A = !0, x = c);
      const ve = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && A ? void 0 : x, Ee = X && pe !== x && this.options.updateMissing;
      if (A || w || Ee) {
        if (this.logger.log(Ee ? "updateKey" : "missingKey", p, h, c, Ee ? pe : x), f) {
          const Je = this.resolve(c, {
            ...s,
            keySeparator: !1
          });
          Je && Je.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Re = [];
        const tt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && tt && tt[0])
          for (let Je = 0; Je < tt.length; Je++)
            Re.push(tt[Je]);
        else this.options.saveMissingTo === "all" ? Re = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Re.push(s.lng || this.language);
        const we = (Je, kt, Ge) => {
          const pn = X && Ge !== x ? Ge : ve;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(Je, h, kt, pn, Ee, s) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(Je, h, kt, pn, Ee, s), this.emit("missingKey", Je, h, kt, x);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && Y ? Re.forEach((Je) => {
          const kt = this.pluralResolver.getSuffixes(Je, s);
          le && s[`defaultValue${this.options.pluralSeparator}zero`] && kt.indexOf(`${this.options.pluralSeparator}zero`) < 0 && kt.push(`${this.options.pluralSeparator}zero`), kt.forEach((Ge) => {
            we([Je], c + Ge, s[`defaultValue${Ge}`] || pe);
          });
        }) : we(Re, c, pe));
      }
      x = this.extendTranslation(x, r, s, L, l), A && x === c && this.options.appendNamespaceToMissingKey && (x = `${h}:${c}`), (A || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? x = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}:${c}` : c, w ? x : void 0) : x = this.options.parseMissingKeyHandler(x));
    }
    return d ? (L.res = x, L.usedParams = this.getUsedParamsDetails(s), L) : x;
  }
  extendTranslation(r, s, l, d, f) {
    var c = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      r = this.i18nFormat.parse(r, {
        ...this.options.interpolation.defaultVariables,
        ...l
      }, l.lng || this.language || d.usedLng, d.usedNS, d.usedKey, {
        resolved: d
      });
    else if (!l.skipInterpolation) {
      l.interpolation && this.interpolator.init({
        ...l,
        interpolation: {
          ...this.options.interpolation,
          ...l.interpolation
        }
      });
      const p = typeof r == "string" && (l && l.interpolation && l.interpolation.skipOnVariables !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let v;
      if (p) {
        const x = r.match(this.interpolator.nestingRegexp);
        v = x && x.length;
      }
      let L = l.replace && typeof l.replace != "string" ? l.replace : l;
      if (this.options.interpolation.defaultVariables && (L = {
        ...this.options.interpolation.defaultVariables,
        ...L
      }), r = this.interpolator.interpolate(r, L, l.lng || this.language, l), p) {
        const x = r.match(this.interpolator.nestingRegexp), N = x && x.length;
        v < N && (l.nest = !1);
      }
      !l.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (l.lng = d.usedLng), l.nest !== !1 && (r = this.interpolator.nest(r, function() {
        for (var x = arguments.length, N = new Array(x), j = 0; j < x; j++)
          N[j] = arguments[j];
        return f && f[0] === N[0] && !l.context ? (c.logger.warn(`It seems you are nesting recursively key: ${N[0]} in key: ${s[0]}`), null) : c.translate(...N, s);
      }, l)), l.interpolation && this.interpolator.reset();
    }
    const y = l.postProcess || this.options.postProcess, h = typeof y == "string" ? [y] : y;
    return r != null && h && h.length && l.applyPostProcessor !== !1 && (r = A3.handle(h, r, s, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...d,
        usedParams: this.getUsedParamsDetails(l)
      },
      ...l
    } : l, this)), r;
  }
  resolve(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l, d, f, c, y;
    return typeof r == "string" && (r = [r]), r.forEach((h) => {
      if (this.isValidLookup(l)) return;
      const p = this.extractFromKey(h, s), v = p.key;
      d = v;
      let L = p.namespaces;
      this.options.fallbackNS && (L = L.concat(this.options.fallbackNS));
      const x = s.count !== void 0 && typeof s.count != "string", N = x && !s.ordinal && s.count === 0 && this.pluralResolver.shouldUseIntlApi(), j = s.context !== void 0 && (typeof s.context == "string" || typeof s.context == "number") && s.context !== "", M = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      L.forEach((k) => {
        this.isValidLookup(l) || (y = k, !Vb[`${M[0]}-${k}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(y) && (Vb[`${M[0]}-${k}`] = !0, this.logger.warn(`key "${d}" for languages "${M.join(", ")}" won't get resolved as namespace "${y}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), M.forEach((z) => {
          if (this.isValidLookup(l)) return;
          c = z;
          const _ = [v];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, v, z, k, s);
          else {
            let w;
            x && (w = this.pluralResolver.getSuffix(z, s.count, s));
            const A = `${this.options.pluralSeparator}zero`, Y = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (x && (_.push(v + w), s.ordinal && w.indexOf(Y) === 0 && _.push(v + w.replace(Y, this.options.pluralSeparator)), N && _.push(v + A)), j) {
              const X = `${v}${this.options.contextSeparator}${s.context}`;
              _.push(X), x && (_.push(X + w), s.ordinal && w.indexOf(Y) === 0 && _.push(X + w.replace(Y, this.options.pluralSeparator)), N && _.push(X + A));
            }
          }
          let H;
          for (; H = _.pop(); )
            this.isValidLookup(l) || (f = H, l = this.getResource(z, k, H, s));
        }));
      });
    }), {
      res: l,
      usedKey: d,
      exactUsedKey: f,
      usedLng: c,
      usedNS: y
    };
  }
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "");
  }
  getResource(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(r, s, l, d) : this.resourceStore.getResource(r, s, l, d);
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], l = r.replace && typeof r.replace != "string";
    let d = l ? r.replace : r;
    if (l && typeof r.count < "u" && (d.count = r.count), this.options.interpolation.defaultVariables && (d = {
      ...this.options.interpolation.defaultVariables,
      ...d
    }), !l) {
      d = {
        ...d
      };
      for (const f of s)
        delete d[f];
    }
    return d;
  }
  static hasDefaultValue(r) {
    const s = "defaultValue";
    for (const l in r)
      if (Object.prototype.hasOwnProperty.call(r, l) && s === l.substring(0, s.length) && r[l] !== void 0)
        return !0;
    return !1;
  }
}
function Mv(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
class Ub {
  constructor(r) {
    this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = sr.create("languageUtils");
  }
  getScriptPartFromCode(r) {
    if (r = Ld(r), !r || r.indexOf("-") < 0) return null;
    const s = r.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(r) {
    if (r = Ld(r), !r || r.indexOf("-") < 0) return r;
    const s = r.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(r) {
    if (typeof r == "string" && r.indexOf("-") > -1) {
      const s = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let l = r.split("-");
      return this.options.lowerCaseLng ? l = l.map((d) => d.toLowerCase()) : l.length === 2 ? (l[0] = l[0].toLowerCase(), l[1] = l[1].toUpperCase(), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Mv(l[1].toLowerCase()))) : l.length === 3 && (l[0] = l[0].toLowerCase(), l[1].length === 2 && (l[1] = l[1].toUpperCase()), l[0] !== "sgn" && l[2].length === 2 && (l[2] = l[2].toUpperCase()), s.indexOf(l[1].toLowerCase()) > -1 && (l[1] = Mv(l[1].toLowerCase())), s.indexOf(l[2].toLowerCase()) > -1 && (l[2] = Mv(l[2].toLowerCase()))), l.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
  }
  isSupportedCode(r) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
  }
  getBestMatchFromCodes(r) {
    if (!r) return null;
    let s;
    return r.forEach((l) => {
      if (s) return;
      const d = this.formatLanguageCode(l);
      (!this.options.supportedLngs || this.isSupportedCode(d)) && (s = d);
    }), !s && this.options.supportedLngs && r.forEach((l) => {
      if (s) return;
      const d = this.getLanguagePartFromCode(l);
      if (this.isSupportedCode(d)) return s = d;
      s = this.options.supportedLngs.find((f) => {
        if (f === d) return f;
        if (!(f.indexOf("-") < 0 && d.indexOf("-") < 0) && (f.indexOf("-") > 0 && d.indexOf("-") < 0 && f.substring(0, f.indexOf("-")) === d || f.indexOf(d) === 0 && d.length > 1))
          return f;
      });
    }), s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]), s;
  }
  getFallbackCodes(r, s) {
    if (!r) return [];
    if (typeof r == "function" && (r = r(s)), typeof r == "string" && (r = [r]), Array.isArray(r)) return r;
    if (!s) return r.default || [];
    let l = r[s];
    return l || (l = r[this.getScriptPartFromCode(s)]), l || (l = r[this.formatLanguageCode(s)]), l || (l = r[this.getLanguagePartFromCode(s)]), l || (l = r.default), l || [];
  }
  toResolveHierarchy(r, s) {
    const l = this.getFallbackCodes(s || this.options.fallbackLng || [], r), d = [], f = (c) => {
      c && (this.isSupportedCode(c) ? d.push(c) : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
    };
    return typeof r == "string" && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(r))) : typeof r == "string" && f(this.formatLanguageCode(r)), l.forEach((c) => {
      d.indexOf(c) < 0 && f(this.formatLanguageCode(c));
    }), d;
  }
}
let rj = [{
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
}], ij = {
  1: function(o) {
    return +(o > 1);
  },
  2: function(o) {
    return +(o != 1);
  },
  3: function(o) {
    return 0;
  },
  4: function(o) {
    return o % 10 == 1 && o % 100 != 11 ? 0 : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? 1 : 2;
  },
  5: function(o) {
    return o == 0 ? 0 : o == 1 ? 1 : o == 2 ? 2 : o % 100 >= 3 && o % 100 <= 10 ? 3 : o % 100 >= 11 ? 4 : 5;
  },
  6: function(o) {
    return o == 1 ? 0 : o >= 2 && o <= 4 ? 1 : 2;
  },
  7: function(o) {
    return o == 1 ? 0 : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? 1 : 2;
  },
  8: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : o != 8 && o != 11 ? 2 : 3;
  },
  9: function(o) {
    return +(o >= 2);
  },
  10: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : o < 7 ? 2 : o < 11 ? 3 : 4;
  },
  11: function(o) {
    return o == 1 || o == 11 ? 0 : o == 2 || o == 12 ? 1 : o > 2 && o < 20 ? 2 : 3;
  },
  12: function(o) {
    return +(o % 10 != 1 || o % 100 == 11);
  },
  13: function(o) {
    return +(o !== 0);
  },
  14: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : o == 3 ? 2 : 3;
  },
  15: function(o) {
    return o % 10 == 1 && o % 100 != 11 ? 0 : o % 10 >= 2 && (o % 100 < 10 || o % 100 >= 20) ? 1 : 2;
  },
  16: function(o) {
    return o % 10 == 1 && o % 100 != 11 ? 0 : o !== 0 ? 1 : 2;
  },
  17: function(o) {
    return o == 1 || o % 10 == 1 && o % 100 != 11 ? 0 : 1;
  },
  18: function(o) {
    return o == 0 ? 0 : o == 1 ? 1 : 2;
  },
  19: function(o) {
    return o == 1 ? 0 : o == 0 || o % 100 > 1 && o % 100 < 11 ? 1 : o % 100 > 10 && o % 100 < 20 ? 2 : 3;
  },
  20: function(o) {
    return o == 1 ? 0 : o == 0 || o % 100 > 0 && o % 100 < 20 ? 1 : 2;
  },
  21: function(o) {
    return o % 100 == 1 ? 1 : o % 100 == 2 ? 2 : o % 100 == 3 || o % 100 == 4 ? 3 : 0;
  },
  22: function(o) {
    return o == 1 ? 0 : o == 2 ? 1 : (o < 0 || o > 10) && o % 10 == 0 ? 2 : 3;
  }
};
const oj = ["v1", "v2", "v3"], sj = ["v4"], zb = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function lj() {
  const o = {};
  return rj.forEach((r) => {
    r.lngs.forEach((s) => {
      o[s] = {
        numbers: r.nr,
        plurals: ij[r.fc]
      };
    });
  }), o;
}
class uj {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = r, this.options = s, this.logger = sr.create("pluralResolver"), (!this.options.compatibilityJSON || sj.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = lj();
  }
  addRule(r, s) {
    this.rules[r] = s;
  }
  getRule(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Ld(r === "dev" ? "en" : r), {
          type: s.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
  }
  needsPlural(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = this.getRule(r, s);
    return this.shouldUseIntlApi() ? l && l.resolvedOptions().pluralCategories.length > 1 : l && l.numbers.length > 1;
  }
  getPluralFormsOfKey(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, l).map((d) => `${s}${d}`);
  }
  getSuffixes(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = this.getRule(r, s);
    return l ? this.shouldUseIntlApi() ? l.resolvedOptions().pluralCategories.sort((d, f) => zb[d] - zb[f]).map((d) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : l.numbers.map((d) => this.getSuffix(r, d, s)) : [];
  }
  getSuffix(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const d = this.getRule(r, l);
    return d ? this.shouldUseIntlApi() ? `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${d.select(s)}` : this.getSuffixRetroCompatible(d, s) : (this.logger.warn(`no plural rule found for: ${r}`), "");
  }
  getSuffixRetroCompatible(r, s) {
    const l = r.noAbs ? r.plurals(s) : r.plurals(Math.abs(s));
    let d = r.numbers[l];
    this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (d === 2 ? d = "plural" : d === 1 && (d = ""));
    const f = () => this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
    return this.options.compatibilityJSON === "v1" ? d === 1 ? "" : typeof d == "number" ? `_plural_${d.toString()}` : f() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? f() : this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString();
  }
  shouldUseIntlApi() {
    return !oj.includes(this.options.compatibilityJSON);
  }
}
function $b(o, r, s) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, f = Xw(o, r, s);
  return !f && d && typeof s == "string" && (f = Iv(o, s, l), f === void 0 && (f = Iv(r, s, l))), f;
}
class cj {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = sr.create("interpolator"), this.options = r, this.format = r.interpolation && r.interpolation.format || ((s) => s), this.init(r);
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    r.interpolation || (r.interpolation = {
      escapeValue: !0
    });
    const {
      escape: s,
      escapeValue: l,
      useRawValueToEscape: d,
      prefix: f,
      prefixEscaped: c,
      suffix: y,
      suffixEscaped: h,
      formatSeparator: p,
      unescapeSuffix: v,
      unescapePrefix: L,
      nestingPrefix: x,
      nestingPrefixEscaped: N,
      nestingSuffix: j,
      nestingSuffixEscaped: M,
      nestingOptionsSeparator: k,
      maxReplaces: z,
      alwaysFormat: _
    } = r.interpolation;
    this.escape = s !== void 0 ? s : Zw, this.escapeValue = l !== void 0 ? l : !0, this.useRawValueToEscape = d !== void 0 ? d : !1, this.prefix = f ? ys(f) : c || "{{", this.suffix = y ? ys(y) : h || "}}", this.formatSeparator = p || ",", this.unescapePrefix = v ? "" : L || "-", this.unescapeSuffix = this.unescapePrefix ? "" : v || "", this.nestingPrefix = x ? ys(x) : N || ys("$t("), this.nestingSuffix = j ? ys(j) : M || ys(")"), this.nestingOptionsSeparator = k || ",", this.maxReplaces = z || 1e3, this.alwaysFormat = _ !== void 0 ? _ : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const r = (s, l) => s && s.source === l ? (s.lastIndex = 0, s) : new RegExp(l, "g");
    this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(r, s, l, d) {
    let f, c, y;
    const h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function p(j) {
      return j.replace(/\$/g, "$$$$");
    }
    const v = (j) => {
      if (j.indexOf(this.formatSeparator) < 0) {
        const _ = $b(s, h, j, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(_, void 0, l, {
          ...d,
          ...s,
          interpolationkey: j
        }) : _;
      }
      const M = j.split(this.formatSeparator), k = M.shift().trim(), z = M.join(this.formatSeparator).trim();
      return this.format($b(s, h, k, this.options.keySeparator, this.options.ignoreJSONStructure), z, l, {
        ...d,
        ...s,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const L = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, x = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (j) => p(j)
    }, {
      regex: this.regexp,
      safeValue: (j) => this.escapeValue ? p(this.escape(j)) : p(j)
    }].forEach((j) => {
      for (y = 0; f = j.regex.exec(r); ) {
        const M = f[1].trim();
        if (c = v(M), c === void 0)
          if (typeof L == "function") {
            const z = L(r, f, d);
            c = typeof z == "string" ? z : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, M))
            c = "";
          else if (x) {
            c = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${M} for interpolating ${r}`), c = "";
        else typeof c != "string" && !this.useRawValueToEscape && (c = Pb(c));
        const k = j.safeValue(c);
        if (r = r.replace(f[0], k), x ? (j.regex.lastIndex += c.length, j.regex.lastIndex -= f[0].length) : j.regex.lastIndex = 0, y++, y >= this.maxReplaces)
          break;
      }
    }), r;
  }
  nest(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, f, c;
    function y(h, p) {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const L = h.split(new RegExp(`${v}[ ]*{`));
      let x = `{${L[1]}`;
      h = L[0], x = this.interpolate(x, c);
      const N = x.match(/'/g), j = x.match(/"/g);
      (N && N.length % 2 === 0 && !j || j.length % 2 !== 0) && (x = x.replace(/'/g, '"'));
      try {
        c = JSON.parse(x), p && (c = {
          ...p,
          ...c
        });
      } catch (M) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, M), `${h}${v}${x}`;
      }
      return c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, h;
    }
    for (; d = this.nestingRegexp.exec(r); ) {
      let h = [];
      c = {
        ...l
      }, c = c.replace && typeof c.replace != "string" ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let p = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const v = d[1].split(this.formatSeparator).map((L) => L.trim());
        d[1] = v.shift(), h = v, p = !0;
      }
      if (f = s(y.call(this, d[1].trim(), c), c), f && d[0] === r && typeof f != "string") return f;
      typeof f != "string" && (f = Pb(f)), f || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${r}`), f = ""), p && (f = h.reduce((v, L) => this.format(v, L, l.lng, {
        ...l,
        interpolationkey: d[1].trim()
      }), f.trim())), r = r.replace(d[0], f), this.regexp.lastIndex = 0;
    }
    return r;
  }
}
function fj(o) {
  let r = o.toLowerCase().trim();
  const s = {};
  if (o.indexOf("(") > -1) {
    const l = o.split("(");
    r = l[0].toLowerCase().trim();
    const d = l[1].substring(0, l[1].length - 1);
    r === "currency" && d.indexOf(":") < 0 ? s.currency || (s.currency = d.trim()) : r === "relativetime" && d.indexOf(":") < 0 ? s.range || (s.range = d.trim()) : d.split(";").forEach((c) => {
      if (c) {
        const [y, ...h] = c.split(":"), p = h.join(":").trim().replace(/^'+|'+$/g, ""), v = y.trim();
        s[v] || (s[v] = p), p === "false" && (s[v] = !1), p === "true" && (s[v] = !0), isNaN(p) || (s[v] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: r,
    formatOptions: s
  };
}
function Ls(o) {
  const r = {};
  return function(l, d, f) {
    const c = d + JSON.stringify(f);
    let y = r[c];
    return y || (y = o(Ld(d), f), r[c] = y), y(l);
  };
}
class dj {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = sr.create("formatter"), this.options = r, this.formats = {
      number: Ls((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      currency: Ls((s, l) => {
        const d = new Intl.NumberFormat(s, {
          ...l,
          style: "currency"
        });
        return (f) => d.format(f);
      }),
      datetime: Ls((s, l) => {
        const d = new Intl.DateTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      }),
      relativetime: Ls((s, l) => {
        const d = new Intl.RelativeTimeFormat(s, {
          ...l
        });
        return (f) => d.format(f, l.range || "day");
      }),
      list: Ls((s, l) => {
        const d = new Intl.ListFormat(s, {
          ...l
        });
        return (f) => d.format(f);
      })
    }, this.init(r);
  }
  init(r) {
    const l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = l.formatSeparator ? l.formatSeparator : l.formatSeparator || ",";
  }
  add(r, s) {
    this.formats[r.toLowerCase().trim()] = s;
  }
  addCached(r, s) {
    this.formats[r.toLowerCase().trim()] = Ls(s);
  }
  format(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return s.split(this.formatSeparator).reduce((y, h) => {
      const {
        formatName: p,
        formatOptions: v
      } = fj(h);
      if (this.formats[p]) {
        let L = y;
        try {
          const x = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, N = x.locale || x.lng || d.locale || d.lng || l;
          L = this.formats[p](y, N, {
            ...v,
            ...d,
            ...x
          });
        } catch (x) {
          this.logger.warn(x);
        }
        return L;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return y;
    }, r);
  }
}
function mj(o, r) {
  o.pending[r] !== void 0 && (delete o.pending[r], o.pendingCount--);
}
class pj extends Ed {
  constructor(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = r, this.store = s, this.services = l, this.languageUtils = l.languageUtils, this.options = d, this.logger = sr.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(l, d.backend, d);
  }
  queueLoad(r, s, l, d) {
    const f = {}, c = {}, y = {}, h = {};
    return r.forEach((p) => {
      let v = !0;
      s.forEach((L) => {
        const x = `${p}|${L}`;
        !l.reload && this.store.hasResourceBundle(p, L) ? this.state[x] = 2 : this.state[x] < 0 || (this.state[x] === 1 ? c[x] === void 0 && (c[x] = !0) : (this.state[x] = 1, v = !1, c[x] === void 0 && (c[x] = !0), f[x] === void 0 && (f[x] = !0), h[L] === void 0 && (h[L] = !0)));
      }), v || (y[p] = !0);
    }), (Object.keys(f).length || Object.keys(c).length) && this.queue.push({
      pending: c,
      pendingCount: Object.keys(c).length,
      loaded: {},
      errors: [],
      callback: d
    }), {
      toLoad: Object.keys(f),
      pending: Object.keys(c),
      toLoadLanguages: Object.keys(y),
      toLoadNamespaces: Object.keys(h)
    };
  }
  loaded(r, s, l) {
    const d = r.split("|"), f = d[0], c = d[1];
    s && this.emit("failedLoading", f, c, s), l && this.store.addResourceBundle(f, c, l, void 0, void 0, {
      skipCopy: !0
    }), this.state[r] = s ? -1 : 2;
    const y = {};
    this.queue.forEach((h) => {
      Qw(h.loaded, [f], c), mj(h, r), s && h.errors.push(s), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((p) => {
        y[p] || (y[p] = {});
        const v = h.loaded[p];
        v.length && v.forEach((L) => {
          y[p][L] === void 0 && (y[p][L] = !0);
        });
      }), h.done = !0, h.errors.length ? h.callback(h.errors) : h.callback());
    }), this.emit("loaded", y), this.queue = this.queue.filter((h) => !h.done);
  }
  read(r, s, l) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, c = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: r,
        ns: s,
        fcName: l,
        tried: d,
        wait: f,
        callback: c
      });
      return;
    }
    this.readingCalls++;
    const y = (p, v) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const L = this.waitingReads.shift();
        this.read(L.lng, L.ns, L.fcName, L.tried, L.wait, L.callback);
      }
      if (p && v && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, r, s, l, d + 1, f * 2, c);
        }, f);
        return;
      }
      c(p, v);
    }, h = this.backend[l].bind(this.backend);
    if (h.length === 2) {
      try {
        const p = h(r, s);
        p && typeof p.then == "function" ? p.then((v) => y(null, v)).catch(y) : y(null, p);
      } catch (p) {
        y(p);
      }
      return;
    }
    return h(r, s, y);
  }
  prepareLoading(r, s) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), d && d();
    typeof r == "string" && (r = this.languageUtils.toResolveHierarchy(r)), typeof s == "string" && (s = [s]);
    const f = this.queueLoad(r, s, l, d);
    if (!f.toLoad.length)
      return f.pending.length || d(), null;
    f.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(r, s, l) {
    this.prepareLoading(r, s, {}, l);
  }
  reload(r, s, l) {
    this.prepareLoading(r, s, {
      reload: !0
    }, l);
  }
  loadOne(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const l = r.split("|"), d = l[0], f = l[1];
    this.read(d, f, "read", void 0, void 0, (c, y) => {
      c && this.logger.warn(`${s}loading namespace ${f} for language ${d} failed`, c), !c && y && this.logger.log(`${s}loaded namespace ${f} for language ${d}`, y), this.loaded(r, c, y);
    });
  }
  saveMissing(r, s, l, d, f) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, y = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s)) {
      this.logger.warn(`did not save key "${l}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(l == null || l === "")) {
      if (this.backend && this.backend.create) {
        const h = {
          ...c,
          isUpdate: f
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let v;
            p.length === 5 ? v = p(r, s, l, d, h) : v = p(r, s, l, d), v && typeof v.then == "function" ? v.then((L) => y(null, L)).catch(y) : y(null, v);
          } catch (v) {
            y(v);
          }
        else
          p(r, s, l, d, y, h);
      }
      !r || !r[0] || this.store.addResource(r[0], s, l, d);
    }
  }
}
function Hb() {
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
    overloadTranslationOptionHandler: function(r) {
      let s = {};
      if (typeof r[1] == "object" && (s = r[1]), typeof r[1] == "string" && (s.defaultValue = r[1]), typeof r[2] == "string" && (s.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
        const l = r[3] || r[2];
        Object.keys(l).forEach((d) => {
          s[d] = l[d];
        });
      }
      return s;
    },
    interpolation: {
      escapeValue: !0,
      format: (o) => o,
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
function Bb(o) {
  return typeof o.ns == "string" && (o.ns = [o.ns]), typeof o.fallbackLng == "string" && (o.fallbackLng = [o.fallbackLng]), typeof o.fallbackNS == "string" && (o.fallbackNS = [o.fallbackNS]), o.supportedLngs && o.supportedLngs.indexOf("cimode") < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), o;
}
function ad() {
}
function hj(o) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((s) => {
    typeof o[s] == "function" && (o[s] = o[s].bind(o));
  });
}
class ku extends Ed {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Bb(r), this.services = {}, this.logger = sr, this.modules = {
      external: []
    }, hj(this), s && !this.isInitialized && !r.isClone) {
      if (!this.options.initImmediate)
        return this.init(r, s), this;
      setTimeout(() => {
        this.init(r, s);
      }, 0);
    }
  }
  init() {
    var r = this;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof s == "function" && (l = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
    const d = Hb();
    this.options = {
      ...d,
      ...this.options,
      ...Bb(s)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
    function f(v) {
      return v ? typeof v == "function" ? new v() : v : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? sr.init(f(this.modules.logger), this.options) : sr.init(null, this.options);
      let v;
      this.modules.formatter ? v = this.modules.formatter : typeof Intl < "u" && (v = dj);
      const L = new Ub(this.options);
      this.store = new Mb(this.options.resources, this.options);
      const x = this.services;
      x.logger = sr, x.resourceStore = this.store, x.languageUtils = L, x.pluralResolver = new uj(L, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), v && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (x.formatter = f(v), x.formatter.init(x, this.options), this.options.interpolation.format = x.formatter.format.bind(x.formatter)), x.interpolator = new cj(this.options), x.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, x.backendConnector = new pj(f(this.modules.backend), x.resourceStore, x, this.options), x.backendConnector.on("*", function(N) {
        for (var j = arguments.length, M = new Array(j > 1 ? j - 1 : 0), k = 1; k < j; k++)
          M[k - 1] = arguments[k];
        r.emit(N, ...M);
      }), this.modules.languageDetector && (x.languageDetector = f(this.modules.languageDetector), x.languageDetector.init && x.languageDetector.init(x, this.options.detection, this.options)), this.modules.i18nFormat && (x.i18nFormat = f(this.modules.i18nFormat), x.i18nFormat.init && x.i18nFormat.init(this)), this.translator = new bd(this.services, this.options), this.translator.on("*", function(N) {
        for (var j = arguments.length, M = new Array(j > 1 ? j - 1 : 0), k = 1; k < j; k++)
          M[k - 1] = arguments[k];
        r.emit(N, ...M);
      }), this.modules.external.forEach((N) => {
        N.init && N.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, l || (l = ad), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const v = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      v.length > 0 && v[0] !== "dev" && (this.options.lng = v[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((v) => {
      this[v] = function() {
        return r.store[v](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((v) => {
      this[v] = function() {
        return r.store[v](...arguments), r;
      };
    });
    const h = xu(), p = () => {
      const v = (L, x) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), h.resolve(x), l(L, x);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return v(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, v);
    };
    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), h;
  }
  loadResources(r) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ad;
    const d = typeof r == "string" ? r : this.language;
    if (typeof r == "function" && (l = r), !this.options.resources || this.options.partialBundledLanguages) {
      if (d && d.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return l();
      const f = [], c = (y) => {
        if (!y || y === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(y).forEach((p) => {
          p !== "cimode" && f.indexOf(p) < 0 && f.push(p);
        });
      };
      d ? c(d) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => c(h)), this.options.preload && this.options.preload.forEach((y) => c(y)), this.services.backendConnector.load(f, this.options.ns, (y) => {
        !y && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), l(y);
      });
    } else
      l(null);
  }
  reloadResources(r, s, l) {
    const d = xu();
    return r || (r = this.languages), s || (s = this.options.ns), l || (l = ad), this.services.backendConnector.reload(r, s, (f) => {
      d.resolve(), l(f);
    }), d;
  }
  use(r) {
    if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && A3.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(["cimode", "dev"].indexOf(r) > -1))
      for (let s = 0; s < this.languages.length; s++) {
        const l = this.languages[s];
        if (!(["cimode", "dev"].indexOf(l) > -1) && this.store.hasLanguageSomeTranslations(l)) {
          this.resolvedLanguage = l;
          break;
        }
      }
  }
  changeLanguage(r, s) {
    var l = this;
    this.isLanguageChangingTo = r;
    const d = xu();
    this.emit("languageChanging", r);
    const f = (h) => {
      this.language = h, this.languages = this.services.languageUtils.toResolveHierarchy(h), this.resolvedLanguage = void 0, this.setResolvedLanguage(h);
    }, c = (h, p) => {
      p ? (f(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return l.t(...arguments);
      }), s && s(h, function() {
        return l.t(...arguments);
      });
    }, y = (h) => {
      !r && !h && this.services.languageDetector && (h = []);
      const p = typeof h == "string" ? h : this.services.languageUtils.getBestMatchFromCodes(h);
      p && (this.language || f(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(p)), this.loadResources(p, (v) => {
        c(v, p);
      });
    };
    return !r && this.services.languageDetector && !this.services.languageDetector.async ? y(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(y) : this.services.languageDetector.detect(y) : y(r), d;
  }
  getFixedT(r, s, l) {
    var d = this;
    const f = function(c, y) {
      let h;
      if (typeof y != "object") {
        for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), L = 2; L < p; L++)
          v[L - 2] = arguments[L];
        h = d.options.overloadTranslationOptionHandler([c, y].concat(v));
      } else
        h = {
          ...y
        };
      h.lng = h.lng || f.lng, h.lngs = h.lngs || f.lngs, h.ns = h.ns || f.ns, h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || l || f.keyPrefix);
      const x = d.options.keySeparator || ".";
      let N;
      return h.keyPrefix && Array.isArray(c) ? N = c.map((j) => `${h.keyPrefix}${x}${j}`) : N = h.keyPrefix ? `${h.keyPrefix}${x}${c}` : c, d.t(N, h);
    };
    return typeof r == "string" ? f.lng = r : f.lngs = r, f.ns = s, f.keyPrefix = l, f;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(r) {
    this.options.defaultNS = r;
  }
  hasLoadedNamespace(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const l = s.lng || this.resolvedLanguage || this.languages[0], d = this.options ? this.options.fallbackLng : !1, f = this.languages[this.languages.length - 1];
    if (l.toLowerCase() === "cimode") return !0;
    const c = (y, h) => {
      const p = this.services.backendConnector.state[`${y}|${h}`];
      return p === -1 || p === 2;
    };
    if (s.precheck) {
      const y = s.precheck(this, c);
      if (y !== void 0) return y;
    }
    return !!(this.hasResourceBundle(l, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(l, r) && (!d || c(f, r)));
  }
  loadNamespaces(r, s) {
    const l = xu();
    return this.options.ns ? (typeof r == "string" && (r = [r]), r.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      l.resolve(), s && s(d);
    }), l) : (s && s(), Promise.resolve());
  }
  loadLanguages(r, s) {
    const l = xu();
    typeof r == "string" && (r = [r]);
    const d = this.options.preload || [], f = r.filter((c) => d.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return f.length ? (this.options.preload = d.concat(f), this.loadResources((c) => {
      l.resolve(), s && s(c);
    }), l) : (s && s(), Promise.resolve());
  }
  dir(r) {
    if (r || (r = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !r) return "rtl";
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], l = this.services && this.services.languageUtils || new Ub(Hb());
    return s.indexOf(l.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    return new ku(r, s);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ad;
    const l = r.forkResourceStore;
    l && delete r.forkResourceStore;
    const d = {
      ...this.options,
      ...r,
      isClone: !0
    }, f = new ku(d);
    return (r.debug !== void 0 || r.prefix !== void 0) && (f.logger = f.logger.clone(r)), ["store", "services", "language"].forEach((y) => {
      f[y] = this[y];
    }), f.services = {
      ...this.services
    }, f.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, l && (f.store = new Mb(this.store.data, d), f.services.resourceStore = f.store), f.translator = new bd(f.services, d), f.translator.on("*", function(y) {
      for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
        p[v - 1] = arguments[v];
      f.emit(y, ...p);
    }), f.init(d, s), f.translator.options = d, f.translator.backendConnector.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, f;
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
const mn = ku.createInstance();
mn.createInstance = ku.createInstance;
mn.createInstance;
mn.dir;
mn.init;
mn.loadResources;
mn.reloadResources;
mn.use;
mn.changeLanguage;
mn.getFixedT;
mn.t;
mn.exists;
mn.setDefaultNamespace;
mn.hasLoadedNamespace;
mn.loadNamespaces;
mn.loadLanguages;
async function dn(o, r = {}) {
  typeof o == "object" ? r = o : typeof o == "string" && (r.url = o), r.headers || (r.headers = {}), r.body && !(r.body instanceof FormData) && (r.headers["Content-Type"] = "application/json", r.body = JSON.stringify(r.body));
  let s = window.TOKEN || sessionStorage.getItem("TOKEN");
  s || (s = localStorage.getItem("TOKEN")), s && (r.headers.Authorization = `Bearer ${s}`);
  let l = window.serverURL;
  if (!l) {
    const h = location.pathname.match(/(.*?\/)ui/);
    l = h ? h[1] : "/";
  }
  const d = r.url.includes("?") ? "&" : "?", f = await fetch(
    `${l}${r.url}${d}lang=${mn.language}`,
    r
  );
  if (!f.ok) {
    if (f.status === 401)
      throw new Error(401);
    let h;
    try {
      h = await f.json();
    } catch {
    }
    throw new Error(`${f.status}: ${(h == null ? void 0 : h.errmsg) || f.statusText}`);
  }
  const c = await f.json();
  if (c.errno !== 0)
    throw new Error(c.errmsg);
  return { __version: f.headers.get("x-waline-version"), ...c.data };
}
function vj(o) {
  const r = o ? `?email=${encodeURIComponent(o)}` : "";
  return dn({ url: "token/2fa" + r, method: "GET" });
}
function M3(o) {
  return dn({ url: "user", method: "PUT", body: o });
}
function gj({ page: o, filter: r }) {
  return dn({
    url: `user?page=${o}&keyword=${r.keyword}`,
    method: "GET"
  });
}
function Su({ id: o, ...r }) {
  return dn({ url: `user/${o}`, method: "PUT", body: r });
}
function yj() {
  const { t: o } = ji(), r = Fu(), s = Mu(), l = wi((w) => w.user), [d, f] = P.useState(!1), [c, y] = P.useState(!1), [h, p] = P.useState(!1), [v, L] = P.useState("social"), x = _3({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), N = location.pathname.match(/(.*?\/)ui/), j = N && N[1] ? N[1] : "/";
  P.useEffect(() => {
    if (!l || !l.email)
      return;
    const w = new URLSearchParams(location.search), A = l.type === "administrator", Y = A ? "/ui/profile" : "/ui", X = A && w.get("redirect") ? w.get("redirect") : Y;
    console.log(X), s(X.replace(/\/+/g, "/"));
  }, [l]);
  const M = async function(w) {
    w.preventDefault(), y(!1), f(!0);
    const A = w.target.email.value, Y = w.target.password.value, X = w.target.code ? w.target.code.value : "", ne = w.target.remember.checked;
    if (!A)
      return y(o("please input email"));
    if (!Y)
      return y(o("please input password"));
    if (w.target.code && !X)
      return y(o("please input 2fa code"));
    const fe = await x("login");
    try {
      await r.user.login({
        email: A,
        password: Y,
        code: X,
        remember: ne,
        recaptchaV3: window.recaptchaV3Key ? fe : void 0,
        turnstile: window.turnstileKey ? fe : void 0
      });
    } catch (le) {
      y(le.message || o("email or password error"));
    } finally {
      f(!1);
    }
  }, k = function(w) {
    L(w);
  }, z = async (w) => {
    const A = w.target.value;
    if (!A)
      return;
    const Y = await vj(A);
    p(Y.enable);
  };
  let _ = window.serverURL;
  if (!_) {
    const w = location.pathname.match(/(.*?\/)ui/);
    _ = w ? w[1] : "/";
  }
  const H = ["google", "discord", "twitter"];
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: c ? "block" : "none"
        },
        children: /* @__PURE__ */ C.jsxDEV("ul", { children: c ? /* @__PURE__ */ C.jsxDEV("li", { children: c }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
          lineNumber: 122,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
          lineNumber: 122,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ C.jsxDEV("div", { className: "login-tab-container", children: [
        /* @__PURE__ */ C.jsxDEV("div", { className: "login-tabs", children: [
          /* @__PURE__ */ C.jsxDEV("div", { id: "tab-social", className: `login-tab ${v === "social" ? "active" : ""}`, onClick: () => k("social"), children: "Social" }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
            lineNumber: 128,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ C.jsxDEV("div", { id: "tab-password", className: `login-tab ${v === "password" ? "active" : ""}`, onClick: () => k("password"), children: "Password" }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
            lineNumber: 129,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
          lineNumber: 127,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ C.jsxDEV("div", { id: "social", className: `login-tab-content ${v === "social" ? "active" : ""}`, children: [
          /* @__PURE__ */ C.jsxDEV("div", { className: "login-tab-title", children: "Sign In" }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
            lineNumber: 133,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ C.jsxDEV("div", { className: "login-social-content", children: (window.ALLOW_SOCIALS || H).map((w) => /* @__PURE__ */ C.jsxDEV(
            "a",
            {
              className: "btn-social",
              href: `${_}oauth${window.ALLOW_SOCIALS ? "/" + w + "?" : `?type=${w}`}&redirect=${j}ui/profile`,
              style: { textDecoration: "none" },
              children: [
                Sd.createElement(Hw[w], {
                  width: 20
                }),
                w
              ]
            },
            w,
            !0,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 136,
              columnNumber: 10
            },
            this
          )) }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
            lineNumber: 134,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
          lineNumber: 132,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ C.jsxDEV("div", { id: "password", className: `login-tab-content ${v === "password" ? "active" : ""}`, children: [
          /* @__PURE__ */ C.jsxDEV("div", { className: "login-tab-title", children: "Login with Password" }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
            lineNumber: 156,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ C.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: M, style: { minWidth: "300px" }, children: [
            /* @__PURE__ */ C.jsxDEV("p", { children: [
              /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 159,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ C.jsxDEV(
                "input",
                {
                  type: "text",
                  id: "email",
                  name: "email",
                  placeholder: o("email"),
                  className: "text-l w-100",
                  onBlur: z
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                  lineNumber: 162,
                  columnNumber: 10
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 158,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ C.jsxDEV("p", { children: [
              /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 172,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ C.jsxDEV(
                "input",
                {
                  type: "password",
                  id: "password",
                  name: "password",
                  className: "text-l w-100",
                  placeholder: o("password")
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                  lineNumber: 175,
                  columnNumber: 10
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 171,
              columnNumber: 9
            }, this),
            h && /* @__PURE__ */ C.jsxDEV("p", { children: [
              /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "code", className: "sr-only", children: o("2fa code") }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 185,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ C.jsxDEV(
                "input",
                {
                  type: "text",
                  id: "code",
                  name: "code",
                  className: "text-l w-100",
                  placeholder: o("2fa code")
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                  lineNumber: 188,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 184,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ C.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 197,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ C.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ C.jsxDEV(
              "button",
              {
                type: "submit",
                className: "btn btn-l w-100 primary",
                disabled: d,
                children: o("login")
              },
              void 0,
              !1,
              {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 199,
                columnNumber: 10
              },
              this
            ) }, void 0, !1, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 198,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ C.jsxDEV("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "remember", children: [
                /* @__PURE__ */ C.jsxDEV(
                  "input",
                  {
                    type: "checkbox",
                    name: "remember",
                    className: "checkbox",
                    id: "remember"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                    lineNumber: 209,
                    columnNumber: 11
                  },
                  this
                ),
                " ",
                o("remember me")
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 208,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ C.jsxDEV("span", { className: "right forgot-password", children: /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui/forgot", children: o("forgot password") }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 218,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
                lineNumber: 217,
                columnNumber: 10
              }, this)
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
              lineNumber: 207,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
            lineNumber: 157,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
          lineNumber: 155,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
        lineNumber: 126,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ C.jsxDEV("p", { className: "more-link", children: /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui", children: o("back to home") }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
        lineNumber: 227,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
        lineNumber: 226,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/login/index.jsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
var V3 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var r = {}.hasOwnProperty;
    function s() {
      for (var f = "", c = 0; c < arguments.length; c++) {
        var y = arguments[c];
        y && (f = d(f, l(y)));
      }
      return f;
    }
    function l(f) {
      if (typeof f == "string" || typeof f == "number")
        return f;
      if (typeof f != "object")
        return "";
      if (Array.isArray(f))
        return s.apply(null, f);
      if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
        return f.toString();
      var c = "";
      for (var y in f)
        r.call(f, y) && f[y] && (c = d(c, y));
      return c;
    }
    function d(f, c) {
      return c ? f ? f + " " + c : f + c : f;
    }
    o.exports ? (s.default = s, o.exports = s) : window.classNames = s;
  })();
})(V3);
var Lj = V3.exports;
const Yv = /* @__PURE__ */ xd(Lj);
var U3 = { exports: {} }, z3 = { exports: {} };
(function() {
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
    // Bit-wise rotation left
    rotl: function(s, l) {
      return s << l | s >>> 32 - l;
    },
    // Bit-wise rotation right
    rotr: function(s, l) {
      return s << 32 - l | s >>> l;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(s) {
      if (s.constructor == Number)
        return r.rotl(s, 8) & 16711935 | r.rotl(s, 24) & 4278255360;
      for (var l = 0; l < s.length; l++)
        s[l] = r.endian(s[l]);
      return s;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(s) {
      for (var l = []; s > 0; s--)
        l.push(Math.floor(Math.random() * 256));
      return l;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(s) {
      for (var l = [], d = 0, f = 0; d < s.length; d++, f += 8)
        l[f >>> 5] |= s[d] << 24 - f % 32;
      return l;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(s) {
      for (var l = [], d = 0; d < s.length * 32; d += 8)
        l.push(s[d >>> 5] >>> 24 - d % 32 & 255);
      return l;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(s) {
      for (var l = [], d = 0; d < s.length; d++)
        l.push((s[d] >>> 4).toString(16)), l.push((s[d] & 15).toString(16));
      return l.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(s) {
      for (var l = [], d = 0; d < s.length; d += 2)
        l.push(parseInt(s.substr(d, 2), 16));
      return l;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(s) {
      for (var l = [], d = 0; d < s.length; d += 3)
        for (var f = s[d] << 16 | s[d + 1] << 8 | s[d + 2], c = 0; c < 4; c++)
          d * 8 + c * 6 <= s.length * 8 ? l.push(o.charAt(f >>> 6 * (3 - c) & 63)) : l.push("=");
      return l.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(s) {
      s = s.replace(/[^A-Z0-9+\/]/ig, "");
      for (var l = [], d = 0, f = 0; d < s.length; f = ++d % 4)
        f != 0 && l.push((o.indexOf(s.charAt(d - 1)) & Math.pow(2, -2 * f + 8) - 1) << f * 2 | o.indexOf(s.charAt(d)) >>> 6 - f * 2);
      return l;
    }
  };
  z3.exports = r;
})();
var bj = z3.exports, Kv = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      return Kv.bin.stringToBytes(unescape(encodeURIComponent(o)));
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      return decodeURIComponent(escape(Kv.bin.bytesToString(o)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(o) {
      for (var r = [], s = 0; s < o.length; s++)
        r.push(o.charCodeAt(s) & 255);
      return r;
    },
    // Convert a byte array to a string
    bytesToString: function(o) {
      for (var r = [], s = 0; s < o.length; s++)
        r.push(String.fromCharCode(o[s]));
      return r.join("");
    }
  }
}, Ib = Kv;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var xj = function(o) {
  return o != null && ($3(o) || Sj(o) || !!o._isBuffer);
};
function $3(o) {
  return !!o.constructor && typeof o.constructor.isBuffer == "function" && o.constructor.isBuffer(o);
}
function Sj(o) {
  return typeof o.readFloatLE == "function" && typeof o.slice == "function" && $3(o.slice(0, 0));
}
(function() {
  var o = bj, r = Ib.utf8, s = xj, l = Ib.bin, d = function(f, c) {
    f.constructor == String ? c && c.encoding === "binary" ? f = l.stringToBytes(f) : f = r.stringToBytes(f) : s(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
    for (var y = o.bytesToWords(f), h = f.length * 8, p = 1732584193, v = -271733879, L = -1732584194, x = 271733878, N = 0; N < y.length; N++)
      y[N] = (y[N] << 8 | y[N] >>> 24) & 16711935 | (y[N] << 24 | y[N] >>> 8) & 4278255360;
    y[h >>> 5] |= 128 << h % 32, y[(h + 64 >>> 9 << 4) + 14] = h;
    for (var j = d._ff, M = d._gg, k = d._hh, z = d._ii, N = 0; N < y.length; N += 16) {
      var _ = p, H = v, w = L, A = x;
      p = j(p, v, L, x, y[N + 0], 7, -680876936), x = j(x, p, v, L, y[N + 1], 12, -389564586), L = j(L, x, p, v, y[N + 2], 17, 606105819), v = j(v, L, x, p, y[N + 3], 22, -1044525330), p = j(p, v, L, x, y[N + 4], 7, -176418897), x = j(x, p, v, L, y[N + 5], 12, 1200080426), L = j(L, x, p, v, y[N + 6], 17, -1473231341), v = j(v, L, x, p, y[N + 7], 22, -45705983), p = j(p, v, L, x, y[N + 8], 7, 1770035416), x = j(x, p, v, L, y[N + 9], 12, -1958414417), L = j(L, x, p, v, y[N + 10], 17, -42063), v = j(v, L, x, p, y[N + 11], 22, -1990404162), p = j(p, v, L, x, y[N + 12], 7, 1804603682), x = j(x, p, v, L, y[N + 13], 12, -40341101), L = j(L, x, p, v, y[N + 14], 17, -1502002290), v = j(v, L, x, p, y[N + 15], 22, 1236535329), p = M(p, v, L, x, y[N + 1], 5, -165796510), x = M(x, p, v, L, y[N + 6], 9, -1069501632), L = M(L, x, p, v, y[N + 11], 14, 643717713), v = M(v, L, x, p, y[N + 0], 20, -373897302), p = M(p, v, L, x, y[N + 5], 5, -701558691), x = M(x, p, v, L, y[N + 10], 9, 38016083), L = M(L, x, p, v, y[N + 15], 14, -660478335), v = M(v, L, x, p, y[N + 4], 20, -405537848), p = M(p, v, L, x, y[N + 9], 5, 568446438), x = M(x, p, v, L, y[N + 14], 9, -1019803690), L = M(L, x, p, v, y[N + 3], 14, -187363961), v = M(v, L, x, p, y[N + 8], 20, 1163531501), p = M(p, v, L, x, y[N + 13], 5, -1444681467), x = M(x, p, v, L, y[N + 2], 9, -51403784), L = M(L, x, p, v, y[N + 7], 14, 1735328473), v = M(v, L, x, p, y[N + 12], 20, -1926607734), p = k(p, v, L, x, y[N + 5], 4, -378558), x = k(x, p, v, L, y[N + 8], 11, -2022574463), L = k(L, x, p, v, y[N + 11], 16, 1839030562), v = k(v, L, x, p, y[N + 14], 23, -35309556), p = k(p, v, L, x, y[N + 1], 4, -1530992060), x = k(x, p, v, L, y[N + 4], 11, 1272893353), L = k(L, x, p, v, y[N + 7], 16, -155497632), v = k(v, L, x, p, y[N + 10], 23, -1094730640), p = k(p, v, L, x, y[N + 13], 4, 681279174), x = k(x, p, v, L, y[N + 0], 11, -358537222), L = k(L, x, p, v, y[N + 3], 16, -722521979), v = k(v, L, x, p, y[N + 6], 23, 76029189), p = k(p, v, L, x, y[N + 9], 4, -640364487), x = k(x, p, v, L, y[N + 12], 11, -421815835), L = k(L, x, p, v, y[N + 15], 16, 530742520), v = k(v, L, x, p, y[N + 2], 23, -995338651), p = z(p, v, L, x, y[N + 0], 6, -198630844), x = z(x, p, v, L, y[N + 7], 10, 1126891415), L = z(L, x, p, v, y[N + 14], 15, -1416354905), v = z(v, L, x, p, y[N + 5], 21, -57434055), p = z(p, v, L, x, y[N + 12], 6, 1700485571), x = z(x, p, v, L, y[N + 3], 10, -1894986606), L = z(L, x, p, v, y[N + 10], 15, -1051523), v = z(v, L, x, p, y[N + 1], 21, -2054922799), p = z(p, v, L, x, y[N + 8], 6, 1873313359), x = z(x, p, v, L, y[N + 15], 10, -30611744), L = z(L, x, p, v, y[N + 6], 15, -1560198380), v = z(v, L, x, p, y[N + 13], 21, 1309151649), p = z(p, v, L, x, y[N + 4], 6, -145523070), x = z(x, p, v, L, y[N + 11], 10, -1120210379), L = z(L, x, p, v, y[N + 2], 15, 718787259), v = z(v, L, x, p, y[N + 9], 21, -343485551), p = p + _ >>> 0, v = v + H >>> 0, L = L + w >>> 0, x = x + A >>> 0;
    }
    return o.endian([p, v, L, x]);
  };
  d._ff = function(f, c, y, h, p, v, L) {
    var x = f + (c & y | ~c & h) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._gg = function(f, c, y, h, p, v, L) {
    var x = f + (c & h | y & ~h) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._hh = function(f, c, y, h, p, v, L) {
    var x = f + (c ^ y ^ h) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._ii = function(f, c, y, h, p, v, L) {
    var x = f + (y ^ (c | ~h)) + (p >>> 0) + L;
    return (x << v | x >>> 32 - v) + c;
  }, d._blocksize = 16, d._digestsize = 16, U3.exports = function(f, c) {
    if (f == null)
      throw new Error("Illegal argument " + f);
    var y = o.wordsToBytes(d(f, c));
    return c && c.asBytes ? y : c && c.asString ? l.bytesToString(y) : o.bytesToHex(y);
  };
})();
var Cj = U3.exports;
const Ej = /* @__PURE__ */ xd(Cj);
function H3(o = "", r = "") {
  return r || (typeof o != "string" && (o = ""), `https://sdn.geekzu.org/avatar/${Ej(o)}?s=40&r=G&d=`);
}
function Nj(o) {
  return window.SITE_URL ? window.SITE_URL + o : o;
}
function Rj(o) {
  let r;
  typeof o == "number" ? r = new Date(o) : r = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(o) ? o.replace(/-/g, "/") : o
  );
  const s = (f) => f < 10 ? "0" + f : f, l = [r.getFullYear(), r.getMonth() + 1, r.getDate()].map(s).join("-"), d = [r.getHours(), r.getMinutes(), r.getSeconds()].map(s).join(":");
  return l + " " + d;
}
function B3({ current: o, total: r, onChange: s }) {
  return r < 1 ? null : /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-pager", children: [
    o > 1 ? /* @__PURE__ */ C.jsxDEV("li", { className: "prev", children: /* @__PURE__ */ C.jsxDEV("a", { href: "#", onClick: () => s(o - 1), children: "«" }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null,
    o > 4 ? /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
      /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("a", { href: "#", onClick: () => s(1), children: "1" }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) : null,
    [
      o - 3,
      o - 2,
      o - 1,
      o,
      o + 1,
      o + 2,
      o + 3
    ].filter((l) => l > 0 && l <= r).map((l) => /* @__PURE__ */ C.jsxDEV("li", { className: Yv({ current: l === o }), children: /* @__PURE__ */ C.jsxDEV("a", { href: "#", onClick: () => s(l), children: l }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, l, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)),
    o < r - 3 ? /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
      /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("span", { children: "..." }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("a", { href: "#", onClick: () => s(r), children: r }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) : null,
    o < r ? /* @__PURE__ */ C.jsxDEV("li", { className: "next", children: /* @__PURE__ */ C.jsxDEV("a", { href: "#", onClick: () => s(o + 1), children: "»" }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/components/Paginator.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function Cu({ page: o = 1, filter: r }) {
  return dn({
    url: `comment?type=list&owner=${r.owner}&status=${r.status}&keyword=${r.keyword}&page=${o}`,
    method: "GET"
  });
}
async function xi(o, r) {
  return dn({
    url: `comment/${o}`,
    method: "PUT",
    body: r
  });
}
async function wj(o) {
  return dn({
    url: "comment",
    method: "POST",
    body: o
  });
}
async function Yb(o) {
  return dn({
    url: `comment/${o}`,
    method: "DELETE"
  });
}
function jj() {
  const { t: o } = ji(), r = P.useRef(null), s = P.useRef(null), l = P.useRef({}), d = wi((w) => w.user), [f, c] = P.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [y, h] = P.useReducer(
    function(w, A) {
      return { ...w, ...A };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [p, v] = P.useState({}), [L, x] = P.useState(!1), [N, j] = P.useState([]), M = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ C.jsxDEV(bu, { i18nKey: "all" }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 43,
          columnNumber: 30
        }, this) },
        { type: "mine", name: /* @__PURE__ */ C.jsxDEV(bu, { i18nKey: "mine" }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 44,
          columnNumber: 31
        }, this) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ C.jsxDEV(bu, { i18nKey: "approved" }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 50,
          columnNumber: 35
        }, this) },
        { type: "waiting", name: /* @__PURE__ */ C.jsxDEV(bu, { i18nKey: "waiting" }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 51,
          columnNumber: 34
        }, this) },
        { type: "spam", name: /* @__PURE__ */ C.jsxDEV(bu, { i18nKey: "spam" }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 52,
          columnNumber: 31
        }, this) }
      ]
    ]
  ];
  P.useEffect(() => {
    Cu({ page: f.page, filter: y }).then((w) => {
      c({ ...f, ...w }), j([]);
    });
  }, [y, f.page]);
  const k = (w) => [
    {
      key: "approved",
      name: o("approved button"),
      show: !0,
      disable: w && w.status === "approved",
      async action() {
        if (w) {
          switch (await xi(w.objectId, { status: "approved" }), f.data = f.data.filter(
            ({ objectId: A }) => A !== w.objectId
          ), w.status) {
            case "waiting":
              f.waitingCount -= 1;
              break;
            case "spam":
              f.spamCount -= 1;
              break;
          }
          c({ ...f });
        } else
          await Promise.all(
            N.map(
              (A) => xi(A, { status: "approved" })
            )
          ), Cu({ page: f.page, filter: y }).then((A) => {
            c({ ...f, ...A }), j([]);
          });
      }
    },
    {
      key: "waiting",
      name: o("waiting"),
      show: !0,
      disable: w && w.status === "waiting",
      async action() {
        w ? (await xi(w.objectId, { status: "waiting" }), f.data = f.data.filter(
          ({ objectId: A }) => A !== w.objectId
        ), w.status === "spam" && (f.spamCount -= 1), f.waitingCount += 1, c({ ...f })) : (await Promise.all(
          N.map(
            (A) => xi(A, { status: "waiting" })
          )
        ), Cu({ page: f.page, filter: y }).then((A) => {
          c({ ...f, ...A }), j([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: o(w ? "spam" : "mark as spam"),
      disable: w && w.status === "spam",
      async action() {
        w ? (await xi(w.objectId, { status: "spam" }), f.data = f.data.filter(
          ({ objectId: A }) => A !== w.objectId
        ), f.spamCount += 1, c({ ...f })) : (await Promise.all(
          N.map(
            (A) => xi(A, { status: "spam" })
          )
        ), Cu({ page: f.page, filter: y }).then((A) => {
          c({ ...f, ...A }), j([]);
        }));
      }
    },
    {
      key: "sticky",
      show: w && !w.rid && w.status === "approved",
      name: w && w.sticky ? o("disable sticky") : o("sticky"),
      async action(A) {
        A.preventDefault();
        const Y = !w.sticky;
        f.data.forEach((X) => {
          X.objectId === w.objectId && (X.sticky = Y);
        }), await xi(w.objectId, { sticky: Y ? 1 : 0 }), c({ ...f });
      }
    },
    {
      key: "edit",
      show: w,
      name: o("edit"),
      action() {
        const A = {};
        p.id !== w.objectId && p.action !== "edit" && (A.id = w.objectId, A.action = "edit"), v(A);
      }
    },
    {
      key: "reply",
      show: w && w.status === "approved",
      name: o("reply"),
      action() {
        const A = {};
        p.id !== w.objectId && p.action !== "reply" && (A.id = w.objectId, A.action = "reply"), v(A);
      }
    },
    {
      key: "delete",
      name: o("delete"),
      show: !0,
      async action() {
        const A = w ? o("delete one confirm", { nick: w.nick }) : o("delete multiple confirm");
        confirm(A) && (w ? (await Yb(w.objectId), f.data = f.data.filter(
          ({ objectId: Y }) => Y !== w.objectId
        ), c({ ...f })) : (await Promise.all(N.map(Yb)), Cu({ page: f.page, filter: y }).then((Y) => {
          c({ ...f, ...Y }), j([]);
        })));
      }
    }
  ].filter(({ show: A }) => A), z = async ({ pid: w, rid: A, url: Y, at: X }) => {
    const ne = s.current.value;
    if (!ne)
      return null;
    const { display_name: fe, email: le, url: pe } = d;
    await wj({
      nick: fe,
      mail: le,
      ua: navigator.userAgent,
      link: pe,
      url: Y,
      comment: ne,
      pid: w,
      rid: A || w,
      at: X
    }), location.reload();
  }, _ = async (w) => {
    const A = f.data[w];
    await xi(A.objectId, l.current), f.data[w] = { ...A, ...l.current }, c({ ...f }), v({});
  }, H = f.data.length && f.data.every(({ objectId: w }) => N.includes(w));
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV("div", { className: "main", children: /* @__PURE__ */ C.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ C.jsxDEV("h2", { children: o("manage comments") }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
        lineNumber: 279,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ C.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ C.jsxDEV("div", { className: "clear-fix", children: M.map(([w, A]) => /* @__PURE__ */ C.jsxDEV(
          "ul",
          {
            className: Yv("typecho-option-tabs", {
              right: w === "owner"
            }),
            children: A.map(({ type: Y, name: X }) => /* @__PURE__ */ C.jsxDEV(
              "li",
              {
                className: Yv({ current: Y === y[w] }),
                children: /* @__PURE__ */ C.jsxDEV(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => h({ [w]: Y }),
                    children: [
                      X,
                      w === "status" && Y !== "approved" && f[`${Y}Count`] > 0 ? /* @__PURE__ */ C.jsxDEV("span", { className: "balloon", children: f[`${Y}Count`] }, void 0, !1, {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 304,
                        columnNumber: 29
                      }, this) : null
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 296,
                    columnNumber: 25
                  },
                  this
                )
              },
              Y,
              !1,
              {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 292,
                columnNumber: 23
              },
              this
            ))
          },
          w,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
            lineNumber: 285,
            columnNumber: 19
          },
          this
        )) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 283,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ C.jsxDEV("form", { method: "get", children: [
          /* @__PURE__ */ C.jsxDEV("div", { className: "operate", children: [
            /* @__PURE__ */ C.jsxDEV("label", { children: [
              /* @__PURE__ */ C.jsxDEV("i", { className: "sr-only", children: o("select all") }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 319,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ C.jsxDEV(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: H,
                  onChange: () => j(
                    H ? [] : f.data.map(({ objectId: w }) => w)
                  )
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 320,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
              lineNumber: 318,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ C.jsxDEV("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ C.jsxDEV(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => x(!L),
                  children: [
                    /* @__PURE__ */ C.jsxDEV("i", { className: "sr-only", children: o("action") }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 339,
                      columnNumber: 25
                    }, this),
                    o("selected items"),
                    " ",
                    /* @__PURE__ */ C.jsxDEV("i", { className: "i-caret-down" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 340,
                      columnNumber: 47
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 334,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ C.jsxDEV(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: L ? "block" : "none" },
                  onClick: () => x(!1),
                  children: k().map(({ key: w, name: A, action: Y }) => /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("a", { href: "javascript:void(0)", onClick: Y, children: A }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 349,
                    columnNumber: 29
                  }, this) }, w, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 348,
                    columnNumber: 27
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 342,
                  columnNumber: 23
                },
                this
              ),
              " "
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
              lineNumber: 333,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
            lineNumber: 317,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ C.jsxDEV("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ C.jsxDEV(
              "input",
              {
                type: "text",
                ref: r,
                className: "text-s",
                placeholder: o("please input keywords")
              },
              void 0,
              !1,
              {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 363,
                columnNumber: 21
              },
              this
            ),
            " ",
            /* @__PURE__ */ C.jsxDEV(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (w) => {
                  w.preventDefault(), h({ keyword: r.current.value });
                },
                children: o("filter")
              },
              void 0,
              !1,
              {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 370,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
            lineNumber: 362,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 316,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 315,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ C.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ C.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ C.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ C.jsxDEV("col", { width: "3%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 392,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 393,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 394,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "71%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 395,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 391,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ C.jsxDEV("thead", { children: /* @__PURE__ */ C.jsxDEV("tr", { children: [
                /* @__PURE__ */ C.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 399,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 400,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: o("author") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 401,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: o("content") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 402,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 398,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 397,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ C.jsxDEV("tbody", { children: f.data.map(
                ({
                  objectId: w,
                  nick: A,
                  mail: Y,
                  avatar: X,
                  link: ne,
                  comment: fe,
                  ip: le,
                  addr: pe,
                  url: Xe,
                  status: ve,
                  rid: Ee,
                  pid: Re,
                  sticky: tt,
                  time: we,
                  insertedAt: Je
                }, kt) => p.id === w && p.action === "edit" ? /* @__PURE__ */ C.jsxDEV("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ C.jsxDEV("td", { children: " " }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 430,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ C.jsxDEV("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ C.jsxDEV("p", { children: [
                      /* @__PURE__ */ C.jsxDEV(
                        "label",
                        {
                          htmlFor: `comment-${w}-author`,
                          children: o("username")
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 434,
                          columnNumber: 37
                        },
                        this
                      ),
                      /* @__PURE__ */ C.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${w}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: A,
                          onChange: (Ge) => l.current.nick = Ge.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 439,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 433,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ C.jsxDEV("p", { children: [
                      /* @__PURE__ */ C.jsxDEV("label", { htmlFor: `comment-${w}-mail`, children: o("email") }, void 0, !1, {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 452,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ C.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${w}-mail`,
                          defaultValue: Y,
                          onChange: (Ge) => l.current.mail = Ge.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 455,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 451,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ C.jsxDEV("p", { children: [
                      /* @__PURE__ */ C.jsxDEV("label", { htmlFor: `comment-${w}-url`, children: o("homepage") }, void 0, !1, {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 468,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ C.jsxDEV(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${w}-author`,
                          defaultValue: ne,
                          onChange: (Ge) => l.current.link = Ge.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 471,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 467,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 432,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 431,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ C.jsxDEV("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ C.jsxDEV("p", { children: [
                      /* @__PURE__ */ C.jsxDEV("label", { htmlFor: `comment-${w}-text`, children: o("content") }, void 0, !1, {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 488,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ C.jsxDEV(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${w}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: fe,
                          onChange: (Ge) => l.current.comment = Ge.target.value
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 491,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 487,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ C.jsxDEV("p", { children: [
                      /* @__PURE__ */ C.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => _(kt),
                          children: o("submit")
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 504,
                          columnNumber: 37
                        },
                        this
                      ),
                      /* @__PURE__ */ C.jsxDEV(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => v({}),
                          children: o("cancel")
                        },
                        void 0,
                        !1,
                        {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 511,
                          columnNumber: 37
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 503,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 486,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 485,
                    columnNumber: 31
                  }, this)
                ] }, w, !0, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 429,
                  columnNumber: 29
                }, this) : /* @__PURE__ */ C.jsxDEV("tr", { id: `comment-${w}`, children: [
                  /* @__PURE__ */ C.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ C.jsxDEV(
                    "input",
                    {
                      type: "checkbox",
                      value: w,
                      checked: N.includes(w),
                      onChange: () => j(
                        N.includes(w) ? N.filter(
                          (Ge) => Ge !== w
                        ) : [...N, w]
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 525,
                      columnNumber: 33
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 524,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ C.jsxDEV("div", { className: "comment-avatar", children: /* @__PURE__ */ C.jsxDEV(
                    "img",
                    {
                      className: "avatar",
                      src: H3(Y, X),
                      alt: A,
                      width: "40",
                      height: "40"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 542,
                      columnNumber: 35
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 541,
                    columnNumber: 33
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                    lineNumber: 540,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ C.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ C.jsxDEV("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ C.jsxDEV("strong", { className: "comment-author", children: ne ? /* @__PURE__ */ C.jsxDEV(
                          "a",
                          {
                            href: /^https:\/\//.test(ne) ? ne : "https://" + ne,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: A
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 560,
                            columnNumber: 39
                          },
                          this
                        ) : A }, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 556,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ C.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 573,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ C.jsxDEV("span", { children: /* @__PURE__ */ C.jsxDEV(
                          "a",
                          {
                            href: `mailto:${Y}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: Y
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 575,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 574,
                          columnNumber: 35
                        }, this),
                        Y && /* @__PURE__ */ C.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 583,
                          columnNumber: 44
                        }, this),
                        /* @__PURE__ */ C.jsxDEV("span", { children: le }, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 584,
                          columnNumber: 35
                        }, this),
                        le && /* @__PURE__ */ C.jsxDEV("br", {}, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 585,
                          columnNumber: 42
                        }, this),
                        /* @__PURE__ */ C.jsxDEV("span", { children: pe }, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 586,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                        lineNumber: 555,
                        columnNumber: 33
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 551,
                      columnNumber: 31
                    },
                    this
                  ),
                  /* @__PURE__ */ C.jsxDEV(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ C.jsxDEV("div", { className: "comment-date", children: [
                          Rj(Je || we),
                          " ",
                          o("at"),
                          " ",
                          /* @__PURE__ */ C.jsxDEV(
                            "a",
                            {
                              href: Nj(Xe),
                              target: "_blank",
                              rel: "noreferrer",
                              children: Xe
                            },
                            void 0,
                            !1,
                            {
                              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 595,
                              columnNumber: 35
                            },
                            this
                          )
                        ] }, void 0, !0, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 593,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ C.jsxDEV(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: fe }
                          },
                          void 0,
                          !1,
                          {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 603,
                            columnNumber: 33
                          },
                          this
                        ),
                        p.id === w && p.action === "reply" ? /* @__PURE__ */ C.jsxDEV("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ C.jsxDEV("p", { children: [
                            /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "text", className: "sr-only", children: o("content") }, void 0, !1, {
                              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 611,
                              columnNumber: 39
                            }, this),
                            /* @__PURE__ */ C.jsxDEV(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: s
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                                lineNumber: 614,
                                columnNumber: 39
                              },
                              this
                            )
                          ] }, void 0, !0, {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 610,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ C.jsxDEV("p", { children: [
                            /* @__PURE__ */ C.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (Ge) => {
                                  Ge.preventDefault(), z({
                                    rid: Ee,
                                    pid: w,
                                    url: Xe,
                                    at: A
                                  });
                                },
                                children: o("reply")
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                                lineNumber: 623,
                                columnNumber: 39
                              },
                              this
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ C.jsxDEV(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => v({}),
                                children: o("cancel")
                              },
                              void 0,
                              !1,
                              {
                                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                                lineNumber: 639,
                                columnNumber: 39
                              },
                              this
                            )
                          ] }, void 0, !0, {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 622,
                            columnNumber: 37
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 609,
                          columnNumber: 35
                        }, this) : null,
                        /* @__PURE__ */ C.jsxDEV("div", { className: "comment-action hidden-by-mouse", children: k({
                          objectId: w,
                          nick: A,
                          status: ve,
                          rid: Ee,
                          pid: Re,
                          sticky: tt
                        }).map(
                          ({ key: Ge, disable: pn, name: wt, action: hn }) => pn ? /* @__PURE__ */ C.jsxDEV("span", { className: "weak", children: wt }, Ge, !1, {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                            lineNumber: 659,
                            columnNumber: 39
                          }, this) : /* @__PURE__ */ C.jsxDEV(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${Ge}`,
                              onClick: hn,
                              children: wt
                            },
                            Ge,
                            !1,
                            {
                              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                              lineNumber: 663,
                              columnNumber: 39
                            },
                            this
                          )
                        ) }, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                          lineNumber: 649,
                          columnNumber: 33
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                      lineNumber: 589,
                      columnNumber: 31
                    },
                    this
                  )
                ] }, w, !0, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                  lineNumber: 523,
                  columnNumber: 29
                }, this)
              ) }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
                lineNumber: 405,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
              lineNumber: 390,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
              lineNumber: 389,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
            lineNumber: 384,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ C.jsxDEV("form", { method: "get", children: /* @__PURE__ */ C.jsxDEV(
          B3,
          {
            current: f.page,
            total: f.totalPages,
            onChange: (w) => c({ ...f, page: w })
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
            lineNumber: 685,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 684,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
          lineNumber: 683,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
        lineNumber: 282,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
        lineNumber: 281,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
      lineNumber: 277,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
      lineNumber: 276,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/manage-comments/index.jsx",
    lineNumber: 274,
    columnNumber: 5
  }, this);
}
function Tj(o, r, s) {
  const l = new Blob([o], { type: s }), d = document.createElement("a"), f = URL.createObjectURL(l);
  d.href = f, d.download = r, document.body.appendChild(d), d.click(), setTimeout(() => {
    document.body.removeChild(d), window.URL.revokeObjectURL(f);
  }, 0);
}
function Dj(o) {
  return new Promise((r, s) => {
    const l = new FileReader();
    l.onload = (d) => r(d.target.result), l.onerror = s, l.readAsText(o);
  });
}
function kj() {
  const [o, r] = P.useState(!1), [s, l] = P.useState(!1), { t: d } = ji(), f = P.useRef(null), c = () => {
    confirm(d("import clear data confirm")) && f.current.click();
  }, y = async (p) => {
    try {
      const v = await Dj(p.target.files[0]), L = JSON.parse(v);
      if (!L || L.type !== "waline")
        return alert("import data format not support!");
      const x = L.tables.reduce(
        (z, _) => {
          var H;
          return z + (((H = L.data[_]) == null ? void 0 : H.length) || 0);
        },
        0
      );
      let N = 0;
      r([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: N, maxLength: x }
      ]);
      const j = {};
      for (const z of L.tables) {
        const _ = L.data[z];
        if (z !== "Users" && await dn({
          url: "db?table=" + z,
          method: "DELETE"
        }), j[z] || (j[z] = {}), !!Array.isArray(_))
          for (const H of _) {
            let w = !1;
            if (z === "Users") {
              const fe = await dn("user?email=" + H.email);
              fe.objectId && (w = fe.objectId);
            }
            const Y = z == "Users" && w ? "PUT" : "POST", X = z === "Comment" ? Object.assign({}, H, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : H;
            for (const fe in X)
              (X[fe] === null || X[fe] === void 0) && delete X[fe];
            const ne = await dn({
              url: `db?table=${z}${Y === "PUT" ? `&objectId=${w}` : ""}`,
              method: Y,
              body: X
            });
            j[z][H.objectId] = ne.objectId, N += 1, r([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: N, maxLength: x }
            ]);
          }
      }
      r(["comment data index relationship reconstruction"]);
      const M = L.data.Comment, k = [];
      for (const z of M) {
        const _ = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: H, field: w }) => {
          if (!z[w])
            return;
          const A = z[w], Y = j[H][z[w]];
          A && Y && A !== Y && (_[w] = Y);
        }), Object.keys(_).length && k.push([
          _,
          { objectId: j.Comment[z.objectId] }
        ]);
      }
      N = 0;
      for (const [z, _] of k)
        await dn({
          url: `db?table=Comment&objectId=${_.objectId}`,
          method: "PUT",
          body: z
        }), N += 1, r([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: N, maxLength: k.length }
        ]);
      alert(d("import success")), location.reload();
    } catch (v) {
      throw console.log(v), alert(v.message), v;
    } finally {
      r(!1), p.target.value = null;
    }
  }, h = async () => {
    l(!0);
    try {
      const p = await dn("db");
      Tj(
        JSON.stringify(p, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV("div", { className: "main", children: /* @__PURE__ */ C.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ C.jsxDEV("h2", { children: d("migration") }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ C.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ C.jsxDEV(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: h,
            disabled: s,
            children: d(s ? "exporting" : "export")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
            lineNumber: 192,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ C.jsxDEV(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: c,
              disabled: o,
              children: Array.isArray(o) ? d(...o) : d("import")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
              lineNumber: 202,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              ref: f,
              onChange: y,
              type: "file",
              style: { display: "none" }
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
              lineNumber: 212,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/migration/index.jsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}
new Proxy({}, {
  get(o, r) {
    throw new Error(`Module "https" has been externalized for browser compatibility. Cannot access "https.${r}" in client code.  See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
class xs {
  constructor(r, s, l) {
    Vr(this, "x");
    Vr(this, "y");
    Vr(this, "scale");
    this.x = r, this.y = s, this.scale = l;
  }
  toString() {
    return "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
  }
  static parse(r) {
    var l = r.style.transform.split(") "), d = l[0].substring(10).split(","), f = l.length > 1 ? l[1].substring(6) : "1", c = d.length > 1 ? d[0] : "0", y = d.length > 1 ? d[1] : "0";
    return new xs(parseFloat(c), parseFloat(y), parseFloat(f));
  }
}
class rd {
  constructor(r) {
    Vr(this, "x");
    Vr(this, "y");
    if (!r || !r.style.transformOrigin) {
      this.x = 0, this.y = 0;
      return;
    }
    var s = r.style.transformOrigin.split(" ");
    this.x = parseFloat(s[0]), this.y = parseFloat(s[1]);
  }
  toString() {
    return this.x + "px " + this.y + "px";
  }
}
function Oj(o, r) {
  let s = 0;
  return (...l) => {
    clearTimeout(s), s = setTimeout(() => o(...l), r);
  };
}
function Wv(o, r) {
  return o.toFixed(r);
}
function Fj(o, r) {
  const s = parseFloat(r.min), l = parseFloat(r.max);
  r.value = Wv(Math.max(s, Math.min(l, o)), 3);
}
function _j(o) {
  var r = new Image();
  return new Promise(function(s, l) {
    r.onload = () => {
      s(r);
    }, r.onerror = l, r.src = o;
  });
}
function Kb() {
  return {
    boundary: document.createElement("div"),
    viewport: document.createElement("div"),
    preview: document.createElement("img"),
    overlay: document.createElement("div"),
    zoomerWrap: document.createElement("div"),
    zoomer: document.createElement("input")
  };
}
function Pj(o) {
  return o === "ArrowLeft" ? [2, 0] : o === "ArrowUp" ? [0, 2] : o === "ArrowRight" ? [-2, 0] : [0, -2];
}
function Aj() {
  return document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
}
var Ss, Rn, Cs, Ou, Oe, I3, Gv, Y3, K3, W3, qv, G3, q3, Q3, X3, Qv, dd, J3, Xv, Jv, Zv, Z3, e5;
class Mj {
  constructor(r, s) {
    gs(this, Oe);
    Vr(this, "element");
    Vr(this, "elements");
    Vr(this, "options", {
      mouseWheelZoom: "on",
      viewport: {
        width: 220,
        height: 220,
        type: "square"
      },
      zoomerInputClass: "cr-slider"
    });
    gs(this, Ss, null);
    gs(this, Rn, 1);
    gs(this, Cs, null);
    gs(this, Ou, Oj(() => {
      mt(this, Oe, Xv).call(this);
    }, 200));
    if (r.classList.contains("cropt-container"))
      throw new Error("Cropt is already initialized on this element");
    s.viewport && (s.viewport = { ...this.options.viewport, ...s.viewport }), this.options = { ...this.options, ...s }, this.element = r, this.element.classList.add("cropt-container"), this.elements = Kb(), this.elements.zoomerWrap.classList.add("cr-slider-wrap"), this.elements.boundary.classList.add("cr-boundary"), this.elements.viewport.classList.add("cr-viewport"), this.elements.overlay.classList.add("cr-overlay"), this.elements.viewport.setAttribute("tabindex", "0"), mt(this, Oe, Qv).call(this, this.elements.preview), this.elements.boundary.appendChild(this.elements.preview), this.elements.boundary.appendChild(this.elements.viewport), this.elements.boundary.appendChild(this.elements.overlay), this.elements.zoomer.type = "range", this.elements.zoomer.step = "0.001", this.elements.zoomer.value = "1", this.elements.zoomer.setAttribute("aria-label", "zoom"), this.element.appendChild(this.elements.boundary), this.element.appendChild(this.elements.zoomerWrap), this.elements.zoomerWrap.appendChild(this.elements.zoomer), mt(this, Oe, Gv).call(this), mt(this, Oe, G3).call(this), mt(this, Oe, q3).call(this);
  }
  /**
   * Bind an image from an src string.
   * Returns a Promise which resolves when the image has been loaded and state is initialized.
   */
  bind(r, s = null) {
    if (!r)
      throw new Error("src cannot be empty");
    return ed(this, Ss, s), _j(r).then((l) => {
      mt(this, Oe, X3).call(this, l), mt(this, Oe, Jv).call(this);
    });
  }
  /**
   * Returns a Promise resolving to an HTMLCanvasElement object for the cropped image.
   * If size is specified, the image will be scaled with its longest side set to size.
   */
  toCanvas(r = null) {
    var s = this.elements.viewport.getBoundingClientRect(), l = s.width / s.height, d = mt(this, Oe, I3).call(this), f = d.right - d.left, c = d.bottom - d.top;
    return r !== null && (l > 1 ? (f = r, c = r / l) : (c = r, f = r * l)), Promise.resolve(mt(this, Oe, K3).call(this, d, f, c));
  }
  toBlob(r = null, s = "image/webp", l = 1) {
    return s === "image/webp" && l < 1 && !Aj() && (s = "image/jpeg"), new Promise((d, f) => {
      this.toCanvas(r).then((c) => {
        c.toBlob((y) => {
          y === null ? f("Canvas blob is null") : d(y);
        }, s, l);
      });
    });
  }
  refresh() {
    mt(this, Oe, Jv).call(this);
  }
  setOptions(r) {
    const s = this.options.viewport.width, l = this.options.viewport.height;
    r.viewport && (r.viewport = { ...this.options.viewport, ...r.viewport }), this.options = { ...this.options, ...r }, mt(this, Oe, Gv).call(this), (this.options.viewport.width !== s || this.options.viewport.height !== l) && this.refresh();
  }
  setZoom(r) {
    Fj(r, this.elements.zoomer);
    var s = new Event("input");
    this.elements.zoomer.dispatchEvent(s);
  }
  destroy() {
    Wt(this, Cs) && document.removeEventListener("keydown", Wt(this, Cs)), this.element.removeChild(this.elements.boundary), this.element.classList.remove("cropt-container"), this.element.removeChild(this.elements.zoomerWrap), this.elements = Kb();
  }
}
Ss = new WeakMap(), Rn = new WeakMap(), Cs = new WeakMap(), Ou = new WeakMap(), Oe = new WeakSet(), I3 = function() {
  var r = this.elements.preview.getBoundingClientRect(), s = this.elements.viewport.getBoundingClientRect(), l = s.left - r.left, d = s.top - r.top, f = (s.width - this.elements.viewport.offsetWidth) / 2, c = (s.height - this.elements.viewport.offsetHeight) / 2, y = l + this.elements.viewport.offsetWidth + f, h = d + this.elements.viewport.offsetHeight + c;
  return l = Math.max(0, l / Wt(this, Rn)), d = Math.max(0, d / Wt(this, Rn)), y = Math.max(0, y / Wt(this, Rn)), h = Math.max(0, h / Wt(this, Rn)), {
    left: Math.round(l),
    top: Math.round(d),
    right: Math.round(y),
    bottom: Math.round(h)
  };
}, Gv = function() {
  this.elements.zoomer.className = this.options.zoomerInputClass;
  const r = "cr-vp-circle", s = this.elements.viewport;
  this.options.viewport.type === "circle" ? s.classList.add(r) : s.classList.remove(r), s.style.width = this.options.viewport.width + "px", s.style.height = this.options.viewport.height + "px";
}, Y3 = function(r) {
  var s = r.right - r.left, l = r.bottom - r.top, d = document.createElement("canvas"), f = d.getContext("2d");
  if (f === null)
    throw new Error("Canvas context cannot be null");
  return d.width = s, d.height = l, f.drawImage(this.elements.preview, r.left, r.top, s, l, 0, 0, d.width, d.height), d;
}, K3 = function(r, s, l) {
  var d = mt(this, Oe, Y3).call(this, r), f = d.getContext("2d"), c = document.createElement("canvas"), y = c.getContext("2d"), h = document.createElement("canvas"), p = h.getContext("2d");
  if (h.width = s, h.height = l, p === null || f === null || y === null)
    throw new Error("Canvas context cannot be null");
  for (var v = {
    width: d.width,
    height: d.height
  }; v.width * 0.5 > h.width; ) {
    let L = v.width, x = v.height;
    v = {
      width: Math.floor(v.width * 0.5),
      height: Math.floor(v.height * 0.5)
    }, c.width = L, c.height = x, y.clearRect(0, 0, c.width, c.height), y.drawImage(d, 0, 0), f.clearRect(0, 0, L, x), f.drawImage(c, 0, 0, L, x, 0, 0, v.width, v.height);
  }
  return p.drawImage(d, 0, 0, v.width, v.height, 0, 0, h.width, h.height), h;
}, W3 = function() {
  var r = Wt(this, Rn), s = this.elements.viewport.getBoundingClientRect(), l = s.width, d = s.height, f = this.elements.boundary.clientWidth / 2, c = this.elements.boundary.clientHeight / 2, y = this.elements.preview.getBoundingClientRect(), h = y.width, p = y.height, v = l / 2, L = d / 2, x = (v / r - f) * -1, N = x - (h * (1 / r) - l * (1 / r)), j = (L / r - c) * -1, M = j - (p * (1 / r) - d * (1 / r)), k = 1 / r * v, z = h * (1 / r) - k, _ = 1 / r * L, H = p * (1 / r) - _;
  return {
    translate: {
      maxX: x,
      minX: N,
      maxY: j,
      minY: M
    },
    origin: {
      maxX: z,
      minX: k,
      maxY: H,
      minY: _
    }
  };
}, qv = function(r, s) {
  const l = this.elements.preview.getBoundingClientRect(), d = this.elements.viewport.getBoundingClientRect(), f = xs.parse(this.elements.preview);
  d.top > l.top + s && d.bottom < l.bottom + s && (f.y = f.y + s), d.left > l.left + r && d.right < l.right + r && (f.x = f.x + r), mt(this, Oe, Zv).call(this, f), Wt(this, Ou).call(this);
}, G3 = function() {
  let r = 0, s = 0, l = [], d = 0, f = (p) => {
    p.preventDefault();
    const v = l.findIndex((L) => L.pointerId === p.pointerId);
    if (v !== -1) {
      if (l[v] = p, l.length === 2) {
        let L = l[0], x = l[1], N = Math.sqrt((L.pageX - x.pageX) * (L.pageX - x.pageX) + (L.pageY - x.pageY) * (L.pageY - x.pageY));
        d === 0 && (d = N / Wt(this, Rn)), this.setZoom(N / d);
        return;
      } else if (d !== 0)
        return;
      mt(this, Oe, qv).call(this, p.pageX - r, p.pageY - s), r = p.pageX, s = p.pageY;
    }
  }, c = (p) => {
    const v = l.findIndex((L) => L.pointerId === p.pointerId);
    v !== -1 && l.splice(v, 1), l.length === 0 && (this.elements.overlay.removeEventListener("pointermove", f), this.elements.overlay.removeEventListener("pointerup", c), this.elements.overlay.removeEventListener("pointerout", c), mt(this, Oe, dd).call(this, !1, this.elements.preview), d = 0);
  }, y = (p) => {
    p.button || (p.preventDefault(), l.push(p), this.elements.overlay.setPointerCapture(p.pointerId), !(l.length > 1) && (r = p.pageX, s = p.pageY, mt(this, Oe, dd).call(this, !0, this.elements.preview), this.elements.overlay.addEventListener("pointermove", f), this.elements.overlay.addEventListener("pointerup", c), this.elements.overlay.addEventListener("pointerout", c)));
  }, h = (p) => {
    if (document.activeElement === this.elements.viewport) {
      if (p.shiftKey && (p.key === "ArrowUp" || p.key === "ArrowDown")) {
        p.preventDefault();
        let v = parseFloat(this.elements.zoomer.value), L = p.key === "ArrowUp" ? 0.01 : -0.01;
        this.setZoom(v + L);
      } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(p.key)) {
        p.preventDefault();
        let [v, L] = Pj(p.key);
        mt(this, Oe, qv).call(this, v, L);
      }
    }
  };
  this.elements.overlay.addEventListener("pointerdown", y), document.addEventListener("keydown", h), ed(this, Cs, h);
}, q3 = function() {
  let r = () => {
    mt(this, Oe, Q3).call(this);
  }, s = (l) => {
    const d = this.options.mouseWheelZoom;
    let f = 0;
    d === "off" || d === "ctrl" && !l.ctrlKey || (l.deltaY && (f = l.deltaY * -1 / 2e3), l.preventDefault(), this.setZoom(Wt(this, Rn) + f * Wt(this, Rn)));
  };
  this.elements.zoomer.addEventListener("input", r), this.elements.boundary.addEventListener("wheel", s);
}, Q3 = function() {
  const r = xs.parse(this.elements.preview), s = new rd(this.elements.preview);
  let l = () => {
    this.elements.preview.style.transform = r.toString(), this.elements.preview.style.transformOrigin = s.toString();
  };
  ed(this, Rn, parseFloat(this.elements.zoomer.value)), r.scale = Wt(this, Rn), l();
  var d = mt(this, Oe, W3).call(this), f = d.translate, c = d.origin;
  r.x >= f.maxX && (s.x = c.minX, r.x = f.maxX), r.x <= f.minX && (s.x = c.maxX, r.x = f.minX), r.y >= f.maxY && (s.y = c.minY, r.y = f.maxY), r.y <= f.minY && (s.y = c.maxY, r.y = f.minY), l(), Wt(this, Ou).call(this);
}, X3 = function(r) {
  mt(this, Oe, Qv).call(this, r), this.elements.preview.parentNode && this.elements.preview.parentNode.replaceChild(r, this.elements.preview), this.elements.preview = r;
}, Qv = function(r) {
  r.classList.add("cr-image"), r.setAttribute("alt", "preview"), mt(this, Oe, dd).call(this, !1, r);
}, dd = function(r, s) {
  s.setAttribute("aria-grabbed", r.toString()), this.elements.boundary.setAttribute("aria-dropeffect", r ? "move" : "none");
}, J3 = function() {
  return this.elements.preview.offsetParent !== null;
}, Xv = function() {
  const r = this.elements.boundary.getBoundingClientRect(), s = this.elements.preview.getBoundingClientRect(), l = this.elements.overlay;
  l.style.width = s.width + "px", l.style.height = s.height + "px", l.style.top = s.top - r.top + "px", l.style.left = s.left - r.left + "px";
}, Jv = function() {
  if (!mt(this, Oe, J3).call(this))
    return;
  const r = this.elements.preview, s = new xs(0, 0, 1);
  r.style.transform = s.toString(), r.style.transformOrigin = new rd().toString(), mt(this, Oe, Z3).call(this), s.scale = Wt(this, Rn), r.style.transform = s.toString(), r.style.transformOrigin = new rd().toString(), mt(this, Oe, e5).call(this), mt(this, Oe, Xv).call(this);
}, Zv = function(r) {
  var s = Wt(this, Rn), l = this.elements.preview.getBoundingClientRect(), d = this.elements.viewport.getBoundingClientRect(), f = new rd(this.elements.preview), c = d.top - l.top + d.height / 2, y = d.left - l.left + d.width / 2, h = { x: y / s, y: c / s }, p = {
    x: (h.x - f.x) * (1 - s),
    y: (h.y - f.y) * (1 - s)
  };
  r.x -= p.x, r.y -= p.y, this.elements.preview.style.transform = r.toString(), this.elements.preview.style.transformOrigin = h.x + "px " + h.y + "px";
}, Z3 = function() {
  var r = 0.85, s = this.elements.boundary.getBoundingClientRect(), l = this.elements.preview, d = this.elements.viewport.getBoundingClientRect(), f = d.width / l.naturalWidth, c = d.height / l.naturalHeight, y = Math.max(f, c);
  y >= r && (r += y), this.elements.zoomer.min = Wv(y, 3), this.elements.zoomer.max = Wv(r, 3);
  var h = Math.max(s.width / l.naturalWidth, s.height / l.naturalHeight);
  this.setZoom(Wt(this, Ss) !== null ? Wt(this, Ss) : h);
}, e5 = function() {
  var r = this.elements.preview.getBoundingClientRect(), s = this.elements.viewport.getBoundingClientRect(), l = this.elements.boundary.getBoundingClientRect(), d = s.left - l.left, f = s.top - l.top, c = d - (r.width - s.width) / 2, y = f - (r.height - s.height) / 2, h = new xs(c, y, Wt(this, Rn));
  mt(this, Oe, Zv).call(this, h);
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var mo;
((o) => {
  const r = class {
    constructor(h, p, v, L) {
      if (this.version = h, this.errorCorrectionLevel = p, this.modules = [], this.isFunction = [], h < r.MIN_VERSION || h > r.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (L < -1 || L > 7)
        throw new RangeError("Mask value out of range");
      this.size = h * 4 + 17;
      let x = [];
      for (let j = 0; j < this.size; j++)
        x.push(!1);
      for (let j = 0; j < this.size; j++)
        this.modules.push(x.slice()), this.isFunction.push(x.slice());
      this.drawFunctionPatterns();
      const N = this.addEccAndInterleave(v);
      if (this.drawCodewords(N), L == -1) {
        let j = 1e9;
        for (let M = 0; M < 8; M++) {
          this.applyMask(M), this.drawFormatBits(M);
          const k = this.getPenaltyScore();
          k < j && (L = M, j = k), this.applyMask(M);
        }
      }
      f(0 <= L && L <= 7), this.mask = L, this.applyMask(L), this.drawFormatBits(L), this.isFunction = [];
    }
    static encodeText(h, p) {
      const v = o.QrSegment.makeSegments(h);
      return r.encodeSegments(v, p);
    }
    static encodeBinary(h, p) {
      const v = o.QrSegment.makeBytes(h);
      return r.encodeSegments([v], p);
    }
    static encodeSegments(h, p, v = 1, L = 40, x = -1, N = !0) {
      if (!(r.MIN_VERSION <= v && v <= L && L <= r.MAX_VERSION) || x < -1 || x > 7)
        throw new RangeError("Invalid value");
      let j, M;
      for (j = v; ; j++) {
        const H = r.getNumDataCodewords(j, p) * 8, w = y.getTotalBits(h, j);
        if (w <= H) {
          M = w;
          break;
        }
        if (j >= L)
          throw new RangeError("Data too long");
      }
      for (const H of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH])
        N && M <= r.getNumDataCodewords(j, H) * 8 && (p = H);
      let k = [];
      for (const H of h) {
        l(H.mode.modeBits, 4, k), l(H.numChars, H.mode.numCharCountBits(j), k);
        for (const w of H.getData())
          k.push(w);
      }
      f(k.length == M);
      const z = r.getNumDataCodewords(j, p) * 8;
      f(k.length <= z), l(0, Math.min(4, z - k.length), k), l(0, (8 - k.length % 8) % 8, k), f(k.length % 8 == 0);
      for (let H = 236; k.length < z; H ^= 253)
        l(H, 8, k);
      let _ = [];
      for (; _.length * 8 < k.length; )
        _.push(0);
      return k.forEach((H, w) => _[w >>> 3] |= H << 7 - (w & 7)), new r(j, p, _, x);
    }
    getModule(h, p) {
      return 0 <= h && h < this.size && 0 <= p && p < this.size && this.modules[p][h];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let v = 0; v < this.size; v++)
        this.setFunctionModule(6, v, v % 2 == 0), this.setFunctionModule(v, 6, v % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const h = this.getAlignmentPatternPositions(), p = h.length;
      for (let v = 0; v < p; v++)
        for (let L = 0; L < p; L++)
          v == 0 && L == 0 || v == 0 && L == p - 1 || v == p - 1 && L == 0 || this.drawAlignmentPattern(h[v], h[L]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(h) {
      const p = this.errorCorrectionLevel.formatBits << 3 | h;
      let v = p;
      for (let x = 0; x < 10; x++)
        v = v << 1 ^ (v >>> 9) * 1335;
      const L = (p << 10 | v) ^ 21522;
      f(L >>> 15 == 0);
      for (let x = 0; x <= 5; x++)
        this.setFunctionModule(8, x, d(L, x));
      this.setFunctionModule(8, 7, d(L, 6)), this.setFunctionModule(8, 8, d(L, 7)), this.setFunctionModule(7, 8, d(L, 8));
      for (let x = 9; x < 15; x++)
        this.setFunctionModule(14 - x, 8, d(L, x));
      for (let x = 0; x < 8; x++)
        this.setFunctionModule(this.size - 1 - x, 8, d(L, x));
      for (let x = 8; x < 15; x++)
        this.setFunctionModule(8, this.size - 15 + x, d(L, x));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let h = this.version;
      for (let v = 0; v < 12; v++)
        h = h << 1 ^ (h >>> 11) * 7973;
      const p = this.version << 12 | h;
      f(p >>> 18 == 0);
      for (let v = 0; v < 18; v++) {
        const L = d(p, v), x = this.size - 11 + v % 3, N = Math.floor(v / 3);
        this.setFunctionModule(x, N, L), this.setFunctionModule(N, x, L);
      }
    }
    drawFinderPattern(h, p) {
      for (let v = -4; v <= 4; v++)
        for (let L = -4; L <= 4; L++) {
          const x = Math.max(Math.abs(L), Math.abs(v)), N = h + L, j = p + v;
          0 <= N && N < this.size && 0 <= j && j < this.size && this.setFunctionModule(N, j, x != 2 && x != 4);
        }
    }
    drawAlignmentPattern(h, p) {
      for (let v = -2; v <= 2; v++)
        for (let L = -2; L <= 2; L++)
          this.setFunctionModule(h + L, p + v, Math.max(Math.abs(L), Math.abs(v)) != 1);
    }
    setFunctionModule(h, p, v) {
      this.modules[p][h] = v, this.isFunction[p][h] = !0;
    }
    addEccAndInterleave(h) {
      const p = this.version, v = this.errorCorrectionLevel;
      if (h.length != r.getNumDataCodewords(p, v))
        throw new RangeError("Invalid argument");
      const L = r.NUM_ERROR_CORRECTION_BLOCKS[v.ordinal][p], x = r.ECC_CODEWORDS_PER_BLOCK[v.ordinal][p], N = Math.floor(r.getNumRawDataModules(p) / 8), j = L - N % L, M = Math.floor(N / L);
      let k = [];
      const z = r.reedSolomonComputeDivisor(x);
      for (let H = 0, w = 0; H < L; H++) {
        let A = h.slice(w, w + M - x + (H < j ? 0 : 1));
        w += A.length;
        const Y = r.reedSolomonComputeRemainder(A, z);
        H < j && A.push(0), k.push(A.concat(Y));
      }
      let _ = [];
      for (let H = 0; H < k[0].length; H++)
        k.forEach((w, A) => {
          (H != M - x || A >= j) && _.push(w[H]);
        });
      return f(_.length == N), _;
    }
    drawCodewords(h) {
      if (h.length != Math.floor(r.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let p = 0;
      for (let v = this.size - 1; v >= 1; v -= 2) {
        v == 6 && (v = 5);
        for (let L = 0; L < this.size; L++)
          for (let x = 0; x < 2; x++) {
            const N = v - x, M = (v + 1 & 2) == 0 ? this.size - 1 - L : L;
            !this.isFunction[M][N] && p < h.length * 8 && (this.modules[M][N] = d(h[p >>> 3], 7 - (p & 7)), p++);
          }
      }
      f(p == h.length * 8);
    }
    applyMask(h) {
      if (h < 0 || h > 7)
        throw new RangeError("Mask value out of range");
      for (let p = 0; p < this.size; p++)
        for (let v = 0; v < this.size; v++) {
          let L;
          switch (h) {
            case 0:
              L = (v + p) % 2 == 0;
              break;
            case 1:
              L = p % 2 == 0;
              break;
            case 2:
              L = v % 3 == 0;
              break;
            case 3:
              L = (v + p) % 3 == 0;
              break;
            case 4:
              L = (Math.floor(v / 3) + Math.floor(p / 2)) % 2 == 0;
              break;
            case 5:
              L = v * p % 2 + v * p % 3 == 0;
              break;
            case 6:
              L = (v * p % 2 + v * p % 3) % 2 == 0;
              break;
            case 7:
              L = ((v + p) % 2 + v * p % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[p][v] && L && (this.modules[p][v] = !this.modules[p][v]);
        }
    }
    getPenaltyScore() {
      let h = 0;
      for (let x = 0; x < this.size; x++) {
        let N = !1, j = 0, M = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[x][k] == N ? (j++, j == 5 ? h += r.PENALTY_N1 : j > 5 && h++) : (this.finderPenaltyAddHistory(j, M), N || (h += this.finderPenaltyCountPatterns(M) * r.PENALTY_N3), N = this.modules[x][k], j = 1);
        h += this.finderPenaltyTerminateAndCount(N, j, M) * r.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let N = !1, j = 0, M = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[k][x] == N ? (j++, j == 5 ? h += r.PENALTY_N1 : j > 5 && h++) : (this.finderPenaltyAddHistory(j, M), N || (h += this.finderPenaltyCountPatterns(M) * r.PENALTY_N3), N = this.modules[k][x], j = 1);
        h += this.finderPenaltyTerminateAndCount(N, j, M) * r.PENALTY_N3;
      }
      for (let x = 0; x < this.size - 1; x++)
        for (let N = 0; N < this.size - 1; N++) {
          const j = this.modules[x][N];
          j == this.modules[x][N + 1] && j == this.modules[x + 1][N] && j == this.modules[x + 1][N + 1] && (h += r.PENALTY_N2);
        }
      let p = 0;
      for (const x of this.modules)
        p = x.reduce((N, j) => N + (j ? 1 : 0), p);
      const v = this.size * this.size, L = Math.ceil(Math.abs(p * 20 - v * 10) / v) - 1;
      return f(0 <= L && L <= 9), h += L * r.PENALTY_N4, f(0 <= h && h <= 2568888), h;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const h = Math.floor(this.version / 7) + 2, p = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (h * 2 - 2)) * 2;
        let v = [6];
        for (let L = this.size - 7; v.length < h; L -= p)
          v.splice(1, 0, L);
        return v;
      }
    }
    static getNumRawDataModules(h) {
      if (h < r.MIN_VERSION || h > r.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let p = (16 * h + 128) * h + 64;
      if (h >= 2) {
        const v = Math.floor(h / 7) + 2;
        p -= (25 * v - 10) * v - 55, h >= 7 && (p -= 36);
      }
      return f(208 <= p && p <= 29648), p;
    }
    static getNumDataCodewords(h, p) {
      return Math.floor(r.getNumRawDataModules(h) / 8) - r.ECC_CODEWORDS_PER_BLOCK[p.ordinal][h] * r.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][h];
    }
    static reedSolomonComputeDivisor(h) {
      if (h < 1 || h > 255)
        throw new RangeError("Degree out of range");
      let p = [];
      for (let L = 0; L < h - 1; L++)
        p.push(0);
      p.push(1);
      let v = 1;
      for (let L = 0; L < h; L++) {
        for (let x = 0; x < p.length; x++)
          p[x] = r.reedSolomonMultiply(p[x], v), x + 1 < p.length && (p[x] ^= p[x + 1]);
        v = r.reedSolomonMultiply(v, 2);
      }
      return p;
    }
    static reedSolomonComputeRemainder(h, p) {
      let v = p.map((L) => 0);
      for (const L of h) {
        const x = L ^ v.shift();
        v.push(0), p.forEach((N, j) => v[j] ^= r.reedSolomonMultiply(N, x));
      }
      return v;
    }
    static reedSolomonMultiply(h, p) {
      if (h >>> 8 || p >>> 8)
        throw new RangeError("Byte out of range");
      let v = 0;
      for (let L = 7; L >= 0; L--)
        v = v << 1 ^ (v >>> 7) * 285, v ^= (p >>> L & 1) * h;
      return f(v >>> 8 == 0), v;
    }
    finderPenaltyCountPatterns(h) {
      const p = h[1];
      f(p <= this.size * 3);
      const v = p > 0 && h[2] == p && h[3] == p * 3 && h[4] == p && h[5] == p;
      return (v && h[0] >= p * 4 && h[6] >= p ? 1 : 0) + (v && h[6] >= p * 4 && h[0] >= p ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(h, p, v) {
      return h && (this.finderPenaltyAddHistory(p, v), p = 0), p += this.size, this.finderPenaltyAddHistory(p, v), this.finderPenaltyCountPatterns(v);
    }
    finderPenaltyAddHistory(h, p) {
      p[0] == 0 && (h += this.size), p.pop(), p.unshift(h);
    }
  };
  let s = r;
  s.MIN_VERSION = 1, s.MAX_VERSION = 40, s.PENALTY_N1 = 3, s.PENALTY_N2 = 3, s.PENALTY_N3 = 40, s.PENALTY_N4 = 10, s.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], s.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], o.QrCode = s;
  function l(h, p, v) {
    if (p < 0 || p > 31 || h >>> p)
      throw new RangeError("Value out of range");
    for (let L = p - 1; L >= 0; L--)
      v.push(h >>> L & 1);
  }
  function d(h, p) {
    return (h >>> p & 1) != 0;
  }
  function f(h) {
    if (!h)
      throw new Error("Assertion error");
  }
  const c = class {
    constructor(h, p, v) {
      if (this.mode = h, this.numChars = p, this.bitData = v, p < 0)
        throw new RangeError("Invalid argument");
      this.bitData = v.slice();
    }
    static makeBytes(h) {
      let p = [];
      for (const v of h)
        l(v, 8, p);
      return new c(c.Mode.BYTE, h.length, p);
    }
    static makeNumeric(h) {
      if (!c.isNumeric(h))
        throw new RangeError("String contains non-numeric characters");
      let p = [];
      for (let v = 0; v < h.length; ) {
        const L = Math.min(h.length - v, 3);
        l(parseInt(h.substr(v, L), 10), L * 3 + 1, p), v += L;
      }
      return new c(c.Mode.NUMERIC, h.length, p);
    }
    static makeAlphanumeric(h) {
      if (!c.isAlphanumeric(h))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let p = [], v;
      for (v = 0; v + 2 <= h.length; v += 2) {
        let L = c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v)) * 45;
        L += c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v + 1)), l(L, 11, p);
      }
      return v < h.length && l(c.ALPHANUMERIC_CHARSET.indexOf(h.charAt(v)), 6, p), new c(c.Mode.ALPHANUMERIC, h.length, p);
    }
    static makeSegments(h) {
      return h == "" ? [] : c.isNumeric(h) ? [c.makeNumeric(h)] : c.isAlphanumeric(h) ? [c.makeAlphanumeric(h)] : [c.makeBytes(c.toUtf8ByteArray(h))];
    }
    static makeEci(h) {
      let p = [];
      if (h < 0)
        throw new RangeError("ECI assignment value out of range");
      if (h < 128)
        l(h, 8, p);
      else if (h < 16384)
        l(2, 2, p), l(h, 14, p);
      else if (h < 1e6)
        l(6, 3, p), l(h, 21, p);
      else
        throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, p);
    }
    static isNumeric(h) {
      return c.NUMERIC_REGEX.test(h);
    }
    static isAlphanumeric(h) {
      return c.ALPHANUMERIC_REGEX.test(h);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(h, p) {
      let v = 0;
      for (const L of h) {
        const x = L.mode.numCharCountBits(p);
        if (L.numChars >= 1 << x)
          return 1 / 0;
        v += 4 + x + L.bitData.length;
      }
      return v;
    }
    static toUtf8ByteArray(h) {
      h = encodeURI(h);
      let p = [];
      for (let v = 0; v < h.length; v++)
        h.charAt(v) != "%" ? p.push(h.charCodeAt(v)) : (p.push(parseInt(h.substr(v + 1, 2), 16)), v += 2);
      return p;
    }
  };
  let y = c;
  y.NUMERIC_REGEX = /^[0-9]*$/, y.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, y.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", o.QrSegment = y;
})(mo || (mo = {}));
((o) => {
  ((r) => {
    const s = class {
      constructor(d, f) {
        this.ordinal = d, this.formatBits = f;
      }
    };
    let l = s;
    l.LOW = new s(0, 1), l.MEDIUM = new s(1, 0), l.QUARTILE = new s(2, 3), l.HIGH = new s(3, 2), r.Ecc = l;
  })(o.QrCode || (o.QrCode = {}));
})(mo || (mo = {}));
((o) => {
  ((r) => {
    const s = class {
      constructor(d, f) {
        this.modeBits = d, this.numBitsCharCount = f;
      }
      numCharCountBits(d) {
        return this.numBitsCharCount[Math.floor((d + 7) / 17)];
      }
    };
    let l = s;
    l.NUMERIC = new s(1, [10, 12, 14]), l.ALPHANUMERIC = new s(2, [9, 11, 13]), l.BYTE = new s(4, [8, 16, 16]), l.KANJI = new s(8, [8, 10, 12]), l.ECI = new s(7, [0, 0, 0]), r.Mode = l;
  })(o.QrSegment || (o.QrSegment = {}));
})(mo || (mo = {}));
var id = mo;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
id.QrCode.Ecc.LOW, id.QrCode.Ecc.MEDIUM, id.QrCode.Ecc.QUARTILE, id.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function Vj() {
  const [o, r] = P.useState(!1), [s, l] = P.useState(!1), [d, f] = P.useState(!1), [c, y] = P.useState(!1), h = Fu(), p = wi((ne) => ne.user), { t: v } = ji();
  let L = null, x = null;
  const N = async function(ne) {
    try {
      ne.preventDefault(), l(!0);
      const fe = ne.target.screenName.value;
      let le;
      x ? le = x : le = ne.target.avatar.files[0];
      let pe = p.avatar;
      le && (pe = await z(le)), await h.user.updateProfile({ display_name: fe, avatar: pe });
    } catch (fe) {
      alert(fe);
    } finally {
      l(!1), location.reload();
    }
  }, j = (ne) => {
    ne.preventDefault();
    const fe = document.getElementById("image-container"), le = document.getElementById("image-container-wrapper"), pe = document.getElementById("image-result");
    if (le.setAttribute("style", "display: none;"), ne.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", pe.removeAttribute("src"), pe.setAttribute("style", "display: none;");
      return;
    }
    const Xe = ne.target.files[0].size;
    if (parseInt(Xe) > 1 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    le.removeAttribute("style"), L && L.destroy(), L = new Mj(fe, {
      viewport: {
        width: 219,
        height: 220,
        type: "square"
      },
      mouseWheelZoom: "on"
    });
    const ve = new FileReader();
    ve.onload = function(Ee) {
      L.bind(Ee.target.result);
    }, ve.readAsDataURL(ne.target.files[0]);
  }, M = async (ne) => {
    ne.preventDefault(), L.toCanvas(300).then(async (le) => {
      const pe = document.getElementById("image-result");
      pe.removeAttribute("style"), pe.src = le.toDataURL("image/jpeg", 1);
    });
    const fe = await L.toBlob(300, "image/jpeg");
    x = new File([fe], "image.jpeg", { type: fe.type });
  }, k = (ne) => {
    ne.preventDefault(), L.refresh(), document.getElementById("image-result").setAttribute("style", "display: none;");
  }, z = async function(ne) {
    try {
      let fe = new FormData();
      return fe.append("file", ne), (await (await fetch("https://profileupload.shngm.id/upload/image", {
        method: "POST",
        body: fe
      })).json()).imageUrl;
    } catch (fe) {
      throw console.error(fe), fe;
    }
  }, _ = async () => {
    try {
      f(!0);
      const ne = await fetch(`https://api.shngm.io/v1/sys/get-user-by-email?email=${p.email}`, {
        headers: {
          Authorization: "Bearer VSa@JSIJHJK%Jaa@PgcJ@C!SKkfd&OCc8"
        }
      });
      if (!ne.ok) {
        f(!1);
        const pe = await ne.json();
        return alert(`Error: ${pe.message}`);
      }
      const le = (await ne.json()).data.user_id;
      await h.user.updateProfile({ url: `https://go.shng.me/user/${le}` }), f(!1);
    } catch (ne) {
      return console.error("error", ne), f(!1), alert(`Something went wrong: ${ne.message}`);
    }
  }, H = async function(ne) {
    ne.preventDefault();
    const fe = ne.target.password.value, le = ne.target.confirmPassword.value;
    if (!fe || !le)
      return alert(v("please input password"));
    if (fe !== le)
      return alert(v("passwords don't match"));
    r(!0), await M3({ password: fe }), alert("Password updated successfully"), r(!1), location.reload();
  }, w = () => {
    y((ne) => !ne);
  };
  let A = window.serverURL;
  if (!A) {
    const ne = location.pathname.match(/(.*?\/)ui/);
    A = ne ? ne[1] : "/";
  }
  const Y = new URLSearchParams(location.search);
  let X = window.TOKEN || sessionStorage.getItem("TOKEN") || Y.get("token");
  return X || (X = localStorage.getItem("TOKEN")), /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV("div", { className: "main", children: /* @__PURE__ */ C.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ C.jsxDEV("h2", { children: v("setting") }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
        lineNumber: 238,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
        lineNumber: 237,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ C.jsxDEV("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ C.jsxDEV("p", { children: /* @__PURE__ */ C.jsxDEV(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ C.jsxDEV(
                "img",
                {
                  className: "profile-avatar",
                  src: p.avatar || `https://seccdn.libravatar.org/avatar/${p.mailMd5}?s=220&amp;r=X&amp;d=mm`
                },
                void 0,
                !1,
                {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 246,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
              lineNumber: 243,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
            lineNumber: 242,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV("h2", { children: p.display_name }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV("p", { children: p.email }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ C.jsxDEV("section", { children: [
                /* @__PURE__ */ C.jsxDEV("h3", { children: v("profile") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 264,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ C.jsxDEV("form", { method: "post", onSubmit: N, children: [
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: [
                    /* @__PURE__ */ C.jsxDEV("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: v("nickname") }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 268,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ C.jsxDEV(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: p.display_name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 271,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ C.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 278,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 267,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 266,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("div", { id: "image-container-wrapper", style: { display: "none" }, children: [
                    /* @__PURE__ */ C.jsxDEV("div", { id: "image-container" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 285,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ C.jsxDEV(
                      "button",
                      {
                        onClick: M,
                        type: "button",
                        className: "btn primary",
                        children: "Crop"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 286,
                        columnNumber: 13
                      },
                      this
                    ),
                    /* @__PURE__ */ C.jsxDEV(
                      "button",
                      {
                        onClick: k,
                        type: "button",
                        className: "btn",
                        style: { marginLeft: "10px" },
                        children: "Reset"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 293,
                        columnNumber: 13
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 284,
                    columnNumber: 12
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 283,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 282,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV("img", { id: "image-result", src: "", alt: "", style: { display: "none" } }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 307,
                    columnNumber: 12
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 306,
                    columnNumber: 11
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 305,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: [
                    /* @__PURE__ */ C.jsxDEV("label", { className: "typecho-label", htmlFor: "url-0-3", children: v("change avatar") }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 313,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ C.jsxDEV(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: j,
                        accept: "image/*"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 316,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ C.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 324,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 312,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 311,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: s,
                      children: v("update my profile")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 330,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 329,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 328,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 265,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                lineNumber: 263,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ C.jsxDEV("section", { children: /* @__PURE__ */ C.jsxDEV("div", { className: "change-password-wrapper", children: [
                /* @__PURE__ */ C.jsxDEV("div", { className: "change-password-label", children: [
                  /* @__PURE__ */ C.jsxDEV("div", { children: [
                    /* @__PURE__ */ C.jsxDEV("h3", { children: v("password") }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 345,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ C.jsxDEV("span", { children: "******" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 346,
                      columnNumber: 12
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 344,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("a", { href: "#", style: { color: "#bbb", fontSize: "1.1em" }, onClick: w, children: v(c ? "cancel" : "edit") }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 348,
                    columnNumber: 11
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 343,
                  columnNumber: 10
                }, this),
                c ? /* @__PURE__ */ C.jsxDEV("div", { children: /* @__PURE__ */ C.jsxDEV("form", { method: "post", onSubmit: H, children: [
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: [
                    /* @__PURE__ */ C.jsxDEV(
                      "input",
                      {
                        id: "password",
                        name: "password",
                        type: "password",
                        className: "text",
                        placeholder: "New password",
                        disabled: o
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 357,
                        columnNumber: 14
                      },
                      this
                    ),
                    /* @__PURE__ */ C.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 365,
                      columnNumber: 14
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 356,
                    columnNumber: 13
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 355,
                    columnNumber: 12
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option", children: /* @__PURE__ */ C.jsxDEV("li", { children: [
                    /* @__PURE__ */ C.jsxDEV(
                      "input",
                      {
                        id: "confirm-password",
                        name: "confirmPassword",
                        type: "password",
                        className: "text",
                        placeholder: "Confirm new password",
                        disabled: o
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 370,
                        columnNumber: 14
                      },
                      this
                    ),
                    /* @__PURE__ */ C.jsxDEV("p", { className: "description" }, void 0, !1, {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 378,
                      columnNumber: 14
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 369,
                    columnNumber: 13
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 368,
                    columnNumber: 12
                  }, this),
                  /* @__PURE__ */ C.jsxDEV("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ C.jsxDEV("li", { children: /* @__PURE__ */ C.jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: o,
                      children: v("submit")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                      lineNumber: 383,
                      columnNumber: 14
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 382,
                    columnNumber: 13
                  }, this) }, void 0, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 381,
                    columnNumber: 12
                  }, this)
                ] }, void 0, !0, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 354,
                  columnNumber: 11
                }, this) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 353,
                  columnNumber: 10
                }, this) : null
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                lineNumber: 342,
                columnNumber: 9
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                lineNumber: 341,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ C.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                lineNumber: 398,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ C.jsxDEV("section", { id: "social-account", children: [
                /* @__PURE__ */ C.jsxDEV("h3", { children: "Connect" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                  lineNumber: 400,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ C.jsxDEV(
                  "div",
                  {
                    className: "account-item shinigami",
                    children: /* @__PURE__ */ C.jsxDEV(
                      "button",
                      {
                        disabled: d,
                        className: "btn primary",
                        style: { minWidth: "200px", display: "flex", justifyContent: "center", alignItems: "center" },
                        onClick: _,
                        children: d ? /* @__PURE__ */ C.jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", width: "24", height: "24", style: { "shape-rendering": "auto", display: "block", background: "transparent" }, "xmlns:xlink": "http://www.w3.org/1999/xlink", children: /* @__PURE__ */ C.jsxDEV("g", { children: [
                          /* @__PURE__ */ C.jsxDEV("circle", { "stroke-dasharray": "127.23450247038662 44.411500823462205", r: "27", "stroke-width": "8", stroke: "#fff", fill: "none", cy: "50", cx: "50", children: /* @__PURE__ */ C.jsxDEV("animateTransform", { keyTimes: "0;1", values: "0 50 50;360 50 50", dur: "1s", repeatCount: "indefinite", type: "rotate", attributeName: "transform" }, void 0, !1, {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                            lineNumber: 412,
                            columnNumber: 12
                          }, this) }, void 0, !1, {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                            lineNumber: 411,
                            columnNumber: 255
                          }, this),
                          /* @__PURE__ */ C.jsxDEV("g", {}, void 0, !1, {
                            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                            lineNumber: 413,
                            columnNumber: 20
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                          lineNumber: 411,
                          columnNumber: 252
                        }, this) }, void 0, !1, {
                          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                          lineNumber: 411,
                          columnNumber: 12
                        }, this) : "Connect to Shinigami"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                        lineNumber: 404,
                        columnNumber: 10
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                    lineNumber: 401,
                    columnNumber: 9
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                lineNumber: 399,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ C.jsxDEV("br", {}, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
                lineNumber: 420,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
            lineNumber: 259,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
        lineNumber: 240,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
      lineNumber: 236,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
      lineNumber: 235,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/profile/index.jsx",
    lineNumber: 233,
    columnNumber: 5
  }, this);
}
function Uj() {
  const { t: o } = ji(), r = Fu(), s = Mu(), l = wi((v) => v.user), [d, f] = P.useState(!1), [c, y] = P.useState(!1), h = _3({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  P.useEffect(() => {
    l && l.email && s("/ui", { replace: !0 });
  }, [s]);
  const p = async function(v) {
    v.preventDefault(), f(!1);
    const L = v.target.nick.value;
    if (!L || L.length < 2)
      return f(o("nickname illegal"));
    const x = v.target.email.value;
    if (!x)
      return f(o("please input email"));
    const N = v.target.password.value, j = v.target["password-again"].value;
    if (!N || !j || j !== N)
      return f(o("passwords don't match"));
    try {
      y(!0);
      const M = await h("login"), k = await r.user.register({
        display_name: L,
        email: x,
        // url: link,
        password: N,
        recaptchaV3: window.recaptchaV3Key ? M : void 0,
        turnstile: window.turnstileKey ? M : void 0
      });
      k && k.verify && alert(o("register success! please go to your mailbox to verify it!")), s("/ui/login");
    } catch (M) {
      f(M.message);
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: d ? "block" : "none"
        },
        children: /* @__PURE__ */ C.jsxDEV("ul", { children: d ? /* @__PURE__ */ C.jsxDEV("li", { children: d }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 83,
          columnNumber: 22
        }, this) : null }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 83,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login", children: [
      /* @__PURE__ */ C.jsxDEV("form", { method: "post", name: "login", role: "form", onSubmit: p, children: [
        /* @__PURE__ */ C.jsxDEV("p", { children: [
          /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "nick", className: "sr-only", children: o("nickname") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: o("nickname"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
              lineNumber: 92,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("p", { children: [
          /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "email", className: "sr-only", children: o("email") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: o("email"),
              className: "text-l w-100"
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
              lineNumber: 104,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("p", { children: [
          /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "password", className: "sr-only", children: o("password") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: o("password")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
              lineNumber: 117,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("p", { children: [
          /* @__PURE__ */ C.jsxDEV("label", { htmlFor: "password-again", className: "sr-only", children: o("password again") }, void 0, !1, {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: o("password again")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
              lineNumber: 129,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("p", { className: "captcha-container" }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ C.jsxDEV("p", { className: "submit", children: /* @__PURE__ */ C.jsxDEV(
          "button",
          {
            type: "submit",
            disabled: c,
            className: "btn btn-l w-100 primary",
            children: o("register")
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
            lineNumber: 139,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("p", { className: "more-link", children: [
        /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui", children: o("back to home") }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        " •",
        " ",
        /* @__PURE__ */ C.jsxDEV(sa, { to: "/ui/login", children: o("register.login") }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
          lineNumber: 151,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
        lineNumber: 149,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/register/index.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
function zj() {
  const o = P.useRef(null), r = wi((p) => p.user), { t: s } = ji(), [l, d] = P.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [f, c] = P.useReducer(
    function(p, v) {
      return { ...p, ...v };
    },
    { keyword: "" }
  );
  P.useEffect(() => {
    gj({ page: l.page, filter: f }).then((p) => {
      d({ ...l, ...p });
    });
  }, [f, l.page]);
  const y = (p) => [
    {
      key: "administrator",
      name: s("set administrator"),
      show: p.type === "guest",
      async action(v) {
        v.preventDefault(), await Su({
          id: p.objectId,
          type: "administrator"
        }), p.type = "administrator", d({ ...l });
      }
    },
    {
      key: "guest",
      name: s("set guest"),
      show: p.type === "administrator",
      async action(v) {
        if (v.preventDefault(), p.objectId === r.objectId)
          return alert(s("You can't set yourself to be guest!"));
        await Su({
          id: p.objectId,
          type: "guest"
        }), p.type = "guest", d({ ...l });
      }
    },
    {
      key: "label",
      name: s("set label"),
      show: !0,
      async action(v) {
        v.preventDefault();
        const L = prompt(s("please enter an exclusive label"));
        await Su({
          id: p.objectId,
          label: L
        }), p.label = L, d({ ...l });
      }
    },
    {
      key: "banned",
      name: "Banned User",
      show: !p.is_banned,
      async action(v) {
        v.preventDefault(), await Su({
          id: p.objectId,
          is_banned: 1
        }), p.is_banned = 1, d({ ...l });
      }
    },
    {
      key: "unbanned",
      name: "Unbanned User",
      show: p.is_banned,
      async action(v) {
        v.preventDefault(), await Su({
          id: p.objectId,
          is_banned: 0
        }), p.is_banned = 0, d({ ...l });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: v }) => v), h = (p) => /^verify/.test(p) ? s("verify") : s(p);
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxDEV(ho, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ C.jsxDEV("div", { className: "main", children: /* @__PURE__ */ C.jsxDEV("div", { className: "body container", children: [
      /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-page-title", children: /* @__PURE__ */ C.jsxDEV("h2", { children: s("manage users") }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
        lineNumber: 142,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ C.jsxDEV("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ C.jsxDEV("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ C.jsxDEV("div", { className: "search", role: "search", children: [
          /* @__PURE__ */ C.jsxDEV(
            "input",
            {
              type: "text",
              ref: o,
              className: "text-s",
              placeholder: "Search user..."
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
              lineNumber: 150,
              columnNumber: 21
            },
            this
          ),
          " ",
          /* @__PURE__ */ C.jsxDEV(
            "button",
            {
              type: "submit",
              className: "btn btn-s",
              onClick: (p) => {
                p.preventDefault(), c({ keyword: o.current.value });
              },
              children: s("filter")
            },
            void 0,
            !1,
            {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
              lineNumber: 157,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
          lineNumber: 149,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
          lineNumber: 147,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ C.jsxDEV(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ C.jsxDEV("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ C.jsxDEV("colgroup", { children: [
                /* @__PURE__ */ C.jsxDEV("col", { width: "6%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 178,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 179,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 180,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "15%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ C.jsxDEV("col", { width: "20%" }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 182,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                lineNumber: 177,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ C.jsxDEV("thead", { children: /* @__PURE__ */ C.jsxDEV("tr", { children: [
                /* @__PURE__ */ C.jsxDEV("th", { children: " " }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 186,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: s("nickname") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 187,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: s("email") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 188,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: s("role") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 189,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: s("exclusive label") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 190,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ C.jsxDEV("th", { children: s("action") }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 191,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                lineNumber: 185,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                lineNumber: 184,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ C.jsxDEV("tbody", { children: l.data.map((p) => /* @__PURE__ */ C.jsxDEV("tr", { id: `user-${p.objectId}`, children: [
                /* @__PURE__ */ C.jsxDEV("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ C.jsxDEV("div", { className: "user-avatar", children: /* @__PURE__ */ C.jsxDEV(
                  "img",
                  {
                    className: "avatar",
                    src: H3(p.email, p.avatar),
                    alt: p.display_name,
                    width: "40",
                    height: "40"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                    lineNumber: 199,
                    columnNumber: 31
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 198,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 197,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ C.jsxDEV("td", { children: /* @__PURE__ */ C.jsxDEV(
                  "a",
                  {
                    href: /^https:\/\//.test(p.url) ? p.url : "https://" + p.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: p.display_name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                    lineNumber: 209,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 208,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ C.jsxDEV("td", { children: /* @__PURE__ */ C.jsxDEV(
                  "a",
                  {
                    href: `mailto:${p.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: p.email
                  },
                  void 0,
                  !1,
                  {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                    lineNumber: 222,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 221,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ C.jsxDEV("td", { children: h(p.type) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 230,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ C.jsxDEV("td", { children: p.label }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 231,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ C.jsxDEV("td", { className: "comment-action", children: y(p).map(
                  ({ key: v, disable: L, name: x, action: N }) => L ? /* @__PURE__ */ C.jsxDEV("span", { className: "weak", children: x }, v, !1, {
                    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                    lineNumber: 236,
                    columnNumber: 35
                  }, this) : /* @__PURE__ */ C.jsxDEV(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${v}`,
                      onClick: N,
                      children: x
                    },
                    v,
                    !1,
                    {
                      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                      lineNumber: 240,
                      columnNumber: 35
                    },
                    this
                  )
                ) }, void 0, !1, {
                  fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this)
              ] }, p.objectId, !0, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                lineNumber: 196,
                columnNumber: 25
              }, this)) }, void 0, !1, {
                fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
                lineNumber: 194,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
              lineNumber: 176,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
              lineNumber: 175,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
            lineNumber: 170,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ C.jsxDEV("form", { method: "get", children: /* @__PURE__ */ C.jsxDEV(
          B3,
          {
            current: l.page,
            total: l.totalPages,
            onChange: (p) => d({ ...l, page: p })
          },
          void 0,
          !1,
          {
            fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
            lineNumber: 261,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
          lineNumber: 260,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/user/index.jsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}
function $j() {
  return /* @__PURE__ */ C.jsxDEV(C.Fragment, { children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ C.jsxDEV("div", { className: "typecho-login", children: /* @__PURE__ */ C.jsxDEV("h2", { children: "Your account has been banned, please contact the admin." }, void 0, !1, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/banned/index.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/banned/index.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/banned/index.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/pages/banned/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Hj = typeof Symbol == "function" && Symbol.observable || "@@observable", Wb = Hj, Vv = () => Math.random().toString(36).substring(7).split("").join("."), Bj = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vv()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vv()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vv()}`
}, Ei = Bj;
function Nd(o) {
  if (typeof o != "object" || o === null)
    return !1;
  let r = o;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(o) === r || Object.getPrototypeOf(o) === null;
}
function Ij(o) {
  if (o === void 0)
    return "undefined";
  if (o === null)
    return "null";
  const r = typeof o;
  switch (r) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return r;
  }
  if (Array.isArray(o))
    return "array";
  if (Wj(o))
    return "date";
  if (Kj(o))
    return "error";
  const s = Yj(o);
  switch (s) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return s;
  }
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Yj(o) {
  return typeof o.constructor == "function" ? o.constructor.name : null;
}
function Kj(o) {
  return o instanceof Error || typeof o.message == "string" && o.constructor && typeof o.constructor.stackTraceLimit == "number";
}
function Wj(o) {
  return o instanceof Date ? !0 : typeof o.toDateString == "function" && typeof o.getDate == "function" && typeof o.setDate == "function";
}
function zr(o) {
  let r = typeof o;
  return r = Ij(o), r;
}
function Rd(o, r, s) {
  if (typeof o != "function")
    throw new Error(`Expected the root reducer to be a function. Instead, received: '${zr(o)}'`);
  if (typeof r == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof s > "u" && (s = r, r = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${zr(s)}'`);
    return s(Rd)(o, r);
  }
  let l = o, d = r, f = /* @__PURE__ */ new Map(), c = f, y = 0, h = !1;
  function p() {
    c === f && (c = /* @__PURE__ */ new Map(), f.forEach((k, z) => {
      c.set(z, k);
    }));
  }
  function v() {
    if (h)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return d;
  }
  function L(k) {
    if (typeof k != "function")
      throw new Error(`Expected the listener to be a function. Instead, received: '${zr(k)}'`);
    if (h)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let z = !0;
    p();
    const _ = y++;
    return c.set(_, k), function() {
      if (z) {
        if (h)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        z = !1, p(), c.delete(_), f = null;
      }
    };
  }
  function x(k) {
    if (!Nd(k))
      throw new Error(`Actions must be plain objects. Instead, the actual type was: '${zr(k)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof k.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof k.type != "string")
      throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${zr(k.type)}'. Value was: '${k.type}' (stringified)`);
    if (h)
      throw new Error("Reducers may not dispatch actions.");
    try {
      h = !0, d = l(d, k);
    } finally {
      h = !1;
    }
    return (f = c).forEach((_) => {
      _();
    }), k;
  }
  function N(k) {
    if (typeof k != "function")
      throw new Error(`Expected the nextReducer to be a function. Instead, received: '${zr(k)}`);
    l = k, x({
      type: Ei.REPLACE
    });
  }
  function j() {
    const k = L;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(z) {
        if (typeof z != "object" || z === null)
          throw new Error(`Expected the observer to be an object. Instead, received: '${zr(z)}'`);
        function _() {
          const w = z;
          w.next && w.next(v());
        }
        return _(), {
          unsubscribe: k(_)
        };
      },
      [Wb]() {
        return this;
      }
    };
  }
  return x({
    type: Ei.INIT
  }), {
    dispatch: x,
    subscribe: L,
    getState: v,
    replaceReducer: N,
    [Wb]: j
  };
}
function Gj(o, r, s) {
  return Rd(o, r, s);
}
function Gb(o) {
  typeof console < "u" && typeof console.error == "function" && console.error(o);
  try {
    throw new Error(o);
  } catch {
  }
}
function qj(o, r, s, l) {
  const d = Object.keys(r), f = s && s.type === Ei.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (d.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Nd(o))
    return `The ${f} has unexpected type of "${zr(o)}". Expected argument to be an object with the following keys: "${d.join('", "')}"`;
  const c = Object.keys(o).filter((y) => !r.hasOwnProperty(y) && !l[y]);
  if (c.forEach((y) => {
    l[y] = !0;
  }), !(s && s.type === Ei.REPLACE) && c.length > 0)
    return `Unexpected ${c.length > 1 ? "keys" : "key"} "${c.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${d.join('", "')}". Unexpected keys will be ignored.`;
}
function Qj(o) {
  Object.keys(o).forEach((r) => {
    const s = o[r];
    if (typeof s(void 0, {
      type: Ei.INIT
    }) > "u")
      throw new Error(`The slice reducer for key "${r}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof s(void 0, {
      type: Ei.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(`The slice reducer for key "${r}" returned undefined when probed with a random type. Don't try to handle '${Ei.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function t5(o) {
  const r = Object.keys(o), s = {};
  for (let c = 0; c < r.length; c++) {
    const y = r[c];
    typeof o[y] > "u" && Gb(`No reducer provided for key "${y}"`), typeof o[y] == "function" && (s[y] = o[y]);
  }
  const l = Object.keys(s);
  let d;
  d = {};
  let f;
  try {
    Qj(s);
  } catch (c) {
    f = c;
  }
  return function(y = {}, h) {
    if (f)
      throw f;
    {
      const L = qj(y, s, h, d);
      L && Gb(L);
    }
    let p = !1;
    const v = {};
    for (let L = 0; L < l.length; L++) {
      const x = l[L], N = s[x], j = y[x], M = N(j, h);
      if (typeof M > "u") {
        const k = h && h.type;
        throw new Error(`When called with an action of type ${k ? `"${String(k)}"` : "(unknown type)"}, the slice reducer for key "${x}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      v[x] = M, p = p || M !== j;
    }
    return p = p || l.length !== Object.keys(y).length, p ? v : y;
  };
}
function qb(o, r) {
  return function(...s) {
    return r(o.apply(this, s));
  };
}
function Xj(o, r) {
  if (typeof o == "function")
    return qb(o, r);
  if (typeof o != "object" || o === null)
    throw new Error(`bindActionCreators expected an object or a function, but instead received: '${zr(o)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  const s = {};
  for (const l in o) {
    const d = o[l];
    typeof d == "function" && (s[l] = qb(d, r));
  }
  return s;
}
function sg(...o) {
  return o.length === 0 ? (r) => r : o.length === 1 ? o[0] : o.reduce((r, s) => (...l) => r(s(...l)));
}
function n5(...o) {
  return (r) => (s, l) => {
    const d = r(s, l);
    let f = () => {
      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const c = {
      getState: d.getState,
      dispatch: (h, ...p) => f(h, ...p)
    }, y = o.map((h) => h(c));
    return f = sg(...y)(d.dispatch), {
      ...d,
      dispatch: f
    };
  };
}
function Jj(o) {
  return Nd(o) && "type" in o && typeof o.type == "string";
}
const Zj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Ei,
  applyMiddleware: n5,
  bindActionCreators: Xj,
  combineReducers: t5,
  compose: sg,
  createStore: Rd,
  isAction: Jj,
  isPlainObject: Nd,
  legacy_createStore: Gj
}, Symbol.toStringTag, { value: "Module" }));
function po() {
  return po = Object.assign || function(o) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
    }
    return o;
  }, po.apply(this, arguments);
}
function eT(o) {
  var r;
  o.models.forEach(function(h) {
    return a5(o, h);
  });
  var s = r5(o), l = n5.apply(Zj, o.reduxConfig.middlewares), d = o.reduxConfig.devtoolComposer ? (r = o.reduxConfig).devtoolComposer.apply(r, o.reduxConfig.enhancers.concat([l])) : nT(o.reduxConfig.devtoolOptions).apply(void 0, o.reduxConfig.enhancers.concat([l])), f = o.reduxConfig.createStore || Rd, c = o.reduxConfig.initialState, y = c === void 0 ? {} : c;
  return f(s, y, d);
}
function a5(o, r) {
  var s = {}, l = Object.keys(r.reducers);
  l.forEach(function(y) {
    var h = aT(y) ? y : r.name + "/" + y;
    s[h] = r.reducers[y];
  });
  var d = function(h, p) {
    return h === void 0 && (h = r.state), p.type in s ? s[p.type](h, p.payload, p.meta) : h;
  }, f = r.baseReducer, c = f ? function(y, h) {
    return y === void 0 && (y = r.state), d(f(y, h), h);
  } : d;
  o.forEachPlugin("onReducer", function(y) {
    c = y(c, r.name, o) || c;
  }), o.reduxConfig.reducers[r.name] = c;
}
function r5(o) {
  var r = o.reduxConfig.rootReducers, s = tT(o.reduxConfig), l = s;
  return r && Object.keys(r).length && (l = function(f, c) {
    var y = r[c.type];
    return s(y ? y(f, c) : f, c);
  }), o.forEachPlugin("onRootReducer", function(d) {
    l = d(l, o) || l;
  }), l;
}
function tT(o) {
  var r = o.combineReducers || t5;
  return Object.keys(o.reducers).length ? r(o.reducers) : function(s) {
    return s;
  };
}
function nT(o) {
  return o === void 0 && (o = {}), !o.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(o) : sg;
}
function aT(o) {
  return o.indexOf("/") > -1;
}
var Qb = function(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}, Si = function(r) {
  return !r || typeof r == "function";
}, Uu = function(r) {
  {
    var s = r(), l = [];
    if (s.forEach(function(d) {
      var f = d[0], c = d[1];
      f && l.push(c);
    }), l.length > 0)
      throw new Error(l.join(", "));
  }
}, rT = function(r) {
  Uu(function() {
    return [[!Array.isArray(r.plugins), "init config.plugins must be an array"], [!Qb(r.models), "init config.models must be an object"], [!Qb(r.redux.reducers), "init config.redux.reducers must be an object"], [!Array.isArray(r.redux.middlewares), "init config.redux.middlewares must be an array"], [!Array.isArray(r.redux.enhancers), "init config.redux.enhancers must be an array of functions"], [!Si(r.redux.combineReducers), "init config.redux.combineReducers must be a function"], [!Si(r.redux.createStore), "init config.redux.createStore must be a function"]];
  });
}, i5 = function(r) {
  Uu(function() {
    return [[!r, "model config is required"], [typeof r.name != "string", 'model "name" [string] is required'], [r.state === void 0 && r.baseReducer === void 0, 'model "state" is required'], [!Si(r.baseReducer), 'model "baseReducer" must be a function']];
  });
}, iT = function(r) {
  Uu(function() {
    return [[!Si(r.onStoreCreated), "Plugin onStoreCreated must be a function"], [!Si(r.onModel), "Plugin onModel must be a function"], [!Si(r.onReducer), "Plugin onReducer must be a function"], [!Si(r.onRootReducer), "Plugin onRootReducer must be a function"], [!Si(r.createMiddleware), "Plugin createMiddleware must be a function"]];
  });
}, oT = function(r, s, l) {
  Uu(function() {
    return [[!!l.match(/\/.+\//), "Invalid reducer name (" + r + "/" + l + ")"], [typeof s[l] != "function", "Invalid reducer (" + r + "/" + l + "). Must be a function"]];
  });
}, sT = function(r, s, l) {
  Uu(function() {
    return [[!!l.match(/\//), "Invalid effect name (" + r + "/" + l + ")"], [typeof s[l] != "function", "Invalid effect (" + r + "/" + l + "). Must be a function"]];
  });
}, o5 = function(r, s, l, d) {
  return Object.assign(function(f, c) {
    var y = {
      type: s + "/" + l
    };
    return typeof f < "u" && (y.payload = f), typeof c < "u" && (y.meta = c), r.dispatch(y);
  }, {
    isEffect: d
  });
}, lT = function(r, s) {
  var l = r.dispatch[s.name], d = Object.keys(s.reducers);
  d.forEach(function(f) {
    oT(s.name, s.reducers, f), l[f] = o5(r, s.name, f, !1);
  });
}, uT = function(r, s, l) {
  var d = r.dispatch[l.name], f = {};
  l.effects && (f = typeof l.effects == "function" ? l.effects(r.dispatch) : l.effects);
  var c = Object.keys(f);
  c.forEach(function(y) {
    sT(l.name, f, y), s.effects[l.name + "/" + y] = f[y].bind(d), d[y] = o5(r, l.name, y, !0);
  });
};
function cT(o) {
  return {
    models: fT(o.models),
    reduxConfig: o.redux,
    forEachPlugin: function(s, l) {
      o.plugins.forEach(function(d) {
        d[s] && l(d[s]);
      });
    },
    effects: {}
  };
}
function fT(o) {
  return Object.keys(o).map(function(r) {
    var s = dT(r, o[r]);
    return i5(s), s;
  });
}
function dT(o, r) {
  return po({
    name: o,
    reducers: {}
  }, r);
}
function mT(o) {
  var r = cT(o);
  r.reduxConfig.middlewares.push(pT(r)), r.forEachPlugin("createMiddleware", function(d) {
    r.reduxConfig.middlewares.push(d(r));
  });
  var s = eT(r), l = po({}, s, {
    name: o.name,
    addModel: function(f) {
      i5(f), a5(r, f), Xb(l, f), Jb(l, r, f), s.replaceReducer(r5(r)), s.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return hT(l, o.plugins), r.models.forEach(function(d) {
    return Xb(l, d);
  }), r.models.forEach(function(d) {
    return Jb(l, r, d);
  }), r.forEachPlugin("onStoreCreated", function(d) {
    l = d(l, r) || l;
  }), l;
}
function pT(o) {
  return function(r) {
    return function(s) {
      return function(l) {
        return l.type in o.effects ? (s(l), o.effects[l.type](l.payload, r.getState(), l.meta)) : s(l);
      };
    };
  };
}
function Xb(o, r) {
  var s = {};
  o.dispatch["" + r.name] = s, lT(o, r);
}
function Jb(o, r, s) {
  uT(o, r, s), r.forEachPlugin("onModel", function(l) {
    l(s, o);
  });
}
function hT(o, r) {
  r.forEach(function(s) {
    if (s.exposed) {
      var l = Object.keys(s.exposed);
      l.forEach(function(d) {
        if (s.exposed) {
          var f = s.exposed[d], c = typeof f == "function";
          o[d] = c ? function() {
            for (var y = arguments.length, h = new Array(y), p = 0; p < y; p++)
              h[p] = arguments[p];
            return f.apply(void 0, [o].concat(h));
          } : Object.create(s.exposed[d]);
        }
      });
    }
  });
}
var Zb = 0;
function vT(o) {
  var r, s, l, d = (r = o.name) != null ? r : "Rematch Store " + Zb;
  Zb += 1;
  var f = {
    name: d,
    models: o.models || {},
    plugins: o.plugins || [],
    redux: po({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, o.redux, {
      devtoolOptions: po({
        name: d
      }, (s = (l = o.redux) == null ? void 0 : l.devtoolOptions) != null ? s : {})
    })
  };
  return rT(f), f.plugins.forEach(function(c) {
    c.config && (f.models = od(f.models, c.config.models), c.config.redux && (f.redux.initialState = od(f.redux.initialState, c.config.redux.initialState), f.redux.reducers = od(f.redux.reducers, c.config.redux.reducers), f.redux.rootReducers = od(f.redux.rootReducers, c.config.redux.reducers), f.redux.enhancers = [].concat(f.redux.enhancers, c.config.redux.enhancers || []), f.redux.middlewares = [].concat(f.redux.middlewares, c.config.redux.middlewares || []), f.redux.combineReducers = f.redux.combineReducers || c.config.redux.combineReducers, f.redux.createStore = f.redux.createStore || c.config.redux.createStore)), iT(c);
  }), f;
}
function od(o, r) {
  return r ? po({}, r, o) : o;
}
var gT = function(r) {
  var s = vT(r || {});
  return mT(s);
};
async function yT() {
  return dn("token").catch(() => {
    s5(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function LT({ email: o, password: r, code: s, recaptchaV3: l, turnstile: d }) {
  return dn({
    url: "token",
    method: "POST",
    body: { email: o, password: r, code: s, recaptchaV3: l, turnstile: d }
  });
}
async function s5() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function bT(o) {
  return dn({ url: "user", method: "POST", body: o });
}
async function xT({ email: o }) {
  return dn({
    url: "user/password",
    method: "PUT",
    body: { email: o }
  });
}
const ST = {
  state: null,
  reducers: {
    setUser(o, r) {
      return r;
    },
    updateUser(o, r) {
      return { ...o, ...r };
    }
  },
  effects: (o) => ({
    async loadUserInfo() {
      const r = await yT();
      if (r != null && r.email) {
        if (window.opener) {
          const s = localStorage.getItem("TOKEN"), l = !!s, d = s || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: d, remember: l, ...r } },
            "*"
          );
        }
        return o.user.setUser(r);
      }
    },
    async login({ email: r, password: s, code: l, remember: d, recaptchaV3: f, turnstile: c }) {
      const { token: y, ...h } = await LT({
        email: r,
        password: s,
        code: l,
        recaptchaV3: f,
        turnstile: c
      });
      return y && (window.TOKEN = y, sessionStorage.setItem("TOKEN", y), d && localStorage.setItem("TOKEN", y), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: y, remember: d, ...h } },
        "*"
      )), o.user.setUser(h);
    },
    logout() {
      s5(), o.user.setUser(null);
    },
    register(r) {
      return bT(r);
    },
    forgot(r) {
      return xT(r);
    },
    async updateProfile(r) {
      return await M3(r), window.opener && window.opener.postMessage({ type: "profile", data: r }, "*"), o.user.updateUser(r);
    }
  })
}, l5 = gT({ models: { user: ST } });
function sd(o) {
  const r = wi((s) => s.user);
  return P.useEffect(() => {
    const s = o.meta || {}, l = o.basename || "";
    if (!(r != null && r.email))
      return location.href = l + "/ui/login?redirect=" + location.pathname.replace(l, "");
    if (s.auth ? o.meta.auth !== r.type : !1)
      return location.href = l + "/ui/profile";
  }, [r, o.meta]), r ? o.children : null;
}
function CT() {
  const o = location.pathname.match(/(.*?)\/ui/), r = o ? o[1] : "/";
  return /* @__PURE__ */ C.jsxDEV(YC, { store: l5, children: /* @__PURE__ */ C.jsxDEV(XE, { basename: r, children: /* @__PURE__ */ C.jsxDEV(AE, { children: [
    /* @__PURE__ */ C.jsxDEV(
      Ur,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ C.jsxDEV(sd, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ C.jsxDEV(jj, {}, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 53,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ C.jsxDEV(
      Ur,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ C.jsxDEV(sd, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ C.jsxDEV(zj, {}, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 62,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
        lineNumber: 57,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ C.jsxDEV(
      Ur,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ C.jsxDEV(sd, { meta: { auth: "administrator" }, basename: r, children: /* @__PURE__ */ C.jsxDEV(kj, {}, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
        lineNumber: 66,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ C.jsxDEV(Ur, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ C.jsxDEV(yj, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 50
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ C.jsxDEV(Ur, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ C.jsxDEV(Uj, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ C.jsxDEV(Ur, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ C.jsxDEV(Fw, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 77,
      columnNumber: 51
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ C.jsxDEV(Ur, { path: "/ui/banned", exact: !0, element: /* @__PURE__ */ C.jsxDEV($j, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 78,
      columnNumber: 46
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
      lineNumber: 78,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ C.jsxDEV(
      Ur,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ C.jsxDEV(sd, { children: /* @__PURE__ */ C.jsxDEV(Vj, {}, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
        lineNumber: 79,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "C:/Projek/FR/Shinigami/comment/admin/src/App.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
const {
  slice: ET,
  forEach: NT
} = [];
function RT(o) {
  return NT.call(ET.call(arguments, 1), (r) => {
    if (r)
      for (const s in r)
        o[s] === void 0 && (o[s] = r[s]);
  }), o;
}
const e3 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, wT = (o, r, s) => {
  const l = s || {};
  l.path = l.path || "/";
  const d = encodeURIComponent(r);
  let f = `${o}=${d}`;
  if (l.maxAge > 0) {
    const c = l.maxAge - 0;
    if (Number.isNaN(c)) throw new Error("maxAge should be a Number");
    f += `; Max-Age=${Math.floor(c)}`;
  }
  if (l.domain) {
    if (!e3.test(l.domain))
      throw new TypeError("option domain is invalid");
    f += `; Domain=${l.domain}`;
  }
  if (l.path) {
    if (!e3.test(l.path))
      throw new TypeError("option path is invalid");
    f += `; Path=${l.path}`;
  }
  if (l.expires) {
    if (typeof l.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    f += `; Expires=${l.expires.toUTCString()}`;
  }
  if (l.httpOnly && (f += "; HttpOnly"), l.secure && (f += "; Secure"), l.sameSite)
    switch (typeof l.sameSite == "string" ? l.sameSite.toLowerCase() : l.sameSite) {
      case !0:
        f += "; SameSite=Strict";
        break;
      case "lax":
        f += "; SameSite=Lax";
        break;
      case "strict":
        f += "; SameSite=Strict";
        break;
      case "none":
        f += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return f;
}, t3 = {
  create(o, r, s, l) {
    let d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    s && (d.expires = /* @__PURE__ */ new Date(), d.expires.setTime(d.expires.getTime() + s * 60 * 1e3)), l && (d.domain = l), document.cookie = wT(o, encodeURIComponent(r), d);
  },
  read(o) {
    const r = `${o}=`, s = document.cookie.split(";");
    for (let l = 0; l < s.length; l++) {
      let d = s[l];
      for (; d.charAt(0) === " "; ) d = d.substring(1, d.length);
      if (d.indexOf(r) === 0) return d.substring(r.length, d.length);
    }
    return null;
  },
  remove(o) {
    this.create(o, "", -1);
  }
};
var jT = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(o) {
    let {
      lookupCookie: r
    } = o;
    if (r && typeof document < "u")
      return t3.read(r) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(o, r) {
    let {
      lookupCookie: s,
      cookieMinutes: l,
      cookieDomain: d,
      cookieOptions: f
    } = r;
    s && typeof document < "u" && t3.create(s, o, l, d, f);
  }
}, TT = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(o) {
    var l;
    let {
      lookupQuerystring: r
    } = o, s;
    if (typeof window < "u") {
      let {
        search: d
      } = window.location;
      !window.location.search && ((l = window.location.hash) == null ? void 0 : l.indexOf("?")) > -1 && (d = window.location.hash.substring(window.location.hash.indexOf("?")));
      const c = d.substring(1).split("&");
      for (let y = 0; y < c.length; y++) {
        const h = c[y].indexOf("=");
        h > 0 && c[y].substring(0, h) === r && (s = c[y].substring(h + 1));
      }
    }
    return s;
  }
};
let Eu = null;
const n3 = () => {
  if (Eu !== null) return Eu;
  try {
    Eu = window !== "undefined" && window.localStorage !== null;
    const o = "i18next.translate.boo";
    window.localStorage.setItem(o, "foo"), window.localStorage.removeItem(o);
  } catch {
    Eu = !1;
  }
  return Eu;
};
var DT = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(o) {
    let {
      lookupLocalStorage: r
    } = o;
    if (r && n3())
      return window.localStorage.getItem(r) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(o, r) {
    let {
      lookupLocalStorage: s
    } = r;
    s && n3() && window.localStorage.setItem(s, o);
  }
};
let Nu = null;
const a3 = () => {
  if (Nu !== null) return Nu;
  try {
    Nu = window !== "undefined" && window.sessionStorage !== null;
    const o = "i18next.translate.boo";
    window.sessionStorage.setItem(o, "foo"), window.sessionStorage.removeItem(o);
  } catch {
    Nu = !1;
  }
  return Nu;
};
var kT = {
  name: "sessionStorage",
  lookup(o) {
    let {
      lookupSessionStorage: r
    } = o;
    if (r && a3())
      return window.sessionStorage.getItem(r) || void 0;
  },
  cacheUserLanguage(o, r) {
    let {
      lookupSessionStorage: s
    } = r;
    s && a3() && window.sessionStorage.setItem(s, o);
  }
}, OT = {
  name: "navigator",
  lookup(o) {
    const r = [];
    if (typeof navigator < "u") {
      const {
        languages: s,
        userLanguage: l,
        language: d
      } = navigator;
      if (s)
        for (let f = 0; f < s.length; f++)
          r.push(s[f]);
      l && r.push(l), d && r.push(d);
    }
    return r.length > 0 ? r : void 0;
  }
}, FT = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(o) {
    let {
      htmlTag: r
    } = o, s;
    const l = r || (typeof document < "u" ? document.documentElement : null);
    return l && typeof l.getAttribute == "function" && (s = l.getAttribute("lang")), s;
  }
}, _T = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(o) {
    var d;
    let {
      lookupFromPathIndex: r
    } = o;
    if (typeof window > "u") return;
    const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(s) ? (d = s[typeof r == "number" ? r : 0]) == null ? void 0 : d.replace("/", "") : void 0;
  }
}, PT = {
  name: "subdomain",
  lookup(o) {
    var d, f;
    let {
      lookupFromSubdomainIndex: r
    } = o;
    const s = typeof r == "number" ? r + 1 : 1, l = typeof window < "u" && ((f = (d = window.location) == null ? void 0 : d.hostname) == null ? void 0 : f.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (l)
      return l[s];
  }
};
function AT() {
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
    convertDetectedLanguage: (o) => o
  };
}
class u5 {
  constructor(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(r, s);
  }
  init(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = r || {
      languageUtils: {}
    }, this.options = RT(s, this.options || {}, AT()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (d) => d.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = l, this.addDetector(jT), this.addDetector(TT), this.addDetector(DT), this.addDetector(kT), this.addDetector(OT), this.addDetector(FT), this.addDetector(_T), this.addDetector(PT);
  }
  addDetector(r) {
    return this.detectors[r.name] = r, this;
  }
  detect(r) {
    r || (r = this.options.order);
    let s = [];
    return r.forEach((l) => {
      if (this.detectors[l]) {
        let d = this.detectors[l].lookup(this.options);
        d && typeof d == "string" && (d = [d]), d && (s = s.concat(d));
      }
    }), s = s.map((l) => this.options.convertDetectedLanguage(l)), this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null;
  }
  cacheUserLanguage(r, s) {
    s || (s = this.options.caches), s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(r) > -1 || s.forEach((l) => {
      this.detectors[l] && this.detectors[l].cacheUserLanguage(r, this.options);
    }));
  }
}
u5.type = "languageDetector";
mn.use(u5).use(TN).init({
  // we init with resources
  resources: Ow,
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
async function MT() {
  await Promise.race([
    new Promise((s) => setTimeout(s, 50)),
    new Promise((s) => {
      window.addEventListener("message", (l) => {
        l && l.type === "TOKEN" && l.data && s(l);
      });
    }),
    new Promise((s) => {
      const d = new URLSearchParams(location.search).get("token");
      d && s(d);
    })
  ]).then((s) => {
    s && (window.TOKEN = s, sessionStorage.setItem("TOKEN", s));
  }), await Promise.all([l5.dispatch({ type: "user/loadUserInfo" })]).catch(
    (s) => {
      console.error(s);
    }
  );
  const o = document.createElement("div");
  o.style.height = "100%", document.body.appendChild(o), u3(o).render(
    /* @__PURE__ */ C.jsxDEV(Sd.StrictMode, { children: /* @__PURE__ */ C.jsxDEV(CT, {}, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/index.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "C:/Projek/FR/Shinigami/comment/admin/src/index.jsx",
      lineNumber: 49,
      columnNumber: 5
    }, this)
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
MT();

(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{450:function(s,a,t){"use strict";t.r(a);var r=t(31),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#service-mode-无法安装-windows"}},[s._v("Service Mode 无法安装（Windows）")])]),t("li",[t("a",{attrs:{href:"#service-mode-无法安装-macos"}},[s._v("Service Mode 无法安装（macOS）")])]),t("li",[t("a",{attrs:{href:"#macos-版本启动要求授权"}},[s._v("macOS 版本启动要求授权")])]),t("li",[t("a",{attrs:{href:"#macos-dmg-安装后无法打开-提示损坏"}},[s._v("macOS DMG 安装后无法打开，提示损坏")])]),t("li",[t("a",{attrs:{href:"#系统代理自动关闭或打开"}},[s._v("系统代理自动关闭或打开")])]),t("li",[t("a",{attrs:{href:"#general-端口显示为-0"}},[s._v("General 端口显示为 0")])]),t("li",[t("a",{attrs:{href:"#killer-系列网卡无法开启-tap-tun-模式"}},[s._v("Killer 系列网卡无法开启 TAP/TUN 模式")])]),t("li",[t("a",{attrs:{href:"#在-windows-系统中-使用-system-作为-tun-stack-时-clash-网卡无法正常工作"}},[s._v("在 Windows 系统中，使用 system 作为 TUN stack 时，Clash 网卡无法正常工作")])])])]),t("p"),s._v(" "),t("h3",{attrs:{id:"service-mode-无法安装-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-mode-无法安装-windows"}},[s._v("#")]),s._v(" Service Mode 无法安装（Windows）")]),s._v(" "),t("question-answer",[t("p",[s._v("先确定系统安装了"),t("code",[s._v(".NET framework runtime")])]),s._v(" "),t("p",[s._v("然后尝试手动安装：")]),s._v(" "),t("ol",[t("li",[s._v("点击 General 中的 Home Directory 打开文件夹，进入 service 子目录中")]),s._v(" "),t("li",[s._v("打开 CMD，执行以下命令：")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("service.exe install\nservice.exe start\n")])])]),t("p",[s._v("如安装出现错误，参考"),t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/1627",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个 issue"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"service-mode-无法安装-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-mode-无法安装-macos"}},[s._v("#")]),s._v(" Service Mode 无法安装（macOS）")]),s._v(" "),t("question-answer",[t("ol",[t("li",[t("p",[s._v("拷贝一下内容到任意目录的"),t("code",[s._v("service-mode-installer.sh")]),s._v("文件中：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#！/bin/bash")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COMMAND")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n\n "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UANMEA")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arm64"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.config/clash/service\n "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PLIST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist\n\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$UANMEA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" *"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x86_64"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x64"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SOURCE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Applications/Clash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" for"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" Windows.app/Contents/Resources/static/files/darwin/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ARCH")]),s._v("/service\n\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -r -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" PLIST_CONTENT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" EOM\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?xml "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),s._v("?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DOCTYPE plist PUBLIC "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-//Apple//DTD PLIST 1.0//EN"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.apple.com/DTDs/PropertyList-1.0.dtd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("plist "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dict"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Label"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("com.lbyczf.cfw.helper"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Program"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DEST")]),s._v("/clash-core-service"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("RunAtLoad"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("true/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("KeepAlive"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("true/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("HardResourceLimits"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dict"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("NumberOfFiles"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("/integer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dict"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("SoftResourceLimits"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dict"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("NumberOfFiles"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("/integer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dict"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dict"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/plist"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n EOM\n\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$COMMAND")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DEST")]),s._v('"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SOURCE")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DEST")]),s._v('"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PLIST_CONTENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PLIST")]),s._v("\n   launchctl unload "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PLIST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null\n   launchctl load "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PLIST")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$COMMAND")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uninstall"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   launchctl unload "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PLIST")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DEST")]),s._v('"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PLIST")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("执行命令"),t("code",[s._v("chmod +x serive-mode-installer.sh && sudo ./serive-mode-installer.sh install")])])])])]),s._v(" "),t("h3",{attrs:{id:"macos-版本启动要求授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-版本启动要求授权"}},[s._v("#")]),s._v(" macOS 版本启动要求授权")]),s._v(" "),t("question-answer",[t("p",[s._v("在第一次或更新 APP 后打开软件会提示用户授权，这是因为需要安装/更新用于设置系统代理的工具，如果不进行授权，General 中的 System Proxy 开关将无法打开。一般情况下，除非工具更新，否则除了第一次启动外不会重复需要授权。")])]),s._v(" "),t("h3",{attrs:{id:"macos-dmg-安装后无法打开-提示损坏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-dmg-安装后无法打开-提示损坏"}},[s._v("#")]),s._v(" macOS DMG 安装后无法打开，提示损坏")]),s._v(" "),t("question-answer",[t("p",[s._v("网络下载应用被 Apple 添加隔离标识，终端输入命令解除即可：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo xattr -r -d com.apple.quarantine /Applications/Clash\\ for\\ Windows.app\n")])])])]),s._v(" "),t("h3",{attrs:{id:"系统代理自动关闭或打开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统代理自动关闭或打开"}},[s._v("#")]),s._v(" 系统代理自动关闭或打开")]),s._v(" "),t("question-answer",[t("p",[t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/312",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"general-端口显示为-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-端口显示为-0"}},[s._v("#")]),s._v(" General 端口显示为 0")]),s._v(" "),t("question-answer",[t("p",[t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/671",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"killer-系列网卡无法开启-tap-tun-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#killer-系列网卡无法开启-tap-tun-模式"}},[s._v("#")]),s._v(" Killer 系列网卡无法开启 TAP/TUN 模式")]),s._v(" "),t("question-answer",[t("p",[t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/1243#issuecomment-751165537",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"在-windows-系统中-使用-system-作为-tun-stack-时-clash-网卡无法正常工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-系统中-使用-system-作为-tun-stack-时-clash-网卡无法正常工作"}},[s._v("#")]),s._v(" 在 Windows 系统中，使用 system 作为 TUN stack 时，Clash 网卡无法正常工作")]),s._v(" "),t("question-answer",[t("p",[s._v("当前版本下，使用"),t("code",[s._v("system")]),s._v("作为 TUN stack 时，需要在系统防火墙中将 Clash core 放行。"),t("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/issues/1936#issuecomment-853226838",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
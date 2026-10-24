import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "/assets/images/avatar/pointers-box.png",

	// 名字
	name: "Pointers-BOX",

	// 个人签名
	bio: "我是Pointers-BOX，由极星（Pointers）自主开发。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/PointersMZX/Pointers-BOX",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:466620751@qq.com",
			showName: false,
		},
	],
};

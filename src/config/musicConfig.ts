import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 支持三首本地歌曲，封面统一使用 Pointers-BOX 图标，均无歌词
	local: {
		playlist: [
			{
				name: "Pointers-BOX_v2.4.0主题曲",
				artist: "Pointers-BOX",
				url: encodeURI("/assets/music/开往春天的地铁 - 沈奕秋.mp3"),
				cover: "/assets/music/cover/pointers-box.png",
				lrc: "",
			},
			{
				name: "Pointers-BOX_v2.0.0主题曲",
				artist: "Pointers-BOX",
				url: encodeURI("/assets/music/Masquerade (Inst.) - Lindsey Stirling.mp3"),
				cover: "/assets/music/cover/pointers-box.png",
				lrc: "",
			},
			{
				name: "Pointers-BOX主题曲-万鬼同行",
				artist: "Pointers-BOX",
				url: encodeURI("/assets/music/无人区玫瑰 - 一颗狼星.mp3"),
				cover: "/assets/music/cover/pointers-box.png",
				lrc: "",
			},
		],
	},
};

import type { LucideIcon } from 'lucide-react'
import {
	Ticket,
	BookOpen,
	Users,
	Shield,
	Gamepad2,
	Trophy,
	RefreshCw,
	MessagesSquare,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// 内容类型配置（8 个分类，覆盖 Roblox 玩家高频搜索）
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Ticket, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'players', path: '/players', icon: Users, isContentType: true },
	{ key: 'team', path: '/team', icon: Shield, isContentType: true },
	{ key: 'gameplay', path: '/gameplay', icon: Gamepad2, isContentType: true },
	{ key: 'rewards', path: '/rewards', icon: Trophy, isContentType: true },
	{ key: 'updates', path: '/updates', icon: RefreshCw, isContentType: true },
	{ key: 'discord', path: '/discord', icon: MessagesSquare, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['codes', 'guide', 'players', 'team', 'gameplay', 'rewards', 'updates', 'discord']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}

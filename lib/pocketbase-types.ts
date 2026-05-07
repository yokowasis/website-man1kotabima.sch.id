/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export const Collections = {
	Authorigins: "_authOrigins",
	Externalauths: "_externalAuths",
	Mfas: "_mfas",
	Otps: "_otps",
	Superusers: "_superusers",
	Events: "events",
	Keunggulan: "keunggulan",
	Menus: "menus",
	Pages: "pages",
	Posts: "posts",
	QuickPopularLinks: "quick_popular_links",
	SchoolSettings: "school_settings",
	SliderItems: "slider_items",
	Teachers: "teachers",
	Users: "users",
} as const
export type Collections = typeof Collections[keyof typeof Collections]

// Alias types for improved usability
export type IsoDateString = string
export type IsoAutoDateString = string & { readonly autodate: unique symbol }
export type RecordIdString = string
export type FileNameString = string & { readonly filename: unique symbol }
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated: IsoAutoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated: IsoAutoDateString
}

export type MfasRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	method: string
	recordRef: string
	updated: IsoAutoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated: IsoAutoDateString
}

export type SuperusersRecord = {
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

export type EventsRecord = {
	created: IsoAutoDateString
	id: string
	image?: string
	link?: string
	tenant?: RecordIdString
	text?: string
	title?: string
	updated: IsoAutoDateString
}

export type KeunggulanRecord = {
	created: IsoAutoDateString
	deskripsi?: string
	icon?: string
	id: string
	judul?: string
	tenant?: RecordIdString
	updated: IsoAutoDateString
}

export type MenusRecord = {
	created: IsoAutoDateString
	id: string
	name?: string
	parent?: RecordIdString
	tenant?: RecordIdString
	updated: IsoAutoDateString
	url?: string
}

export type PagesRecord = {
	content?: string
	created: IsoAutoDateString
	id: string
	slug?: string
	tenant?: RecordIdString
	title?: string
	updated: IsoAutoDateString
}

export type PostsRecord = {
	author_name?: string
	author_picture?: string
	content?: HTMLString
	cover_image?: string
	created: IsoAutoDateString
	date?: string
	excerpt?: string
	id: string
	slug?: string
	tenant?: RecordIdString
	title?: string
	updated: IsoAutoDateString
}

export const QuickPopularLinksTypeOptions = {
	"quick": "quick",
	"popular": "popular",
} as const
export type QuickPopularLinksTypeOptions = typeof QuickPopularLinksTypeOptions[keyof typeof QuickPopularLinksTypeOptions]
export type QuickPopularLinksRecord = {
	created: IsoAutoDateString
	id: string
	name?: string
	tenant?: RecordIdString
	type?: QuickPopularLinksTypeOptions
	updated: IsoAutoDateString
	url?: string
}

export type SchoolSettingsRecord = {
	alamat?: string
	created: IsoAutoDateString
	email?: string
	facebook?: string
	home_background?: string
	id: string
	instagram?: string
	jam_kerja?: string
	nama_sekolah?: string
	sekilas_info?: string
	telepon?: string
	tenant?: RecordIdString
	tentang_kepsek?: string
	twitter?: string
	updated: IsoAutoDateString
	video?: string
	youtube?: string
}

export type SliderItemsRecord = {
	created: IsoAutoDateString
	id: string
	image?: string
	tenant?: RecordIdString
	text?: string
	updated: IsoAutoDateString
}

export type TeachersRecord = {
	created: IsoAutoDateString
	facebook?: string
	foto?: string
	id: string
	instagram?: string
	mapel?: string
	nama?: string
	tenant?: RecordIdString
	twitter?: string
	updated: IsoAutoDateString
}

export type UsersRecord = {
	about_image?: string
	avatar?: FileNameString
	created: IsoAutoDateString
	domain?: string
	email: string
	emailVisibility?: boolean
	id: string
	logo?: string
	name?: string
	password: string
	subdomain?: string
	title?: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type KeunggulanResponse<Texpand = unknown> = Required<KeunggulanRecord> & BaseSystemFields<Texpand>
export type MenusResponse<Texpand = unknown> = Required<MenusRecord> & BaseSystemFields<Texpand>
export type PagesResponse<Texpand = unknown> = Required<PagesRecord> & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type QuickPopularLinksResponse<Texpand = unknown> = Required<QuickPopularLinksRecord> & BaseSystemFields<Texpand>
export type SchoolSettingsResponse<Texpand = unknown> = Required<SchoolSettingsRecord> & BaseSystemFields<Texpand>
export type SliderItemsResponse<Texpand = unknown> = Required<SliderItemsRecord> & BaseSystemFields<Texpand>
export type TeachersResponse<Texpand = unknown> = Required<TeachersRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	events: EventsRecord
	keunggulan: KeunggulanRecord
	menus: MenusRecord
	pages: PagesRecord
	posts: PostsRecord
	quick_popular_links: QuickPopularLinksRecord
	school_settings: SchoolSettingsRecord
	slider_items: SliderItemsRecord
	teachers: TeachersRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	events: EventsResponse
	keunggulan: KeunggulanResponse
	menus: MenusResponse
	pages: PagesResponse
	posts: PostsResponse
	quick_popular_links: QuickPopularLinksResponse
	school_settings: SchoolSettingsResponse
	slider_items: SliderItemsResponse
	teachers: TeachersResponse
	users: UsersResponse
}

// Utility types for create/update operations

type ProcessCreateAndUpdateFields<T> = Omit<{
	// Omit AutoDate fields
	[K in keyof T as Extract<T[K], IsoAutoDateString> extends never ? K : never]: 
		// Convert FileNameString to File
		T[K] extends infer U ? 
			U extends (FileNameString | FileNameString[]) ? 
				U extends any[] ? File[] : File 
			: U
		: never
}, 'id'>

// Create type for Auth collections
export type CreateAuth<T> = {
	id?: RecordIdString
	email: string
	emailVisibility?: boolean
	password: string
	passwordConfirm: string
	verified?: boolean
} & ProcessCreateAndUpdateFields<T>

// Create type for Base collections
export type CreateBase<T> = {
	id?: RecordIdString
} & ProcessCreateAndUpdateFields<T>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof AuthSystemFields>
> & {
	email?: string
	emailVisibility?: boolean
	oldPassword?: string
	password?: string
	passwordConfirm?: string
	verified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof BaseSystemFields>
>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? CreateAuth<CollectionRecords[T]>
		: CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? UpdateAuth<CollectionRecords[T]>
		: UpdateBase<CollectionRecords[T]>

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
	collection<T extends keyof CollectionResponses>(
		idOrName: T
	): RecordService<CollectionResponses[T]>
} & PocketBase

import * as Types from '../types'

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Json: any
  /** ISO 3166-1 alpha-2 country code */
  CountryCode: any
  /** 8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500 */
  FuzzyDateInt: any
}

/** Notification for when a activity is liked */
export type ActivityLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity which was liked */
  activityId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The liked activity */
  activity: Maybe<ActivityUnion>
  /** The user who liked the activity */
  user: Maybe<User>
}

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type ActivityMentionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity where mentioned */
  activityId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The liked activity */
  activity: Maybe<ActivityUnion>
  /** The user who mentioned the authenticated user */
  user: Maybe<User>
}

/** Notification for when a user is send an activity message */
export type ActivityMessageNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The if of the user who send the message */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity message */
  activityId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The message activity */
  message: Maybe<MessageActivity>
  /** The user who sent the message */
  user: Maybe<User>
}

/** Replay to an activity item */
export type ActivityReply = {
  /** The id of the reply */
  id: Scalars['Int']
  /** The id of the replies creator */
  userId: Maybe<Scalars['Int']>
  /** The id of the parent activity */
  activityId: Maybe<Scalars['Int']>
  /** The reply text */
  text: Maybe<Scalars['String']>
  /** The amount of likes the reply has */
  likeCount: Scalars['Int']
  /** If the currently authenticated user liked the reply */
  isLiked: Maybe<Scalars['Boolean']>
  /** The time the reply was created at */
  createdAt: Scalars['Int']
  /** The user who created reply */
  user: Maybe<User>
  /** The users who liked the reply */
  likes: Maybe<Array<Maybe<User>>>
}

/** Replay to an activity item */
export type ActivityReplyTextArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** Notification for when a activity reply is liked */
export type ActivityReplyLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who liked to the activity reply */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity where the reply which was liked */
  activityId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The liked activity */
  activity: Maybe<ActivityUnion>
  /** The user who liked the activity reply */
  user: Maybe<User>
}

/** Notification for when a user replies to the authenticated users activity */
export type ActivityReplyNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The liked activity */
  activity: Maybe<ActivityUnion>
  /** The user who replied to the activity */
  user: Maybe<User>
}

/** Notification for when a user replies to activity the authenticated user has replied to */
export type ActivityReplySubscribedNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The liked activity */
  activity: Maybe<ActivityUnion>
  /** The user who replied to the activity */
  user: Maybe<User>
}

/** Activity sort enums */
export enum ActivitySort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Pinned = 'PINNED',
}

/** Activity type enum. */
export enum ActivityType {
  /** A text activity */
  Text = 'TEXT',
  /** A anime list update activity */
  AnimeList = 'ANIME_LIST',
  /** A manga list update activity */
  MangaList = 'MANGA_LIST',
  /** A text message activity sent to another user */
  Message = 'MESSAGE',
  /** Anime & Manga list update, only used in query arguments */
  MediaList = 'MEDIA_LIST',
}

/** Activity union type */
export type ActivityUnion = TextActivity | ListActivity | MessageActivity

/** Notification for when an episode of anime airs */
export type AiringNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the aired anime */
  animeId: Scalars['Int']
  /** The episode number that just aired */
  episode: Scalars['Int']
  /** The notification context text */
  contexts: Maybe<Array<Maybe<Scalars['String']>>>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The associated media of the airing schedule */
  media: Maybe<Media>
}

/** Score & Watcher stats for airing anime by episode and mid-week */
export type AiringProgression = {
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  episode: Maybe<Scalars['Float']>
  /** The average score for the media */
  score: Maybe<Scalars['Float']>
  /** The amount of users watching the anime */
  watching: Maybe<Scalars['Int']>
}

/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export type AiringSchedule = {
  /** The id of the airing schedule item */
  id: Scalars['Int']
  /** The time the episode airs at */
  airingAt: Scalars['Int']
  /** Seconds until episode starts airing */
  timeUntilAiring: Scalars['Int']
  /** The airing episode number */
  episode: Scalars['Int']
  /** The associate media id of the airing episode */
  mediaId: Scalars['Int']
  /** The associate media of the airing episode */
  media: Maybe<Media>
}

export type AiringScheduleConnection = {
  edges: Maybe<Array<Maybe<AiringScheduleEdge>>>
  nodes: Maybe<Array<Maybe<AiringSchedule>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** AiringSchedule connection edge */
export type AiringScheduleEdge = {
  node: Maybe<AiringSchedule>
  /** The id of the connection */
  id: Maybe<Scalars['Int']>
}

export type AiringScheduleInput = {
  airingAt: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  timeUntilAiring: Maybe<Scalars['Int']>
}

/** Airing schedule sort enums */
export enum AiringSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Time = 'TIME',
  TimeDesc = 'TIME_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC',
}

export type AniChartHighlightInput = {
  mediaId: Maybe<Scalars['Int']>
  highlight: Maybe<Scalars['String']>
}

export type AniChartUser = {
  user: Maybe<User>
  settings: Maybe<Scalars['Json']>
  highlights: Maybe<Scalars['Json']>
}

/** A character that features in an anime or manga */
export type Character = {
  /** The id of the character */
  id: Scalars['Int']
  /** The names of the character */
  name: Maybe<CharacterName>
  /** Character images */
  image: Maybe<CharacterImage>
  /** A general description of the character */
  description: Maybe<Scalars['String']>
  /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender: Maybe<Scalars['String']>
  /** The character's birth date */
  dateOfBirth: Maybe<FuzzyDate>
  /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
  age: Maybe<Scalars['String']>
  /** The characters blood type */
  bloodType: Maybe<Scalars['String']>
  /** If the character is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']
  /** If the character is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']
  /** The url for the character page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** Media that includes the character */
  media: Maybe<MediaConnection>
  /** @deprecated No data available */
  updatedAt: Maybe<Scalars['Int']>
  /** The amount of user's who have favourited the character */
  favourites: Maybe<Scalars['Int']>
  /** Notes for site moderators */
  modNotes: Maybe<Scalars['String']>
}

/** A character that features in an anime or manga */
export type CharacterDescriptionArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** A character that features in an anime or manga */
export type CharacterMediaArgs = {
  sort: Maybe<Array<Maybe<MediaSort>>>
  type: Maybe<MediaType>
  onList: Maybe<Scalars['Boolean']>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type CharacterConnection = {
  edges: Maybe<Array<Maybe<CharacterEdge>>>
  nodes: Maybe<Array<Maybe<Character>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Character connection edge */
export type CharacterEdge = {
  node: Maybe<Character>
  /** The id of the connection */
  id: Maybe<Scalars['Int']>
  /** The characters role in the media */
  role: Maybe<CharacterRole>
  /** Media specific character name */
  name: Maybe<Scalars['String']>
  /** The voice actors of the character */
  voiceActors: Maybe<Array<Maybe<Staff>>>
  /** The voice actors of the character with role date */
  voiceActorRoles: Maybe<Array<Maybe<StaffRoleType>>>
  /** The media the character is in */
  media: Maybe<Array<Maybe<Media>>>
  /** The order the character should be displayed from the users favourites */
  favouriteOrder: Maybe<Scalars['Int']>
}

/** Character connection edge */
export type CharacterEdgeVoiceActorsArgs = {
  language: Maybe<StaffLanguage>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

/** Character connection edge */
export type CharacterEdgeVoiceActorRolesArgs = {
  language: Maybe<StaffLanguage>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

export type CharacterImage = {
  /** The character's image of media at its largest size */
  large: Maybe<Scalars['String']>
  /** The character's image of media at medium size */
  medium: Maybe<Scalars['String']>
}

/** The names of the character */
export type CharacterName = {
  /** The character's given name */
  first: Maybe<Scalars['String']>
  /** The character's middle name */
  middle: Maybe<Scalars['String']>
  /** The character's surname */
  last: Maybe<Scalars['String']>
  /** The character's first and last name */
  full: Maybe<Scalars['String']>
  /** The character's full name in their native language */
  native: Maybe<Scalars['String']>
  /** Other names the character might be referred to as */
  alternative: Maybe<Array<Maybe<Scalars['String']>>>
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler: Maybe<Array<Maybe<Scalars['String']>>>
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred: Maybe<Scalars['String']>
}

/** The names of the character */
export type CharacterNameInput = {
  /** The character's given name */
  first: Maybe<Scalars['String']>
  /** The character's middle name */
  middle: Maybe<Scalars['String']>
  /** The character's surname */
  last: Maybe<Scalars['String']>
  /** The character's full name in their native language */
  native: Maybe<Scalars['String']>
  /** Other names the character might be referred by */
  alternative: Maybe<Array<Maybe<Scalars['String']>>>
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler: Maybe<Array<Maybe<Scalars['String']>>>
}

/** The role the character plays in the media */
export enum CharacterRole {
  /** A primary character role in the media */
  Main = 'MAIN',
  /** A supporting character role in the media */
  Supporting = 'SUPPORTING',
  /** A background character in the media */
  Background = 'BACKGROUND',
}

/** Character sort enums */
export enum CharacterSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  /** Order manually decided by moderators */
  Relevance = 'RELEVANCE',
}

/** A submission for a character that features in an anime or manga */
export type CharacterSubmission = {
  /** The id of the submission */
  id: Scalars['Int']
  /** Character that the submission is referencing */
  character: Maybe<Character>
  /** The character submission changes */
  submission: Maybe<Character>
  /** Submitter for the submission */
  submitter: Maybe<User>
  /** Data Mod assigned to handle the submission */
  assignee: Maybe<User>
  /** Status of the submission */
  status: Maybe<SubmissionStatus>
  /** Inner details of submission status */
  notes: Maybe<Scalars['String']>
  source: Maybe<Scalars['String']>
  /** Whether the submission is locked */
  locked: Maybe<Scalars['Boolean']>
  createdAt: Maybe<Scalars['Int']>
}

export type CharacterSubmissionConnection = {
  edges: Maybe<Array<Maybe<CharacterSubmissionEdge>>>
  nodes: Maybe<Array<Maybe<CharacterSubmission>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** CharacterSubmission connection edge */
export type CharacterSubmissionEdge = {
  node: Maybe<CharacterSubmission>
  /** The characters role in the media */
  role: Maybe<CharacterRole>
  /** The voice actors of the character */
  voiceActors: Maybe<Array<Maybe<Staff>>>
  /** The submitted voice actors of the character */
  submittedVoiceActors: Maybe<Array<Maybe<StaffSubmission>>>
}

/** Deleted data type */
export type Deleted = {
  /** If an item has been successfully deleted */
  deleted: Maybe<Scalars['Boolean']>
}

export enum ExternalLinkMediaType {
  Anime = 'ANIME',
  Manga = 'MANGA',
  Staff = 'STAFF',
}

export enum ExternalLinkType {
  Info = 'INFO',
  Streaming = 'STREAMING',
  Social = 'SOCIAL',
}

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  /** Favourite anime */
  anime: Maybe<MediaConnection>
  /** Favourite manga */
  manga: Maybe<MediaConnection>
  /** Favourite characters */
  characters: Maybe<CharacterConnection>
  /** Favourite staff */
  staff: Maybe<StaffConnection>
  /** Favourite studios */
  studios: Maybe<StudioConnection>
}

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesAnimeArgs = {
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesMangaArgs = {
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesCharactersArgs = {
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStaffArgs = {
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStudiosArgs = {
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Notification for when the authenticated user is followed by another user */
export type FollowingNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who followed the authenticated user */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The liked activity */
  user: Maybe<User>
}

/** User's format statistics */
export type FormatStats = {
  format: Maybe<MediaFormat>
  amount: Maybe<Scalars['Int']>
}

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
  /** Numeric Year (2017) */
  year: Maybe<Scalars['Int']>
  /** Numeric Month (3) */
  month: Maybe<Scalars['Int']>
  /** Numeric Day (24) */
  day: Maybe<Scalars['Int']>
}

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Year (2017) */
  year: Maybe<Scalars['Int']>
  /** Numeric Month (3) */
  month: Maybe<Scalars['Int']>
  /** Numeric Day (24) */
  day: Maybe<Scalars['Int']>
}

/** User's genre statistics */
export type GenreStats = {
  genre: Maybe<Scalars['String']>
  amount: Maybe<Scalars['Int']>
  meanScore: Maybe<Scalars['Int']>
  /** The amount of time in minutes the genre has been watched by the user */
  timeWatched: Maybe<Scalars['Int']>
}

/** Page of data (Used for internal use only) */
export type InternalPage = {
  mediaSubmissions: Maybe<Array<Maybe<MediaSubmission>>>
  characterSubmissions: Maybe<Array<Maybe<CharacterSubmission>>>
  staffSubmissions: Maybe<Array<Maybe<StaffSubmission>>>
  revisionHistory: Maybe<Array<Maybe<RevisionHistory>>>
  reports: Maybe<Array<Maybe<Report>>>
  modActions: Maybe<Array<Maybe<ModAction>>>
  userBlockSearch: Maybe<Array<Maybe<User>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
  users: Maybe<Array<Maybe<User>>>
  media: Maybe<Array<Maybe<Media>>>
  characters: Maybe<Array<Maybe<Character>>>
  staff: Maybe<Array<Maybe<Staff>>>
  studios: Maybe<Array<Maybe<Studio>>>
  mediaList: Maybe<Array<Maybe<MediaList>>>
  airingSchedules: Maybe<Array<Maybe<AiringSchedule>>>
  mediaTrends: Maybe<Array<Maybe<MediaTrend>>>
  notifications: Maybe<Array<Maybe<NotificationUnion>>>
  followers: Maybe<Array<Maybe<User>>>
  following: Maybe<Array<Maybe<User>>>
  activities: Maybe<Array<Maybe<ActivityUnion>>>
  activityReplies: Maybe<Array<Maybe<ActivityReply>>>
  threads: Maybe<Array<Maybe<Thread>>>
  threadComments: Maybe<Array<Maybe<ThreadComment>>>
  reviews: Maybe<Array<Maybe<Review>>>
  recommendations: Maybe<Array<Maybe<Recommendation>>>
  likes: Maybe<Array<Maybe<User>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageMediaSubmissionsArgs = {
  mediaId: Maybe<Scalars['Int']>
  submissionId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  assigneeId: Maybe<Scalars['Int']>
  status: Maybe<SubmissionStatus>
  type: Maybe<MediaType>
  sort: Maybe<Array<Maybe<SubmissionSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageCharacterSubmissionsArgs = {
  characterId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  assigneeId: Maybe<Scalars['Int']>
  status: Maybe<SubmissionStatus>
  sort: Maybe<Array<Maybe<SubmissionSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageStaffSubmissionsArgs = {
  staffId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  assigneeId: Maybe<Scalars['Int']>
  status: Maybe<SubmissionStatus>
  sort: Maybe<Array<Maybe<SubmissionSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageRevisionHistoryArgs = {
  userId: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  characterId: Maybe<Scalars['Int']>
  staffId: Maybe<Scalars['Int']>
  studioId: Maybe<Scalars['Int']>
}

/** Page of data (Used for internal use only) */
export type InternalPageReportsArgs = {
  reporterId: Maybe<Scalars['Int']>
  reportedId: Maybe<Scalars['Int']>
}

/** Page of data (Used for internal use only) */
export type InternalPageModActionsArgs = {
  userId: Maybe<Scalars['Int']>
  modId: Maybe<Scalars['Int']>
}

/** Page of data (Used for internal use only) */
export type InternalPageUserBlockSearchArgs = {
  search: Maybe<Scalars['String']>
}

/** Page of data (Used for internal use only) */
export type InternalPageUsersArgs = {
  id: Maybe<Scalars['Int']>
  name: Maybe<Scalars['String']>
  isModerator: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<UserSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageMediaArgs = {
  id: Maybe<Scalars['Int']>
  idMal: Maybe<Scalars['Int']>
  startDate: Maybe<Scalars['FuzzyDateInt']>
  endDate: Maybe<Scalars['FuzzyDateInt']>
  season: Maybe<MediaSeason>
  seasonYear: Maybe<Scalars['Int']>
  type: Maybe<MediaType>
  format: Maybe<MediaFormat>
  status: Maybe<MediaStatus>
  episodes: Maybe<Scalars['Int']>
  duration: Maybe<Scalars['Int']>
  chapters: Maybe<Scalars['Int']>
  volumes: Maybe<Scalars['Int']>
  isAdult: Maybe<Scalars['Boolean']>
  genre: Maybe<Scalars['String']>
  tag: Maybe<Scalars['String']>
  minimumTagRank: Maybe<Scalars['Int']>
  tagCategory: Maybe<Scalars['String']>
  onList: Maybe<Scalars['Boolean']>
  licensedBy: Maybe<Scalars['String']>
  licensedById: Maybe<Scalars['Int']>
  averageScore: Maybe<Scalars['Int']>
  popularity: Maybe<Scalars['Int']>
  source: Maybe<MediaSource>
  countryOfOrigin: Maybe<Scalars['CountryCode']>
  isLicensed: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not: Maybe<Scalars['Int']>
  idMal_in: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  startDate_greater: Maybe<Scalars['FuzzyDateInt']>
  startDate_lesser: Maybe<Scalars['FuzzyDateInt']>
  startDate_like: Maybe<Scalars['String']>
  endDate_greater: Maybe<Scalars['FuzzyDateInt']>
  endDate_lesser: Maybe<Scalars['FuzzyDateInt']>
  endDate_like: Maybe<Scalars['String']>
  format_in: Maybe<Array<Maybe<MediaFormat>>>
  format_not: Maybe<MediaFormat>
  format_not_in: Maybe<Array<Maybe<MediaFormat>>>
  status_in: Maybe<Array<Maybe<MediaStatus>>>
  status_not: Maybe<MediaStatus>
  status_not_in: Maybe<Array<Maybe<MediaStatus>>>
  episodes_greater: Maybe<Scalars['Int']>
  episodes_lesser: Maybe<Scalars['Int']>
  duration_greater: Maybe<Scalars['Int']>
  duration_lesser: Maybe<Scalars['Int']>
  chapters_greater: Maybe<Scalars['Int']>
  chapters_lesser: Maybe<Scalars['Int']>
  volumes_greater: Maybe<Scalars['Int']>
  volumes_lesser: Maybe<Scalars['Int']>
  genre_in: Maybe<Array<Maybe<Scalars['String']>>>
  genre_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  tag_in: Maybe<Array<Maybe<Scalars['String']>>>
  tag_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_in: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  licensedBy_in: Maybe<Array<Maybe<Scalars['String']>>>
  licensedById_in: Maybe<Array<Maybe<Scalars['Int']>>>
  averageScore_not: Maybe<Scalars['Int']>
  averageScore_greater: Maybe<Scalars['Int']>
  averageScore_lesser: Maybe<Scalars['Int']>
  popularity_not: Maybe<Scalars['Int']>
  popularity_greater: Maybe<Scalars['Int']>
  popularity_lesser: Maybe<Scalars['Int']>
  source_in: Maybe<Array<Maybe<MediaSource>>>
  sort: Maybe<Array<Maybe<MediaSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageCharactersArgs = {
  id: Maybe<Scalars['Int']>
  isBirthday: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<CharacterSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageStaffArgs = {
  id: Maybe<Scalars['Int']>
  isBirthday: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageStudiosArgs = {
  id: Maybe<Scalars['Int']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<StudioSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageMediaListArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  userName: Maybe<Scalars['String']>
  type: Maybe<MediaType>
  status: Maybe<MediaListStatus>
  mediaId: Maybe<Scalars['Int']>
  isFollowing: Maybe<Scalars['Boolean']>
  notes: Maybe<Scalars['String']>
  startedAt: Maybe<Scalars['FuzzyDateInt']>
  completedAt: Maybe<Scalars['FuzzyDateInt']>
  compareWithAuthList: Maybe<Scalars['Boolean']>
  userId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  status_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not: Maybe<MediaListStatus>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  notes_like: Maybe<Scalars['String']>
  startedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like: Maybe<Scalars['String']>
  completedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<MediaListSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageAiringSchedulesArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  airingAt: Maybe<Scalars['Int']>
  notYetAired: Maybe<Scalars['Boolean']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not: Maybe<Scalars['Int']>
  episode_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_greater: Maybe<Scalars['Int']>
  episode_lesser: Maybe<Scalars['Int']>
  airingAt_greater: Maybe<Scalars['Int']>
  airingAt_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<AiringSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageMediaTrendsArgs = {
  mediaId: Maybe<Scalars['Int']>
  date: Maybe<Scalars['Int']>
  trending: Maybe<Scalars['Int']>
  averageScore: Maybe<Scalars['Int']>
  popularity: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  releasing: Maybe<Scalars['Boolean']>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  date_greater: Maybe<Scalars['Int']>
  date_lesser: Maybe<Scalars['Int']>
  trending_greater: Maybe<Scalars['Int']>
  trending_lesser: Maybe<Scalars['Int']>
  trending_not: Maybe<Scalars['Int']>
  averageScore_greater: Maybe<Scalars['Int']>
  averageScore_lesser: Maybe<Scalars['Int']>
  averageScore_not: Maybe<Scalars['Int']>
  popularity_greater: Maybe<Scalars['Int']>
  popularity_lesser: Maybe<Scalars['Int']>
  popularity_not: Maybe<Scalars['Int']>
  episode_greater: Maybe<Scalars['Int']>
  episode_lesser: Maybe<Scalars['Int']>
  episode_not: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<MediaTrendSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageNotificationsArgs = {
  type: Maybe<NotificationType>
  resetNotificationCount: Maybe<Scalars['Boolean']>
  type_in: Maybe<Array<Maybe<NotificationType>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageFollowersArgs = {
  userId: Scalars['Int']
  sort: Maybe<Array<Maybe<UserSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageFollowingArgs = {
  userId: Scalars['Int']
  sort: Maybe<Array<Maybe<UserSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageActivitiesArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  messengerId: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  type: Maybe<ActivityType>
  isFollowing: Maybe<Scalars['Boolean']>
  hasReplies: Maybe<Scalars['Boolean']>
  hasRepliesOrTypeText: Maybe<Scalars['Boolean']>
  createdAt: Maybe<Scalars['Int']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not: Maybe<Scalars['Int']>
  userId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not: Maybe<Scalars['Int']>
  messengerId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  type_not: Maybe<ActivityType>
  type_in: Maybe<Array<Maybe<ActivityType>>>
  type_not_in: Maybe<Array<Maybe<ActivityType>>>
  createdAt_greater: Maybe<Scalars['Int']>
  createdAt_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ActivitySort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageActivityRepliesArgs = {
  id: Maybe<Scalars['Int']>
  activityId: Maybe<Scalars['Int']>
}

/** Page of data (Used for internal use only) */
export type InternalPageThreadsArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  replyUserId: Maybe<Scalars['Int']>
  subscribed: Maybe<Scalars['Boolean']>
  categoryId: Maybe<Scalars['Int']>
  mediaCategoryId: Maybe<Scalars['Int']>
  search: Maybe<Scalars['String']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<ThreadSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageThreadCommentsArgs = {
  id: Maybe<Scalars['Int']>
  threadId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ThreadCommentSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageReviewsArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  mediaType: Maybe<MediaType>
  sort: Maybe<Array<Maybe<ReviewSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageRecommendationsArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  mediaRecommendationId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  rating: Maybe<Scalars['Int']>
  onList: Maybe<Scalars['Boolean']>
  rating_greater: Maybe<Scalars['Int']>
  rating_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<RecommendationSort>>>
}

/** Page of data (Used for internal use only) */
export type InternalPageLikesArgs = {
  likeableId: Maybe<Scalars['Int']>
  type: Maybe<LikeableType>
}

/** Types that can be liked */
export enum LikeableType {
  Thread = 'THREAD',
  ThreadComment = 'THREAD_COMMENT',
  Activity = 'ACTIVITY',
  ActivityReply = 'ACTIVITY_REPLY',
}

/** Likeable union type */
export type LikeableUnion =
  | ListActivity
  | TextActivity
  | MessageActivity
  | ActivityReply
  | Thread
  | ThreadComment

/** User list activity (anime & manga updates) */
export type ListActivity = {
  /** The id of the activity */
  id: Scalars['Int']
  /** The user id of the activity's creator */
  userId: Maybe<Scalars['Int']>
  /** The type of activity */
  type: Maybe<ActivityType>
  /** The number of activity replies */
  replyCount: Scalars['Int']
  /** The list item's textual status */
  status: Maybe<Scalars['String']>
  /** The list progress made */
  progress: Maybe<Scalars['String']>
  /** If the activity is locked and can receive replies */
  isLocked: Maybe<Scalars['Boolean']>
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed: Maybe<Scalars['Boolean']>
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']
  /** If the currently authenticated user liked the activity */
  isLiked: Maybe<Scalars['Boolean']>
  /** If the activity is pinned to the top of the users activity feed */
  isPinned: Maybe<Scalars['Boolean']>
  /** The url for the activity page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** The time the activity was created at */
  createdAt: Scalars['Int']
  /** The owner of the activity */
  user: Maybe<User>
  /** The associated media to the activity update */
  media: Maybe<Media>
  /** The written replies to the activity */
  replies: Maybe<Array<Maybe<ActivityReply>>>
  /** The users who liked the activity */
  likes: Maybe<Array<Maybe<User>>>
}

export type ListActivityOption = {
  disabled: Maybe<Scalars['Boolean']>
  type: Maybe<MediaListStatus>
}

export type ListActivityOptionInput = {
  disabled: Maybe<Scalars['Boolean']>
  type: Maybe<MediaListStatus>
}

/** User's list score statistics */
export type ListScoreStats = {
  meanScore: Maybe<Scalars['Int']>
  standardDeviation: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type Media = {
  /** The id of the media */
  id: Scalars['Int']
  /** The mal id of the media */
  idMal: Maybe<Scalars['Int']>
  /** The official titles of the media in various languages */
  title: Maybe<MediaTitle>
  /** The type of the media; anime or manga */
  type: Maybe<MediaType>
  /** The format the media was released in */
  format: Maybe<MediaFormat>
  /** The current releasing status of the media */
  status: Maybe<MediaStatus>
  /** Short description of the media's story and characters */
  description: Maybe<Scalars['String']>
  /** The first official release date of the media */
  startDate: Maybe<FuzzyDate>
  /** The last official release date of the media */
  endDate: Maybe<FuzzyDate>
  /** The season the media was initially released in */
  season: Maybe<MediaSeason>
  /** The season year the media was initially released in */
  seasonYear: Maybe<Scalars['Int']>
  /** The year & season the media was initially released in */
  seasonInt: Maybe<Scalars['Int']>
  /** The amount of episodes the anime has when complete */
  episodes: Maybe<Scalars['Int']>
  /** The general length of each anime episode in minutes */
  duration: Maybe<Scalars['Int']>
  /** The amount of chapters the manga has when complete */
  chapters: Maybe<Scalars['Int']>
  /** The amount of volumes the manga has when complete */
  volumes: Maybe<Scalars['Int']>
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  countryOfOrigin: Maybe<Scalars['CountryCode']>
  /** If the media is officially licensed or a self-published doujin release */
  isLicensed: Maybe<Scalars['Boolean']>
  /** Source type the media was adapted from. */
  source: Maybe<MediaSource>
  /** Official Twitter hashtags for the media */
  hashtag: Maybe<Scalars['String']>
  /** Media trailer or advertisement */
  trailer: Maybe<MediaTrailer>
  /** When the media's data was last updated */
  updatedAt: Maybe<Scalars['Int']>
  /** The cover images of the media */
  coverImage: Maybe<MediaCoverImage>
  /** The banner image of the media */
  bannerImage: Maybe<Scalars['String']>
  /** The genres of the media */
  genres: Maybe<Array<Maybe<Scalars['String']>>>
  /** Alternative titles of the media */
  synonyms: Maybe<Array<Maybe<Scalars['String']>>>
  /** A weighted average score of all the user's scores of the media */
  averageScore: Maybe<Scalars['Int']>
  /** Mean score of all the user's scores of the media */
  meanScore: Maybe<Scalars['Int']>
  /** The number of users with the media on their list */
  popularity: Maybe<Scalars['Int']>
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  isLocked: Maybe<Scalars['Boolean']>
  /** The amount of related activity in the past hour */
  trending: Maybe<Scalars['Int']>
  /** The amount of user's who have favourited the media */
  favourites: Maybe<Scalars['Int']>
  /** List of tags that describes elements and themes of the media */
  tags: Maybe<Array<Maybe<MediaTag>>>
  /** Other media in the same or connecting franchise */
  relations: Maybe<MediaConnection>
  /** The characters in the media */
  characters: Maybe<CharacterConnection>
  /** The staff who produced the media */
  staff: Maybe<StaffConnection>
  /** The companies who produced the media */
  studios: Maybe<StudioConnection>
  /** If the media is marked as favourite by the current authenticated user */
  isFavourite: Scalars['Boolean']
  /** If the media is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']
  /** If the media is intended only for 18+ adult audiences */
  isAdult: Maybe<Scalars['Boolean']>
  /** The media's next episode airing schedule */
  nextAiringEpisode: Maybe<AiringSchedule>
  /** The media's entire airing schedule */
  airingSchedule: Maybe<AiringScheduleConnection>
  /** The media's daily trend stats */
  trends: Maybe<MediaTrendConnection>
  /** External links to another site related to the media */
  externalLinks: Maybe<Array<Maybe<MediaExternalLink>>>
  /** Data and links to legal streaming episodes on external sites */
  streamingEpisodes: Maybe<Array<Maybe<MediaStreamingEpisode>>>
  /** The ranking of the media in a particular time span and format compared to other media */
  rankings: Maybe<Array<Maybe<MediaRank>>>
  /** The authenticated user's media list entry for the media */
  mediaListEntry: Maybe<MediaList>
  /** User reviews of the media */
  reviews: Maybe<ReviewConnection>
  /** User recommendations for similar media */
  recommendations: Maybe<RecommendationConnection>
  stats: Maybe<MediaStats>
  /** The url for the media page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** If the media should have forum thread automatically created for it on airing episode release */
  autoCreateForumThread: Maybe<Scalars['Boolean']>
  /** If the media is blocked from being recommended to/from */
  isRecommendationBlocked: Maybe<Scalars['Boolean']>
  /** If the media is blocked from being reviewed */
  isReviewBlocked: Maybe<Scalars['Boolean']>
  /** Notes for site moderators */
  modNotes: Maybe<Scalars['String']>
}

/** Anime or Manga */
export type MediaStatusArgs = {
  version: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaDescriptionArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** Anime or Manga */
export type MediaSourceArgs = {
  version: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaCharactersArgs = {
  sort: Maybe<Array<Maybe<CharacterSort>>>
  role: Maybe<CharacterRole>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaStaffArgs = {
  sort: Maybe<Array<Maybe<StaffSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaStudiosArgs = {
  sort: Maybe<Array<Maybe<StudioSort>>>
  isMain: Maybe<Scalars['Boolean']>
}

/** Anime or Manga */
export type MediaAiringScheduleArgs = {
  notYetAired: Maybe<Scalars['Boolean']>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaTrendsArgs = {
  sort: Maybe<Array<Maybe<MediaTrendSort>>>
  releasing: Maybe<Scalars['Boolean']>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaReviewsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ReviewSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Anime or Manga */
export type MediaRecommendationsArgs = {
  sort: Maybe<Array<Maybe<RecommendationSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Internal - Media characters separated */
export type MediaCharacter = {
  /** The id of the connection */
  id: Maybe<Scalars['Int']>
  /** The characters role in the media */
  role: Maybe<CharacterRole>
  roleNotes: Maybe<Scalars['String']>
  dubGroup: Maybe<Scalars['String']>
  /** Media specific character name */
  characterName: Maybe<Scalars['String']>
  /** The characters in the media voiced by the parent actor */
  character: Maybe<Character>
  /** The voice actor of the character */
  voiceActor: Maybe<Staff>
}

export type MediaConnection = {
  edges: Maybe<Array<Maybe<MediaEdge>>>
  nodes: Maybe<Array<Maybe<Media>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

export type MediaCoverImage = {
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  extraLarge: Maybe<Scalars['String']>
  /** The cover image url of the media at a large size */
  large: Maybe<Scalars['String']>
  /** The cover image url of the media at medium size */
  medium: Maybe<Scalars['String']>
  /** Average #hex color of cover image */
  color: Maybe<Scalars['String']>
}

/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export type MediaDataChangeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the media that received data changes */
  mediaId: Scalars['Int']
  /** The reason for the media data change */
  context: Maybe<Scalars['String']>
  /** The reason for the media data change */
  reason: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The media that received data changes */
  media: Maybe<Media>
}

/** Notification for when a media tracked in a user's list is deleted from the site */
export type MediaDeletionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The title of the deleted media */
  deletedMediaTitle: Maybe<Scalars['String']>
  /** The reason for the media deletion */
  context: Maybe<Scalars['String']>
  /** The reason for the media deletion */
  reason: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
}

/** Media connection edge */
export type MediaEdge = {
  node: Maybe<Media>
  /** The id of the connection */
  id: Maybe<Scalars['Int']>
  /** The type of relation to the parent model */
  relationType: Maybe<MediaRelation>
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  isMainStudio: Scalars['Boolean']
  /** The characters in the media voiced by the parent actor */
  characters: Maybe<Array<Maybe<Character>>>
  /** The characters role in the media */
  characterRole: Maybe<CharacterRole>
  /** Media specific character name */
  characterName: Maybe<Scalars['String']>
  /** Notes regarding the VA's role for the character */
  roleNotes: Maybe<Scalars['String']>
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup: Maybe<Scalars['String']>
  /** The role of the staff member in the production of the media */
  staffRole: Maybe<Scalars['String']>
  /** The voice actors of the character */
  voiceActors: Maybe<Array<Maybe<Staff>>>
  /** The voice actors of the character with role date */
  voiceActorRoles: Maybe<Array<Maybe<StaffRoleType>>>
  /** The order the media should be displayed from the users favourites */
  favouriteOrder: Maybe<Scalars['Int']>
}

/** Media connection edge */
export type MediaEdgeRelationTypeArgs = {
  version: Maybe<Scalars['Int']>
}

/** Media connection edge */
export type MediaEdgeVoiceActorsArgs = {
  language: Maybe<StaffLanguage>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

/** Media connection edge */
export type MediaEdgeVoiceActorRolesArgs = {
  language: Maybe<StaffLanguage>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

/** An external link to another site related to the media or staff member */
export type MediaExternalLink = {
  /** The id of the external link */
  id: Scalars['Int']
  /** The url of the external link or base url of link source */
  url: Maybe<Scalars['String']>
  /** The links website site name */
  site: Scalars['String']
  /** The links website site id */
  siteId: Maybe<Scalars['Int']>
  type: Maybe<ExternalLinkType>
  /** Language the site content is in. See Staff language field for values. */
  language: Maybe<Scalars['String']>
  color: Maybe<Scalars['String']>
  /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
  icon: Maybe<Scalars['String']>
  notes: Maybe<Scalars['String']>
  isDisabled: Maybe<Scalars['Boolean']>
}

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
  /** The id of the external link */
  id: Scalars['Int']
  /** The url of the external link */
  url: Scalars['String']
  /** The site location of the external link */
  site: Scalars['String']
}

/** The format the media was released in */
export enum MediaFormat {
  /** Anime broadcast on television */
  Tv = 'TV',
  /** Anime which are under 15 minutes in length and broadcast on television */
  TvShort = 'TV_SHORT',
  /** Anime movies with a theatrical release */
  Movie = 'MOVIE',
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  Special = 'SPECIAL',
  /**
   * (Original Video Animation) Anime that have been released directly on
   * DVD/Blu-ray without originally going through a theatrical release or
   * television broadcast
   */
  Ova = 'OVA',
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  Ona = 'ONA',
  /** Short anime released as a music video */
  Music = 'MUSIC',
  /** Professionally published manga with more than one chapter */
  Manga = 'MANGA',
  /** Written books released as a series of light novels */
  Novel = 'NOVEL',
  /** Manga with just one chapter */
  OneShot = 'ONE_SHOT',
}

/** List of anime or manga */
export type MediaList = {
  /** The id of the list entry */
  id: Scalars['Int']
  /** The id of the user owner of the list entry */
  userId: Scalars['Int']
  /** The id of the media */
  mediaId: Scalars['Int']
  /** The watching/reading status */
  status: Maybe<MediaListStatus>
  /** The score of the entry */
  score: Maybe<Scalars['Float']>
  /** The amount of episodes/chapters consumed by the user */
  progress: Maybe<Scalars['Int']>
  /** The amount of volumes read by the user */
  progressVolumes: Maybe<Scalars['Int']>
  /** The amount of times the user has rewatched/read the media */
  repeat: Maybe<Scalars['Int']>
  /** Priority of planning */
  priority: Maybe<Scalars['Int']>
  /** If the entry should only be visible to authenticated user */
  private: Maybe<Scalars['Boolean']>
  /** Text notes */
  notes: Maybe<Scalars['String']>
  /** If the entry shown be hidden from non-custom lists */
  hiddenFromStatusLists: Maybe<Scalars['Boolean']>
  /** Map of booleans for which custom lists the entry are in */
  customLists: Maybe<Scalars['Json']>
  /** Map of advanced scores with name keys */
  advancedScores: Maybe<Scalars['Json']>
  /** When the entry was started by the user */
  startedAt: Maybe<FuzzyDate>
  /** When the entry was completed by the user */
  completedAt: Maybe<FuzzyDate>
  /** When the entry data was last updated */
  updatedAt: Maybe<Scalars['Int']>
  /** When the entry data was created */
  createdAt: Maybe<Scalars['Int']>
  media: Maybe<Media>
  user: Maybe<User>
}

/** List of anime or manga */
export type MediaListScoreArgs = {
  format: Maybe<ScoreFormat>
}

/** List of anime or manga */
export type MediaListCustomListsArgs = {
  asArray: Maybe<Scalars['Boolean']>
}

/** List of anime or manga */
export type MediaListCollection = {
  /** Grouped media list entries */
  lists: Maybe<Array<Maybe<MediaListGroup>>>
  /** The owner of the list */
  user: Maybe<User>
  /** If there is another chunk */
  hasNextChunk: Maybe<Scalars['Boolean']>
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  statusLists: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  customLists: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>
}

/** List of anime or manga */
export type MediaListCollectionStatusListsArgs = {
  asArray: Maybe<Scalars['Boolean']>
}

/** List of anime or manga */
export type MediaListCollectionCustomListsArgs = {
  asArray: Maybe<Scalars['Boolean']>
}

/** List group of anime or manga entries */
export type MediaListGroup = {
  /** Media list entries */
  entries: Maybe<Array<Maybe<MediaList>>>
  name: Maybe<Scalars['String']>
  isCustomList: Maybe<Scalars['Boolean']>
  isSplitCompletedList: Maybe<Scalars['Boolean']>
  status: Maybe<MediaListStatus>
}

/** A user's list options */
export type MediaListOptions = {
  /** The score format the user is using for media lists */
  scoreFormat: Maybe<ScoreFormat>
  /** The default order list rows should be displayed in */
  rowOrder: Maybe<Scalars['String']>
  /** @deprecated No longer used */
  useLegacyLists: Maybe<Scalars['Boolean']>
  /** The user's anime list options */
  animeList: Maybe<MediaListTypeOptions>
  /** The user's manga list options */
  mangaList: Maybe<MediaListTypeOptions>
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme: Maybe<Scalars['Json']>
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled: Maybe<Scalars['Boolean']>
}

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The order each list should be displayed in */
  sectionOrder: Maybe<Array<Maybe<Scalars['String']>>>
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat: Maybe<Scalars['Boolean']>
  /** The names of the user's custom lists */
  customLists: Maybe<Array<Maybe<Scalars['String']>>>
  /** The names of the user's advanced scoring sections */
  advancedScoring: Maybe<Array<Maybe<Scalars['String']>>>
  /** If advanced scoring is enabled */
  advancedScoringEnabled: Maybe<Scalars['Boolean']>
  /** list theme */
  theme: Maybe<Scalars['String']>
}

/** Media list sort enums */
export enum MediaListSort {
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  ProgressVolumes = 'PROGRESS_VOLUMES',
  ProgressVolumesDesc = 'PROGRESS_VOLUMES_DESC',
  Repeat = 'REPEAT',
  RepeatDesc = 'REPEAT_DESC',
  Priority = 'PRIORITY',
  PriorityDesc = 'PRIORITY_DESC',
  StartedOn = 'STARTED_ON',
  StartedOnDesc = 'STARTED_ON_DESC',
  FinishedOn = 'FINISHED_ON',
  FinishedOnDesc = 'FINISHED_ON_DESC',
  AddedTime = 'ADDED_TIME',
  AddedTimeDesc = 'ADDED_TIME_DESC',
  UpdatedTime = 'UPDATED_TIME',
  UpdatedTimeDesc = 'UPDATED_TIME_DESC',
  MediaTitleRomaji = 'MEDIA_TITLE_ROMAJI',
  MediaTitleRomajiDesc = 'MEDIA_TITLE_ROMAJI_DESC',
  MediaTitleEnglish = 'MEDIA_TITLE_ENGLISH',
  MediaTitleEnglishDesc = 'MEDIA_TITLE_ENGLISH_DESC',
  MediaTitleNative = 'MEDIA_TITLE_NATIVE',
  MediaTitleNativeDesc = 'MEDIA_TITLE_NATIVE_DESC',
  MediaPopularity = 'MEDIA_POPULARITY',
  MediaPopularityDesc = 'MEDIA_POPULARITY_DESC',
}

/** Media list watching/reading status enum. */
export enum MediaListStatus {
  /** Currently watching/reading */
  Current = 'CURRENT',
  /** Planning to watch/read */
  Planning = 'PLANNING',
  /** Finished watching/reading */
  Completed = 'COMPLETED',
  /** Stopped watching/reading before completing */
  Dropped = 'DROPPED',
  /** Paused watching/reading */
  Paused = 'PAUSED',
  /** Re-watching/reading */
  Repeating = 'REPEATING',
}

/** A user's list options for anime or manga lists */
export type MediaListTypeOptions = {
  /** The order each list should be displayed in */
  sectionOrder: Maybe<Array<Maybe<Scalars['String']>>>
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat: Maybe<Scalars['Boolean']>
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  theme: Maybe<Scalars['Json']>
  /** The names of the user's custom lists */
  customLists: Maybe<Array<Maybe<Scalars['String']>>>
  /** The names of the user's advanced scoring sections */
  advancedScoring: Maybe<Array<Maybe<Scalars['String']>>>
  /** If advanced scoring is enabled */
  advancedScoringEnabled: Maybe<Scalars['Boolean']>
}

/** Notification for when a media entry is merged into another for a user who had it on their list */
export type MediaMergeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the media that was merged into */
  mediaId: Scalars['Int']
  /** The title of the deleted media */
  deletedMediaTitles: Maybe<Array<Maybe<Scalars['String']>>>
  /** The reason for the media data change */
  context: Maybe<Scalars['String']>
  /** The reason for the media merge */
  reason: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The media that was merged into */
  media: Maybe<Media>
}

/** The ranking of a media in a particular time span and format compared to other media */
export type MediaRank = {
  /** The id of the rank */
  id: Scalars['Int']
  /** The numerical rank of the media */
  rank: Scalars['Int']
  /** The type of ranking */
  type: MediaRankType
  /** The format the media is ranked within */
  format: MediaFormat
  /** The year the media is ranked within */
  year: Maybe<Scalars['Int']>
  /** The season the media is ranked within */
  season: Maybe<MediaSeason>
  /** If the ranking is based on all time instead of a season/year */
  allTime: Maybe<Scalars['Boolean']>
  /** String that gives context to the ranking type and time span */
  context: Scalars['String']
}

/** The type of ranking */
export enum MediaRankType {
  /** Ranking is based on the media's ratings/score */
  Rated = 'RATED',
  /** Ranking is based on the media's popularity */
  Popular = 'POPULAR',
}

/** Type of relation media has to its parent. */
export enum MediaRelation {
  /** An adaption of this media into a different format */
  Adaptation = 'ADAPTATION',
  /** Released before the relation */
  Prequel = 'PREQUEL',
  /** Released after the relation */
  Sequel = 'SEQUEL',
  /** The media a side story is from */
  Parent = 'PARENT',
  /** A side story of the parent media */
  SideStory = 'SIDE_STORY',
  /** Shares at least 1 character */
  Character = 'CHARACTER',
  /** A shortened and summarized version */
  Summary = 'SUMMARY',
  /** An alternative version of the same media */
  Alternative = 'ALTERNATIVE',
  /** An alternative version of the media with a different primary focus */
  SpinOff = 'SPIN_OFF',
  /** Other */
  Other = 'OTHER',
  /** Version 2 only. The source material the media was adapted from */
  Source = 'SOURCE',
  /** Version 2 only. */
  Compilation = 'COMPILATION',
  /** Version 2 only. */
  Contains = 'CONTAINS',
}

export enum MediaSeason {
  /** Months December to February */
  Winter = 'WINTER',
  /** Months March to May */
  Spring = 'SPRING',
  /** Months June to August */
  Summer = 'SUMMER',
  /** Months September to November */
  Fall = 'FALL',
}

/** Media sort enums */
export enum MediaSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  Type = 'TYPE',
  TypeDesc = 'TYPE_DESC',
  Format = 'FORMAT',
  FormatDesc = 'FORMAT_DESC',
  StartDate = 'START_DATE',
  StartDateDesc = 'START_DATE_DESC',
  EndDate = 'END_DATE',
  EndDateDesc = 'END_DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episodes = 'EPISODES',
  EpisodesDesc = 'EPISODES_DESC',
  Duration = 'DURATION',
  DurationDesc = 'DURATION_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Chapters = 'CHAPTERS',
  ChaptersDesc = 'CHAPTERS_DESC',
  Volumes = 'VOLUMES',
  VolumesDesc = 'VOLUMES_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
}

/** Source type the media was adapted from */
export enum MediaSource {
  /** An original production not based of another work */
  Original = 'ORIGINAL',
  /** Asian comic book */
  Manga = 'MANGA',
  /** Written work published in volumes */
  LightNovel = 'LIGHT_NOVEL',
  /** Video game driven primary by text and narrative */
  VisualNovel = 'VISUAL_NOVEL',
  /** Video game */
  VideoGame = 'VIDEO_GAME',
  /** Other */
  Other = 'OTHER',
  /** Version 2+ only. Written works not published in volumes */
  Novel = 'NOVEL',
  /** Version 2+ only. Self-published works */
  Doujinshi = 'DOUJINSHI',
  /** Version 2+ only. Japanese Anime */
  Anime = 'ANIME',
  /** Version 3 only. Written works published online */
  WebNovel = 'WEB_NOVEL',
  /** Version 3 only. Live action media such as movies or TV show */
  LiveAction = 'LIVE_ACTION',
  /** Version 3 only. Games excluding video games */
  Game = 'GAME',
  /** Version 3 only. Comics excluding manga */
  Comic = 'COMIC',
  /** Version 3 only. Multimedia project */
  MultimediaProject = 'MULTIMEDIA_PROJECT',
  /** Version 3 only. Picture book */
  PictureBook = 'PICTURE_BOOK',
}

/** A media's statistics */
export type MediaStats = {
  scoreDistribution: Maybe<Array<Maybe<ScoreDistribution>>>
  statusDistribution: Maybe<Array<Maybe<StatusDistribution>>>
  /** @deprecated Replaced by MediaTrends */
  airingProgression: Maybe<Array<Maybe<AiringProgression>>>
}

/** The current releasing status of the media */
export enum MediaStatus {
  /** Has completed and is no longer being released */
  Finished = 'FINISHED',
  /** Currently releasing */
  Releasing = 'RELEASING',
  /** To be released at a later date */
  NotYetReleased = 'NOT_YET_RELEASED',
  /** Ended before the work could be finished */
  Cancelled = 'CANCELLED',
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  Hiatus = 'HIATUS',
}

/** Data and links to legal streaming episodes on external sites */
export type MediaStreamingEpisode = {
  /** Title of the episode */
  title: Maybe<Scalars['String']>
  /** Url of episode image thumbnail */
  thumbnail: Maybe<Scalars['String']>
  /** The url of the episode */
  url: Maybe<Scalars['String']>
  /** The site location of the streaming episodes */
  site: Maybe<Scalars['String']>
}

/** Media submission */
export type MediaSubmission = {
  /** The id of the submission */
  id: Scalars['Int']
  /** User submitter of the submission */
  submitter: Maybe<User>
  /** Data Mod assigned to handle the submission */
  assignee: Maybe<User>
  /** Status of the submission */
  status: Maybe<SubmissionStatus>
  submitterStats: Maybe<Scalars['Json']>
  notes: Maybe<Scalars['String']>
  source: Maybe<Scalars['String']>
  changes: Maybe<Array<Maybe<Scalars['String']>>>
  /** Whether the submission is locked */
  locked: Maybe<Scalars['Boolean']>
  media: Maybe<Media>
  submission: Maybe<Media>
  characters: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  staff: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  studios: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  relations: Maybe<Array<Maybe<MediaEdge>>>
  externalLinks: Maybe<Array<Maybe<MediaSubmissionComparison>>>
  createdAt: Maybe<Scalars['Int']>
}

/** Media submission with comparison to current data */
export type MediaSubmissionComparison = {
  submission: Maybe<MediaSubmissionEdge>
  character: Maybe<MediaCharacter>
  staff: Maybe<StaffEdge>
  studio: Maybe<StudioEdge>
  externalLink: Maybe<MediaExternalLink>
}

export type MediaSubmissionEdge = {
  /** The id of the direct submission */
  id: Maybe<Scalars['Int']>
  characterRole: Maybe<CharacterRole>
  staffRole: Maybe<Scalars['String']>
  roleNotes: Maybe<Scalars['String']>
  dubGroup: Maybe<Scalars['String']>
  characterName: Maybe<Scalars['String']>
  isMain: Maybe<Scalars['Boolean']>
  character: Maybe<Character>
  characterSubmission: Maybe<Character>
  voiceActor: Maybe<Staff>
  voiceActorSubmission: Maybe<Staff>
  staff: Maybe<Staff>
  staffSubmission: Maybe<Staff>
  studio: Maybe<Studio>
  externalLink: Maybe<MediaExternalLink>
  media: Maybe<Media>
}

/** A tag that describes a theme or element of the media */
export type MediaTag = {
  /** The id of the tag */
  id: Scalars['Int']
  /** The name of the tag */
  name: Scalars['String']
  /** A general description of the tag */
  description: Maybe<Scalars['String']>
  /** The categories of tags this tag belongs to */
  category: Maybe<Scalars['String']>
  /** The relevance ranking of the tag out of the 100 for this media */
  rank: Maybe<Scalars['Int']>
  /** If the tag could be a spoiler for any media */
  isGeneralSpoiler: Maybe<Scalars['Boolean']>
  /** If the tag is a spoiler for this media */
  isMediaSpoiler: Maybe<Scalars['Boolean']>
  /** If the tag is only for adult 18+ media */
  isAdult: Maybe<Scalars['Boolean']>
  /** The user who submitted the tag */
  userId: Maybe<Scalars['Int']>
}

/** The official titles of the media in various languages */
export type MediaTitle = {
  /** The romanization of the native language title */
  romaji: Maybe<Scalars['String']>
  /** The official english title */
  english: Maybe<Scalars['String']>
  /** Official title in it's native language */
  native: Maybe<Scalars['String']>
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  userPreferred: Maybe<Scalars['String']>
}

/** The official titles of the media in various languages */
export type MediaTitleRomajiArgs = {
  stylised: Maybe<Scalars['Boolean']>
}

/** The official titles of the media in various languages */
export type MediaTitleEnglishArgs = {
  stylised: Maybe<Scalars['Boolean']>
}

/** The official titles of the media in various languages */
export type MediaTitleNativeArgs = {
  stylised: Maybe<Scalars['Boolean']>
}

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The romanization of the native language title */
  romaji: Maybe<Scalars['String']>
  /** The official english title */
  english: Maybe<Scalars['String']>
  /** Official title in it's native language */
  native: Maybe<Scalars['String']>
}

/** Media trailer or advertisement */
export type MediaTrailer = {
  /** The trailer video id */
  id: Maybe<Scalars['String']>
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  site: Maybe<Scalars['String']>
  /** The url for the thumbnail image of the video */
  thumbnail: Maybe<Scalars['String']>
}

/** Daily media statistics */
export type MediaTrend = {
  /** The id of the tag */
  mediaId: Scalars['Int']
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']
  /** The amount of media activity on the day */
  trending: Scalars['Int']
  /** A weighted average score of all the user's scores of the media */
  averageScore: Maybe<Scalars['Int']>
  /** The number of users with the media on their list */
  popularity: Maybe<Scalars['Int']>
  /** The number of users with watching/reading the media */
  inProgress: Maybe<Scalars['Int']>
  /** If the media was being released at this time */
  releasing: Scalars['Boolean']
  /** The episode number of the anime released on this day */
  episode: Maybe<Scalars['Int']>
  /** The related media */
  media: Maybe<Media>
}

export type MediaTrendConnection = {
  edges: Maybe<Array<Maybe<MediaTrendEdge>>>
  nodes: Maybe<Array<Maybe<MediaTrend>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Media trend connection edge */
export type MediaTrendEdge = {
  node: Maybe<MediaTrend>
}

/** Media trend sort enums */
export enum MediaTrendSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC',
}

/** Media type enum, anime or manga. */
export enum MediaType {
  /** Japanese Anime */
  Anime = 'ANIME',
  /** Asian comic */
  Manga = 'MANGA',
}

/** User message activity */
export type MessageActivity = {
  /** The id of the activity */
  id: Scalars['Int']
  /** The user id of the activity's recipient */
  recipientId: Maybe<Scalars['Int']>
  /** The user id of the activity's sender */
  messengerId: Maybe<Scalars['Int']>
  /** The type of the activity */
  type: Maybe<ActivityType>
  /** The number of activity replies */
  replyCount: Scalars['Int']
  /** The message text (Markdown) */
  message: Maybe<Scalars['String']>
  /** If the activity is locked and can receive replies */
  isLocked: Maybe<Scalars['Boolean']>
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed: Maybe<Scalars['Boolean']>
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']
  /** If the currently authenticated user liked the activity */
  isLiked: Maybe<Scalars['Boolean']>
  /** If the message is private and only viewable to the sender and recipients */
  isPrivate: Maybe<Scalars['Boolean']>
  /** The url for the activity page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** The time the activity was created at */
  createdAt: Scalars['Int']
  /** The user who the activity message was sent to */
  recipient: Maybe<User>
  /** The user who sent the activity message */
  messenger: Maybe<User>
  /** The written replies to the activity */
  replies: Maybe<Array<Maybe<ActivityReply>>>
  /** The users who liked the activity */
  likes: Maybe<Array<Maybe<User>>>
}

/** User message activity */
export type MessageActivityMessageArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

export type ModAction = {
  /** The id of the action */
  id: Scalars['Int']
  user: Maybe<User>
  mod: Maybe<User>
  type: Maybe<ModActionType>
  objectId: Maybe<Scalars['Int']>
  objectType: Maybe<Scalars['String']>
  data: Maybe<Scalars['String']>
  createdAt: Scalars['Int']
}

export enum ModActionType {
  Note = 'NOTE',
  Ban = 'BAN',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Expire = 'EXPIRE',
  Report = 'REPORT',
  Reset = 'RESET',
  Anon = 'ANON',
}

/** Mod role enums */
export enum ModRole {
  /** An AniList administrator */
  Admin = 'ADMIN',
  /** A head developer of AniList */
  LeadDeveloper = 'LEAD_DEVELOPER',
  /** An AniList developer */
  Developer = 'DEVELOPER',
  /** A lead community moderator */
  LeadCommunity = 'LEAD_COMMUNITY',
  /** A community moderator */
  Community = 'COMMUNITY',
  /** A discord community moderator */
  DiscordCommunity = 'DISCORD_COMMUNITY',
  /** A lead anime data moderator */
  LeadAnimeData = 'LEAD_ANIME_DATA',
  /** An anime data moderator */
  AnimeData = 'ANIME_DATA',
  /** A lead manga data moderator */
  LeadMangaData = 'LEAD_MANGA_DATA',
  /** A manga data moderator */
  MangaData = 'MANGA_DATA',
  /** A lead social media moderator */
  LeadSocialMedia = 'LEAD_SOCIAL_MEDIA',
  /** A social media moderator */
  SocialMedia = 'SOCIAL_MEDIA',
  /** A retired moderator */
  Retired = 'RETIRED',
}

export type Mutation = {
  UpdateUser: Maybe<User>
  /** Create or update a media list entry */
  SaveMediaListEntry: Maybe<MediaList>
  /** Update multiple media list entries to the same values */
  UpdateMediaListEntries: Maybe<Array<Maybe<MediaList>>>
  /** Delete a media list entry */
  DeleteMediaListEntry: Maybe<Deleted>
  /** Delete a custom list and remove the list entries from it */
  DeleteCustomList: Maybe<Deleted>
  /** Create or update text activity for the currently authenticated user */
  SaveTextActivity: Maybe<TextActivity>
  /** Create or update message activity for the currently authenticated user */
  SaveMessageActivity: Maybe<MessageActivity>
  /** Update list activity (Mod Only) */
  SaveListActivity: Maybe<ListActivity>
  /** Delete an activity item of the authenticated users */
  DeleteActivity: Maybe<Deleted>
  /** Toggle activity to be pinned to the top of the user's activity feed */
  ToggleActivityPin: Maybe<ActivityUnion>
  /** Toggle the subscription of an activity item */
  ToggleActivitySubscription: Maybe<ActivityUnion>
  /** Create or update an activity reply */
  SaveActivityReply: Maybe<ActivityReply>
  /** Delete an activity reply of the authenticated users */
  DeleteActivityReply: Maybe<Deleted>
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  ToggleLike: Maybe<Array<Maybe<User>>>
  /** Add or remove a like from a likeable type. */
  ToggleLikeV2: Maybe<LikeableUnion>
  /** Toggle the un/following of a user */
  ToggleFollow: Maybe<User>
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  ToggleFavourite: Maybe<Favourites>
  /** Update the order favourites are displayed in */
  UpdateFavouriteOrder: Maybe<Favourites>
  /** Create or update a review */
  SaveReview: Maybe<Review>
  /** Delete a review */
  DeleteReview: Maybe<Deleted>
  /** Rate a review */
  RateReview: Maybe<Review>
  /** Recommendation a media */
  SaveRecommendation: Maybe<Recommendation>
  /** Create or update a forum thread */
  SaveThread: Maybe<Thread>
  /** Delete a thread */
  DeleteThread: Maybe<Deleted>
  /** Toggle the subscription of a forum thread */
  ToggleThreadSubscription: Maybe<Thread>
  /** Create or update a thread comment */
  SaveThreadComment: Maybe<ThreadComment>
  /** Delete a thread comment */
  DeleteThreadComment: Maybe<Deleted>
  UpdateAniChartSettings: Maybe<Scalars['Json']>
  UpdateAniChartHighlights: Maybe<Scalars['Json']>
}

export type MutationUpdateUserArgs = {
  about: Maybe<Scalars['String']>
  titleLanguage: Maybe<UserTitleLanguage>
  displayAdultContent: Maybe<Scalars['Boolean']>
  airingNotifications: Maybe<Scalars['Boolean']>
  scoreFormat: Maybe<ScoreFormat>
  rowOrder: Maybe<Scalars['String']>
  profileColor: Maybe<Scalars['String']>
  donatorBadge: Maybe<Scalars['String']>
  notificationOptions: Maybe<Array<Maybe<NotificationOptionInput>>>
  timezone: Maybe<Scalars['String']>
  activityMergeTime: Maybe<Scalars['Int']>
  animeListOptions: Maybe<MediaListOptionsInput>
  mangaListOptions: Maybe<MediaListOptionsInput>
  staffNameLanguage: Maybe<UserStaffNameLanguage>
  restrictMessagesToFollowing: Maybe<Scalars['Boolean']>
  disabledListActivity: Maybe<Array<Maybe<ListActivityOptionInput>>>
}

export type MutationSaveMediaListEntryArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  status: Maybe<MediaListStatus>
  score: Maybe<Scalars['Float']>
  scoreRaw: Maybe<Scalars['Int']>
  progress: Maybe<Scalars['Int']>
  progressVolumes: Maybe<Scalars['Int']>
  repeat: Maybe<Scalars['Int']>
  priority: Maybe<Scalars['Int']>
  private: Maybe<Scalars['Boolean']>
  notes: Maybe<Scalars['String']>
  hiddenFromStatusLists: Maybe<Scalars['Boolean']>
  customLists: Maybe<Array<Maybe<Scalars['String']>>>
  advancedScores: Maybe<Array<Maybe<Scalars['Float']>>>
  startedAt: Maybe<FuzzyDateInput>
  completedAt: Maybe<FuzzyDateInput>
}

export type MutationUpdateMediaListEntriesArgs = {
  status: Maybe<MediaListStatus>
  score: Maybe<Scalars['Float']>
  scoreRaw: Maybe<Scalars['Int']>
  progress: Maybe<Scalars['Int']>
  progressVolumes: Maybe<Scalars['Int']>
  repeat: Maybe<Scalars['Int']>
  priority: Maybe<Scalars['Int']>
  private: Maybe<Scalars['Boolean']>
  notes: Maybe<Scalars['String']>
  hiddenFromStatusLists: Maybe<Scalars['Boolean']>
  advancedScores: Maybe<Array<Maybe<Scalars['Float']>>>
  startedAt: Maybe<FuzzyDateInput>
  completedAt: Maybe<FuzzyDateInput>
  ids: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationDeleteMediaListEntryArgs = {
  id: Maybe<Scalars['Int']>
}

export type MutationDeleteCustomListArgs = {
  customList: Maybe<Scalars['String']>
  type: Maybe<MediaType>
}

export type MutationSaveTextActivityArgs = {
  id: Maybe<Scalars['Int']>
  text: Maybe<Scalars['String']>
  locked: Maybe<Scalars['Boolean']>
}

export type MutationSaveMessageActivityArgs = {
  id: Maybe<Scalars['Int']>
  message: Maybe<Scalars['String']>
  recipientId: Maybe<Scalars['Int']>
  private: Maybe<Scalars['Boolean']>
  locked: Maybe<Scalars['Boolean']>
  asMod: Maybe<Scalars['Boolean']>
}

export type MutationSaveListActivityArgs = {
  id: Maybe<Scalars['Int']>
  locked: Maybe<Scalars['Boolean']>
}

export type MutationDeleteActivityArgs = {
  id: Maybe<Scalars['Int']>
}

export type MutationToggleActivityPinArgs = {
  id: Maybe<Scalars['Int']>
  pinned: Maybe<Scalars['Boolean']>
}

export type MutationToggleActivitySubscriptionArgs = {
  activityId: Maybe<Scalars['Int']>
  subscribe: Maybe<Scalars['Boolean']>
}

export type MutationSaveActivityReplyArgs = {
  id: Maybe<Scalars['Int']>
  activityId: Maybe<Scalars['Int']>
  text: Maybe<Scalars['String']>
  asMod: Maybe<Scalars['Boolean']>
}

export type MutationDeleteActivityReplyArgs = {
  id: Maybe<Scalars['Int']>
}

export type MutationToggleLikeArgs = {
  id: Maybe<Scalars['Int']>
  type: Maybe<LikeableType>
}

export type MutationToggleLikeV2Args = {
  id: Maybe<Scalars['Int']>
  type: Maybe<LikeableType>
}

export type MutationToggleFollowArgs = {
  userId: Maybe<Scalars['Int']>
}

export type MutationToggleFavouriteArgs = {
  animeId: Maybe<Scalars['Int']>
  mangaId: Maybe<Scalars['Int']>
  characterId: Maybe<Scalars['Int']>
  staffId: Maybe<Scalars['Int']>
  studioId: Maybe<Scalars['Int']>
}

export type MutationUpdateFavouriteOrderArgs = {
  animeIds: Maybe<Array<Maybe<Scalars['Int']>>>
  mangaIds: Maybe<Array<Maybe<Scalars['Int']>>>
  characterIds: Maybe<Array<Maybe<Scalars['Int']>>>
  staffIds: Maybe<Array<Maybe<Scalars['Int']>>>
  studioIds: Maybe<Array<Maybe<Scalars['Int']>>>
  animeOrder: Maybe<Array<Maybe<Scalars['Int']>>>
  mangaOrder: Maybe<Array<Maybe<Scalars['Int']>>>
  characterOrder: Maybe<Array<Maybe<Scalars['Int']>>>
  staffOrder: Maybe<Array<Maybe<Scalars['Int']>>>
  studioOrder: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationSaveReviewArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  body: Maybe<Scalars['String']>
  summary: Maybe<Scalars['String']>
  score: Maybe<Scalars['Int']>
  private: Maybe<Scalars['Boolean']>
}

export type MutationDeleteReviewArgs = {
  id: Maybe<Scalars['Int']>
}

export type MutationRateReviewArgs = {
  reviewId: Maybe<Scalars['Int']>
  rating: Maybe<ReviewRating>
}

export type MutationSaveRecommendationArgs = {
  mediaId: Maybe<Scalars['Int']>
  mediaRecommendationId: Maybe<Scalars['Int']>
  rating: Maybe<RecommendationRating>
}

export type MutationSaveThreadArgs = {
  id: Maybe<Scalars['Int']>
  title: Maybe<Scalars['String']>
  body: Maybe<Scalars['String']>
  categories: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaCategories: Maybe<Array<Maybe<Scalars['Int']>>>
  sticky: Maybe<Scalars['Boolean']>
  locked: Maybe<Scalars['Boolean']>
}

export type MutationDeleteThreadArgs = {
  id: Maybe<Scalars['Int']>
}

export type MutationToggleThreadSubscriptionArgs = {
  threadId: Maybe<Scalars['Int']>
  subscribe: Maybe<Scalars['Boolean']>
}

export type MutationSaveThreadCommentArgs = {
  id: Maybe<Scalars['Int']>
  threadId: Maybe<Scalars['Int']>
  parentCommentId: Maybe<Scalars['Int']>
  comment: Maybe<Scalars['String']>
  locked: Maybe<Scalars['Boolean']>
}

export type MutationDeleteThreadCommentArgs = {
  id: Maybe<Scalars['Int']>
}

export type MutationUpdateAniChartSettingsArgs = {
  titleLanguage: Maybe<Scalars['String']>
  outgoingLinkProvider: Maybe<Scalars['String']>
  theme: Maybe<Scalars['String']>
  sort: Maybe<Scalars['String']>
}

export type MutationUpdateAniChartHighlightsArgs = {
  highlights: Maybe<Array<Maybe<AniChartHighlightInput>>>
}

/** Notification option */
export type NotificationOption = {
  /** The type of notification */
  type: Maybe<NotificationType>
  /** Whether this type of notification is enabled */
  enabled: Maybe<Scalars['Boolean']>
}

/** Notification option input */
export type NotificationOptionInput = {
  /** The type of notification */
  type: Maybe<NotificationType>
  /** Whether this type of notification is enabled */
  enabled: Maybe<Scalars['Boolean']>
}

/** Notification type enum */
export enum NotificationType {
  /** A user has sent you message */
  ActivityMessage = 'ACTIVITY_MESSAGE',
  /** A user has replied to your activity */
  ActivityReply = 'ACTIVITY_REPLY',
  /** A user has followed you */
  Following = 'FOLLOWING',
  /** A user has mentioned you in their activity */
  ActivityMention = 'ACTIVITY_MENTION',
  /** A user has mentioned you in a forum comment */
  ThreadCommentMention = 'THREAD_COMMENT_MENTION',
  /** A user has commented in one of your subscribed forum threads */
  ThreadSubscribed = 'THREAD_SUBSCRIBED',
  /** A user has replied to your forum comment */
  ThreadCommentReply = 'THREAD_COMMENT_REPLY',
  /** An anime you are currently watching has aired */
  Airing = 'AIRING',
  /** A user has liked your activity */
  ActivityLike = 'ACTIVITY_LIKE',
  /** A user has liked your activity reply */
  ActivityReplyLike = 'ACTIVITY_REPLY_LIKE',
  /** A user has liked your forum thread */
  ThreadLike = 'THREAD_LIKE',
  /** A user has liked your forum comment */
  ThreadCommentLike = 'THREAD_COMMENT_LIKE',
  /** A user has replied to activity you have also replied to */
  ActivityReplySubscribed = 'ACTIVITY_REPLY_SUBSCRIBED',
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  RelatedMediaAddition = 'RELATED_MEDIA_ADDITION',
  /** An anime or manga has had a data change that affects how a user may track it in their lists */
  MediaDataChange = 'MEDIA_DATA_CHANGE',
  /** Anime or manga entries on the user's list have been merged into a single entry */
  MediaMerge = 'MEDIA_MERGE',
  /** An anime or manga on the user's list has been deleted from the site */
  MediaDeletion = 'MEDIA_DELETION',
}

/** Notification union type */
export type NotificationUnion =
  | AiringNotification
  | FollowingNotification
  | ActivityMessageNotification
  | ActivityMentionNotification
  | ActivityReplyNotification
  | ActivityReplySubscribedNotification
  | ActivityLikeNotification
  | ActivityReplyLikeNotification
  | ThreadCommentMentionNotification
  | ThreadCommentReplyNotification
  | ThreadCommentSubscribedNotification
  | ThreadCommentLikeNotification
  | ThreadLikeNotification
  | RelatedMediaAdditionNotification
  | MediaDataChangeNotification
  | MediaMergeNotification
  | MediaDeletionNotification

/** Page of data */
export type Page = {
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
  users: Maybe<Array<Maybe<User>>>
  media: Maybe<Array<Maybe<Media>>>
  characters: Maybe<Array<Maybe<Character>>>
  staff: Maybe<Array<Maybe<Staff>>>
  studios: Maybe<Array<Maybe<Studio>>>
  mediaList: Maybe<Array<Maybe<MediaList>>>
  airingSchedules: Maybe<Array<Maybe<AiringSchedule>>>
  mediaTrends: Maybe<Array<Maybe<MediaTrend>>>
  notifications: Maybe<Array<Maybe<NotificationUnion>>>
  followers: Maybe<Array<Maybe<User>>>
  following: Maybe<Array<Maybe<User>>>
  activities: Maybe<Array<Maybe<ActivityUnion>>>
  activityReplies: Maybe<Array<Maybe<ActivityReply>>>
  threads: Maybe<Array<Maybe<Thread>>>
  threadComments: Maybe<Array<Maybe<ThreadComment>>>
  reviews: Maybe<Array<Maybe<Review>>>
  recommendations: Maybe<Array<Maybe<Recommendation>>>
  likes: Maybe<Array<Maybe<User>>>
}

/** Page of data */
export type PageUsersArgs = {
  id: Maybe<Scalars['Int']>
  name: Maybe<Scalars['String']>
  isModerator: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<UserSort>>>
}

/** Page of data */
export type PageMediaArgs = {
  id: Maybe<Scalars['Int']>
  idMal: Maybe<Scalars['Int']>
  startDate: Maybe<Scalars['FuzzyDateInt']>
  endDate: Maybe<Scalars['FuzzyDateInt']>
  season: Maybe<MediaSeason>
  seasonYear: Maybe<Scalars['Int']>
  type: Maybe<MediaType>
  format: Maybe<MediaFormat>
  status: Maybe<MediaStatus>
  episodes: Maybe<Scalars['Int']>
  duration: Maybe<Scalars['Int']>
  chapters: Maybe<Scalars['Int']>
  volumes: Maybe<Scalars['Int']>
  isAdult: Maybe<Scalars['Boolean']>
  genre: Maybe<Scalars['String']>
  tag: Maybe<Scalars['String']>
  minimumTagRank: Maybe<Scalars['Int']>
  tagCategory: Maybe<Scalars['String']>
  onList: Maybe<Scalars['Boolean']>
  licensedBy: Maybe<Scalars['String']>
  licensedById: Maybe<Scalars['Int']>
  averageScore: Maybe<Scalars['Int']>
  popularity: Maybe<Scalars['Int']>
  source: Maybe<MediaSource>
  countryOfOrigin: Maybe<Scalars['CountryCode']>
  isLicensed: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not: Maybe<Scalars['Int']>
  idMal_in: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  startDate_greater: Maybe<Scalars['FuzzyDateInt']>
  startDate_lesser: Maybe<Scalars['FuzzyDateInt']>
  startDate_like: Maybe<Scalars['String']>
  endDate_greater: Maybe<Scalars['FuzzyDateInt']>
  endDate_lesser: Maybe<Scalars['FuzzyDateInt']>
  endDate_like: Maybe<Scalars['String']>
  format_in: Maybe<Array<Maybe<MediaFormat>>>
  format_not: Maybe<MediaFormat>
  format_not_in: Maybe<Array<Maybe<MediaFormat>>>
  status_in: Maybe<Array<Maybe<MediaStatus>>>
  status_not: Maybe<MediaStatus>
  status_not_in: Maybe<Array<Maybe<MediaStatus>>>
  episodes_greater: Maybe<Scalars['Int']>
  episodes_lesser: Maybe<Scalars['Int']>
  duration_greater: Maybe<Scalars['Int']>
  duration_lesser: Maybe<Scalars['Int']>
  chapters_greater: Maybe<Scalars['Int']>
  chapters_lesser: Maybe<Scalars['Int']>
  volumes_greater: Maybe<Scalars['Int']>
  volumes_lesser: Maybe<Scalars['Int']>
  genre_in: Maybe<Array<Maybe<Scalars['String']>>>
  genre_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  tag_in: Maybe<Array<Maybe<Scalars['String']>>>
  tag_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_in: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  licensedBy_in: Maybe<Array<Maybe<Scalars['String']>>>
  licensedById_in: Maybe<Array<Maybe<Scalars['Int']>>>
  averageScore_not: Maybe<Scalars['Int']>
  averageScore_greater: Maybe<Scalars['Int']>
  averageScore_lesser: Maybe<Scalars['Int']>
  popularity_not: Maybe<Scalars['Int']>
  popularity_greater: Maybe<Scalars['Int']>
  popularity_lesser: Maybe<Scalars['Int']>
  source_in: Maybe<Array<Maybe<MediaSource>>>
  sort: Maybe<Array<Maybe<MediaSort>>>
}

/** Page of data */
export type PageCharactersArgs = {
  id: Maybe<Scalars['Int']>
  isBirthday: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<CharacterSort>>>
}

/** Page of data */
export type PageStaffArgs = {
  id: Maybe<Scalars['Int']>
  isBirthday: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

/** Page of data */
export type PageStudiosArgs = {
  id: Maybe<Scalars['Int']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<StudioSort>>>
}

/** Page of data */
export type PageMediaListArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  userName: Maybe<Scalars['String']>
  type: Maybe<MediaType>
  status: Maybe<MediaListStatus>
  mediaId: Maybe<Scalars['Int']>
  isFollowing: Maybe<Scalars['Boolean']>
  notes: Maybe<Scalars['String']>
  startedAt: Maybe<Scalars['FuzzyDateInt']>
  completedAt: Maybe<Scalars['FuzzyDateInt']>
  compareWithAuthList: Maybe<Scalars['Boolean']>
  userId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  status_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not: Maybe<MediaListStatus>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  notes_like: Maybe<Scalars['String']>
  startedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like: Maybe<Scalars['String']>
  completedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<MediaListSort>>>
}

/** Page of data */
export type PageAiringSchedulesArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  airingAt: Maybe<Scalars['Int']>
  notYetAired: Maybe<Scalars['Boolean']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not: Maybe<Scalars['Int']>
  episode_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_greater: Maybe<Scalars['Int']>
  episode_lesser: Maybe<Scalars['Int']>
  airingAt_greater: Maybe<Scalars['Int']>
  airingAt_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<AiringSort>>>
}

/** Page of data */
export type PageMediaTrendsArgs = {
  mediaId: Maybe<Scalars['Int']>
  date: Maybe<Scalars['Int']>
  trending: Maybe<Scalars['Int']>
  averageScore: Maybe<Scalars['Int']>
  popularity: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  releasing: Maybe<Scalars['Boolean']>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  date_greater: Maybe<Scalars['Int']>
  date_lesser: Maybe<Scalars['Int']>
  trending_greater: Maybe<Scalars['Int']>
  trending_lesser: Maybe<Scalars['Int']>
  trending_not: Maybe<Scalars['Int']>
  averageScore_greater: Maybe<Scalars['Int']>
  averageScore_lesser: Maybe<Scalars['Int']>
  averageScore_not: Maybe<Scalars['Int']>
  popularity_greater: Maybe<Scalars['Int']>
  popularity_lesser: Maybe<Scalars['Int']>
  popularity_not: Maybe<Scalars['Int']>
  episode_greater: Maybe<Scalars['Int']>
  episode_lesser: Maybe<Scalars['Int']>
  episode_not: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<MediaTrendSort>>>
}

/** Page of data */
export type PageNotificationsArgs = {
  type: Maybe<NotificationType>
  resetNotificationCount: Maybe<Scalars['Boolean']>
  type_in: Maybe<Array<Maybe<NotificationType>>>
}

/** Page of data */
export type PageFollowersArgs = {
  userId: Scalars['Int']
  sort: Maybe<Array<Maybe<UserSort>>>
}

/** Page of data */
export type PageFollowingArgs = {
  userId: Scalars['Int']
  sort: Maybe<Array<Maybe<UserSort>>>
}

/** Page of data */
export type PageActivitiesArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  messengerId: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  type: Maybe<ActivityType>
  isFollowing: Maybe<Scalars['Boolean']>
  hasReplies: Maybe<Scalars['Boolean']>
  hasRepliesOrTypeText: Maybe<Scalars['Boolean']>
  createdAt: Maybe<Scalars['Int']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not: Maybe<Scalars['Int']>
  userId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not: Maybe<Scalars['Int']>
  messengerId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  type_not: Maybe<ActivityType>
  type_in: Maybe<Array<Maybe<ActivityType>>>
  type_not_in: Maybe<Array<Maybe<ActivityType>>>
  createdAt_greater: Maybe<Scalars['Int']>
  createdAt_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ActivitySort>>>
}

/** Page of data */
export type PageActivityRepliesArgs = {
  id: Maybe<Scalars['Int']>
  activityId: Maybe<Scalars['Int']>
}

/** Page of data */
export type PageThreadsArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  replyUserId: Maybe<Scalars['Int']>
  subscribed: Maybe<Scalars['Boolean']>
  categoryId: Maybe<Scalars['Int']>
  mediaCategoryId: Maybe<Scalars['Int']>
  search: Maybe<Scalars['String']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<ThreadSort>>>
}

/** Page of data */
export type PageThreadCommentsArgs = {
  id: Maybe<Scalars['Int']>
  threadId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ThreadCommentSort>>>
}

/** Page of data */
export type PageReviewsArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  mediaType: Maybe<MediaType>
  sort: Maybe<Array<Maybe<ReviewSort>>>
}

/** Page of data */
export type PageRecommendationsArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  mediaRecommendationId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  rating: Maybe<Scalars['Int']>
  onList: Maybe<Scalars['Boolean']>
  rating_greater: Maybe<Scalars['Int']>
  rating_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<RecommendationSort>>>
}

/** Page of data */
export type PageLikesArgs = {
  likeableId: Maybe<Scalars['Int']>
  type: Maybe<LikeableType>
}

export type PageInfo = {
  /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
  total: Maybe<Scalars['Int']>
  /** The count on a page */
  perPage: Maybe<Scalars['Int']>
  /** The current page */
  currentPage: Maybe<Scalars['Int']>
  /** The last page */
  lastPage: Maybe<Scalars['Int']>
  /** If there is another page */
  hasNextPage: Maybe<Scalars['Boolean']>
}

/** Provides the parsed markdown as html */
export type ParsedMarkdown = {
  /** The parsed markdown as html */
  html: Maybe<Scalars['String']>
}

export type Query = {
  Page: Maybe<Page>
  /** Media query */
  Media: Maybe<Media>
  /** Media Trend query */
  MediaTrend: Maybe<MediaTrend>
  /** Airing schedule query */
  AiringSchedule: Maybe<AiringSchedule>
  /** Character query */
  Character: Maybe<Character>
  /** Staff query */
  Staff: Maybe<Staff>
  /** Media list query */
  MediaList: Maybe<MediaList>
  /**
   * Media list collection query, provides list pre-grouped by status & custom
   * lists. User ID and Media Type arguments required.
   */
  MediaListCollection: Maybe<MediaListCollection>
  /** Collection of all the possible media genres */
  GenreCollection: Maybe<Array<Maybe<Scalars['String']>>>
  /** Collection of all the possible media tags */
  MediaTagCollection: Maybe<Array<Maybe<MediaTag>>>
  /** User query */
  User: Maybe<User>
  /** Get the currently authenticated user */
  Viewer: Maybe<User>
  /** Notification query */
  Notification: Maybe<NotificationUnion>
  /** Studio query */
  Studio: Maybe<Studio>
  /** Review query */
  Review: Maybe<Review>
  /** Activity query */
  Activity: Maybe<ActivityUnion>
  /** Activity reply query */
  ActivityReply: Maybe<ActivityReply>
  /** Follow query */
  Following: Maybe<User>
  /** Follow query */
  Follower: Maybe<User>
  /** Thread query */
  Thread: Maybe<Thread>
  /** Comment query */
  ThreadComment: Maybe<Array<Maybe<ThreadComment>>>
  /** Recommendation query */
  Recommendation: Maybe<Recommendation>
  /** Like query */
  Like: Maybe<User>
  /** Provide AniList markdown to be converted to html (Requires auth) */
  Markdown: Maybe<ParsedMarkdown>
  AniChartUser: Maybe<AniChartUser>
  /** Site statistics query */
  SiteStatistics: Maybe<SiteStatistics>
  /** ExternalLinkSource collection query */
  ExternalLinkSourceCollection: Maybe<Array<Maybe<MediaExternalLink>>>
}

export type QueryPageArgs = {
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type QueryMediaArgs = {
  id: Maybe<Scalars['Int']>
  idMal: Maybe<Scalars['Int']>
  startDate: Maybe<Scalars['FuzzyDateInt']>
  endDate: Maybe<Scalars['FuzzyDateInt']>
  season: Maybe<MediaSeason>
  seasonYear: Maybe<Scalars['Int']>
  type: Maybe<MediaType>
  format: Maybe<MediaFormat>
  status: Maybe<MediaStatus>
  episodes: Maybe<Scalars['Int']>
  duration: Maybe<Scalars['Int']>
  chapters: Maybe<Scalars['Int']>
  volumes: Maybe<Scalars['Int']>
  isAdult: Maybe<Scalars['Boolean']>
  genre: Maybe<Scalars['String']>
  tag: Maybe<Scalars['String']>
  minimumTagRank: Maybe<Scalars['Int']>
  tagCategory: Maybe<Scalars['String']>
  onList: Maybe<Scalars['Boolean']>
  licensedBy: Maybe<Scalars['String']>
  licensedById: Maybe<Scalars['Int']>
  averageScore: Maybe<Scalars['Int']>
  popularity: Maybe<Scalars['Int']>
  source: Maybe<MediaSource>
  countryOfOrigin: Maybe<Scalars['CountryCode']>
  isLicensed: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not: Maybe<Scalars['Int']>
  idMal_in: Maybe<Array<Maybe<Scalars['Int']>>>
  idMal_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  startDate_greater: Maybe<Scalars['FuzzyDateInt']>
  startDate_lesser: Maybe<Scalars['FuzzyDateInt']>
  startDate_like: Maybe<Scalars['String']>
  endDate_greater: Maybe<Scalars['FuzzyDateInt']>
  endDate_lesser: Maybe<Scalars['FuzzyDateInt']>
  endDate_like: Maybe<Scalars['String']>
  format_in: Maybe<Array<Maybe<MediaFormat>>>
  format_not: Maybe<MediaFormat>
  format_not_in: Maybe<Array<Maybe<MediaFormat>>>
  status_in: Maybe<Array<Maybe<MediaStatus>>>
  status_not: Maybe<MediaStatus>
  status_not_in: Maybe<Array<Maybe<MediaStatus>>>
  episodes_greater: Maybe<Scalars['Int']>
  episodes_lesser: Maybe<Scalars['Int']>
  duration_greater: Maybe<Scalars['Int']>
  duration_lesser: Maybe<Scalars['Int']>
  chapters_greater: Maybe<Scalars['Int']>
  chapters_lesser: Maybe<Scalars['Int']>
  volumes_greater: Maybe<Scalars['Int']>
  volumes_lesser: Maybe<Scalars['Int']>
  genre_in: Maybe<Array<Maybe<Scalars['String']>>>
  genre_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  tag_in: Maybe<Array<Maybe<Scalars['String']>>>
  tag_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_in: Maybe<Array<Maybe<Scalars['String']>>>
  tagCategory_not_in: Maybe<Array<Maybe<Scalars['String']>>>
  licensedBy_in: Maybe<Array<Maybe<Scalars['String']>>>
  licensedById_in: Maybe<Array<Maybe<Scalars['Int']>>>
  averageScore_not: Maybe<Scalars['Int']>
  averageScore_greater: Maybe<Scalars['Int']>
  averageScore_lesser: Maybe<Scalars['Int']>
  popularity_not: Maybe<Scalars['Int']>
  popularity_greater: Maybe<Scalars['Int']>
  popularity_lesser: Maybe<Scalars['Int']>
  source_in: Maybe<Array<Maybe<MediaSource>>>
  sort: Maybe<Array<Maybe<MediaSort>>>
}

export type QueryMediaTrendArgs = {
  mediaId: Maybe<Scalars['Int']>
  date: Maybe<Scalars['Int']>
  trending: Maybe<Scalars['Int']>
  averageScore: Maybe<Scalars['Int']>
  popularity: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  releasing: Maybe<Scalars['Boolean']>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  date_greater: Maybe<Scalars['Int']>
  date_lesser: Maybe<Scalars['Int']>
  trending_greater: Maybe<Scalars['Int']>
  trending_lesser: Maybe<Scalars['Int']>
  trending_not: Maybe<Scalars['Int']>
  averageScore_greater: Maybe<Scalars['Int']>
  averageScore_lesser: Maybe<Scalars['Int']>
  averageScore_not: Maybe<Scalars['Int']>
  popularity_greater: Maybe<Scalars['Int']>
  popularity_lesser: Maybe<Scalars['Int']>
  popularity_not: Maybe<Scalars['Int']>
  episode_greater: Maybe<Scalars['Int']>
  episode_lesser: Maybe<Scalars['Int']>
  episode_not: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<MediaTrendSort>>>
}

export type QueryAiringScheduleArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  episode: Maybe<Scalars['Int']>
  airingAt: Maybe<Scalars['Int']>
  notYetAired: Maybe<Scalars['Boolean']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not: Maybe<Scalars['Int']>
  episode_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  episode_greater: Maybe<Scalars['Int']>
  episode_lesser: Maybe<Scalars['Int']>
  airingAt_greater: Maybe<Scalars['Int']>
  airingAt_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<AiringSort>>>
}

export type QueryCharacterArgs = {
  id: Maybe<Scalars['Int']>
  isBirthday: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<CharacterSort>>>
}

export type QueryStaffArgs = {
  id: Maybe<Scalars['Int']>
  isBirthday: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<StaffSort>>>
}

export type QueryMediaListArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  userName: Maybe<Scalars['String']>
  type: Maybe<MediaType>
  status: Maybe<MediaListStatus>
  mediaId: Maybe<Scalars['Int']>
  isFollowing: Maybe<Scalars['Boolean']>
  notes: Maybe<Scalars['String']>
  startedAt: Maybe<Scalars['FuzzyDateInt']>
  completedAt: Maybe<Scalars['FuzzyDateInt']>
  compareWithAuthList: Maybe<Scalars['Boolean']>
  userId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  status_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not: Maybe<MediaListStatus>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  notes_like: Maybe<Scalars['String']>
  startedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like: Maybe<Scalars['String']>
  completedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<MediaListSort>>>
}

export type QueryMediaListCollectionArgs = {
  userId: Maybe<Scalars['Int']>
  userName: Maybe<Scalars['String']>
  type: Maybe<MediaType>
  status: Maybe<MediaListStatus>
  notes: Maybe<Scalars['String']>
  startedAt: Maybe<Scalars['FuzzyDateInt']>
  completedAt: Maybe<Scalars['FuzzyDateInt']>
  forceSingleCompletedList: Maybe<Scalars['Boolean']>
  chunk: Maybe<Scalars['Int']>
  perChunk: Maybe<Scalars['Int']>
  status_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not_in: Maybe<Array<Maybe<MediaListStatus>>>
  status_not: Maybe<MediaListStatus>
  notes_like: Maybe<Scalars['String']>
  startedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  startedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  startedAt_like: Maybe<Scalars['String']>
  completedAt_greater: Maybe<Scalars['FuzzyDateInt']>
  completedAt_lesser: Maybe<Scalars['FuzzyDateInt']>
  completedAt_like: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<MediaListSort>>>
}

export type QueryMediaTagCollectionArgs = {
  status: Maybe<Scalars['Int']>
}

export type QueryUserArgs = {
  id: Maybe<Scalars['Int']>
  name: Maybe<Scalars['String']>
  isModerator: Maybe<Scalars['Boolean']>
  search: Maybe<Scalars['String']>
  sort: Maybe<Array<Maybe<UserSort>>>
}

export type QueryNotificationArgs = {
  type: Maybe<NotificationType>
  resetNotificationCount: Maybe<Scalars['Boolean']>
  type_in: Maybe<Array<Maybe<NotificationType>>>
}

export type QueryStudioArgs = {
  id: Maybe<Scalars['Int']>
  search: Maybe<Scalars['String']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<StudioSort>>>
}

export type QueryReviewArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  mediaType: Maybe<MediaType>
  sort: Maybe<Array<Maybe<ReviewSort>>>
}

export type QueryActivityArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  messengerId: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  type: Maybe<ActivityType>
  isFollowing: Maybe<Scalars['Boolean']>
  hasReplies: Maybe<Scalars['Boolean']>
  hasRepliesOrTypeText: Maybe<Scalars['Boolean']>
  createdAt: Maybe<Scalars['Int']>
  id_not: Maybe<Scalars['Int']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  id_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not: Maybe<Scalars['Int']>
  userId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  userId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not: Maybe<Scalars['Int']>
  messengerId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  messengerId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not: Maybe<Scalars['Int']>
  mediaId_in: Maybe<Array<Maybe<Scalars['Int']>>>
  mediaId_not_in: Maybe<Array<Maybe<Scalars['Int']>>>
  type_not: Maybe<ActivityType>
  type_in: Maybe<Array<Maybe<ActivityType>>>
  type_not_in: Maybe<Array<Maybe<ActivityType>>>
  createdAt_greater: Maybe<Scalars['Int']>
  createdAt_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ActivitySort>>>
}

export type QueryActivityReplyArgs = {
  id: Maybe<Scalars['Int']>
  activityId: Maybe<Scalars['Int']>
}

export type QueryFollowingArgs = {
  userId: Scalars['Int']
  sort: Maybe<Array<Maybe<UserSort>>>
}

export type QueryFollowerArgs = {
  userId: Scalars['Int']
  sort: Maybe<Array<Maybe<UserSort>>>
}

export type QueryThreadArgs = {
  id: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  replyUserId: Maybe<Scalars['Int']>
  subscribed: Maybe<Scalars['Boolean']>
  categoryId: Maybe<Scalars['Int']>
  mediaCategoryId: Maybe<Scalars['Int']>
  search: Maybe<Scalars['String']>
  id_in: Maybe<Array<Maybe<Scalars['Int']>>>
  sort: Maybe<Array<Maybe<ThreadSort>>>
}

export type QueryThreadCommentArgs = {
  id: Maybe<Scalars['Int']>
  threadId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<ThreadCommentSort>>>
}

export type QueryRecommendationArgs = {
  id: Maybe<Scalars['Int']>
  mediaId: Maybe<Scalars['Int']>
  mediaRecommendationId: Maybe<Scalars['Int']>
  userId: Maybe<Scalars['Int']>
  rating: Maybe<Scalars['Int']>
  onList: Maybe<Scalars['Boolean']>
  rating_greater: Maybe<Scalars['Int']>
  rating_lesser: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<RecommendationSort>>>
}

export type QueryLikeArgs = {
  likeableId: Maybe<Scalars['Int']>
  type: Maybe<LikeableType>
}

export type QueryMarkdownArgs = {
  markdown: Scalars['String']
}

export type QueryExternalLinkSourceCollectionArgs = {
  id: Maybe<Scalars['Int']>
  type: Maybe<ExternalLinkType>
  mediaType: Maybe<ExternalLinkMediaType>
}

/** Media recommendation */
export type Recommendation = {
  /** The id of the recommendation */
  id: Scalars['Int']
  /** Users rating of the recommendation */
  rating: Maybe<Scalars['Int']>
  /** The rating of the recommendation by currently authenticated user */
  userRating: Maybe<RecommendationRating>
  /** The media the recommendation is from */
  media: Maybe<Media>
  /** The recommended media */
  mediaRecommendation: Maybe<Media>
  /** The user that first created the recommendation */
  user: Maybe<User>
}

export type RecommendationConnection = {
  edges: Maybe<Array<Maybe<RecommendationEdge>>>
  nodes: Maybe<Array<Maybe<Recommendation>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Recommendation connection edge */
export type RecommendationEdge = {
  node: Maybe<Recommendation>
}

/** Recommendation rating enums */
export enum RecommendationRating {
  NoRating = 'NO_RATING',
  RateUp = 'RATE_UP',
  RateDown = 'RATE_DOWN',
}

/** Recommendation sort enums */
export enum RecommendationSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
}

/** Notification for when new media is added to the site */
export type RelatedMediaAdditionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the new media */
  mediaId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The associated media of the airing schedule */
  media: Maybe<Media>
}

export type Report = {
  id: Scalars['Int']
  reporter: Maybe<User>
  reported: Maybe<User>
  reason: Maybe<Scalars['String']>
  /** When the entry data was created */
  createdAt: Maybe<Scalars['Int']>
  cleared: Maybe<Scalars['Boolean']>
}

/** A Review that features in an anime or manga */
export type Review = {
  /** The id of the review */
  id: Scalars['Int']
  /** The id of the review's creator */
  userId: Scalars['Int']
  /** The id of the review's media */
  mediaId: Scalars['Int']
  /** For which type of media the review is for */
  mediaType: Maybe<MediaType>
  /** A short summary of the review */
  summary: Maybe<Scalars['String']>
  /** The main review body text */
  body: Maybe<Scalars['String']>
  /** The total user rating of the review */
  rating: Maybe<Scalars['Int']>
  /** The amount of user ratings of the review */
  ratingAmount: Maybe<Scalars['Int']>
  /** The rating of the review by currently authenticated user */
  userRating: Maybe<ReviewRating>
  /** The review score of the media */
  score: Maybe<Scalars['Int']>
  /** If the review is not yet publicly published and is only viewable by creator */
  private: Maybe<Scalars['Boolean']>
  /** The url for the review page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** The time of the thread creation */
  createdAt: Scalars['Int']
  /** The time of the thread last update */
  updatedAt: Scalars['Int']
  /** The creator of the review */
  user: Maybe<User>
  /** The media the review is of */
  media: Maybe<Media>
}

/** A Review that features in an anime or manga */
export type ReviewBodyArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

export type ReviewConnection = {
  edges: Maybe<Array<Maybe<ReviewEdge>>>
  nodes: Maybe<Array<Maybe<Review>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Review connection edge */
export type ReviewEdge = {
  node: Maybe<Review>
}

/** Review rating enums */
export enum ReviewRating {
  NoVote = 'NO_VOTE',
  UpVote = 'UP_VOTE',
  DownVote = 'DOWN_VOTE',
}

/** Review sort enums */
export enum ReviewSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Feed of mod edit activity */
export type RevisionHistory = {
  /** The id of the media */
  id: Scalars['Int']
  /** The action taken on the objects */
  action: Maybe<RevisionHistoryAction>
  /** A JSON object of the fields that changed */
  changes: Maybe<Scalars['Json']>
  /** The user who made the edit to the object */
  user: Maybe<User>
  /** The media the mod feed entry references */
  media: Maybe<Media>
  /** The character the mod feed entry references */
  character: Maybe<Character>
  /** The staff member the mod feed entry references */
  staff: Maybe<Staff>
  /** The studio the mod feed entry references */
  studio: Maybe<Studio>
  /** The external link source the mod feed entry references */
  externalLink: Maybe<MediaExternalLink>
  /** When the mod feed entry was created */
  createdAt: Maybe<Scalars['Int']>
}

/** Revision history actions */
export enum RevisionHistoryAction {
  Create = 'CREATE',
  Edit = 'EDIT',
}

/** A user's list score distribution. */
export type ScoreDistribution = {
  score: Maybe<Scalars['Int']>
  /** The amount of list entries with this score */
  amount: Maybe<Scalars['Int']>
}

/** Media list scoring type */
export enum ScoreFormat {
  /** An integer from 0-100 */
  Point_100 = 'POINT_100',
  /** A float from 0-10 with 1 decimal place */
  Point_10Decimal = 'POINT_10_DECIMAL',
  /** An integer from 0-10 */
  Point_10 = 'POINT_10',
  /** An integer from 0-5. Should be represented in Stars */
  Point_5 = 'POINT_5',
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  Point_3 = 'POINT_3',
}

export type SiteStatistics = {
  users: Maybe<SiteTrendConnection>
  anime: Maybe<SiteTrendConnection>
  manga: Maybe<SiteTrendConnection>
  characters: Maybe<SiteTrendConnection>
  staff: Maybe<SiteTrendConnection>
  studios: Maybe<SiteTrendConnection>
  reviews: Maybe<SiteTrendConnection>
}

export type SiteStatisticsUsersArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type SiteStatisticsAnimeArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type SiteStatisticsMangaArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type SiteStatisticsCharactersArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type SiteStatisticsStaffArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type SiteStatisticsStudiosArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type SiteStatisticsReviewsArgs = {
  sort: Maybe<Array<Maybe<SiteTrendSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Daily site statistics */
export type SiteTrend = {
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']
  count: Scalars['Int']
  /** The change from yesterday */
  change: Scalars['Int']
}

export type SiteTrendConnection = {
  edges: Maybe<Array<Maybe<SiteTrendEdge>>>
  nodes: Maybe<Array<Maybe<SiteTrend>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Site trend connection edge */
export type SiteTrendEdge = {
  node: Maybe<SiteTrend>
}

/** Site trend sort enums */
export enum SiteTrendSort {
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Change = 'CHANGE',
  ChangeDesc = 'CHANGE_DESC',
}

/** Voice actors or production staff */
export type Staff = {
  /** The id of the staff member */
  id: Scalars['Int']
  /** The names of the staff member */
  name: Maybe<StaffName>
  /**
   * The primary language the staff member dub's in
   * @deprecated Replaced with languageV2
   */
  language: Maybe<StaffLanguage>
  /**
   * The primary language of the staff member. Current values: Japanese, English,
   * Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian,
   * Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai,
   * Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu
   */
  languageV2: Maybe<Scalars['String']>
  /** The staff images */
  image: Maybe<StaffImage>
  /** A general description of the staff member */
  description: Maybe<Scalars['String']>
  /** The person's primary occupations */
  primaryOccupations: Maybe<Array<Maybe<Scalars['String']>>>
  /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender: Maybe<Scalars['String']>
  dateOfBirth: Maybe<FuzzyDate>
  dateOfDeath: Maybe<FuzzyDate>
  /** The person's age in years */
  age: Maybe<Scalars['Int']>
  /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
  yearsActive: Maybe<Array<Maybe<Scalars['Int']>>>
  /** The persons birthplace or hometown */
  homeTown: Maybe<Scalars['String']>
  /** The persons blood type */
  bloodType: Maybe<Scalars['String']>
  /** If the staff member is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']
  /** If the staff member is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']
  /** The url for the staff page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** Media where the staff member has a production role */
  staffMedia: Maybe<MediaConnection>
  /** Characters voiced by the actor */
  characters: Maybe<CharacterConnection>
  /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
  characterMedia: Maybe<MediaConnection>
  /** @deprecated No data available */
  updatedAt: Maybe<Scalars['Int']>
  /** Staff member that the submission is referencing */
  staff: Maybe<Staff>
  /** Submitter for the submission */
  submitter: Maybe<User>
  /** Status of the submission */
  submissionStatus: Maybe<Scalars['Int']>
  /** Inner details of submission status */
  submissionNotes: Maybe<Scalars['String']>
  /** The amount of user's who have favourited the staff member */
  favourites: Maybe<Scalars['Int']>
  /** Notes for site moderators */
  modNotes: Maybe<Scalars['String']>
}

/** Voice actors or production staff */
export type StaffDescriptionArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** Voice actors or production staff */
export type StaffStaffMediaArgs = {
  sort: Maybe<Array<Maybe<MediaSort>>>
  type: Maybe<MediaType>
  onList: Maybe<Scalars['Boolean']>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Voice actors or production staff */
export type StaffCharactersArgs = {
  sort: Maybe<Array<Maybe<CharacterSort>>>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

/** Voice actors or production staff */
export type StaffCharacterMediaArgs = {
  sort: Maybe<Array<Maybe<MediaSort>>>
  onList: Maybe<Scalars['Boolean']>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type StaffConnection = {
  edges: Maybe<Array<Maybe<StaffEdge>>>
  nodes: Maybe<Array<Maybe<Staff>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Staff connection edge */
export type StaffEdge = {
  node: Maybe<Staff>
  /** The id of the connection */
  id: Maybe<Scalars['Int']>
  /** The role of the staff member in the production of the media */
  role: Maybe<Scalars['String']>
  /** The order the staff should be displayed from the users favourites */
  favouriteOrder: Maybe<Scalars['Int']>
}

export type StaffImage = {
  /** The person's image of media at its largest size */
  large: Maybe<Scalars['String']>
  /** The person's image of media at medium size */
  medium: Maybe<Scalars['String']>
}

/** The primary language of the voice actor */
export enum StaffLanguage {
  /** Japanese */
  Japanese = 'JAPANESE',
  /** English */
  English = 'ENGLISH',
  /** Korean */
  Korean = 'KOREAN',
  /** Italian */
  Italian = 'ITALIAN',
  /** Spanish */
  Spanish = 'SPANISH',
  /** Portuguese */
  Portuguese = 'PORTUGUESE',
  /** French */
  French = 'FRENCH',
  /** German */
  German = 'GERMAN',
  /** Hebrew */
  Hebrew = 'HEBREW',
  /** Hungarian */
  Hungarian = 'HUNGARIAN',
}

/** The names of the staff member */
export type StaffName = {
  /** The person's given name */
  first: Maybe<Scalars['String']>
  /** The person's middle name */
  middle: Maybe<Scalars['String']>
  /** The person's surname */
  last: Maybe<Scalars['String']>
  /** The person's first and last name */
  full: Maybe<Scalars['String']>
  /** The person's full name in their native language */
  native: Maybe<Scalars['String']>
  /** Other names the staff member might be referred to as (pen names) */
  alternative: Maybe<Array<Maybe<Scalars['String']>>>
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred: Maybe<Scalars['String']>
}

/** The names of the staff member */
export type StaffNameInput = {
  /** The person's given name */
  first: Maybe<Scalars['String']>
  /** The person's middle name */
  middle: Maybe<Scalars['String']>
  /** The person's surname */
  last: Maybe<Scalars['String']>
  /** The person's full name in their native language */
  native: Maybe<Scalars['String']>
  /** Other names the character might be referred by */
  alternative: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Voice actor role for a character */
export type StaffRoleType = {
  /** The voice actors of the character */
  voiceActor: Maybe<Staff>
  /** Notes regarding the VA's role for the character */
  roleNotes: Maybe<Scalars['String']>
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup: Maybe<Scalars['String']>
}

/** Staff sort enums */
export enum StaffSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  Language = 'LANGUAGE',
  LanguageDesc = 'LANGUAGE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  /** Order manually decided by moderators */
  Relevance = 'RELEVANCE',
}

/** User's staff statistics */
export type StaffStats = {
  staff: Maybe<Staff>
  amount: Maybe<Scalars['Int']>
  meanScore: Maybe<Scalars['Int']>
  /** The amount of time in minutes the staff member has been watched by the user */
  timeWatched: Maybe<Scalars['Int']>
}

/** A submission for a staff that features in an anime or manga */
export type StaffSubmission = {
  /** The id of the submission */
  id: Scalars['Int']
  /** Staff that the submission is referencing */
  staff: Maybe<Staff>
  /** The staff submission changes */
  submission: Maybe<Staff>
  /** Submitter for the submission */
  submitter: Maybe<User>
  /** Data Mod assigned to handle the submission */
  assignee: Maybe<User>
  /** Status of the submission */
  status: Maybe<SubmissionStatus>
  /** Inner details of submission status */
  notes: Maybe<Scalars['String']>
  source: Maybe<Scalars['String']>
  /** Whether the submission is locked */
  locked: Maybe<Scalars['Boolean']>
  createdAt: Maybe<Scalars['Int']>
}

/** The distribution of the watching/reading status of media or a user's list */
export type StatusDistribution = {
  /** The day the activity took place (Unix timestamp) */
  status: Maybe<MediaListStatus>
  /** The amount of entries with this status */
  amount: Maybe<Scalars['Int']>
}

/** Animation or production company */
export type Studio = {
  /** The id of the studio */
  id: Scalars['Int']
  /** The name of the studio */
  name: Scalars['String']
  /** If the studio is an animation studio or a different kind of company */
  isAnimationStudio: Scalars['Boolean']
  /** The media the studio has worked on */
  media: Maybe<MediaConnection>
  /** The url for the studio page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** If the studio is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']
  /** The amount of user's who have favourited the studio */
  favourites: Maybe<Scalars['Int']>
}

/** Animation or production company */
export type StudioMediaArgs = {
  sort: Maybe<Array<Maybe<MediaSort>>>
  isMain: Maybe<Scalars['Boolean']>
  onList: Maybe<Scalars['Boolean']>
  page: Maybe<Scalars['Int']>
  perPage: Maybe<Scalars['Int']>
}

export type StudioConnection = {
  edges: Maybe<Array<Maybe<StudioEdge>>>
  nodes: Maybe<Array<Maybe<Studio>>>
  /** The pagination information */
  pageInfo: Maybe<PageInfo>
}

/** Studio connection edge */
export type StudioEdge = {
  node: Maybe<Studio>
  /** The id of the connection */
  id: Maybe<Scalars['Int']>
  /** If the studio is the main animation studio of the anime */
  isMain: Scalars['Boolean']
  /** The order the character should be displayed from the users favourites */
  favouriteOrder: Maybe<Scalars['Int']>
}

/** Studio sort enums */
export enum StudioSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
}

/** User's studio statistics */
export type StudioStats = {
  studio: Maybe<Studio>
  amount: Maybe<Scalars['Int']>
  meanScore: Maybe<Scalars['Int']>
  /** The amount of time in minutes the studio's works have been watched by the user */
  timeWatched: Maybe<Scalars['Int']>
}

/** Submission sort enums */
export enum SubmissionSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
}

/** Submission status */
export enum SubmissionStatus {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  Accepted = 'ACCEPTED',
}

/** User's tag statistics */
export type TagStats = {
  tag: Maybe<MediaTag>
  amount: Maybe<Scalars['Int']>
  meanScore: Maybe<Scalars['Int']>
  /** The amount of time in minutes the tag has been watched by the user */
  timeWatched: Maybe<Scalars['Int']>
}

/** User text activity */
export type TextActivity = {
  /** The id of the activity */
  id: Scalars['Int']
  /** The user id of the activity's creator */
  userId: Maybe<Scalars['Int']>
  /** The type of activity */
  type: Maybe<ActivityType>
  /** The number of activity replies */
  replyCount: Scalars['Int']
  /** The status text (Markdown) */
  text: Maybe<Scalars['String']>
  /** The url for the activity page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** If the activity is locked and can receive replies */
  isLocked: Maybe<Scalars['Boolean']>
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed: Maybe<Scalars['Boolean']>
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']
  /** If the currently authenticated user liked the activity */
  isLiked: Maybe<Scalars['Boolean']>
  /** If the activity is pinned to the top of the users activity feed */
  isPinned: Maybe<Scalars['Boolean']>
  /** The time the activity was created at */
  createdAt: Scalars['Int']
  /** The user who created the activity */
  user: Maybe<User>
  /** The written replies to the activity */
  replies: Maybe<Array<Maybe<ActivityReply>>>
  /** The users who liked the activity */
  likes: Maybe<Array<Maybe<User>>>
}

/** User text activity */
export type TextActivityTextArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** Forum Thread */
export type Thread = {
  /** The id of the thread */
  id: Scalars['Int']
  /** The title of the thread */
  title: Maybe<Scalars['String']>
  /** The text body of the thread (Markdown) */
  body: Maybe<Scalars['String']>
  /** The id of the thread owner user */
  userId: Scalars['Int']
  /** The id of the user who most recently commented on the thread */
  replyUserId: Maybe<Scalars['Int']>
  /** The id of the most recent comment on the thread */
  replyCommentId: Maybe<Scalars['Int']>
  /** The number of comments on the thread */
  replyCount: Maybe<Scalars['Int']>
  /** The number of times users have viewed the thread */
  viewCount: Maybe<Scalars['Int']>
  /** If the thread is locked and can receive comments */
  isLocked: Maybe<Scalars['Boolean']>
  /** If the thread is stickied and should be displayed at the top of the page */
  isSticky: Maybe<Scalars['Boolean']>
  /** If the currently authenticated user is subscribed to the thread */
  isSubscribed: Maybe<Scalars['Boolean']>
  /** The amount of likes the thread has */
  likeCount: Scalars['Int']
  /** If the currently authenticated user liked the thread */
  isLiked: Maybe<Scalars['Boolean']>
  /** The time of the last reply */
  repliedAt: Maybe<Scalars['Int']>
  /** The time of the thread creation */
  createdAt: Scalars['Int']
  /** The time of the thread last update */
  updatedAt: Scalars['Int']
  /** The owner of the thread */
  user: Maybe<User>
  /** The user to last reply to the thread */
  replyUser: Maybe<User>
  /** The users who liked the thread */
  likes: Maybe<Array<Maybe<User>>>
  /** The url for the thread page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** The categories of the thread */
  categories: Maybe<Array<Maybe<ThreadCategory>>>
  /** The media categories of the thread */
  mediaCategories: Maybe<Array<Maybe<Media>>>
}

/** Forum Thread */
export type ThreadBodyArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** A forum thread category */
export type ThreadCategory = {
  /** The id of the category */
  id: Scalars['Int']
  /** The name of the category */
  name: Scalars['String']
}

/** Forum Thread Comment */
export type ThreadComment = {
  /** The id of the comment */
  id: Scalars['Int']
  /** The user id of the comment's owner */
  userId: Maybe<Scalars['Int']>
  /** The id of thread the comment belongs to */
  threadId: Maybe<Scalars['Int']>
  /** The text content of the comment (Markdown) */
  comment: Maybe<Scalars['String']>
  /** The amount of likes the comment has */
  likeCount: Scalars['Int']
  /** If the currently authenticated user liked the comment */
  isLiked: Maybe<Scalars['Boolean']>
  /** The url for the comment page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** The time of the comments creation */
  createdAt: Scalars['Int']
  /** The time of the comments last update */
  updatedAt: Scalars['Int']
  /** The thread the comment belongs to */
  thread: Maybe<Thread>
  /** The user who created the comment */
  user: Maybe<User>
  /** The users who liked the comment */
  likes: Maybe<Array<Maybe<User>>>
  /** The comment's child reply comments */
  childComments: Maybe<Scalars['Json']>
  /** If the comment tree is locked and may not receive replies or edits */
  isLocked: Maybe<Scalars['Boolean']>
}

/** Forum Thread Comment */
export type ThreadCommentCommentArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** Notification for when a thread comment is liked */
export type ThreadCommentLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the activity which was liked */
  commentId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The thread that the relevant comment belongs to */
  thread: Maybe<Thread>
  /** The thread comment that was liked */
  comment: Maybe<ThreadComment>
  /** The user who liked the activity */
  user: Maybe<User>
}

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type ThreadCommentMentionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the comment where mentioned */
  commentId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The thread that the relevant comment belongs to */
  thread: Maybe<Thread>
  /** The thread comment that included the @ mention */
  comment: Maybe<ThreadComment>
  /** The user who mentioned the authenticated user */
  user: Maybe<User>
}

/** Notification for when a user replies to your forum thread comment */
export type ThreadCommentReplyNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who create the comment reply */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the reply comment */
  commentId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The thread that the relevant comment belongs to */
  thread: Maybe<Thread>
  /** The reply thread comment */
  comment: Maybe<ThreadComment>
  /** The user who replied to the activity */
  user: Maybe<User>
}

/** Thread comments sort enums */
export enum ThreadCommentSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
}

/** Notification for when a user replies to a subscribed forum thread */
export type ThreadCommentSubscribedNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who commented on the thread */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the new comment in the subscribed thread */
  commentId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The thread that the relevant comment belongs to */
  thread: Maybe<Thread>
  /** The reply thread comment */
  comment: Maybe<ThreadComment>
  /** The user who replied to the subscribed thread */
  user: Maybe<User>
}

/** Notification for when a thread is liked */
export type ThreadLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']
  /** The type of notification */
  type: Maybe<NotificationType>
  /** The id of the thread which was liked */
  threadId: Scalars['Int']
  /** The notification context text */
  context: Maybe<Scalars['String']>
  /** The time the notification was created at */
  createdAt: Maybe<Scalars['Int']>
  /** The thread that the relevant comment belongs to */
  thread: Maybe<Thread>
  /** The liked thread comment */
  comment: Maybe<ThreadComment>
  /** The user who liked the activity */
  user: Maybe<User>
}

/** Thread sort enums */
export enum ThreadSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  RepliedAt = 'REPLIED_AT',
  RepliedAtDesc = 'REPLIED_AT_DESC',
  ReplyCount = 'REPLY_COUNT',
  ReplyCountDesc = 'REPLY_COUNT_DESC',
  ViewCount = 'VIEW_COUNT',
  ViewCountDesc = 'VIEW_COUNT_DESC',
  IsSticky = 'IS_STICKY',
  SearchMatch = 'SEARCH_MATCH',
}

/** A user */
export type User = {
  /** The id of the user */
  id: Scalars['Int']
  /** The name of the user */
  name: Scalars['String']
  /** The bio written by user (Markdown) */
  about: Maybe<Scalars['String']>
  /** The user's avatar images */
  avatar: Maybe<UserAvatar>
  /** The user's banner images */
  bannerImage: Maybe<Scalars['String']>
  /** If the authenticated user if following this user */
  isFollowing: Maybe<Scalars['Boolean']>
  /** If this user if following the authenticated user */
  isFollower: Maybe<Scalars['Boolean']>
  /** If the user is blocked by the authenticated user */
  isBlocked: Maybe<Scalars['Boolean']>
  bans: Maybe<Scalars['Json']>
  /** The user's general options */
  options: Maybe<UserOptions>
  /** The user's media list options */
  mediaListOptions: Maybe<MediaListOptions>
  /** The users favourites */
  favourites: Maybe<Favourites>
  /** The users anime & manga list statistics */
  statistics: Maybe<UserStatisticTypes>
  /** The number of unread notifications the user has */
  unreadNotificationCount: Maybe<Scalars['Int']>
  /** The url for the user page on the AniList website */
  siteUrl: Maybe<Scalars['String']>
  /** The donation tier of the user */
  donatorTier: Maybe<Scalars['Int']>
  /** Custom donation badge text */
  donatorBadge: Maybe<Scalars['String']>
  /** The user's moderator roles if they are a site moderator */
  moderatorRoles: Maybe<Array<Maybe<ModRole>>>
  /** When the user's account was created. (Does not exist for accounts created before 2020) */
  createdAt: Maybe<Scalars['Int']>
  /** When the user's data was last updated */
  updatedAt: Maybe<Scalars['Int']>
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  stats: Maybe<UserStats>
  /**
   * If the user is a moderator or data moderator
   * @deprecated Deprecated. Replaced with moderatorRoles field.
   */
  moderatorStatus: Maybe<Scalars['String']>
  /** The user's previously used names. */
  previousNames: Maybe<Array<Maybe<UserPreviousName>>>
}

/** A user */
export type UserAboutArgs = {
  asHtml: Maybe<Scalars['Boolean']>
}

/** A user */
export type UserFavouritesArgs = {
  page: Maybe<Scalars['Int']>
}

/** A user's activity history stats. */
export type UserActivityHistory = {
  /** The day the activity took place (Unix timestamp) */
  date: Maybe<Scalars['Int']>
  /** The amount of activity on the day */
  amount: Maybe<Scalars['Int']>
  /** The level of activity represented on a 1-10 scale */
  level: Maybe<Scalars['Int']>
}

/** A user's avatars */
export type UserAvatar = {
  /** The avatar of user at its largest size */
  large: Maybe<Scalars['String']>
  /** The avatar of user at medium size */
  medium: Maybe<Scalars['String']>
}

export type UserCountryStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  country: Maybe<Scalars['CountryCode']>
}

export type UserFormatStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  format: Maybe<MediaFormat>
}

export type UserGenreStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  genre: Maybe<Scalars['String']>
}

export type UserLengthStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  length: Maybe<Scalars['String']>
}

/** User data for moderators */
export type UserModData = {
  alts: Maybe<Array<Maybe<User>>>
  bans: Maybe<Scalars['Json']>
  ip: Maybe<Scalars['Json']>
  counts: Maybe<Scalars['Json']>
  privacy: Maybe<Scalars['Int']>
  email: Maybe<Scalars['String']>
}

/** A user's general options */
export type UserOptions = {
  /** The language the user wants to see media titles in */
  titleLanguage: Maybe<UserTitleLanguage>
  /** Whether the user has enabled viewing of 18+ content */
  displayAdultContent: Maybe<Scalars['Boolean']>
  /** Whether the user receives notifications when a show they are watching aires */
  airingNotifications: Maybe<Scalars['Boolean']>
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  profileColor: Maybe<Scalars['String']>
  /** Notification options */
  notificationOptions: Maybe<Array<Maybe<NotificationOption>>>
  /** The user's timezone offset (Auth user only) */
  timezone: Maybe<Scalars['String']>
  /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
  activityMergeTime: Maybe<Scalars['Int']>
  /** The language the user wants to see staff and character names in */
  staffNameLanguage: Maybe<UserStaffNameLanguage>
  /** Whether the user only allow messages from users they follow */
  restrictMessagesToFollowing: Maybe<Scalars['Boolean']>
  /** The list activity types the user has disabled from being created from list updates */
  disabledListActivity: Maybe<Array<Maybe<ListActivityOption>>>
}

/** A user's previous name */
export type UserPreviousName = {
  /** A previous name of the user. */
  name: Maybe<Scalars['String']>
  /** When the user first changed from this name. */
  createdAt: Maybe<Scalars['Int']>
  /** When the user most recently changed from this name. */
  updatedAt: Maybe<Scalars['Int']>
}

export type UserReleaseYearStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  releaseYear: Maybe<Scalars['Int']>
}

export type UserScoreStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  score: Maybe<Scalars['Int']>
}

/** User sort enums */
export enum UserSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Username = 'USERNAME',
  UsernameDesc = 'USERNAME_DESC',
  WatchedTime = 'WATCHED_TIME',
  WatchedTimeDesc = 'WATCHED_TIME_DESC',
  ChaptersRead = 'CHAPTERS_READ',
  ChaptersReadDesc = 'CHAPTERS_READ_DESC',
  SearchMatch = 'SEARCH_MATCH',
}

/** The language the user wants to see staff and character names in */
export enum UserStaffNameLanguage {
  /** The romanization of the staff or character's native name, with western name ordering */
  RomajiWestern = 'ROMAJI_WESTERN',
  /** The romanization of the staff or character's native name */
  Romaji = 'ROMAJI',
  /** The staff or character's name in their native language */
  Native = 'NATIVE',
}

export type UserStaffStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  staff: Maybe<Staff>
}

export type UserStartYearStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  startYear: Maybe<Scalars['Int']>
}

export type UserStatistics = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  standardDeviation: Scalars['Float']
  minutesWatched: Scalars['Int']
  episodesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  volumesRead: Scalars['Int']
  formats: Maybe<Array<Maybe<UserFormatStatistic>>>
  statuses: Maybe<Array<Maybe<UserStatusStatistic>>>
  scores: Maybe<Array<Maybe<UserScoreStatistic>>>
  lengths: Maybe<Array<Maybe<UserLengthStatistic>>>
  releaseYears: Maybe<Array<Maybe<UserReleaseYearStatistic>>>
  startYears: Maybe<Array<Maybe<UserStartYearStatistic>>>
  genres: Maybe<Array<Maybe<UserGenreStatistic>>>
  tags: Maybe<Array<Maybe<UserTagStatistic>>>
  countries: Maybe<Array<Maybe<UserCountryStatistic>>>
  voiceActors: Maybe<Array<Maybe<UserVoiceActorStatistic>>>
  staff: Maybe<Array<Maybe<UserStaffStatistic>>>
  studios: Maybe<Array<Maybe<UserStudioStatistic>>>
}

export type UserStatisticsFormatsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStatusesArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsScoresArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsLengthsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsReleaseYearsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStartYearsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsGenresArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsTagsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsCountriesArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsVoiceActorsArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStaffArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

export type UserStatisticsStudiosArgs = {
  limit: Maybe<Scalars['Int']>
  sort: Maybe<Array<Maybe<UserStatisticsSort>>>
}

/** User statistics sort enum */
export enum UserStatisticsSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  MeanScore = 'MEAN_SCORE',
  MeanScoreDesc = 'MEAN_SCORE_DESC',
}

export type UserStatisticTypes = {
  anime: Maybe<UserStatistics>
  manga: Maybe<UserStatistics>
}

/** A user's statistics */
export type UserStats = {
  /** The amount of anime the user has watched in minutes */
  watchedTime: Maybe<Scalars['Int']>
  /** The amount of manga chapters the user has read */
  chaptersRead: Maybe<Scalars['Int']>
  activityHistory: Maybe<Array<Maybe<UserActivityHistory>>>
  animeStatusDistribution: Maybe<Array<Maybe<StatusDistribution>>>
  mangaStatusDistribution: Maybe<Array<Maybe<StatusDistribution>>>
  animeScoreDistribution: Maybe<Array<Maybe<ScoreDistribution>>>
  mangaScoreDistribution: Maybe<Array<Maybe<ScoreDistribution>>>
  animeListScores: Maybe<ListScoreStats>
  mangaListScores: Maybe<ListScoreStats>
  favouredGenresOverview: Maybe<Array<Maybe<GenreStats>>>
  favouredGenres: Maybe<Array<Maybe<GenreStats>>>
  favouredTags: Maybe<Array<Maybe<TagStats>>>
  favouredActors: Maybe<Array<Maybe<StaffStats>>>
  favouredStaff: Maybe<Array<Maybe<StaffStats>>>
  favouredStudios: Maybe<Array<Maybe<StudioStats>>>
  favouredYears: Maybe<Array<Maybe<YearStats>>>
  favouredFormats: Maybe<Array<Maybe<FormatStats>>>
}

export type UserStatusStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  status: Maybe<MediaListStatus>
}

export type UserStudioStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  studio: Maybe<Studio>
}

export type UserTagStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  tag: Maybe<MediaTag>
}

/** The language the user wants to see media titles in */
export enum UserTitleLanguage {
  /** The romanization of the native language title */
  Romaji = 'ROMAJI',
  /** The official english title */
  English = 'ENGLISH',
  /** Official title in it's native language */
  Native = 'NATIVE',
  /** The romanization of the native language title, stylised by media creator */
  RomajiStylised = 'ROMAJI_STYLISED',
  /** The official english title, stylised by media creator */
  EnglishStylised = 'ENGLISH_STYLISED',
  /** Official title in it's native language, stylised by media creator */
  NativeStylised = 'NATIVE_STYLISED',
}

export type UserVoiceActorStatistic = {
  count: Scalars['Int']
  meanScore: Scalars['Float']
  minutesWatched: Scalars['Int']
  chaptersRead: Scalars['Int']
  mediaIds: Array<Maybe<Scalars['Int']>>
  voiceActor: Maybe<Staff>
  characterIds: Array<Maybe<Scalars['Int']>>
}

/** User's year statistics */
export type YearStats = {
  year: Maybe<Scalars['Int']>
  amount: Maybe<Scalars['Int']>
  meanScore: Maybe<Scalars['Int']>
}

export type PageInfoFragment = Pick<
  Types.PageInfo,
  'total' | 'currentPage' | 'lastPage' | 'hasNextPage' | 'perPage'
>

export type MediaCommonFragment = Pick<Types.Media, 'id' | 'genres'> & {
  title: Types.Maybe<Pick<Types.MediaTitle, 'romaji'>>
  coverImage: Types.Maybe<Pick<Types.MediaCoverImage, 'color' | 'large'>>
}

export type MediaDetailFragment = Pick<Types.Media, 'id' | 'genres'> & {
  title: Types.Maybe<Pick<Types.MediaTitle, 'romaji'>>
  coverImage: Types.Maybe<Pick<Types.MediaCoverImage, 'color' | 'large'>>
}

export type AnimeListQueryVariables = Types.Exact<{
  page: Types.Maybe<Types.Scalars['Int']>
  perPage: Types.Maybe<Types.Scalars['Int']>
  sort: Types.Maybe<Array<Types.Maybe<Types.MediaSort>> | Types.Maybe<Types.MediaSort>>
  search: Types.Maybe<Types.Scalars['String']>
}>

export type AnimeListQuery = {
  animeList: Types.Maybe<{
    pageInfo: Types.Maybe<PageInfoFragment>
    items: Types.Maybe<Array<Types.Maybe<MediaCommonFragment>>>
  }>
}

export type AnimeDetailQueryVariables = Types.Exact<{
  id: Types.Maybe<Types.Scalars['Int']>
  type: Types.Maybe<Types.MediaType>
  isAdult: Types.Maybe<Types.Scalars['Boolean']>
}>

export type AnimeDetailQuery = {
  animeDetail: Types.Maybe<
    Pick<
      Types.Media,
      | 'id'
      | 'description'
      | 'season'
      | 'seasonYear'
      | 'type'
      | 'format'
      | 'status'
      | 'episodes'
      | 'duration'
      | 'chapters'
      | 'volumes'
      | 'genres'
      | 'source'
      | 'meanScore'
      | 'averageScore'
      | 'popularity'
    > & {
      title: Types.Maybe<Pick<Types.MediaTitle, 'userPreferred' | 'romaji' | 'english' | 'native'>>
      coverImage: Types.Maybe<Pick<Types.MediaCoverImage, 'large'>>
      startDate: Types.Maybe<Pick<Types.FuzzyDate, 'year' | 'month' | 'day'>>
      endDate: Types.Maybe<Pick<Types.FuzzyDate, 'year' | 'month' | 'day'>>
      relations: Types.Maybe<{
        edges: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.MediaEdge, 'id' | 'relationType'> & {
                node: Types.Maybe<
                  Pick<Types.Media, 'id' | 'format' | 'type' | 'status' | 'bannerImage'> & {
                    title: Types.Maybe<Pick<Types.MediaTitle, 'userPreferred'>>
                    coverImage: Types.Maybe<Pick<Types.MediaCoverImage, 'large'>>
                  }
                >
              }
            >
          >
        >
      }>
      characterPreview: Types.Maybe<{
        edges: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.CharacterEdge, 'id' | 'role' | 'name'> & {
                voiceActors: Types.Maybe<
                  Array<
                    Types.Maybe<
                      Pick<Types.Staff, 'id'> & { language: Types.Staff['languageV2'] } & {
                        name: Types.Maybe<Pick<Types.StaffName, 'userPreferred'>>
                        image: Types.Maybe<Pick<Types.StaffImage, 'large'>>
                      }
                    >
                  >
                >
                node: Types.Maybe<
                  Pick<Types.Character, 'id'> & {
                    name: Types.Maybe<Pick<Types.CharacterName, 'userPreferred'>>
                    image: Types.Maybe<Pick<Types.CharacterImage, 'large'>>
                  }
                >
              }
            >
          >
        >
      }>
      studios: Types.Maybe<{
        edges: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.StudioEdge, 'isMain'> & {
                node: Types.Maybe<Pick<Types.Studio, 'id' | 'name'>>
              }
            >
          >
        >
      }>
      recommendations: Types.Maybe<{
        pageInfo: Types.Maybe<Pick<Types.PageInfo, 'total'>>
        nodes: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.Recommendation, 'id' | 'rating' | 'userRating'> & {
                mediaRecommendation: Types.Maybe<
                  Pick<Types.Media, 'id' | 'format' | 'type' | 'status' | 'bannerImage'> & {
                    title: Types.Maybe<Pick<Types.MediaTitle, 'userPreferred'>>
                    coverImage: Types.Maybe<Pick<Types.MediaCoverImage, 'large'>>
                  }
                >
                user: Types.Maybe<
                  Pick<Types.User, 'id' | 'name'> & {
                    avatar: Types.Maybe<Pick<Types.UserAvatar, 'large'>>
                  }
                >
              }
            >
          >
        >
      }>
    }
  >
}

export const PageInfoFragmentDoc = gql`
  fragment PageInfo on PageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
`
export const MediaCommonFragmentDoc = gql`
  fragment MediaCommon on Media {
    id
    title {
      romaji
    }
    genres
    coverImage {
      color
      large
    }
  }
`
export const MediaDetailFragmentDoc = gql`
  fragment MediaDetail on Media {
    id
    title {
      romaji
    }
    genres
    coverImage {
      color
      large
    }
  }
`
export const AnimeListDocument = gql`
  query animeList($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
    animeList: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      items: media(sort: $sort, search: $search) {
        ...MediaCommon
      }
    }
  }
  ${PageInfoFragmentDoc}
  ${MediaCommonFragmentDoc}
`

/**
 * __useAnimeListQuery__
 *
 * To run a query within a React component, call `useAnimeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      sort: // value for 'sort'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useAnimeListQuery(
  baseOptions?: Apollo.QueryHookOptions<AnimeListQuery, AnimeListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options)
}
export function useAnimeListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AnimeListQuery, AnimeListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AnimeListQuery, AnimeListQueryVariables>(AnimeListDocument, options)
}
export type AnimeListQueryHookResult = ReturnType<typeof useAnimeListQuery>
export type AnimeListLazyQueryHookResult = ReturnType<typeof useAnimeListLazyQuery>
export const AnimeDetailDocument = gql`
  query animeDetail($id: Int, $type: MediaType, $isAdult: Boolean) {
    animeDetail: Media(id: $id, type: $type, isAdult: $isAdult) {
      id
      title {
        userPreferred
        romaji
        english
        native
      }
      coverImage {
        large
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      description
      season
      seasonYear
      type
      format
      status(version: 2)
      episodes
      duration
      chapters
      volumes
      genres
      source(version: 3)
      meanScore
      averageScore
      popularity
      relations {
        edges {
          id
          relationType(version: 2)
          node {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
            }
          }
        }
      }
      characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
        edges {
          id
          role
          name
          voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
          node {
            id
            name {
              userPreferred
            }
            image {
              large
            }
          }
        }
      }
      studios {
        edges {
          isMain
          node {
            id
            name
          }
        }
      }
      recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          rating
          userRating
          mediaRecommendation {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
            }
          }
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
    }
  }
`

/**
 * __useAnimeDetailQuery__
 *
 * To run a query within a React component, call `useAnimeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      isAdult: // value for 'isAdult'
 *   },
 * });
 */
export function useAnimeDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<AnimeDetailQuery, AnimeDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AnimeDetailQuery, AnimeDetailQueryVariables>(AnimeDetailDocument, options)
}
export function useAnimeDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AnimeDetailQuery, AnimeDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AnimeDetailQuery, AnimeDetailQueryVariables>(
    AnimeDetailDocument,
    options,
  )
}
export type AnimeDetailQueryHookResult = ReturnType<typeof useAnimeDetailQuery>
export type AnimeDetailLazyQueryHookResult = ReturnType<typeof useAnimeDetailLazyQuery>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Types.Maybe<TTypes> | Promise<Types.Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  NotificationUnion:
    | Types.AiringNotification
    | Types.FollowingNotification
    | Types.ActivityMessageNotification
    | (Omit<Types.ActivityMentionNotification, 'activity'> & {
        activity: Types.Maybe<RefType['ActivityUnion']>
      })
    | (Omit<Types.ActivityReplyNotification, 'activity'> & {
        activity: Types.Maybe<RefType['ActivityUnion']>
      })
    | (Omit<Types.ActivityReplySubscribedNotification, 'activity'> & {
        activity: Types.Maybe<RefType['ActivityUnion']>
      })
    | (Omit<Types.ActivityLikeNotification, 'activity'> & {
        activity: Types.Maybe<RefType['ActivityUnion']>
      })
    | (Omit<Types.ActivityReplyLikeNotification, 'activity'> & {
        activity: Types.Maybe<RefType['ActivityUnion']>
      })
    | Types.ThreadCommentMentionNotification
    | Types.ThreadCommentReplyNotification
    | Types.ThreadCommentSubscribedNotification
    | Types.ThreadCommentLikeNotification
    | Types.ThreadLikeNotification
    | Types.RelatedMediaAdditionNotification
    | Types.MediaDataChangeNotification
    | Types.MediaMergeNotification
    | Types.MediaDeletionNotification
  ActivityUnion: Types.TextActivity | Types.ListActivity | Types.MessageActivity
  LikeableUnion:
    | Types.ListActivity
    | Types.TextActivity
    | Types.MessageActivity
    | Types.ActivityReply
    | Types.Thread
    | Types.ThreadComment
}

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  Int: ResolverTypeWrapper<Types.Scalars['Int']['output']>
  Page: ResolverTypeWrapper<
    Omit<Types.Page, 'notifications' | 'activities'> & {
      notifications: Types.Maybe<Array<Types.Maybe<ResolversTypes['NotificationUnion']>>>
      activities: Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityUnion']>>>
    }
  >
  PageInfo: ResolverTypeWrapper<Types.PageInfo>
  Boolean: ResolverTypeWrapper<Types.Scalars['Boolean']['output']>
  String: ResolverTypeWrapper<Types.Scalars['String']['output']>
  UserSort: Types.UserSort
  User: ResolverTypeWrapper<Types.User>
  UserAvatar: ResolverTypeWrapper<Types.UserAvatar>
  Json: ResolverTypeWrapper<Types.Scalars['Json']['output']>
  UserOptions: ResolverTypeWrapper<Types.UserOptions>
  UserTitleLanguage: Types.UserTitleLanguage
  NotificationOption: ResolverTypeWrapper<Types.NotificationOption>
  NotificationType: Types.NotificationType
  UserStaffNameLanguage: Types.UserStaffNameLanguage
  ListActivityOption: ResolverTypeWrapper<Types.ListActivityOption>
  MediaListStatus: Types.MediaListStatus
  MediaListOptions: ResolverTypeWrapper<Types.MediaListOptions>
  ScoreFormat: Types.ScoreFormat
  MediaListTypeOptions: ResolverTypeWrapper<Types.MediaListTypeOptions>
  Favourites: ResolverTypeWrapper<Types.Favourites>
  MediaConnection: ResolverTypeWrapper<Types.MediaConnection>
  MediaEdge: ResolverTypeWrapper<Types.MediaEdge>
  Media: ResolverTypeWrapper<Types.Media>
  MediaTitle: ResolverTypeWrapper<Types.MediaTitle>
  MediaType: Types.MediaType
  MediaFormat: Types.MediaFormat
  MediaStatus: Types.MediaStatus
  FuzzyDate: ResolverTypeWrapper<Types.FuzzyDate>
  MediaSeason: Types.MediaSeason
  CountryCode: ResolverTypeWrapper<Types.Scalars['CountryCode']['output']>
  MediaSource: Types.MediaSource
  MediaTrailer: ResolverTypeWrapper<Types.MediaTrailer>
  MediaCoverImage: ResolverTypeWrapper<Types.MediaCoverImage>
  MediaTag: ResolverTypeWrapper<Types.MediaTag>
  CharacterSort: Types.CharacterSort
  CharacterRole: Types.CharacterRole
  CharacterConnection: ResolverTypeWrapper<Types.CharacterConnection>
  CharacterEdge: ResolverTypeWrapper<Types.CharacterEdge>
  Character: ResolverTypeWrapper<Types.Character>
  CharacterName: ResolverTypeWrapper<Types.CharacterName>
  CharacterImage: ResolverTypeWrapper<Types.CharacterImage>
  MediaSort: Types.MediaSort
  StaffLanguage: Types.StaffLanguage
  StaffSort: Types.StaffSort
  Staff: ResolverTypeWrapper<Types.Staff>
  StaffName: ResolverTypeWrapper<Types.StaffName>
  StaffImage: ResolverTypeWrapper<Types.StaffImage>
  StaffRoleType: ResolverTypeWrapper<Types.StaffRoleType>
  StaffConnection: ResolverTypeWrapper<Types.StaffConnection>
  StaffEdge: ResolverTypeWrapper<Types.StaffEdge>
  StudioSort: Types.StudioSort
  StudioConnection: ResolverTypeWrapper<Types.StudioConnection>
  StudioEdge: ResolverTypeWrapper<Types.StudioEdge>
  Studio: ResolverTypeWrapper<Types.Studio>
  AiringSchedule: ResolverTypeWrapper<Types.AiringSchedule>
  AiringScheduleConnection: ResolverTypeWrapper<Types.AiringScheduleConnection>
  AiringScheduleEdge: ResolverTypeWrapper<Types.AiringScheduleEdge>
  MediaTrendSort: Types.MediaTrendSort
  MediaTrendConnection: ResolverTypeWrapper<Types.MediaTrendConnection>
  MediaTrendEdge: ResolverTypeWrapper<Types.MediaTrendEdge>
  MediaTrend: ResolverTypeWrapper<Types.MediaTrend>
  MediaExternalLink: ResolverTypeWrapper<Types.MediaExternalLink>
  ExternalLinkType: Types.ExternalLinkType
  MediaStreamingEpisode: ResolverTypeWrapper<Types.MediaStreamingEpisode>
  MediaRank: ResolverTypeWrapper<Types.MediaRank>
  MediaRankType: Types.MediaRankType
  MediaList: ResolverTypeWrapper<Types.MediaList>
  Float: ResolverTypeWrapper<Types.Scalars['Float']['output']>
  ReviewSort: Types.ReviewSort
  ReviewConnection: ResolverTypeWrapper<Types.ReviewConnection>
  ReviewEdge: ResolverTypeWrapper<Types.ReviewEdge>
  Review: ResolverTypeWrapper<Types.Review>
  ReviewRating: Types.ReviewRating
  RecommendationSort: Types.RecommendationSort
  RecommendationConnection: ResolverTypeWrapper<Types.RecommendationConnection>
  RecommendationEdge: ResolverTypeWrapper<Types.RecommendationEdge>
  Recommendation: ResolverTypeWrapper<Types.Recommendation>
  RecommendationRating: Types.RecommendationRating
  MediaStats: ResolverTypeWrapper<Types.MediaStats>
  ScoreDistribution: ResolverTypeWrapper<Types.ScoreDistribution>
  StatusDistribution: ResolverTypeWrapper<Types.StatusDistribution>
  AiringProgression: ResolverTypeWrapper<Types.AiringProgression>
  MediaRelation: Types.MediaRelation
  UserStatisticTypes: ResolverTypeWrapper<Types.UserStatisticTypes>
  UserStatistics: ResolverTypeWrapper<Types.UserStatistics>
  UserStatisticsSort: Types.UserStatisticsSort
  UserFormatStatistic: ResolverTypeWrapper<Types.UserFormatStatistic>
  UserStatusStatistic: ResolverTypeWrapper<Types.UserStatusStatistic>
  UserScoreStatistic: ResolverTypeWrapper<Types.UserScoreStatistic>
  UserLengthStatistic: ResolverTypeWrapper<Types.UserLengthStatistic>
  UserReleaseYearStatistic: ResolverTypeWrapper<Types.UserReleaseYearStatistic>
  UserStartYearStatistic: ResolverTypeWrapper<Types.UserStartYearStatistic>
  UserGenreStatistic: ResolverTypeWrapper<Types.UserGenreStatistic>
  UserTagStatistic: ResolverTypeWrapper<Types.UserTagStatistic>
  UserCountryStatistic: ResolverTypeWrapper<Types.UserCountryStatistic>
  UserVoiceActorStatistic: ResolverTypeWrapper<Types.UserVoiceActorStatistic>
  UserStaffStatistic: ResolverTypeWrapper<Types.UserStaffStatistic>
  UserStudioStatistic: ResolverTypeWrapper<Types.UserStudioStatistic>
  ModRole: Types.ModRole
  UserStats: ResolverTypeWrapper<Types.UserStats>
  UserActivityHistory: ResolverTypeWrapper<Types.UserActivityHistory>
  ListScoreStats: ResolverTypeWrapper<Types.ListScoreStats>
  GenreStats: ResolverTypeWrapper<Types.GenreStats>
  TagStats: ResolverTypeWrapper<Types.TagStats>
  StaffStats: ResolverTypeWrapper<Types.StaffStats>
  StudioStats: ResolverTypeWrapper<Types.StudioStats>
  YearStats: ResolverTypeWrapper<Types.YearStats>
  FormatStats: ResolverTypeWrapper<Types.FormatStats>
  UserPreviousName: ResolverTypeWrapper<Types.UserPreviousName>
  FuzzyDateInt: ResolverTypeWrapper<Types.Scalars['FuzzyDateInt']['output']>
  MediaListSort: Types.MediaListSort
  AiringSort: Types.AiringSort
  NotificationUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NotificationUnion']>
  AiringNotification: ResolverTypeWrapper<Types.AiringNotification>
  FollowingNotification: ResolverTypeWrapper<Types.FollowingNotification>
  ActivityMessageNotification: ResolverTypeWrapper<Types.ActivityMessageNotification>
  MessageActivity: ResolverTypeWrapper<Types.MessageActivity>
  ActivityType: Types.ActivityType
  ActivityReply: ResolverTypeWrapper<Types.ActivityReply>
  ActivityMentionNotification: ResolverTypeWrapper<
    Omit<Types.ActivityMentionNotification, 'activity'> & {
      activity: Types.Maybe<ResolversTypes['ActivityUnion']>
    }
  >
  ActivityUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ActivityUnion']>
  TextActivity: ResolverTypeWrapper<Types.TextActivity>
  ListActivity: ResolverTypeWrapper<Types.ListActivity>
  ActivityReplyNotification: ResolverTypeWrapper<
    Omit<Types.ActivityReplyNotification, 'activity'> & {
      activity: Types.Maybe<ResolversTypes['ActivityUnion']>
    }
  >
  ActivityReplySubscribedNotification: ResolverTypeWrapper<
    Omit<Types.ActivityReplySubscribedNotification, 'activity'> & {
      activity: Types.Maybe<ResolversTypes['ActivityUnion']>
    }
  >
  ActivityLikeNotification: ResolverTypeWrapper<
    Omit<Types.ActivityLikeNotification, 'activity'> & {
      activity: Types.Maybe<ResolversTypes['ActivityUnion']>
    }
  >
  ActivityReplyLikeNotification: ResolverTypeWrapper<
    Omit<Types.ActivityReplyLikeNotification, 'activity'> & {
      activity: Types.Maybe<ResolversTypes['ActivityUnion']>
    }
  >
  ThreadCommentMentionNotification: ResolverTypeWrapper<Types.ThreadCommentMentionNotification>
  Thread: ResolverTypeWrapper<Types.Thread>
  ThreadCategory: ResolverTypeWrapper<Types.ThreadCategory>
  ThreadComment: ResolverTypeWrapper<Types.ThreadComment>
  ThreadCommentReplyNotification: ResolverTypeWrapper<Types.ThreadCommentReplyNotification>
  ThreadCommentSubscribedNotification: ResolverTypeWrapper<Types.ThreadCommentSubscribedNotification>
  ThreadCommentLikeNotification: ResolverTypeWrapper<Types.ThreadCommentLikeNotification>
  ThreadLikeNotification: ResolverTypeWrapper<Types.ThreadLikeNotification>
  RelatedMediaAdditionNotification: ResolverTypeWrapper<Types.RelatedMediaAdditionNotification>
  MediaDataChangeNotification: ResolverTypeWrapper<Types.MediaDataChangeNotification>
  MediaMergeNotification: ResolverTypeWrapper<Types.MediaMergeNotification>
  MediaDeletionNotification: ResolverTypeWrapper<Types.MediaDeletionNotification>
  ActivitySort: Types.ActivitySort
  ThreadSort: Types.ThreadSort
  ThreadCommentSort: Types.ThreadCommentSort
  LikeableType: Types.LikeableType
  MediaListCollection: ResolverTypeWrapper<Types.MediaListCollection>
  MediaListGroup: ResolverTypeWrapper<Types.MediaListGroup>
  ParsedMarkdown: ResolverTypeWrapper<Types.ParsedMarkdown>
  AniChartUser: ResolverTypeWrapper<Types.AniChartUser>
  SiteStatistics: ResolverTypeWrapper<Types.SiteStatistics>
  SiteTrendSort: Types.SiteTrendSort
  SiteTrendConnection: ResolverTypeWrapper<Types.SiteTrendConnection>
  SiteTrendEdge: ResolverTypeWrapper<Types.SiteTrendEdge>
  SiteTrend: ResolverTypeWrapper<Types.SiteTrend>
  ExternalLinkMediaType: Types.ExternalLinkMediaType
  Mutation: ResolverTypeWrapper<{}>
  NotificationOptionInput: Types.NotificationOptionInput
  MediaListOptionsInput: Types.MediaListOptionsInput
  ListActivityOptionInput: Types.ListActivityOptionInput
  FuzzyDateInput: Types.FuzzyDateInput
  Deleted: ResolverTypeWrapper<Types.Deleted>
  LikeableUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['LikeableUnion']>
  AniChartHighlightInput: Types.AniChartHighlightInput
  AiringScheduleInput: Types.AiringScheduleInput
  CharacterNameInput: Types.CharacterNameInput
  CharacterSubmission: ResolverTypeWrapper<Types.CharacterSubmission>
  SubmissionStatus: Types.SubmissionStatus
  CharacterSubmissionConnection: ResolverTypeWrapper<Types.CharacterSubmissionConnection>
  CharacterSubmissionEdge: ResolverTypeWrapper<Types.CharacterSubmissionEdge>
  StaffSubmission: ResolverTypeWrapper<Types.StaffSubmission>
  InternalPage: ResolverTypeWrapper<
    Omit<Types.InternalPage, 'notifications' | 'activities'> & {
      notifications: Types.Maybe<Array<Types.Maybe<ResolversTypes['NotificationUnion']>>>
      activities: Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityUnion']>>>
    }
  >
  SubmissionSort: Types.SubmissionSort
  MediaSubmission: ResolverTypeWrapper<Types.MediaSubmission>
  MediaSubmissionComparison: ResolverTypeWrapper<Types.MediaSubmissionComparison>
  MediaSubmissionEdge: ResolverTypeWrapper<Types.MediaSubmissionEdge>
  MediaCharacter: ResolverTypeWrapper<Types.MediaCharacter>
  RevisionHistory: ResolverTypeWrapper<Types.RevisionHistory>
  RevisionHistoryAction: Types.RevisionHistoryAction
  Report: ResolverTypeWrapper<Types.Report>
  ModAction: ResolverTypeWrapper<Types.ModAction>
  ModActionType: Types.ModActionType
  MediaExternalLinkInput: Types.MediaExternalLinkInput
  MediaTitleInput: Types.MediaTitleInput
  StaffNameInput: Types.StaffNameInput
  UserModData: ResolverTypeWrapper<Types.UserModData>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  Int: Types.Scalars['Int']['output']
  Page: Omit<Types.Page, 'notifications' | 'activities'> & {
    notifications: Types.Maybe<Array<Types.Maybe<ResolversParentTypes['NotificationUnion']>>>
    activities: Types.Maybe<Array<Types.Maybe<ResolversParentTypes['ActivityUnion']>>>
  }
  PageInfo: Types.PageInfo
  Boolean: Types.Scalars['Boolean']['output']
  String: Types.Scalars['String']['output']
  User: Types.User
  UserAvatar: Types.UserAvatar
  Json: Types.Scalars['Json']['output']
  UserOptions: Types.UserOptions
  NotificationOption: Types.NotificationOption
  ListActivityOption: Types.ListActivityOption
  MediaListOptions: Types.MediaListOptions
  MediaListTypeOptions: Types.MediaListTypeOptions
  Favourites: Types.Favourites
  MediaConnection: Types.MediaConnection
  MediaEdge: Types.MediaEdge
  Media: Types.Media
  MediaTitle: Types.MediaTitle
  FuzzyDate: Types.FuzzyDate
  CountryCode: Types.Scalars['CountryCode']['output']
  MediaTrailer: Types.MediaTrailer
  MediaCoverImage: Types.MediaCoverImage
  MediaTag: Types.MediaTag
  CharacterConnection: Types.CharacterConnection
  CharacterEdge: Types.CharacterEdge
  Character: Types.Character
  CharacterName: Types.CharacterName
  CharacterImage: Types.CharacterImage
  Staff: Types.Staff
  StaffName: Types.StaffName
  StaffImage: Types.StaffImage
  StaffRoleType: Types.StaffRoleType
  StaffConnection: Types.StaffConnection
  StaffEdge: Types.StaffEdge
  StudioConnection: Types.StudioConnection
  StudioEdge: Types.StudioEdge
  Studio: Types.Studio
  AiringSchedule: Types.AiringSchedule
  AiringScheduleConnection: Types.AiringScheduleConnection
  AiringScheduleEdge: Types.AiringScheduleEdge
  MediaTrendConnection: Types.MediaTrendConnection
  MediaTrendEdge: Types.MediaTrendEdge
  MediaTrend: Types.MediaTrend
  MediaExternalLink: Types.MediaExternalLink
  MediaStreamingEpisode: Types.MediaStreamingEpisode
  MediaRank: Types.MediaRank
  MediaList: Types.MediaList
  Float: Types.Scalars['Float']['output']
  ReviewConnection: Types.ReviewConnection
  ReviewEdge: Types.ReviewEdge
  Review: Types.Review
  RecommendationConnection: Types.RecommendationConnection
  RecommendationEdge: Types.RecommendationEdge
  Recommendation: Types.Recommendation
  MediaStats: Types.MediaStats
  ScoreDistribution: Types.ScoreDistribution
  StatusDistribution: Types.StatusDistribution
  AiringProgression: Types.AiringProgression
  UserStatisticTypes: Types.UserStatisticTypes
  UserStatistics: Types.UserStatistics
  UserFormatStatistic: Types.UserFormatStatistic
  UserStatusStatistic: Types.UserStatusStatistic
  UserScoreStatistic: Types.UserScoreStatistic
  UserLengthStatistic: Types.UserLengthStatistic
  UserReleaseYearStatistic: Types.UserReleaseYearStatistic
  UserStartYearStatistic: Types.UserStartYearStatistic
  UserGenreStatistic: Types.UserGenreStatistic
  UserTagStatistic: Types.UserTagStatistic
  UserCountryStatistic: Types.UserCountryStatistic
  UserVoiceActorStatistic: Types.UserVoiceActorStatistic
  UserStaffStatistic: Types.UserStaffStatistic
  UserStudioStatistic: Types.UserStudioStatistic
  UserStats: Types.UserStats
  UserActivityHistory: Types.UserActivityHistory
  ListScoreStats: Types.ListScoreStats
  GenreStats: Types.GenreStats
  TagStats: Types.TagStats
  StaffStats: Types.StaffStats
  StudioStats: Types.StudioStats
  YearStats: Types.YearStats
  FormatStats: Types.FormatStats
  UserPreviousName: Types.UserPreviousName
  FuzzyDateInt: Types.Scalars['FuzzyDateInt']['output']
  NotificationUnion: ResolversUnionTypes<ResolversParentTypes>['NotificationUnion']
  AiringNotification: Types.AiringNotification
  FollowingNotification: Types.FollowingNotification
  ActivityMessageNotification: Types.ActivityMessageNotification
  MessageActivity: Types.MessageActivity
  ActivityReply: Types.ActivityReply
  ActivityMentionNotification: Omit<Types.ActivityMentionNotification, 'activity'> & {
    activity: Types.Maybe<ResolversParentTypes['ActivityUnion']>
  }
  ActivityUnion: ResolversUnionTypes<ResolversParentTypes>['ActivityUnion']
  TextActivity: Types.TextActivity
  ListActivity: Types.ListActivity
  ActivityReplyNotification: Omit<Types.ActivityReplyNotification, 'activity'> & {
    activity: Types.Maybe<ResolversParentTypes['ActivityUnion']>
  }
  ActivityReplySubscribedNotification: Omit<
    Types.ActivityReplySubscribedNotification,
    'activity'
  > & { activity: Types.Maybe<ResolversParentTypes['ActivityUnion']> }
  ActivityLikeNotification: Omit<Types.ActivityLikeNotification, 'activity'> & {
    activity: Types.Maybe<ResolversParentTypes['ActivityUnion']>
  }
  ActivityReplyLikeNotification: Omit<Types.ActivityReplyLikeNotification, 'activity'> & {
    activity: Types.Maybe<ResolversParentTypes['ActivityUnion']>
  }
  ThreadCommentMentionNotification: Types.ThreadCommentMentionNotification
  Thread: Types.Thread
  ThreadCategory: Types.ThreadCategory
  ThreadComment: Types.ThreadComment
  ThreadCommentReplyNotification: Types.ThreadCommentReplyNotification
  ThreadCommentSubscribedNotification: Types.ThreadCommentSubscribedNotification
  ThreadCommentLikeNotification: Types.ThreadCommentLikeNotification
  ThreadLikeNotification: Types.ThreadLikeNotification
  RelatedMediaAdditionNotification: Types.RelatedMediaAdditionNotification
  MediaDataChangeNotification: Types.MediaDataChangeNotification
  MediaMergeNotification: Types.MediaMergeNotification
  MediaDeletionNotification: Types.MediaDeletionNotification
  MediaListCollection: Types.MediaListCollection
  MediaListGroup: Types.MediaListGroup
  ParsedMarkdown: Types.ParsedMarkdown
  AniChartUser: Types.AniChartUser
  SiteStatistics: Types.SiteStatistics
  SiteTrendConnection: Types.SiteTrendConnection
  SiteTrendEdge: Types.SiteTrendEdge
  SiteTrend: Types.SiteTrend
  Mutation: {}
  NotificationOptionInput: Types.NotificationOptionInput
  MediaListOptionsInput: Types.MediaListOptionsInput
  ListActivityOptionInput: Types.ListActivityOptionInput
  FuzzyDateInput: Types.FuzzyDateInput
  Deleted: Types.Deleted
  LikeableUnion: ResolversUnionTypes<ResolversParentTypes>['LikeableUnion']
  AniChartHighlightInput: Types.AniChartHighlightInput
  AiringScheduleInput: Types.AiringScheduleInput
  CharacterNameInput: Types.CharacterNameInput
  CharacterSubmission: Types.CharacterSubmission
  CharacterSubmissionConnection: Types.CharacterSubmissionConnection
  CharacterSubmissionEdge: Types.CharacterSubmissionEdge
  StaffSubmission: Types.StaffSubmission
  InternalPage: Omit<Types.InternalPage, 'notifications' | 'activities'> & {
    notifications: Types.Maybe<Array<Types.Maybe<ResolversParentTypes['NotificationUnion']>>>
    activities: Types.Maybe<Array<Types.Maybe<ResolversParentTypes['ActivityUnion']>>>
  }
  MediaSubmission: Types.MediaSubmission
  MediaSubmissionComparison: Types.MediaSubmissionComparison
  MediaSubmissionEdge: Types.MediaSubmissionEdge
  MediaCharacter: Types.MediaCharacter
  RevisionHistory: Types.RevisionHistory
  Report: Types.Report
  ModAction: Types.ModAction
  MediaExternalLinkInput: Types.MediaExternalLinkInput
  MediaTitleInput: Types.MediaTitleInput
  StaffNameInput: Types.StaffNameInput
  UserModData: Types.UserModData
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  Page: Resolver<
    Types.Maybe<ResolversTypes['Page']>,
    ParentType,
    ContextType,
    Partial<Types.QueryPageArgs>
  >
  Media: Resolver<
    Types.Maybe<ResolversTypes['Media']>,
    ParentType,
    ContextType,
    Partial<Types.QueryMediaArgs>
  >
  MediaTrend: Resolver<
    Types.Maybe<ResolversTypes['MediaTrend']>,
    ParentType,
    ContextType,
    Partial<Types.QueryMediaTrendArgs>
  >
  AiringSchedule: Resolver<
    Types.Maybe<ResolversTypes['AiringSchedule']>,
    ParentType,
    ContextType,
    Partial<Types.QueryAiringScheduleArgs>
  >
  Character: Resolver<
    Types.Maybe<ResolversTypes['Character']>,
    ParentType,
    ContextType,
    Partial<Types.QueryCharacterArgs>
  >
  Staff: Resolver<
    Types.Maybe<ResolversTypes['Staff']>,
    ParentType,
    ContextType,
    Partial<Types.QueryStaffArgs>
  >
  MediaList: Resolver<
    Types.Maybe<ResolversTypes['MediaList']>,
    ParentType,
    ContextType,
    Partial<Types.QueryMediaListArgs>
  >
  MediaListCollection: Resolver<
    Types.Maybe<ResolversTypes['MediaListCollection']>,
    ParentType,
    ContextType,
    Partial<Types.QueryMediaListCollectionArgs>
  >
  GenreCollection: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  MediaTagCollection: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaTag']>>>,
    ParentType,
    ContextType,
    Partial<Types.QueryMediaTagCollectionArgs>
  >
  User: Resolver<
    Types.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<Types.QueryUserArgs>
  >
  Viewer: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  Notification: Resolver<
    Types.Maybe<ResolversTypes['NotificationUnion']>,
    ParentType,
    ContextType,
    Partial<Types.QueryNotificationArgs>
  >
  Studio: Resolver<
    Types.Maybe<ResolversTypes['Studio']>,
    ParentType,
    ContextType,
    Partial<Types.QueryStudioArgs>
  >
  Review: Resolver<
    Types.Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    Partial<Types.QueryReviewArgs>
  >
  Activity: Resolver<
    Types.Maybe<ResolversTypes['ActivityUnion']>,
    ParentType,
    ContextType,
    Partial<Types.QueryActivityArgs>
  >
  ActivityReply: Resolver<
    Types.Maybe<ResolversTypes['ActivityReply']>,
    ParentType,
    ContextType,
    Partial<Types.QueryActivityReplyArgs>
  >
  Following: Resolver<
    Types.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<Types.QueryFollowingArgs, 'userId'>
  >
  Follower: Resolver<
    Types.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<Types.QueryFollowerArgs, 'userId'>
  >
  Thread: Resolver<
    Types.Maybe<ResolversTypes['Thread']>,
    ParentType,
    ContextType,
    Partial<Types.QueryThreadArgs>
  >
  ThreadComment: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ThreadComment']>>>,
    ParentType,
    ContextType,
    Partial<Types.QueryThreadCommentArgs>
  >
  Recommendation: Resolver<
    Types.Maybe<ResolversTypes['Recommendation']>,
    ParentType,
    ContextType,
    Partial<Types.QueryRecommendationArgs>
  >
  Like: Resolver<
    Types.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<Types.QueryLikeArgs>
  >
  Markdown: Resolver<
    Types.Maybe<ResolversTypes['ParsedMarkdown']>,
    ParentType,
    ContextType,
    RequireFields<Types.QueryMarkdownArgs, 'markdown'>
  >
  AniChartUser: Resolver<Types.Maybe<ResolversTypes['AniChartUser']>, ParentType, ContextType>
  SiteStatistics: Resolver<Types.Maybe<ResolversTypes['SiteStatistics']>, ParentType, ContextType>
  ExternalLinkSourceCollection: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaExternalLink']>>>,
    ParentType,
    ContextType,
    Partial<Types.QueryExternalLinkSourceCollectionArgs>
  >
}

export type PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page'],
> = {
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  users: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageUsersArgs>
  >
  media: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Media']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageMediaArgs>
  >
  characters: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Character']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageCharactersArgs>
  >
  staff: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Staff']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageStaffArgs>
  >
  studios: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Studio']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageStudiosArgs>
  >
  mediaList: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaList']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageMediaListArgs>
  >
  airingSchedules: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['AiringSchedule']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageAiringSchedulesArgs>
  >
  mediaTrends: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaTrend']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageMediaTrendsArgs>
  >
  notifications: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['NotificationUnion']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageNotificationsArgs>
  >
  followers: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<Types.PageFollowersArgs, 'userId'>
  >
  following: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<Types.PageFollowingArgs, 'userId'>
  >
  activities: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityUnion']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageActivitiesArgs>
  >
  activityReplies: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityReply']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageActivityRepliesArgs>
  >
  threads: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Thread']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageThreadsArgs>
  >
  threadComments: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ThreadComment']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageThreadCommentsArgs>
  >
  reviews: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageReviewsArgs>
  >
  recommendations: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Recommendation']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageRecommendationsArgs>
  >
  likes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    Partial<Types.PageLikesArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  total: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  perPage: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  currentPage: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastPage: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  hasNextPage: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>
  about: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.UserAboutArgs>
  >
  avatar: Resolver<Types.Maybe<ResolversTypes['UserAvatar']>, ParentType, ContextType>
  bannerImage: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isFollowing: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isFollower: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isBlocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  bans: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  options: Resolver<Types.Maybe<ResolversTypes['UserOptions']>, ParentType, ContextType>
  mediaListOptions: Resolver<
    Types.Maybe<ResolversTypes['MediaListOptions']>,
    ParentType,
    ContextType
  >
  favourites: Resolver<
    Types.Maybe<ResolversTypes['Favourites']>,
    ParentType,
    ContextType,
    Partial<Types.UserFavouritesArgs>
  >
  statistics: Resolver<Types.Maybe<ResolversTypes['UserStatisticTypes']>, ParentType, ContextType>
  unreadNotificationCount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  donatorTier: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  donatorBadge: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  moderatorRoles: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ModRole']>>>,
    ParentType,
    ContextType
  >
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  updatedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  stats: Resolver<Types.Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>
  moderatorStatus: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  previousNames: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserPreviousName']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserAvatarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserAvatar'] = ResolversParentTypes['UserAvatar'],
> = {
  large: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  medium: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json'
}

export type UserOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserOptions'] = ResolversParentTypes['UserOptions'],
> = {
  titleLanguage: Resolver<Types.Maybe<ResolversTypes['UserTitleLanguage']>, ParentType, ContextType>
  displayAdultContent: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  airingNotifications: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  profileColor: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  notificationOptions: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['NotificationOption']>>>,
    ParentType,
    ContextType
  >
  timezone: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  activityMergeTime: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  staffNameLanguage: Resolver<
    Types.Maybe<ResolversTypes['UserStaffNameLanguage']>,
    ParentType,
    ContextType
  >
  restrictMessagesToFollowing: Resolver<
    Types.Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  disabledListActivity: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ListActivityOption']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type NotificationOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationOption'] = ResolversParentTypes['NotificationOption'],
> = {
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  enabled: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ListActivityOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListActivityOption'] = ResolversParentTypes['ListActivityOption'],
> = {
  disabled: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaListOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaListOptions'] = ResolversParentTypes['MediaListOptions'],
> = {
  scoreFormat: Resolver<Types.Maybe<ResolversTypes['ScoreFormat']>, ParentType, ContextType>
  rowOrder: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  useLegacyLists: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  animeList: Resolver<Types.Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>
  mangaList: Resolver<Types.Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>
  sharedTheme: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  sharedThemeEnabled: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaListTypeOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaListTypeOptions'] = ResolversParentTypes['MediaListTypeOptions'],
> = {
  sectionOrder: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  splitCompletedSectionByFormat: Resolver<
    Types.Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  theme: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  customLists: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  advancedScoring: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  advancedScoringEnabled: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FavouritesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Favourites'] = ResolversParentTypes['Favourites'],
> = {
  anime: Resolver<
    Types.Maybe<ResolversTypes['MediaConnection']>,
    ParentType,
    ContextType,
    Partial<Types.FavouritesAnimeArgs>
  >
  manga: Resolver<
    Types.Maybe<ResolversTypes['MediaConnection']>,
    ParentType,
    ContextType,
    Partial<Types.FavouritesMangaArgs>
  >
  characters: Resolver<
    Types.Maybe<ResolversTypes['CharacterConnection']>,
    ParentType,
    ContextType,
    Partial<Types.FavouritesCharactersArgs>
  >
  staff: Resolver<
    Types.Maybe<ResolversTypes['StaffConnection']>,
    ParentType,
    ContextType,
    Partial<Types.FavouritesStaffArgs>
  >
  studios: Resolver<
    Types.Maybe<ResolversTypes['StudioConnection']>,
    ParentType,
    ContextType,
    Partial<Types.FavouritesStudiosArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  relationType: Resolver<
    Types.Maybe<ResolversTypes['MediaRelation']>,
    ParentType,
    ContextType,
    Partial<Types.MediaEdgeRelationTypeArgs>
  >
  isMainStudio: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  characters: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Character']>>>,
    ParentType,
    ContextType
  >
  characterRole: Resolver<Types.Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>
  characterName: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  roleNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dubGroup: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  staffRole: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  voiceActors: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Staff']>>>,
    ParentType,
    ContextType,
    Partial<Types.MediaEdgeVoiceActorsArgs>
  >
  voiceActorRoles: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffRoleType']>>>,
    ParentType,
    ContextType,
    Partial<Types.MediaEdgeVoiceActorRolesArgs>
  >
  favouriteOrder: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  idMal: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  title: Resolver<Types.Maybe<ResolversTypes['MediaTitle']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>
  format: Resolver<Types.Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>
  status: Resolver<
    Types.Maybe<ResolversTypes['MediaStatus']>,
    ParentType,
    ContextType,
    Partial<Types.MediaStatusArgs>
  >
  description: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.MediaDescriptionArgs>
  >
  startDate: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  endDate: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  season: Resolver<Types.Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>
  seasonYear: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  seasonInt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  episodes: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  duration: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  chapters: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  volumes: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  countryOfOrigin: Resolver<Types.Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>
  isLicensed: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  source: Resolver<
    Types.Maybe<ResolversTypes['MediaSource']>,
    ParentType,
    ContextType,
    Partial<Types.MediaSourceArgs>
  >
  hashtag: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  trailer: Resolver<Types.Maybe<ResolversTypes['MediaTrailer']>, ParentType, ContextType>
  updatedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  coverImage: Resolver<Types.Maybe<ResolversTypes['MediaCoverImage']>, ParentType, ContextType>
  bannerImage: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  genres: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  synonyms: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  averageScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  popularity: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  isLocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  trending: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  favourites: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  tags: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaTag']>>>,
    ParentType,
    ContextType
  >
  relations: Resolver<Types.Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType>
  characters: Resolver<
    Types.Maybe<ResolversTypes['CharacterConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaCharactersArgs>
  >
  staff: Resolver<
    Types.Maybe<ResolversTypes['StaffConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaStaffArgs>
  >
  studios: Resolver<
    Types.Maybe<ResolversTypes['StudioConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaStudiosArgs>
  >
  isFavourite: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isFavouriteBlocked: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isAdult: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  nextAiringEpisode: Resolver<
    Types.Maybe<ResolversTypes['AiringSchedule']>,
    ParentType,
    ContextType
  >
  airingSchedule: Resolver<
    Types.Maybe<ResolversTypes['AiringScheduleConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaAiringScheduleArgs>
  >
  trends: Resolver<
    Types.Maybe<ResolversTypes['MediaTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaTrendsArgs>
  >
  externalLinks: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaExternalLink']>>>,
    ParentType,
    ContextType
  >
  streamingEpisodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaStreamingEpisode']>>>,
    ParentType,
    ContextType
  >
  rankings: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaRank']>>>,
    ParentType,
    ContextType
  >
  mediaListEntry: Resolver<Types.Maybe<ResolversTypes['MediaList']>, ParentType, ContextType>
  reviews: Resolver<
    Types.Maybe<ResolversTypes['ReviewConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaReviewsArgs>
  >
  recommendations: Resolver<
    Types.Maybe<ResolversTypes['RecommendationConnection']>,
    ParentType,
    ContextType,
    Partial<Types.MediaRecommendationsArgs>
  >
  stats: Resolver<Types.Maybe<ResolversTypes['MediaStats']>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  autoCreateForumThread: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isRecommendationBlocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isReviewBlocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  modNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaTitle'] = ResolversParentTypes['MediaTitle'],
> = {
  romaji: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.MediaTitleRomajiArgs>
  >
  english: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.MediaTitleEnglishArgs>
  >
  native: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.MediaTitleNativeArgs>
  >
  userPreferred: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FuzzyDateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FuzzyDate'] = ResolversParentTypes['FuzzyDate'],
> = {
  year: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  month: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  day: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CountryCodeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode'
}

export type MediaTrailerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaTrailer'] = ResolversParentTypes['MediaTrailer'],
> = {
  id: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  site: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  thumbnail: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaCoverImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaCoverImage'] = ResolversParentTypes['MediaCoverImage'],
> = {
  extraLarge: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  large: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  medium: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  color: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaTag'] = ResolversParentTypes['MediaTag'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  category: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  rank: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  isGeneralSpoiler: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isMediaSpoiler: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isAdult: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  userId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterConnection'] = ResolversParentTypes['CharacterConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['CharacterEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Character']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterEdge'] = ResolversParentTypes['CharacterEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  role: Resolver<Types.Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>
  name: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  voiceActors: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Staff']>>>,
    ParentType,
    ContextType,
    Partial<Types.CharacterEdgeVoiceActorsArgs>
  >
  voiceActorRoles: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffRoleType']>>>,
    ParentType,
    ContextType,
    Partial<Types.CharacterEdgeVoiceActorRolesArgs>
  >
  media: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>
  favouriteOrder: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name: Resolver<Types.Maybe<ResolversTypes['CharacterName']>, ParentType, ContextType>
  image: Resolver<Types.Maybe<ResolversTypes['CharacterImage']>, ParentType, ContextType>
  description: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.CharacterDescriptionArgs>
  >
  gender: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dateOfBirth: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  age: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bloodType: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isFavourite: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isFavouriteBlocked: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  media: Resolver<
    Types.Maybe<ResolversTypes['MediaConnection']>,
    ParentType,
    ContextType,
    Partial<Types.CharacterMediaArgs>
  >
  updatedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  favourites: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  modNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterName'] = ResolversParentTypes['CharacterName'],
> = {
  first: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  middle: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  last: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  full: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  native: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  alternative: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  alternativeSpoiler: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  userPreferred: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterImage'] = ResolversParentTypes['CharacterImage'],
> = {
  large: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  medium: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Staff'] = ResolversParentTypes['Staff'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name: Resolver<Types.Maybe<ResolversTypes['StaffName']>, ParentType, ContextType>
  language: Resolver<Types.Maybe<ResolversTypes['StaffLanguage']>, ParentType, ContextType>
  languageV2: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  image: Resolver<Types.Maybe<ResolversTypes['StaffImage']>, ParentType, ContextType>
  description: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.StaffDescriptionArgs>
  >
  primaryOccupations: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  gender: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dateOfBirth: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  dateOfDeath: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  age: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  yearsActive: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Int']>>>,
    ParentType,
    ContextType
  >
  homeTown: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bloodType: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isFavourite: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isFavouriteBlocked: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  staffMedia: Resolver<
    Types.Maybe<ResolversTypes['MediaConnection']>,
    ParentType,
    ContextType,
    Partial<Types.StaffStaffMediaArgs>
  >
  characters: Resolver<
    Types.Maybe<ResolversTypes['CharacterConnection']>,
    ParentType,
    ContextType,
    Partial<Types.StaffCharactersArgs>
  >
  characterMedia: Resolver<
    Types.Maybe<ResolversTypes['MediaConnection']>,
    ParentType,
    ContextType,
    Partial<Types.StaffCharacterMediaArgs>
  >
  updatedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  staff: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  submitter: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  submissionStatus: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  submissionNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  favourites: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  modNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffName'] = ResolversParentTypes['StaffName'],
> = {
  first: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  middle: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  last: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  full: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  native: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  alternative: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  userPreferred: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffImage'] = ResolversParentTypes['StaffImage'],
> = {
  large: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  medium: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffRoleTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffRoleType'] = ResolversParentTypes['StaffRoleType'],
> = {
  voiceActor: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  roleNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dubGroup: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffConnection'] = ResolversParentTypes['StaffConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffEdge'] = ResolversParentTypes['StaffEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  role: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  favouriteOrder: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StudioConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudioConnection'] = ResolversParentTypes['StudioConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StudioEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Studio']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StudioEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudioEdge'] = ResolversParentTypes['StudioEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['Studio']>, ParentType, ContextType>
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  isMain: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  favouriteOrder: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StudioResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Studio'] = ResolversParentTypes['Studio'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isAnimationStudio: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  media: Resolver<
    Types.Maybe<ResolversTypes['MediaConnection']>,
    ParentType,
    ContextType,
    Partial<Types.StudioMediaArgs>
  >
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isFavourite: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  favourites: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AiringScheduleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AiringSchedule'] = ResolversParentTypes['AiringSchedule'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  airingAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  timeUntilAiring: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  episode: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AiringScheduleConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AiringScheduleConnection'] = ResolversParentTypes['AiringScheduleConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['AiringScheduleEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['AiringSchedule']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AiringScheduleEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AiringScheduleEdge'] = ResolversParentTypes['AiringScheduleEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaTrendConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaTrendConnection'] = ResolversParentTypes['MediaTrendConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaTrendEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaTrend']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaTrendEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaTrendEdge'] = ResolversParentTypes['MediaTrendEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaTrendResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaTrend'] = ResolversParentTypes['MediaTrend'],
> = {
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  date: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  trending: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  averageScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  popularity: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  inProgress: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  releasing: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  episode: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaExternalLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaExternalLink'] = ResolversParentTypes['MediaExternalLink'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  url: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  site: Resolver<ResolversTypes['String'], ParentType, ContextType>
  siteId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['ExternalLinkType']>, ParentType, ContextType>
  language: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  color: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  icon: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  notes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isDisabled: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaStreamingEpisodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaStreamingEpisode'] = ResolversParentTypes['MediaStreamingEpisode'],
> = {
  title: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  thumbnail: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  site: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaRankResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaRank'] = ResolversParentTypes['MediaRank'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  rank: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<ResolversTypes['MediaRankType'], ParentType, ContextType>
  format: Resolver<ResolversTypes['MediaFormat'], ParentType, ContextType>
  year: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  season: Resolver<Types.Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>
  allTime: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  context: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaList'] = ResolversParentTypes['MediaList'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>
  score: Resolver<
    Types.Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    Partial<Types.MediaListScoreArgs>
  >
  progress: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  progressVolumes: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  repeat: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  priority: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  private: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  notes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hiddenFromStatusLists: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  customLists: Resolver<
    Types.Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<Types.MediaListCustomListsArgs>
  >
  advancedScores: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  startedAt: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  completedAt: Resolver<Types.Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>
  updatedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ReviewConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewConnection'] = ResolversParentTypes['ReviewConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ReviewEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ReviewEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewEdge'] = ResolversParentTypes['ReviewEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['Review']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaType: Resolver<Types.Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>
  summary: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  body: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.ReviewBodyArgs>
  >
  rating: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  ratingAmount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  userRating: Resolver<Types.Maybe<ResolversTypes['ReviewRating']>, ParentType, ContextType>
  score: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  private: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  updatedAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RecommendationConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RecommendationConnection'] = ResolversParentTypes['RecommendationConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['RecommendationEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Recommendation']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RecommendationEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RecommendationEdge'] = ResolversParentTypes['RecommendationEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RecommendationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Recommendation'] = ResolversParentTypes['Recommendation'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  rating: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  userRating: Resolver<Types.Maybe<ResolversTypes['RecommendationRating']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  mediaRecommendation: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaStats'] = ResolversParentTypes['MediaStats'],
> = {
  scoreDistribution: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ScoreDistribution']>>>,
    ParentType,
    ContextType
  >
  statusDistribution: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StatusDistribution']>>>,
    ParentType,
    ContextType
  >
  airingProgression: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['AiringProgression']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ScoreDistributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ScoreDistribution'] = ResolversParentTypes['ScoreDistribution'],
> = {
  score: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StatusDistributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StatusDistribution'] = ResolversParentTypes['StatusDistribution'],
> = {
  status: Resolver<Types.Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AiringProgressionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AiringProgression'] = ResolversParentTypes['AiringProgression'],
> = {
  episode: Resolver<Types.Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  score: Resolver<Types.Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  watching: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStatisticTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStatisticTypes'] = ResolversParentTypes['UserStatisticTypes'],
> = {
  anime: Resolver<Types.Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>
  manga: Resolver<Types.Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStatistics'] = ResolversParentTypes['UserStatistics'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  standardDeviation: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  episodesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  volumesRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  formats: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserFormatStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsFormatsArgs>
  >
  statuses: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserStatusStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsStatusesArgs>
  >
  scores: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserScoreStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsScoresArgs>
  >
  lengths: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserLengthStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsLengthsArgs>
  >
  releaseYears: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserReleaseYearStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsReleaseYearsArgs>
  >
  startYears: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserStartYearStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsStartYearsArgs>
  >
  genres: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserGenreStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsGenresArgs>
  >
  tags: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserTagStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsTagsArgs>
  >
  countries: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserCountryStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsCountriesArgs>
  >
  voiceActors: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserVoiceActorStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsVoiceActorsArgs>
  >
  staff: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserStaffStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsStaffArgs>
  >
  studios: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserStudioStatistic']>>>,
    ParentType,
    ContextType,
    Partial<Types.UserStatisticsStudiosArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserFormatStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserFormatStatistic'] = ResolversParentTypes['UserFormatStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  format: Resolver<Types.Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStatusStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStatusStatistic'] = ResolversParentTypes['UserStatusStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserScoreStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserScoreStatistic'] = ResolversParentTypes['UserScoreStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  score: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserLengthStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserLengthStatistic'] = ResolversParentTypes['UserLengthStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  length: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserReleaseYearStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserReleaseYearStatistic'] = ResolversParentTypes['UserReleaseYearStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  releaseYear: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStartYearStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStartYearStatistic'] = ResolversParentTypes['UserStartYearStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  startYear: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserGenreStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserGenreStatistic'] = ResolversParentTypes['UserGenreStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  genre: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserTagStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserTagStatistic'] = ResolversParentTypes['UserTagStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  tag: Resolver<Types.Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserCountryStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserCountryStatistic'] = ResolversParentTypes['UserCountryStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  country: Resolver<Types.Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserVoiceActorStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserVoiceActorStatistic'] = ResolversParentTypes['UserVoiceActorStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  voiceActor: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  characterIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStaffStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStaffStatistic'] = ResolversParentTypes['UserStaffStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  staff: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStudioStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStudioStatistic'] = ResolversParentTypes['UserStudioStatistic'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  meanScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  minutesWatched: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  chaptersRead: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mediaIds: Resolver<Array<Types.Maybe<ResolversTypes['Int']>>, ParentType, ContextType>
  studio: Resolver<Types.Maybe<ResolversTypes['Studio']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats'],
> = {
  watchedTime: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  chaptersRead: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activityHistory: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['UserActivityHistory']>>>,
    ParentType,
    ContextType
  >
  animeStatusDistribution: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StatusDistribution']>>>,
    ParentType,
    ContextType
  >
  mangaStatusDistribution: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StatusDistribution']>>>,
    ParentType,
    ContextType
  >
  animeScoreDistribution: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ScoreDistribution']>>>,
    ParentType,
    ContextType
  >
  mangaScoreDistribution: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ScoreDistribution']>>>,
    ParentType,
    ContextType
  >
  animeListScores: Resolver<Types.Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>
  mangaListScores: Resolver<Types.Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>
  favouredGenresOverview: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['GenreStats']>>>,
    ParentType,
    ContextType
  >
  favouredGenres: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['GenreStats']>>>,
    ParentType,
    ContextType
  >
  favouredTags: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['TagStats']>>>,
    ParentType,
    ContextType
  >
  favouredActors: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffStats']>>>,
    ParentType,
    ContextType
  >
  favouredStaff: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffStats']>>>,
    ParentType,
    ContextType
  >
  favouredStudios: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StudioStats']>>>,
    ParentType,
    ContextType
  >
  favouredYears: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['YearStats']>>>,
    ParentType,
    ContextType
  >
  favouredFormats: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['FormatStats']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserActivityHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserActivityHistory'] = ResolversParentTypes['UserActivityHistory'],
> = {
  date: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  level: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ListScoreStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListScoreStats'] = ResolversParentTypes['ListScoreStats'],
> = {
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  standardDeviation: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GenreStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GenreStats'] = ResolversParentTypes['GenreStats'],
> = {
  genre: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  timeWatched: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TagStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TagStats'] = ResolversParentTypes['TagStats'],
> = {
  tag: Resolver<Types.Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  timeWatched: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffStats'] = ResolversParentTypes['StaffStats'],
> = {
  staff: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  timeWatched: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StudioStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudioStats'] = ResolversParentTypes['StudioStats'],
> = {
  studio: Resolver<Types.Maybe<ResolversTypes['Studio']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  timeWatched: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type YearStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['YearStats'] = ResolversParentTypes['YearStats'],
> = {
  year: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  meanScore: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FormatStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FormatStats'] = ResolversParentTypes['FormatStats'],
> = {
  format: Resolver<Types.Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>
  amount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserPreviousNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserPreviousName'] = ResolversParentTypes['UserPreviousName'],
> = {
  name: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  updatedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FuzzyDateIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['FuzzyDateInt'], any> {
  name: 'FuzzyDateInt'
}

export type NotificationUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationUnion'] = ResolversParentTypes['NotificationUnion'],
> = {
  __resolveType: TypeResolveFn<
    | 'AiringNotification'
    | 'FollowingNotification'
    | 'ActivityMessageNotification'
    | 'ActivityMentionNotification'
    | 'ActivityReplyNotification'
    | 'ActivityReplySubscribedNotification'
    | 'ActivityLikeNotification'
    | 'ActivityReplyLikeNotification'
    | 'ThreadCommentMentionNotification'
    | 'ThreadCommentReplyNotification'
    | 'ThreadCommentSubscribedNotification'
    | 'ThreadCommentLikeNotification'
    | 'ThreadLikeNotification'
    | 'RelatedMediaAdditionNotification'
    | 'MediaDataChangeNotification'
    | 'MediaMergeNotification'
    | 'MediaDeletionNotification',
    ParentType,
    ContextType
  >
}

export type AiringNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AiringNotification'] = ResolversParentTypes['AiringNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  animeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  episode: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  contexts: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FollowingNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FollowingNotification'] = ResolversParentTypes['FollowingNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityMessageNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityMessageNotification'] = ResolversParentTypes['ActivityMessageNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  activityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  message: Resolver<Types.Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MessageActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageActivity'] = ResolversParentTypes['MessageActivity'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  recipientId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  messengerId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>
  replyCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  message: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.MessageActivityMessageArgs>
  >
  isLocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isSubscribed: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  likeCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isLiked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isPrivate: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  recipient: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  messenger: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  replies: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityReply']>>>,
    ParentType,
    ContextType
  >
  likes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityReplyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityReply'] = ResolversParentTypes['ActivityReply'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activityId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  text: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.ActivityReplyTextArgs>
  >
  likeCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isLiked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  likes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityMentionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityMentionNotification'] = ResolversParentTypes['ActivityMentionNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  activityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activity: Resolver<Types.Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityUnion'] = ResolversParentTypes['ActivityUnion'],
> = {
  __resolveType: TypeResolveFn<
    'TextActivity' | 'ListActivity' | 'MessageActivity',
    ParentType,
    ContextType
  >
}

export type TextActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TextActivity'] = ResolversParentTypes['TextActivity'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>
  replyCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  text: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.TextActivityTextArgs>
  >
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isLocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isSubscribed: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  likeCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isLiked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isPinned: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  replies: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityReply']>>>,
    ParentType,
    ContextType
  >
  likes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ListActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListActivity'] = ResolversParentTypes['ListActivity'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>
  replyCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  progress: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isLocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isSubscribed: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  likeCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isLiked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isPinned: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  replies: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityReply']>>>,
    ParentType,
    ContextType
  >
  likes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityReplyNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityReplyNotification'] = ResolversParentTypes['ActivityReplyNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  activityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activity: Resolver<Types.Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityReplySubscribedNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityReplySubscribedNotification'] = ResolversParentTypes['ActivityReplySubscribedNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  activityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activity: Resolver<Types.Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLikeNotification'] = ResolversParentTypes['ActivityLikeNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  activityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activity: Resolver<Types.Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityReplyLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityReplyLikeNotification'] = ResolversParentTypes['ActivityReplyLikeNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  activityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  activity: Resolver<Types.Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadCommentMentionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadCommentMentionNotification'] = ResolversParentTypes['ThreadCommentMentionNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  commentId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  thread: Resolver<Types.Maybe<ResolversTypes['Thread']>, ParentType, ContextType>
  comment: Resolver<Types.Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  title: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  body: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.ThreadBodyArgs>
  >
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  replyUserId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  replyCommentId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  replyCount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  viewCount: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  isLocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isSticky: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isSubscribed: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  likeCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isLiked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  repliedAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  updatedAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  replyUser: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  likes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  categories: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ThreadCategory']>>>,
    ParentType,
    ContextType
  >
  mediaCategories: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Media']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadCategory'] = ResolversParentTypes['ThreadCategory'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadComment'] = ResolversParentTypes['ThreadComment'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  threadId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  comment: Resolver<
    Types.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<Types.ThreadCommentCommentArgs>
  >
  likeCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isLiked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  siteUrl: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  updatedAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  thread: Resolver<Types.Maybe<ResolversTypes['Thread']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  likes: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  childComments: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  isLocked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadCommentReplyNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadCommentReplyNotification'] = ResolversParentTypes['ThreadCommentReplyNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  commentId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  thread: Resolver<Types.Maybe<ResolversTypes['Thread']>, ParentType, ContextType>
  comment: Resolver<Types.Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadCommentSubscribedNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadCommentSubscribedNotification'] = ResolversParentTypes['ThreadCommentSubscribedNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  commentId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  thread: Resolver<Types.Maybe<ResolversTypes['Thread']>, ParentType, ContextType>
  comment: Resolver<Types.Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadCommentLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadCommentLikeNotification'] = ResolversParentTypes['ThreadCommentLikeNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  commentId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  thread: Resolver<Types.Maybe<ResolversTypes['Thread']>, ParentType, ContextType>
  comment: Resolver<Types.Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ThreadLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ThreadLikeNotification'] = ResolversParentTypes['ThreadLikeNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  threadId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  thread: Resolver<Types.Maybe<ResolversTypes['Thread']>, ParentType, ContextType>
  comment: Resolver<Types.Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RelatedMediaAdditionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RelatedMediaAdditionNotification'] = ResolversParentTypes['RelatedMediaAdditionNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaDataChangeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaDataChangeNotification'] = ResolversParentTypes['MediaDataChangeNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reason: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaMergeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaMergeNotification'] = ResolversParentTypes['MediaMergeNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  mediaId: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  deletedMediaTitles: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reason: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaDeletionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaDeletionNotification'] = ResolversParentTypes['MediaDeletionNotification'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>
  deletedMediaTitle: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  context: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reason: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaListCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaListCollection'] = ResolversParentTypes['MediaListCollection'],
> = {
  lists: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaListGroup']>>>,
    ParentType,
    ContextType
  >
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  hasNextChunk: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  statusLists: Resolver<
    Types.Maybe<Array<Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaList']>>>>>,
    ParentType,
    ContextType,
    Partial<Types.MediaListCollectionStatusListsArgs>
  >
  customLists: Resolver<
    Types.Maybe<Array<Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaList']>>>>>,
    ParentType,
    ContextType,
    Partial<Types.MediaListCollectionCustomListsArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaListGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaListGroup'] = ResolversParentTypes['MediaListGroup'],
> = {
  entries: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaList']>>>,
    ParentType,
    ContextType
  >
  name: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isCustomList: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isSplitCompletedList: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ParsedMarkdownResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ParsedMarkdown'] = ResolversParentTypes['ParsedMarkdown'],
> = {
  html: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AniChartUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AniChartUser'] = ResolversParentTypes['AniChartUser'],
> = {
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  settings: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  highlights: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SiteStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteStatistics'] = ResolversParentTypes['SiteStatistics'],
> = {
  users: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsUsersArgs>
  >
  anime: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsAnimeArgs>
  >
  manga: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsMangaArgs>
  >
  characters: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsCharactersArgs>
  >
  staff: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsStaffArgs>
  >
  studios: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsStudiosArgs>
  >
  reviews: Resolver<
    Types.Maybe<ResolversTypes['SiteTrendConnection']>,
    ParentType,
    ContextType,
    Partial<Types.SiteStatisticsReviewsArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SiteTrendConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteTrendConnection'] = ResolversParentTypes['SiteTrendConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['SiteTrendEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['SiteTrend']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SiteTrendEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteTrendEdge'] = ResolversParentTypes['SiteTrendEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['SiteTrend']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SiteTrendResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteTrend'] = ResolversParentTypes['SiteTrend'],
> = {
  date: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  change: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  UpdateUser: Resolver<
    Types.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<Types.MutationUpdateUserArgs>
  >
  SaveMediaListEntry: Resolver<
    Types.Maybe<ResolversTypes['MediaList']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveMediaListEntryArgs>
  >
  UpdateMediaListEntries: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaList']>>>,
    ParentType,
    ContextType,
    Partial<Types.MutationUpdateMediaListEntriesArgs>
  >
  DeleteMediaListEntry: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteMediaListEntryArgs>
  >
  DeleteCustomList: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteCustomListArgs>
  >
  SaveTextActivity: Resolver<
    Types.Maybe<ResolversTypes['TextActivity']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveTextActivityArgs>
  >
  SaveMessageActivity: Resolver<
    Types.Maybe<ResolversTypes['MessageActivity']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveMessageActivityArgs>
  >
  SaveListActivity: Resolver<
    Types.Maybe<ResolversTypes['ListActivity']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveListActivityArgs>
  >
  DeleteActivity: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteActivityArgs>
  >
  ToggleActivityPin: Resolver<
    Types.Maybe<ResolversTypes['ActivityUnion']>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleActivityPinArgs>
  >
  ToggleActivitySubscription: Resolver<
    Types.Maybe<ResolversTypes['ActivityUnion']>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleActivitySubscriptionArgs>
  >
  SaveActivityReply: Resolver<
    Types.Maybe<ResolversTypes['ActivityReply']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveActivityReplyArgs>
  >
  DeleteActivityReply: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteActivityReplyArgs>
  >
  ToggleLike: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleLikeArgs>
  >
  ToggleLikeV2: Resolver<
    Types.Maybe<ResolversTypes['LikeableUnion']>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleLikeV2Args>
  >
  ToggleFollow: Resolver<
    Types.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleFollowArgs>
  >
  ToggleFavourite: Resolver<
    Types.Maybe<ResolversTypes['Favourites']>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleFavouriteArgs>
  >
  UpdateFavouriteOrder: Resolver<
    Types.Maybe<ResolversTypes['Favourites']>,
    ParentType,
    ContextType,
    Partial<Types.MutationUpdateFavouriteOrderArgs>
  >
  SaveReview: Resolver<
    Types.Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveReviewArgs>
  >
  DeleteReview: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteReviewArgs>
  >
  RateReview: Resolver<
    Types.Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    Partial<Types.MutationRateReviewArgs>
  >
  SaveRecommendation: Resolver<
    Types.Maybe<ResolversTypes['Recommendation']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveRecommendationArgs>
  >
  SaveThread: Resolver<
    Types.Maybe<ResolversTypes['Thread']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveThreadArgs>
  >
  DeleteThread: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteThreadArgs>
  >
  ToggleThreadSubscription: Resolver<
    Types.Maybe<ResolversTypes['Thread']>,
    ParentType,
    ContextType,
    Partial<Types.MutationToggleThreadSubscriptionArgs>
  >
  SaveThreadComment: Resolver<
    Types.Maybe<ResolversTypes['ThreadComment']>,
    ParentType,
    ContextType,
    Partial<Types.MutationSaveThreadCommentArgs>
  >
  DeleteThreadComment: Resolver<
    Types.Maybe<ResolversTypes['Deleted']>,
    ParentType,
    ContextType,
    Partial<Types.MutationDeleteThreadCommentArgs>
  >
  UpdateAniChartSettings: Resolver<
    Types.Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<Types.MutationUpdateAniChartSettingsArgs>
  >
  UpdateAniChartHighlights: Resolver<
    Types.Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<Types.MutationUpdateAniChartHighlightsArgs>
  >
}

export type DeletedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Deleted'] = ResolversParentTypes['Deleted'],
> = {
  deleted: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LikeableUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LikeableUnion'] = ResolversParentTypes['LikeableUnion'],
> = {
  __resolveType: TypeResolveFn<
    | 'ListActivity'
    | 'TextActivity'
    | 'MessageActivity'
    | 'ActivityReply'
    | 'Thread'
    | 'ThreadComment',
    ParentType,
    ContextType
  >
}

export type CharacterSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterSubmission'] = ResolversParentTypes['CharacterSubmission'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  character: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  submission: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  submitter: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  assignee: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>
  notes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  source: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  locked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterSubmissionConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterSubmissionConnection'] = ResolversParentTypes['CharacterSubmissionConnection'],
> = {
  edges: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['CharacterSubmissionEdge']>>>,
    ParentType,
    ContextType
  >
  nodes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['CharacterSubmission']>>>,
    ParentType,
    ContextType
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CharacterSubmissionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CharacterSubmissionEdge'] = ResolversParentTypes['CharacterSubmissionEdge'],
> = {
  node: Resolver<Types.Maybe<ResolversTypes['CharacterSubmission']>, ParentType, ContextType>
  role: Resolver<Types.Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>
  voiceActors: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Staff']>>>,
    ParentType,
    ContextType
  >
  submittedVoiceActors: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffSubmission']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StaffSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StaffSubmission'] = ResolversParentTypes['StaffSubmission'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  staff: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  submission: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  submitter: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  assignee: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>
  notes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  source: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  locked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InternalPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InternalPage'] = ResolversParentTypes['InternalPage'],
> = {
  mediaSubmissions: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaSubmission']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageMediaSubmissionsArgs>
  >
  characterSubmissions: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['CharacterSubmission']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageCharacterSubmissionsArgs>
  >
  staffSubmissions: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['StaffSubmission']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageStaffSubmissionsArgs>
  >
  revisionHistory: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['RevisionHistory']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageRevisionHistoryArgs>
  >
  reports: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Report']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageReportsArgs>
  >
  modActions: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ModAction']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageModActionsArgs>
  >
  userBlockSearch: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageUserBlockSearchArgs>
  >
  pageInfo: Resolver<Types.Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  users: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageUsersArgs>
  >
  media: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Media']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageMediaArgs>
  >
  characters: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Character']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageCharactersArgs>
  >
  staff: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Staff']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageStaffArgs>
  >
  studios: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Studio']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageStudiosArgs>
  >
  mediaList: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaList']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageMediaListArgs>
  >
  airingSchedules: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['AiringSchedule']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageAiringSchedulesArgs>
  >
  mediaTrends: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaTrend']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageMediaTrendsArgs>
  >
  notifications: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['NotificationUnion']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageNotificationsArgs>
  >
  followers: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<Types.InternalPageFollowersArgs, 'userId'>
  >
  following: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<Types.InternalPageFollowingArgs, 'userId'>
  >
  activities: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityUnion']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageActivitiesArgs>
  >
  activityReplies: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ActivityReply']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageActivityRepliesArgs>
  >
  threads: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Thread']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageThreadsArgs>
  >
  threadComments: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['ThreadComment']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageThreadCommentsArgs>
  >
  reviews: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageReviewsArgs>
  >
  recommendations: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Recommendation']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageRecommendationsArgs>
  >
  likes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    Partial<Types.InternalPageLikesArgs>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaSubmission'] = ResolversParentTypes['MediaSubmission'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  submitter: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  assignee: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  status: Resolver<Types.Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>
  submitterStats: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  notes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  source: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  changes: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  locked: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  submission: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  characters: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaSubmissionComparison']>>>,
    ParentType,
    ContextType
  >
  staff: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaSubmissionComparison']>>>,
    ParentType,
    ContextType
  >
  studios: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaSubmissionComparison']>>>,
    ParentType,
    ContextType
  >
  relations: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaEdge']>>>,
    ParentType,
    ContextType
  >
  externalLinks: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['MediaSubmissionComparison']>>>,
    ParentType,
    ContextType
  >
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaSubmissionComparisonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaSubmissionComparison'] = ResolversParentTypes['MediaSubmissionComparison'],
> = {
  submission: Resolver<Types.Maybe<ResolversTypes['MediaSubmissionEdge']>, ParentType, ContextType>
  character: Resolver<Types.Maybe<ResolversTypes['MediaCharacter']>, ParentType, ContextType>
  staff: Resolver<Types.Maybe<ResolversTypes['StaffEdge']>, ParentType, ContextType>
  studio: Resolver<Types.Maybe<ResolversTypes['StudioEdge']>, ParentType, ContextType>
  externalLink: Resolver<Types.Maybe<ResolversTypes['MediaExternalLink']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaSubmissionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaSubmissionEdge'] = ResolversParentTypes['MediaSubmissionEdge'],
> = {
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  characterRole: Resolver<Types.Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>
  staffRole: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  roleNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dubGroup: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  characterName: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isMain: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  character: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  characterSubmission: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  voiceActor: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  voiceActorSubmission: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  staff: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  staffSubmission: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  studio: Resolver<Types.Maybe<ResolversTypes['Studio']>, ParentType, ContextType>
  externalLink: Resolver<Types.Maybe<ResolversTypes['MediaExternalLink']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaCharacterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MediaCharacter'] = ResolversParentTypes['MediaCharacter'],
> = {
  id: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  role: Resolver<Types.Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>
  roleNotes: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dubGroup: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  characterName: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  character: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  voiceActor: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RevisionHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RevisionHistory'] = ResolversParentTypes['RevisionHistory'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  action: Resolver<Types.Maybe<ResolversTypes['RevisionHistoryAction']>, ParentType, ContextType>
  changes: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  media: Resolver<Types.Maybe<ResolversTypes['Media']>, ParentType, ContextType>
  character: Resolver<Types.Maybe<ResolversTypes['Character']>, ParentType, ContextType>
  staff: Resolver<Types.Maybe<ResolversTypes['Staff']>, ParentType, ContextType>
  studio: Resolver<Types.Maybe<ResolversTypes['Studio']>, ParentType, ContextType>
  externalLink: Resolver<Types.Maybe<ResolversTypes['MediaExternalLink']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ReportResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  reporter: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  reported: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  reason: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  cleared: Resolver<Types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ModActionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ModAction'] = ResolversParentTypes['ModAction'],
> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  mod: Resolver<Types.Maybe<ResolversTypes['User']>, ParentType, ContextType>
  type: Resolver<Types.Maybe<ResolversTypes['ModActionType']>, ParentType, ContextType>
  objectId: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  objectType: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  data: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserModDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserModData'] = ResolversParentTypes['UserModData'],
> = {
  alts: Resolver<Types.Maybe<Array<Types.Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  bans: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  ip: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  counts: Resolver<Types.Maybe<ResolversTypes['Json']>, ParentType, ContextType>
  privacy: Resolver<Types.Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  email: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Query: QueryResolvers<ContextType>
  Page: PageResolvers<ContextType>
  PageInfo: PageInfoResolvers<ContextType>
  User: UserResolvers<ContextType>
  UserAvatar: UserAvatarResolvers<ContextType>
  Json: GraphQLScalarType
  UserOptions: UserOptionsResolvers<ContextType>
  NotificationOption: NotificationOptionResolvers<ContextType>
  ListActivityOption: ListActivityOptionResolvers<ContextType>
  MediaListOptions: MediaListOptionsResolvers<ContextType>
  MediaListTypeOptions: MediaListTypeOptionsResolvers<ContextType>
  Favourites: FavouritesResolvers<ContextType>
  MediaConnection: MediaConnectionResolvers<ContextType>
  MediaEdge: MediaEdgeResolvers<ContextType>
  Media: MediaResolvers<ContextType>
  MediaTitle: MediaTitleResolvers<ContextType>
  FuzzyDate: FuzzyDateResolvers<ContextType>
  CountryCode: GraphQLScalarType
  MediaTrailer: MediaTrailerResolvers<ContextType>
  MediaCoverImage: MediaCoverImageResolvers<ContextType>
  MediaTag: MediaTagResolvers<ContextType>
  CharacterConnection: CharacterConnectionResolvers<ContextType>
  CharacterEdge: CharacterEdgeResolvers<ContextType>
  Character: CharacterResolvers<ContextType>
  CharacterName: CharacterNameResolvers<ContextType>
  CharacterImage: CharacterImageResolvers<ContextType>
  Staff: StaffResolvers<ContextType>
  StaffName: StaffNameResolvers<ContextType>
  StaffImage: StaffImageResolvers<ContextType>
  StaffRoleType: StaffRoleTypeResolvers<ContextType>
  StaffConnection: StaffConnectionResolvers<ContextType>
  StaffEdge: StaffEdgeResolvers<ContextType>
  StudioConnection: StudioConnectionResolvers<ContextType>
  StudioEdge: StudioEdgeResolvers<ContextType>
  Studio: StudioResolvers<ContextType>
  AiringSchedule: AiringScheduleResolvers<ContextType>
  AiringScheduleConnection: AiringScheduleConnectionResolvers<ContextType>
  AiringScheduleEdge: AiringScheduleEdgeResolvers<ContextType>
  MediaTrendConnection: MediaTrendConnectionResolvers<ContextType>
  MediaTrendEdge: MediaTrendEdgeResolvers<ContextType>
  MediaTrend: MediaTrendResolvers<ContextType>
  MediaExternalLink: MediaExternalLinkResolvers<ContextType>
  MediaStreamingEpisode: MediaStreamingEpisodeResolvers<ContextType>
  MediaRank: MediaRankResolvers<ContextType>
  MediaList: MediaListResolvers<ContextType>
  ReviewConnection: ReviewConnectionResolvers<ContextType>
  ReviewEdge: ReviewEdgeResolvers<ContextType>
  Review: ReviewResolvers<ContextType>
  RecommendationConnection: RecommendationConnectionResolvers<ContextType>
  RecommendationEdge: RecommendationEdgeResolvers<ContextType>
  Recommendation: RecommendationResolvers<ContextType>
  MediaStats: MediaStatsResolvers<ContextType>
  ScoreDistribution: ScoreDistributionResolvers<ContextType>
  StatusDistribution: StatusDistributionResolvers<ContextType>
  AiringProgression: AiringProgressionResolvers<ContextType>
  UserStatisticTypes: UserStatisticTypesResolvers<ContextType>
  UserStatistics: UserStatisticsResolvers<ContextType>
  UserFormatStatistic: UserFormatStatisticResolvers<ContextType>
  UserStatusStatistic: UserStatusStatisticResolvers<ContextType>
  UserScoreStatistic: UserScoreStatisticResolvers<ContextType>
  UserLengthStatistic: UserLengthStatisticResolvers<ContextType>
  UserReleaseYearStatistic: UserReleaseYearStatisticResolvers<ContextType>
  UserStartYearStatistic: UserStartYearStatisticResolvers<ContextType>
  UserGenreStatistic: UserGenreStatisticResolvers<ContextType>
  UserTagStatistic: UserTagStatisticResolvers<ContextType>
  UserCountryStatistic: UserCountryStatisticResolvers<ContextType>
  UserVoiceActorStatistic: UserVoiceActorStatisticResolvers<ContextType>
  UserStaffStatistic: UserStaffStatisticResolvers<ContextType>
  UserStudioStatistic: UserStudioStatisticResolvers<ContextType>
  UserStats: UserStatsResolvers<ContextType>
  UserActivityHistory: UserActivityHistoryResolvers<ContextType>
  ListScoreStats: ListScoreStatsResolvers<ContextType>
  GenreStats: GenreStatsResolvers<ContextType>
  TagStats: TagStatsResolvers<ContextType>
  StaffStats: StaffStatsResolvers<ContextType>
  StudioStats: StudioStatsResolvers<ContextType>
  YearStats: YearStatsResolvers<ContextType>
  FormatStats: FormatStatsResolvers<ContextType>
  UserPreviousName: UserPreviousNameResolvers<ContextType>
  FuzzyDateInt: GraphQLScalarType
  NotificationUnion: NotificationUnionResolvers<ContextType>
  AiringNotification: AiringNotificationResolvers<ContextType>
  FollowingNotification: FollowingNotificationResolvers<ContextType>
  ActivityMessageNotification: ActivityMessageNotificationResolvers<ContextType>
  MessageActivity: MessageActivityResolvers<ContextType>
  ActivityReply: ActivityReplyResolvers<ContextType>
  ActivityMentionNotification: ActivityMentionNotificationResolvers<ContextType>
  ActivityUnion: ActivityUnionResolvers<ContextType>
  TextActivity: TextActivityResolvers<ContextType>
  ListActivity: ListActivityResolvers<ContextType>
  ActivityReplyNotification: ActivityReplyNotificationResolvers<ContextType>
  ActivityReplySubscribedNotification: ActivityReplySubscribedNotificationResolvers<ContextType>
  ActivityLikeNotification: ActivityLikeNotificationResolvers<ContextType>
  ActivityReplyLikeNotification: ActivityReplyLikeNotificationResolvers<ContextType>
  ThreadCommentMentionNotification: ThreadCommentMentionNotificationResolvers<ContextType>
  Thread: ThreadResolvers<ContextType>
  ThreadCategory: ThreadCategoryResolvers<ContextType>
  ThreadComment: ThreadCommentResolvers<ContextType>
  ThreadCommentReplyNotification: ThreadCommentReplyNotificationResolvers<ContextType>
  ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotificationResolvers<ContextType>
  ThreadCommentLikeNotification: ThreadCommentLikeNotificationResolvers<ContextType>
  ThreadLikeNotification: ThreadLikeNotificationResolvers<ContextType>
  RelatedMediaAdditionNotification: RelatedMediaAdditionNotificationResolvers<ContextType>
  MediaDataChangeNotification: MediaDataChangeNotificationResolvers<ContextType>
  MediaMergeNotification: MediaMergeNotificationResolvers<ContextType>
  MediaDeletionNotification: MediaDeletionNotificationResolvers<ContextType>
  MediaListCollection: MediaListCollectionResolvers<ContextType>
  MediaListGroup: MediaListGroupResolvers<ContextType>
  ParsedMarkdown: ParsedMarkdownResolvers<ContextType>
  AniChartUser: AniChartUserResolvers<ContextType>
  SiteStatistics: SiteStatisticsResolvers<ContextType>
  SiteTrendConnection: SiteTrendConnectionResolvers<ContextType>
  SiteTrendEdge: SiteTrendEdgeResolvers<ContextType>
  SiteTrend: SiteTrendResolvers<ContextType>
  Mutation: MutationResolvers<ContextType>
  Deleted: DeletedResolvers<ContextType>
  LikeableUnion: LikeableUnionResolvers<ContextType>
  CharacterSubmission: CharacterSubmissionResolvers<ContextType>
  CharacterSubmissionConnection: CharacterSubmissionConnectionResolvers<ContextType>
  CharacterSubmissionEdge: CharacterSubmissionEdgeResolvers<ContextType>
  StaffSubmission: StaffSubmissionResolvers<ContextType>
  InternalPage: InternalPageResolvers<ContextType>
  MediaSubmission: MediaSubmissionResolvers<ContextType>
  MediaSubmissionComparison: MediaSubmissionComparisonResolvers<ContextType>
  MediaSubmissionEdge: MediaSubmissionEdgeResolvers<ContextType>
  MediaCharacter: MediaCharacterResolvers<ContextType>
  RevisionHistory: RevisionHistoryResolvers<ContextType>
  Report: ReportResolvers<ContextType>
  ModAction: ModActionResolvers<ContextType>
  UserModData: UserModDataResolvers<ContextType>
}

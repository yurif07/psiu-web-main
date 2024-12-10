export enum EnumTypeReaction {
  APOIO,
  ENTENDO_VOCE,
  FORCA,
  TRISTEZA,
  ESTAMOS_JUNTOS,
}

export interface IReactionPost {
  id: string
  isOwner: boolean
  type: EnumTypeReaction
  reactedAt: string
}

export interface IReactionComment {
  id: string
  postId: string
  isOwner: boolean
  type: EnumTypeReaction
  reactedAt: string
}

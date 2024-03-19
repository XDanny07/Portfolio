import * as UIactionCreators from './ui-action-creators';
import * as TodoActionCreators from './todos-action-creators';
import * as WindowsActionCreators from './windows-action-creators';
import * as LikeActionCreators from './like-action-creators';
import * as ContactActionCreators from './contact-action-creators';
import * as NewsActionCreators from './news-action-creators';
import * as CommentActionCreators from './comments-action-creators';
import * as ArticleActionCreators from './articles-action-creators';

/**
 * This object combines all available redux action creators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...UIactionCreators,
  ...TodoActionCreators,
  ...WindowsActionCreators,
  ...LikeActionCreators,
  ...ContactActionCreators,
  ...NewsActionCreators,
  ...CommentActionCreators,
  ...ArticleActionCreators,
};

export type CombinedActionsType = typeof CombinedActionCreators;

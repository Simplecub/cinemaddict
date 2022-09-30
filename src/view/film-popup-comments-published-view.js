import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import dayjs from 'dayjs';
import {getCommentDate} from '../util';


const getComment = (comments) => {

  return comments.map((comment) => (`
   <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${comment.comment}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${comment.author}</span>
                <span class="film-details__comment-day">${getCommentDate(comment.date)}</span>
                <button class="film-details__comment-delete" id="${comment.id}" >Delete</button>
              </p>
            </div>
          </li>
  `)).join(' ');
};

const getComments = (comments) => {

  return (`


        <ul class="film-details__comments-list">
        ${getComment(comments)}
        </ul>

  `);
};

export default class FilmPopupCommentsPublishedView extends AbstractStatefulView {
  #comments = null;

  constructor(comments) {
    super();
    this._state = comments;
  }

  get template() {
    return getComments(this._state);
  }

  setDeleteCommentHandler = (callback) => {
    this._callback.deleteComment = callback;
    this.element.querySelectorAll('.film-details__comment-delete').forEach((el) => {
        el.addEventListener('click', this.#deleteCommentHandler);
      }
    );
  };
  #deleteCommentHandler = (evt) => {
    evt.preventDefault();
    this._callback.deleteComment(evt.target.id);
    //  console.log(evt.target.id)
  };

}

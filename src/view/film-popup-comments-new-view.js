import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import {getDebounce} from '../util';


const getSendCommentForm = (state) => {
  const {emotion, comment} = state
const selectedEmotion = emotion ? `<img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji">` : '';
  const inputText = comment ? comment : ''
  return(`
   <form class="film-details__new-comment" action="" method="get">
          <div class="film-details__add-emoji-label">
${selectedEmotion}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${inputText}</textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </form>
  `)
}

export default class FilmPopupCommentsNewView extends AbstractStatefulView {

  constructor() {
    super();
    this._state = []
    this.#setInnerHandlers()
  }

  get template() {
    return getSendCommentForm(this._state);
  }
  #setInnerHandlers = () =>{

    this.element.querySelectorAll('.film-details__emoji-item').forEach((el)=> {
      el.addEventListener('click', this.#selectedEmoji)
    })
    this.element.querySelector('.film-details__comment-input').addEventListener('input',getDebounce(this.#addTextInput,500) )
  }

  #selectedEmoji = (evt) => {
   this.updateElement({emotion: evt.target.value})
    console.log(evt.target.value)
  }
#addTextInput = (evt) => {
this.updateElement({comment: evt.target.value})
console.log(this._state)
}
_restoreHandlers = () => {
  this.#setInnerHandlers()

  }


}

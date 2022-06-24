import "./Form.scss";

function Form() {
  return (
    <>
      <form id="form" method="POST" className="form">
        <h2 className="form__subheader">How we can help you?</h2>
        <div className="form__section">
          <div className="form__section--box">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              className="form__input"
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              required
            ></input>
          </div>
          <div className="form__section--box">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
              placeholder="John.Smith@form.com"
              required
            ></input>
          </div>
          <div className="form__section--box">
            <label htmlFor="phone" className="form__label">
              phone
            </label>
            <input
              className="form__input"
              id="phone"
              name="phone"
              type="tel"
              placeholder="666-666-666"
              required
            ></input>
          </div>
          <div className="form__section--box">
            <label htmlFor="review" className="form__label">
              Add new review
            </label>
            <textarea
              className="form__textarea"
              id="review"
              name="review"
              type="text"
              placeholder="written review"
              required
            ></textarea>
          </div>
          <div className="form__section--box">
            <label className="form__label">How much</label>
            <select
              className="form__input"
              id="form__selections"
              name="severty"
              required
            >
              <option>Please Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form__button--box">
          <button className="form__button">submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;

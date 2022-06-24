import "./Form.scss";

function Form() {
  return (
    <>
      <form id="form" method="POST">
        <div className="form__section--box">
          <div className="form__section">
            <h3 className="form__subheader">Form</h3>
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
            <label className="form__label">How much</label>
            <select
              className="form__input"
              id="form__selections"
              name="severty"
              required
            >
              <option>Please Select</option>
            </select>
          </div>
        </div>

        <div className="add-inventory__button--box">
          <button
            className="add-inventory__cancel"
            onClick={this.props.history.goBack}
          >
            Cancel
          </button>
          <button
            className="add-inventory__button"
            type="submit"
            disabled={
              (this.state.warehouse && this.state.category) === ""
                ? true
                : false
            }
          >
            + Add Item
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;

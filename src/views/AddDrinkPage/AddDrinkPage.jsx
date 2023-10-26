import PageTitle from 'components/PageTitle/PageTitle';
import {
  AddBtn,
  AddDrinkContainer,
  AddPhotoContainer,
} from './AddDrinkPage.styled';
import { MainContainer } from 'styles/App.styled';

export const AddDrinkPage = () => {
  return (
    <MainContainer>
      <AddDrinkContainer>
        <PageTitle title="Add drink" />
        <AddPhotoContainer>
          <AddBtn></AddBtn>
        </AddPhotoContainer>
        <form>
          <input type="text" />
          <label>Enter item title</label>
          <input type="text" />
          <label>Enter about recipe</label>
          <label>Category</label>
          <select>
            <optgroup>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </optgroup>
          </select>
          <label>Glass</label>
          <select>
            <optgroup>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </optgroup>
          </select>
          <div>
            <input type="radio" />
            <label>Alcoholic</label>
            <input type="radio" />
            <label>Non-alcoholic</label>
          </div>
          <h3>Ingredients</h3>
          <div>
            <button>+</button>
            <span>3</span>
            <button>-</button>
          </div>
          <select>
            <optgroup>
              <option>Lem</option>
            </optgroup>
          </select>
          <input type="text" />
          <button>X</button>
          <h3>Recipe Preparation</h3>
          <textarea></textarea>
          <button>Add</button>
        </form>
        <div>
          <h4>Follow Us</h4>
          <div>Іконки</div>
        </div>
        <div>
          <h4>Popular drinks</h4>
          <div>Компонент Популярні напої</div>
        </div>
        <PlusIcon />
      </AddDrinkContainer>
    </MainContainer>
  );
};

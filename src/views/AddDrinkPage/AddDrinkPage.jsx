import PageTitle from 'components/PageTitle/PageTitle';
import {
  AddBtn,
  AddBtnText,
  AddDrinkContainer,
  AddFormInput,
  AddFormSelect,
  AddFormSelectContainer,
  AddFormSelectLabel,
  AddFormTextarea,
  AddPhotoContainer,
  ReactSVGIcon,
  SelectContainer,
} from './AddDrinkPage.styled';
import { MainContainer } from 'styles/App.styled';
import IconPlus from '../../assets/images/addDrink/plus.svg';
import ingredients from '../../helpers/Data/ingredients.json';
import glasses from 'helpers/Data/glasses';

export default function AddDrinkPage() {
  return (
    <MainContainer>
      <AddDrinkContainer>
        <PageTitle title="Add drink" />
        <AddPhotoContainer>
          <AddBtn>
            <ReactSVGIcon src={IconPlus} />
          </AddBtn>
          <AddBtnText>Add image</AddBtnText>
        </AddPhotoContainer>
        <form>
          <SelectContainer>
            <AddFormInput
              type="text"
              data-limit="50"
              placeholder="Enter item title"
            />
            <AddFormInput type="text" placeholder="Enter about recipe" />
            <AddFormSelectContainer>
              <AddFormSelectLabel>Category</AddFormSelectLabel>
              <AddFormSelect
                placeholder=""
                getOptionLabel={ingredient => ingredient.title}
                getOptionValue={ingredient => ingredient.title}
                options={ingredients}
              />
            </AddFormSelectContainer>

            <AddFormSelectContainer>
              <AddFormSelectLabel>Glass</AddFormSelectLabel>
              <AddFormSelect
                placeholder=""
                getOptionLabel={glass => glass.glass}
                getOptionValue={glass => glass.glass}
                options={glasses}
              />
            </AddFormSelectContainer>
          </SelectContainer>
          <div>
            <input type="radio" name="typeDrink" />
            <label>Alcoholic</label>
            <input type="radio" name="typeDrink" />
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
          <AddFormTextarea placeholder="Enter the recipe"></AddFormTextarea>
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
      </AddDrinkContainer>
    </MainContainer>
  );
}

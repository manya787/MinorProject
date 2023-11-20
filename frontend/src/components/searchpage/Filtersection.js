import styled from "styled-components";
// import { FaCheck } from "react-icons/fa";
// import FormatPrice from "../Helpers/FormatPrice";
import {Button} from "./Button";
import { GlobalStyle } from "./GlobalStyles";

const Filtersection = () => {
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            // value={text}
            // onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Roles</h3>
        <div>
          {/* {categoryData.map((curElem, index) => {
            return ( */}
              <button
                // key={index}
                type="button"
                name="domain"
                // value={curElem}
                className={ "active" }
                >
                Frontend Dev
              </button>
              <button
                type="button"
                name="domain">
                Backend Dev
              </button>
              <button
                type="button"
                name="domain">
                Full Stack Dev
              </button>
            {/* ); */}
          {/* })} */}
        </div>
      </div>

      <div className="filter-company">
        <h3>Location</h3>

        <form action="#">
          <select
            name="location"
            id="location"
            className="filter-company--select"
            >
            {/* {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })} */}
            <option>Delhi</option>
            <option>Noida</option>
            <option>Gurgaon</option>
            <option>Pune</option>
            <option>Banglore</option>
            <option>Hyderabad</option>
          </select>
        </form>
      </div>

      

      <div className="filter_price">
        <h3>Stipend</h3>
        {/* <p>
          <FormatPrice price={price} />
        </p> */}
        <input
          type="range"
          name="price"
        //   min={minPrice}
        //   max={maxPrice}
        //   value={price}
        //   onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" >
          Clear Filters
        </Button>
      </div>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width:70%;
  height:90vh;
  padding:20px 30px;
  box-shadow: 0 0 25px rgb(192, 191, 191);
  border:none;

  margin-left:30px;

  h3 {
    padding: 2rem 0;
    font-size: bold;
    font-size:20px;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 40%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: transparent;
        font-size:15px;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default Filtersection;
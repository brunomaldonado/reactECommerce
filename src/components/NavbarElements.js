import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  @media screen and (max-width: 889px) {
    z-index: 2;
    border: 1px solid red
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  @media screen and (min-width: 890px) {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.95);
  }

  @media screen and (min-width: 992px) {
    padding: 0;
    width: 987px;
    margin: auto;
  }

  @media screen and (min-width: 1200px) {
    width: 1208px;
    margin: auto;
  }

  @media screen and (min-width: 1600px) {
    width: 1506px;
    margin: auto;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  position: relative;

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-95%")};
    // right: 0;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.5s all ease;
    background-color: #fff;
    z-index: 3;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    overflow-y: auto;

    &::before {
      content: "CATEGORIES";
      margin-top: 2rem;
      margin-left: 1.5rem;
    }
  }
`;

export const LogoContainer = styled.div`
  margin-right: 0.5rem;
  width: 100px;
`;

export const NavMenuLeft = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-right: 0.5rem;
  align-items: center;

  @media screen and (max-width: 890px) {
    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    height: auto;
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      border-bottom: 2px solid #000;
      width: 100%;
      margin-top: 1.5rem;
    }
  }
`;

export const NavMenuRight = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  position: absolute;
  right: 0.5rem;

  p {
    &:nth-child(1) {
      color: #acd9b2;
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }

  a {
    &:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 890px) {
    height: auto;
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;

    p {
      &:nth-child(1) {
        position: relative;
        top: 1.5rem;
      }
    }

    a {
      &:nth-child(2) {
        display: block;
      }
    }
  }
`;

export const NavMenuItem = styled.li`
  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    line-height: 50px;
    width: 100%;
  }
`;

export const NavMenuItemLink = styled.a`
  height: 100%;
  padding: 8px;
  border-radius: 8px;
  transition: 0.5s all ease;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    padding: 0;

    &:hover {
      text-align: center;
    }
  }
`;

export const MenuToggle = styled.button`
  display: none;
  border: none;
  background-color: transparent;

  span {
    display: block;
    background-color: #080808;
    height: 3px;
    width: 30px;
    margin: 5px auto;
    border-radius: 2px;
  }

  span {
    &:nth-child(2) {
      width: 19px;
      margin-right: 11px;
      border-radius: 2px;
    }
  }

  @media screen and (max-width: 890px) {
    display: block;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0.7rem;
    right: 3.8rem;
  }
`;

export const ButtonCart = styled.button`
  border: none;
  background: none;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 890px) {
    position: fixed;
    top: 11px;
    right: 1.5rem;
    z-index: 2;
  }
`;

export const CircleCount = styled.div`
  width: 16px;
  height: 16px;
  background-color: var(--cart-red);
  border-radius: 50%;
  font-size: var(--sm);
  font-weight: bold;
  position: absolute;
  top: -2px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;

export const ButtonClose = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 30px;
  height: 30px;
  border: 1px solid #f2f2f2;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  background-color: rgba(255, 255, 255, 0.148);

  &::after {
    content: "";
    position: fixed;
    top: 1.2rem;
    right: 1.2rem;
    width: 36px;
    height: 36px;
    border: 2px solid #f2f2f2;
    border-radius: 50%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  }

  img {
    width: 36px;
    padding: 0.5rem;
  }

  @media screen and (min-width: 890px) {
    display: none;
  }
`;

export const BtnClose = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 30px;
  height: 30px;
  border: 1px solid #f2f2f2;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  background-color: rgba(255, 255, 255, 0.148);

  &::after {
    content: "";
    position: fixed;
    top: 1.2rem;
    right: 1.2rem;
    width: 36px;
    height: 36px;
    border: 2px solid #f2f2f2;
    border-radius: 50%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  }

  img {
    width: 36px;
    padding: 0.5rem;
  }
`;

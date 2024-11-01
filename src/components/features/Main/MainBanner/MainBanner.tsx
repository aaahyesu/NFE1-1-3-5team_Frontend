import {
  BannerContainer,
  StyledBanner,
  ContentWrapper,
  BannerContent,
  MainText,
  SubText,
  HighlightedLogo,
  HighlightedText,
  WriteButtonWrapper,
} from "./MainBanner.styles";
import BannerIcon from "../../../common/icon/BannerIcon/BannerIcon";
import WriteModal from "../../../common/WriteModal/WriteModal";
import LoginModal from "../../login/LoginModal";
import useModal from "../../../../hooks/useModal";
import { Button, WriteButton } from "../../../common";

const MainBanner = () => {
  const {
    isLogin,
    isModalOpen,
    handleClick,
    handleCloseModal,
    toggleModalView,
    handleLoginSuccess,
  } = useModal();

  return (
    <>
      <BannerContainer>
        <StyledBanner>
          <ContentWrapper>
            <BannerContent>
              <MainText>
                꿈을 현실로 만들 출발점, <br />
                <HighlightedLogo> Meetify </HighlightedLogo> 에서!
              </MainText>
              <Button label="등록하기" onClick={handleClick} />
            </BannerContent>
            <BannerIcon />
          </ContentWrapper>
        </StyledBanner>
        <SubText>
          지금 <HighlightedText>Meet</HighlightedText> 메뉴로 이동해, 함께할
          최고의 팀원을 찾아보세요!
        </SubText>
      </BannerContainer>

      <WriteButtonWrapper>
        <WriteButton onClick={handleClick} />
      </WriteButtonWrapper>
      {isModalOpen &&
        (isLogin ? (
          <WriteModal onClick={handleCloseModal} />
        ) : (
          <LoginModal
            onClose={handleCloseModal}
            onToggleView={toggleModalView}
            onLoginSuccess={handleLoginSuccess}
          />
        ))}
    </>
  );
};

export default MainBanner;

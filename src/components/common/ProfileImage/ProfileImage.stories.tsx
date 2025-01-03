import { Meta, StoryObj } from "@storybook/react";
import ProfileImage from "./ProfileImage";

import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";

const meta = {
  title: "Common/profileImage/ProfileImage",
  component: ProfileImage,
  tags: ["autodocs"],
  argTypes: {
    usageType: {
      control: "select",
      options: ["header", "userInformation", "post", "card"],
      description: "프로필 이미지의 사용 용도를 설정합니다.",
    },
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
  },
  args: {
    src: DummyProfileImage,
    alt: "profile image",
  },
} satisfies Meta<typeof ProfileImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    usageType: "header",
  },
};

export const UserInformation: Story = {
  args: {
    usageType: "userInformation",
  },
};

export const Post: Story = {
  args: {
    usageType: "post",
  },
};

export const Card: Story = {
  args: {
    usageType: "card",
  },
};

import React from "react";
import { SendBirdProvider } from 'sendbird-uikit';
// import { useUserData } from "@hooks";
import { useTheme } from "styled-components";
import { APP_ID, USER_ID, NICKNAME } from "./const";


export const CustomSendbirdProvider = ({ children }) => {

  // const { sendbird_user_id, sendbird_access_token } = useUserData();

  const theme = useTheme();

  const myColorSet = {
    // '--sendbird-light-background-100': theme ? theme.default.color.secondary : null,
    // '--sendbird-light-background-200': theme ? theme.default.color.secondary : null,
    // '--sendbird-light-primary-300': theme ? theme.default.color.primary : null,
    // '--sendbird-light-primary-400': theme ? theme.default.color.primary : null,
    '--sendbird-light-primary-500': '#00487c',
    '--sendbird-light-primary-400': '#4bb3fd',
    '--sendbird-light-primary-300': '#3e6680',
    '--sendbird-light-primary-200': '#0496ff',
    '--sendbird-light-primary-100': '#027bce',
  };

  return (
    <SendBirdProvider
      appId={APP_ID}
      userId={USER_ID}
      // accessToken={sendbird_access_token}
      colorSet={myColorSet}
    >
      {children}
    </SendBirdProvider>
  )
}

export default CustomSendbirdProvider;
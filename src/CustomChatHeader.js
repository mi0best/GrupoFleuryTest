import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 4px rgba(33, 46, 56, 0.12);
  box-sizing: border-box;
  padding: 25px;
`

const ChatMembers = styled.span`
  display: block;
  flex: 1;
  color: #272728;
  font-weight: 700;
  font-size: 22px;
`

const ChatInfo = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #4bb3fd;
  font-size: 20px;
  margin-left: 10px;
`
// color: ${props => props.theme.default.color.primary};

const getCustomerUserNickname = members => {
  let customer = null;
  if(members.length > 0){
    customer = members.find(filterCustomerUser);
  }
  return customer ? customer.nickname : null;
}

const filterCustomerUser = member => {
  return member.metaData.role === 'customer'
}

function CustomChatHeader({
  channel,
  onClickChatInfo
}){

  return (
    <StyledHeader>
      <ChatMembers>
        {getCustomerUserNickname(channel.members)}
        <ChatInfo onClick={onClickChatInfo} icon={faInfoCircle} />
      </ChatMembers>
    </StyledHeader>
  )
}

export { CustomChatHeader };
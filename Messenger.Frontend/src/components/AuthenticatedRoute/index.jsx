import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';

import { selectIsOpenChat } from '../../features/chats/chats.slice';
import { selectSidebarState } from '../../features/sidebar/sidebar.slice';
import { fetchCurrentUser } from '../../features/user/user.api';
import { Token } from '../../services/domain/token';
import BarMedia from '../BarMedia';
// import ChatRoomMedia from '../ChatRoomMedia';
import ChatsMedia from '../ChatsMedia';
import NotificationContainer from '../NotificationContainer';
import Sidebar from '../Sidebar';
import SidebarChats from '../SidebarChats';

const AuthenticatedRoute = ({ element }) => {
	if (!Token.get()) {
		return <Navigate to='/authenticate' />;
	}
	const activeIcon = useSelector(selectSidebarState);
	const isChatOpen = useSelector(selectIsOpenChat);
	const media = useMediaQuery({ maxWidth: ' 450px' });
	const dispatch = useDispatch();

	useEffect(() => {
		if (Token.get()) {
			dispatch(fetchCurrentUser());
		}
	}, [Token.get()]);

	return !media ? (
		<div className='w-full h-full flex relative'>
			<Sidebar />
			<SidebarChats />
			<NotificationContainer />
			<div className='w-[calc(100%-24rem)] h-full overflow-y-auto'>{element}</div>
		</div>
	) : (
		<div className='w-full h-full flex flex-col relative'>
			{!isChatOpen && activeIcon === 'messages' ? (
				<ChatsMedia />
			) : (
				activeIcon !== 'messages' && (
					<div className='w-full h-[calc(100%-4rem)] overflow-y-auto'>{element}</div>
				)
			)}
			{isChatOpen ? (
				<div className='w-full h-full overflow-y-auto'>{element}</div>
			) : (
				<BarMedia />
			)}
			<NotificationContainer />
		</div>
	);
};

export default AuthenticatedRoute;

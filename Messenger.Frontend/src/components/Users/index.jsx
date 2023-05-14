import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchField from '../../UI/fields/SearchField';
import { fetchUsers } from '../../features/user/user.api';
import { selectUsers } from '../../features/user/user.slice';
import Loader from '../Loader';
import UserPreview from '../UserPreview';

const Users = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const [usersState, setUsersState] = useState(users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	useEffect(() => {
		setUsersState(users);
	}, [users]);

	const handleChange = (value) => {
		if (value.trim() === '') {
			setUsersState(users);
		}

		setUsersState(users?.filter((f) => f.userName.toLowerCase().includes(value.toLowerCase())));
	};

	return (
		<div className='w-full h-full p-4'>
			<SearchField placeholder='Пошук користувачів...' onChange={handleChange} />
			<div className='h-[400px] overflow-y-auto px-5'>
				<Loader isLoading={usersState === null} className=''>
					{usersState?.length > 0 ? (
						usersState.map((user) => <UserPreview key={user.id} user={user} />)
					) : (
						<div className='h-full w-full grid place-items-center'>
							<h2 className='text-black/60 text-2xl'>Нічого не знайдено</h2>
						</div>
					)}
				</Loader>
			</div>
		</div>
	);
};

export default Users;
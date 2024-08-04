
/**
 * Title: useAuth Hook
 * Description: Provides authentication context and functions for components.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /src/hooks/useAuth.tsx
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get('/api/auth/user');
                setUser(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            setUser(data.user);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setUser(null);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return { user, login, logout };
};

export default useAuth;
                    
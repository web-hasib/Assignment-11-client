import React, { use} from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MainLayout = () => {
    const {user} =use(AuthContext)
    console.log('user from mainlayout ', user);
    return (
        <div>
            Hello from main layout 
            <nav></nav>
            
        </div>
    );
};

export default MainLayout;
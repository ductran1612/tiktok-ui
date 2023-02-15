import axios from 'axios';

export const search = async (q, type = 'less') => {
    const res = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search', {
        params: {
            q: q,
            type: 'less',
        },
    });
    return res.data.data;
};

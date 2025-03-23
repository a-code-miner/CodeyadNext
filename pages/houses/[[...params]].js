import React from 'react';
import { useRouter } from 'next/router';

const Params = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    return (
        <div>
            <div>
                {params[0] + ' - ' + params[1]}
            </div>
            with filter params...
        </div>
    );
};

export default Params;

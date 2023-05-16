import { useEffect, useState } from "react";

export const useToastPortal = () => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState('toast-portal');

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.classList.add("absolute", "inset-0");
        // document.getElementsByTagName('body')[0].prepend(div);
        document.getElementById('app')?.prepend(div);

        setLoaded(true);

        return () => { 
            // document.getElementsByTagName('body')[0].removeChild(div); 
            document.getElementById('app')?.removeChild(div);
        };
    }, [portalId]);

    return {
        loaded, portalId
    };
}
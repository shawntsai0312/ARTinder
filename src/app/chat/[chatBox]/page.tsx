'use client'
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface chatContent {
    sender: string;
    content: string;
}

interface ParamsProps {
    chatBox: string;
}

interface chatBoxProps {
    params: ParamsProps;
}

const chatBox = async ({ params }: chatBoxProps) => {
    const imgUrl = '/resource/chatData/img/' + params.chatBox + '.jpg';

    const [jsonData, setJsonData] = useState<chatContent[] | null>(null);

    useEffect(() => {
        const loadJsonData = async () => {
            try {
                // Dynamically import JSON file based on condition
                const loadedJsonData = await import(`../../../../public/resource/chatData/chat/${params.chatBox}.json`);
                setJsonData(loadedJsonData.default);
            } catch (error) {
                console.error('Error loading JSON data:', error);
            }
        };

        loadJsonData();
    }, [params.chatBox]);

    if (!jsonData) {
        return <div>Loading...</div>;
    } else {
        console.log(jsonData)
    }

    // Render JSON data
    return (
        <div className="w-full p-3">
            {
                jsonData ?
                    jsonData.map((chat, index) => (

                        <Stack className="mt-2 mb-2" direction="row" spacing={2} alignItems="center" justifyContent={chat.sender === 'me' ? 'flex-end' : 'flex-start'}>
                            {
                                chat.sender === 'me' ? null : <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src={imgUrl} />
                            }
                            <div className={`relative inline-block clear-both align-top rounded-lg
                                 px-[6px] py-[6px]
                                bg-gray-200 border-2 max-w-[60%]
                                ${chat.sender === 'me' ? 'float-right self-end' : 'float-left self-start'}`}
                                key={index}
                            >
                                {chat.content}
                            </div>
                        </Stack>
                    ))
                    : 'You have no chat data'
            }
        </div >
    );
};

export default dynamic(() => Promise.resolve(chatBox), {
    ssr: false // Set to false to ensure dynamic import works client-side only
});
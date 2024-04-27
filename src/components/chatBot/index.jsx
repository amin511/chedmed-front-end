import React, { useRef, useState } from 'react'
import logoChatBot from "../../assets/Layer_x0020_1.svg"
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';
import axios from 'axios';
const ChatBot = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const InputChatBot = useRef(null);
    const [messages, setMessages] = useState([]);
    return (
        <div className='absolute right-5 left-5 bottom-2'>
            <h1 className='max-w-max text-xl mx-auto text-primary font-bold'>chat bot</h1>

            <button className='bg-white w-full p-1 rounded-3xl flex items-center justify-around' onClick={toggle}>
                <img className=' ' src={logoChatBot} />
                <h2 className='text-primary font-bold'>Chatter avec moi</h2>
            </button>

            <Dialog className='relative flex flex-col mr-[275px] max-h-[400px]' opened={opened} withCloseButton onClose={close} size="lg" radius="md">
                <img className='mx-auto w-10 mb-2' src={logoChatBot} />
                <Group className='flex w-[80%] mx-auto overflow-y-scroll'>
                    {
                        messages.map((message) => {
                            return (
                                <Group className={`flex w-full ${message.role === 'assistant' ? "justify-start" : "justify-end"}`} >
                                    <Text className={`${message.role === 'assistant' ? "bg-slate-200 text-black" : "bg-primary text-white"} max-w-max   p-2 rounded-lg `} size="sm" mb="xs" fw={500}>
                                        {message.message}
                                    </Text>
                                </Group>
                            )
                        })
                    }

                </Group>


                <Group align="flex-end" className=' bottom-0'>
                    <TextInput name="messageSend" ref={InputChatBot} placeholder="vos questions sur le retour" style={{ flex: 1 }} />
                    <Button className='bg-primary' onClick={async () => {
                        const mess = InputChatBot.current.value
                        setMessages((message) => [...message, { role: "user", message: mess }]);

                        const { data } = await axios.post("http://localhost:3001/api/sendQuestion", { user: InputChatBot.current.value });
                        console.log("response", data.response.content)
                        setMessages((message) => [...message, { role: "assistant", message: data.response.content }]);
                    }}>Envoyer</Button>
                </Group>
            </Dialog>

        </div>
    )
}

export default ChatBot

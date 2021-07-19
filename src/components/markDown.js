import React,{useState} from 'react'
import {Flex,Heading, Textarea,Text} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ReactMarkdown from 'react-markdown'


const MarkDownEditor = () => {

    const [editorText,setEditorText] = useState('Welcome')

    return (
        
        <>   
        <Heading as='h1' textAlign='center'>Markdown Editor</Heading>

        <Flex mx='auto'
        justifyContent='center'
        alignItems='center'
        >

        <Textarea mr='2%'
        minH='70vh' width='40%' 
        bgColor='black'
        color='white'
        fontSize='1.4em'
        maxH='70vh'
        value={editorText}
        onChange={(e)=>setEditorText(e.target.value)}
        px='4'
        />
        
        <Flex minH='70vh' maxH='70vh' width='40%'
        overflowY='scroll' border='1px solid black' px='4' flexDirection='column'
        lineHeight='14px'>
           <ReactMarkdown>{editorText}</ReactMarkdown> 
        </Flex>
        </Flex>
        <Flex justifyContent='center' mt='3em'>
        <Link href="https://readme.directual.com/data/data-types/markdown-cheatsheet#:~:text=Markdown%20cheatsheet%20Markdown%20is%20a%20simple%20way%20to,know.%20Telegram%20has%20its%20own%20version%20of%20markdown." isExternal
        color='teal' fontWeight='bold'
        justifyContent='center'>
             Link for Markdown Cheatsheet<ExternalLinkIcon mx="2px" />
        </Link>
       
        </Flex>
  </>
    )
}

export default MarkDownEditor

import React from 'react';
import {
    Heading,
    Text,
    Link,
    FormControl,
    FormLabel,
    Input,
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
    Box,
    Flex,
    IconButton,
    useColorMode,
    Stack,
    Checkbox,
    Button } from '@chakra-ui/core'

const VARIANT_COLOR = 'teal';

const App = () => {
    return(
        <ThemeProvider>
            <ColorModeProvider>
                <CSSReset/>
                <LoginArea/>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

const LoginArea = () => {
    return(
        <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
            <Box
                borderWidth={1}
                px={4}
                width="full"
                maxWidth="500px"
                borderRadius={4}
                boxShadow="lg"
            >
                <ThemeSelector/>
                <Box p={4}>
                    <LoginHeader/>
                    <LoginForm/>
                </Box>
            </Box>
        </Flex>
    )
}

const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <Box textAlign="right" py={4}>
            <IconButton
                icon={colorMode === 'light' ? 'moon' : 'sun'}
                onClick={toggleColorMode}
                variant='ghost'
            />
        </Box>
    )
}

const LoginHeader = () => {
    return (
        <Box textAlign='center'>
            <Heading>Sign In to Your Account</Heading>
            <Text>Or <Link color={`${VARIANT_COLOR}.500`}>start your 14 days trial </Link></Text>
        </Box>
    )
}

const LoginForm = () => {
    return (
        <Box my={8}>
             <form>
                 <FormControl>
                     <FormLabel>Email Address</FormLabel>
                     <Input type='email' placeholder='Enter your email address'/>
                 </FormControl>
                 <FormControl mt={4}>
                     <FormLabel>Password</FormLabel>
                     <Input type='passowrd' placeholder='Enter your password'/>
                 </FormControl>
                 <Stack isInline justifyContent="space-between" mt={4}>
                     <Box>
                         <Checkbox>Remember me</Checkbox>
                     </Box>
                     <Box>
                         <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
                     </Box>
                 </Stack>
                 <Button variantColor={VARIANT_COLOR} width="full" mt={4}>Sign In</Button>
             </form>
        </Box>
    )
}

export default App;

import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { useEffect } from 'react'

const _layout = ()=>{
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const {setAuth} = useAuth();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('session user', session?.user.id);

      if(session) {
        // setar auth
        // ir tela home
        setAuth(session?.user)        
        router.replace('/main/home');        

      } else {
        //setar auth null
        // mover para tela welcome
        setAuth(null);
        router.replace('../welcome')
      }
    })
  },[]) 

  return (
    <Stack
        screenOptions={{
            headerShown: false,
        }}
    />
  )
}

export default _layout
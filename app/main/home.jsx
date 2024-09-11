import { StyleSheet, Text, View, Button, Alert} from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'expo-router'
import { supabase } from '../../lib/supabase'

const Home = () => {
  const {setAuth} = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    setAuth(null)
    const {error} = await supabase.auth.signOut();

    if(error) {
      Alert.alert('Deslogar', error.message)
    }
  }

  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button title="Deslogar" onPress={onLogout} />
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
    const router = useRouter();
  return (
    <ScreenWrapper bg='white'>
        <StatusBar style='dark'/>
        <View style={styles.container}>
            {/* welcome image */}
            <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />

            {/* title */}
            <View style={{gap:20}}>
                <Text style={styles.title}>DevApp!</Text>
                <Text style={styles.punchLine}>
                   Onde todos os pensamentos viram realidade e a criatividade é o limite.
                </Text>
            </View> 

            {/* */ }
            <View style={styles.footer}>
                <Button 
                    title="Comece agora"
                    buttonStyle={{marginHorizontal: wp(3)}}
                    onPress={() => router.push('signUp')}
                />
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.loginText}>
                        Você já tem uma conta!
                    </Text>
                    <Pressable onPress={() => router.push('login')}>
                        <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>
                            Login
                        </Text>
                    </Pressable>

                </View>
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(5),
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold
    },
    punchLine: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,
    }, 
    footer: {
        gap: 30,
        width: '100%',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
})
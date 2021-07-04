import React from 'react';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Text from '@components/atoms/Text';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useMediaQuery} from 'react-responsive';

interface Props {
  login?: boolean;
  signup?: boolean;
  request?: boolean;
}

const Header = (props: Props) => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const {login, signup, request} = props;

  return (
    <View style={styles.container}>
      {request ? (
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={15} />
          <Text type="s" bold style={styles.marginLeft}>
            Retour
          </Text>
        </TouchableOpacity>
      ) : null}
      {Platform.OS === 'web' && !isMobile ? (
        <Text type="xl" bold>
          Credit
        </Text>
      ) : null}
      {login || signup || request ? (
        <View style={[styles.row, {justifyContent: 'flex-end'}]}>
          <Text type="s" bold>
            {login ? 'Déjà client ?' : signup ? 'Pas encore client?' : ''}
          </Text>
          <TouchableOpacity
            onPress={() => {
              login
                ? navigation.navigate('Login')
                : signup
                ? navigation.navigate('Signup')
                : {};
            }}>
            <Text
              type="s"
              bold
              outlined={request ? false : true}
              style={styles.marginLeft}>
              {login
                ? 'connectez-vous'
                : signup
                ? 'inscrivez-vous'
                : request
                ? 'reprendre plus tard'
                : ''}
            </Text>
          </TouchableOpacity>
          {request ? (
            <TouchableOpacity onPress={() => {}}>
              <AntDesign name="poweroff" size={15} style={styles.marginLeft} />
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
    paddingHorizontal: 20,
    height: 60,
    marginTop: Platform.OS === 'android' ? 20 : 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  marginLeft: {
    marginLeft: 10,
  },
  action: {
    textAlign: 'right',
  },
});

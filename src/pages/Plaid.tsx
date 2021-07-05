import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import axios from 'axios';

const Plaid = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    axios
      .post('https://plaid-api.hyacinthe.vercel.app/api/create_link_token', {
        client_id: '5c3b210e736cca0010f4eaf9',
        secret: '32e1065b574e71e713b989a7020ba3',
        client_name: 'Plaid',
        products: ['auth'],
        country_codes: ['US', 'CA'],
        language: 'en',
        user: {client_user_id: 'user-id'},
      })
      .then(
        response => {
          console.log(response);
          setToken(response.data.link_token);
        },
        error => {
          console.log(error);
        },
      );
  }, []);

  return (
    <View style={styles.container}>
      {Platform.OS !== 'web' ? (
        <PlaidLink
          tokenConfig={{
            token: token, // GENERATED_LINK_TOKEN
          }}
          onSuccess={(success: LinkSuccess) => {
            console.log(success);
          }}
          onExit={(exit: LinkExit) => {
            console.log(exit);
          }}>
          <View>
            <Text>Link bank account</Text>
          </View>
        </PlaidLink>
      ) : (
        <Text>Plaid Native not supported</Text>
      )}
    </View>
  );
};

export default Plaid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

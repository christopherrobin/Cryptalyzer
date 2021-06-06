import { setCookie, deleteCookie } from './CookieWork';
import { ENV_CONFIG } from './env-variables';
import { getCookie } from './CookieWork';

export const getToken = (x) => x;

export const getBasicUser = () => {
    const coinbaseToken = getCookie("cryptalyzer-coinbase-token");
    const authHeader = `Bearer ${coinbaseToken}`;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", authHeader);
    myHeaders.append("CB-VERSION", "2021-05-24");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    return (
      fetch("https://api.coinbase.com/v2/user", requestOptions)
        .then(function (response) {
          if (response.status !== 200 && response.status !== 401) {
            console.error(`Unknown resolvable issue encountered, status Code: ${response.status}`);
            return;
          }

          if (response.status === 401) {
            console.error("You have an invalid token from Coinbase.");
            // setError(true);
            // TODO: Refresh auth using the refresh token we got from CB in the original call
            // const freshAuthToken = refreshToken();
            // console.log(freshAuthToken);
          }

          // Examine the text in the response
          const dataToReturn = response.json().then(function (data) {
            return data.data
          });

          return dataToReturn
      })
    )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
};

export const refreshToken = (x) => {
        var myHeaders = new Headers();
        // myHeaders.append("Cookie", "__cf_bm=129606ad9687effb18287759964a9262e3e22da3-1621714317-1800-AUImc3ODIsnDvoEDgRsJhOcSwHg7zjPLn+hDySV48raVjzFJlFZssuF4iWPvTsbNUAhSr7n/mEySfz+VGOOpQJU=; amplitude_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6; coinbase_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6");

        var formdata = new FormData();
        formdata.append("grant_type", "refresh_token");
        formdata.append("client_id", ENV_CONFIG.coinbaseClientId);
        formdata.append("client_secret", ENV_CONFIG.coinbaseSecret);
        formdata.append("enablePKCE", "false");
        formdata.append("scopes", "[\"wallet:user:read\"]");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.coinbase.com/oauth/token", requestOptions)
            .then(
                function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    setCookie('cryptalyzer-coinbase-token', data.access_token);
                    setCookie('cryptalyzer-coinbase-refresh-token', data.refresh_token);
                });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });


    console.log(`%c${x}`, 'background: #222; color: #bada55; padding: 1em; width: 100%;');
    return `Return: ${x}`;
}

export const nukeUserCookies = () => {
    deleteCookie('cryptalyzer-coinbase-refresh-token');
    deleteCookie('cryptalyzer-coinbase-token');
    window.location.reload(false);
}
import { setCookie, getCookie } from './CookieWork';

export const getToken = (x) => x;

export const getUser = (x) => x;

export const refreshToken = (x) => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cf_bm=129606ad9687effb18287759964a9262e3e22da3-1621714317-1800-AUImc3ODIsnDvoEDgRsJhOcSwHg7zjPLn+hDySV48raVjzFJlFZssuF4iWPvTsbNUAhSr7n/mEySfz+VGOOpQJU=; amplitude_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6; coinbase_device_id=da721d2c-e2ae-4b60-8b9e-e9d4ea2adec6");

        var formdata = new FormData();
        formdata.append("grant_type", "refresh_token");
        // formdata.append("code", coinbaseCode);
        formdata.append("client_id", "b15a8f09ba059b65e41be40e61f0fa4ccf64d965538d886e11d0946eb59a17d1");
        formdata.append("client_secret", "f6d6e442eea4960d0b236644ac474d0e9e7cecc3d984b31268eca1ba9696b027");
        // formdata.append("redirect_uri", "https://www.cryptalyzer.com/hello");
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

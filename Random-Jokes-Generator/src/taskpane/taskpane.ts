import { HTMLElements } from "../HTMLElements/HTMLElements";
import { translate } from "../translate/translate";
import { API } from "../api/api";

const API_SVC = new API();
let showCustomCategories: boolean = false;

Office.onReady((info) => {
  translate();

  if (info.host === Office.HostType.Outlook) {
    HTMLElements.PLACEHOLDER_INSERT_BUTTTON.addEventListener('click', () => {
      insertPlaceholder();
    });

    HTMLElements.CATEGORIES_ANY_RADIO.addEventListener('change', () => {
      showCustomCategories = !showCustomCategories;
      const show = showCustomCategories ? 'block' : 'none';
      HTMLElements.CATEGORIES_CONTAINER.style.display = show;
    });

    HTMLElements.CATEGORIES_CUSTOM_RADIO.addEventListener('change', () => {
      showCustomCategories = !showCustomCategories;
      const show = showCustomCategories ? 'block' : 'none';
      HTMLElements.CATEGORIES_CONTAINER.style.display = show;
    });

    HTMLElements.QUERY_BUTTON.addEventListener('click', () => {
      insertJoke();
    });
  }
});

function insertPlaceholder(): void {
  Office.context.mailbox.item.body.getAsync(Office.CoercionType.Text, function (result) {
    if (result.status === Office.AsyncResultStatus.Succeeded) {

        const currentBody = result.value;
        const placeholder = '[-[JOKE]-]';
        const newBody = currentBody + placeholder;

        Office.context.mailbox.item.body.setAsync(newBody, { coercionType: Office.CoercionType.Text }, function (setBodyResult) {
            if (setBodyResult.status === Office.AsyncResultStatus.Succeeded) {
                console.log('Placeholder inserted!');
            } else {
                console.error('Error inserting placeholder:', setBodyResult.error.message);
            }
        });
    } else {
        console.error('Error getting email body:', result.error.message);
    }
});
}

function getRandomJoke(): Promise<any> {
  return new Promise((resolve, reject) => {
    API_SVC.requestJoke().then(res => {
      if(res.error === true) {
        HTMLElements.ERROR_CONTAINER.style.display = 'block';
        HTMLElements.ERROR_CONTAINER.innerText = res.message;
        reject(res.message)
      } else {
        HTMLElements.ERROR_CONTAINER.style.display = 'none';
        resolve(res);
      }
    }).catch((err) => {
      reject(err);
      HTMLElements.ERROR_CONTAINER.innerText = err.status.toString();
    });
  });
}

async function insertJoke(): Promise<void> {
  const fetchedJoke = await getRandomJoke();
  let success = false;

  if(fetchedJoke.type === 'single') {
    const joke = fetchedJoke.joke;
    success = await replacePlaceholder(joke);
  } else {
    const setup = fetchedJoke.setup;
    const delivery = fetchedJoke.delivery;
    success = await replacePlaceholder(setup, delivery);
  }

  return new Promise((resolve, reject) => {
    if(success) {
      HTMLElements.SUCCESS_CONTAINER.style.display = 'block';
      setTimeout(() => {
        HTMLElements.SUCCESS_CONTAINER.style.display = 'none';
      }, 3500);
      resolve();
    } else {
      reject('Something went wrong inserting the joke!');
    }
  });
}

async function replacePlaceholder(joke: string, secondPart?: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    Office.context.mailbox.item.body.getAsync(Office.CoercionType.Text, function (result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        const jokeVal = !secondPart ? joke : `${joke}\n${secondPart}`;
        let body = result.value;

        if(!body.includes('[-[JOKE]-]')) {   
          return;
        }

        let newBody = body.replace('[-[JOKE]-]', jokeVal);
  
        Office.context.mailbox.item.body.setAsync(newBody, { coercionType: Office.CoercionType.Text }, function (setBodyResult) {
          if (setBodyResult.status === Office.AsyncResultStatus.Succeeded) {
            resolve(true);
              console.log('Joke inserted!');
          } else {
            reject('Error inserting joke: ' + setBodyResult.error.message);
          }
        });
      } else {
        reject('Error getting email body: ' + result.error.message);
      }
    });
  });
}

const initialState = {
    user: 'Max',
    yourDecks: [
        {
            id: 0,
            title: 'Math',
            description: "do some numbers",
            author: "Max Oppor",
            cards: [
              {
                id: 0,
                front: "2 + 2",
                back: "4"
              },
              {
                id: 1,
                front: "3 + 5",
                back: "8"
              },
              {
                id: 2,
                front: "1 + 2",
                back: "3"
              },
            ]
        },
        {
            id: 1,
            title: "Spanish",
            description: "speak some spanish",
            author: "Max Oppor",
            cards: [
              {
                id: 0,
                front: "que",
                back: "what"
              },
              {
                id: 1,
                front: "tu",
                back: "you"
              },
              {
                id: 2,
                front: "soy",
                back: "I am"
              },
              {
                id: 3,
                front: "eres",
                back: "You are"
              },
            ]
        }
    ]
}

export default yourDecks = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_DECK':
            const decks = state.yourDecks;
            return {
                ...state,
                yourDecks: [...decks, action.deck]
            }
        default:
            return state;
    }
}
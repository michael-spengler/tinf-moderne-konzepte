const { NlpManager } = require('node-nlp');

class NLPService {

    private manager: any

    public constructor() {
        this.manager = new NlpManager({ languages: ['en'], forceNER: true });

        this.trainModel()

    }

    public async getAnswer(input: string): Promise<string> {
        const response = await this.manager.process('en', input);

        return response.answer

    }

   
    protected async trainModel(){

        // Adds the utterances and intents for the NLP
        this.manager.addDocument('en', 'goodbye for now', 'greetings.bye');
        this.manager.addDocument('en', 'bye bye take care', 'greetings.bye');
        this.manager.addDocument('en', 'okay see you later', 'greetings.bye');
        this.manager.addDocument('en', 'bye for now', 'greetings.bye');
        this.manager.addDocument('en', 'i must go', 'greetings.bye');
        this.manager.addDocument('en', 'hello', 'greetings.hello');
        this.manager.addDocument('en', 'hey hey', 'greetings.hello');
        this.manager.addDocument('en', 'hi', 'greetings.hello');
        this.manager.addDocument('en', 'howdy', 'greetings.hello');

        // Train also the NLG
        this.manager.addAnswer('en', 'greetings.bye', 'Till next time');
        this.manager.addAnswer('en', 'greetings.bye', 'see you soon!');
        this.manager.addAnswer('en', 'greetings.hello', 'Hey there!');
        this.manager.addAnswer('en', 'greetings.hello', 'Greetings!');

        await this.manager.train();
        this.manager.save();

    }
}

const ourInstance = new NLPService()

setTimeout(async () => {

    console.log("Ich hatte 2 Sekunden Bedenkzeit. ")
    // ourInstance.testIt()

    const input = "Hey"
    const answer = await ourInstance.getAnswer(input)

    console.log(answer)

}, 2 * 1000)

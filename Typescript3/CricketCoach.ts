import {Coach} from "./Coach";
import {FortuneService} from "./FortuneService";

export class CricketCoach implements Coach,FortuneService {
    getDailyWorkOut():string {
        return"practice your spin bowling";
    }
    getDailyFortune():string {
        return "today is lucky day"
    }
}
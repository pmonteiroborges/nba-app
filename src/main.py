from nba_api.stats.endpoints import playercareerstats
import json
import functools


def main():
    all_json_data = []
    with open('src/assets/player-ids.json', "r") as players:
        player_id = json.loads(players.read())
        for id in player_id:
            career = playercareerstats.PlayerCareerStats(
                per_mode36="PerGame", player_id=id)

            print(f"At ID: {id}")

            all_json_data.append(
                career.career_totals_regular_season.get_json())

    all_json_data = "[" + ",".join(all_json_data) + "]"
    with open("src/assets/player-career-stats.json", "w") as f:
        print(all_json_data, file=f)

    print(all_json_data)


if __name__ == "__main__":
    main()

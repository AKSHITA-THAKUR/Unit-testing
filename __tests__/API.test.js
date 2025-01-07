
import getFirstAlbumTitle from "../component/API.tsx"
import axios from "axios";
jest.mock('axios')

test("Test the mock api and should return itle of album" , async () => {
axios.get.mockResolvedValue({
    data: [
        {
          userId: 1,
          id: 1,
          title: 'My First Album'
        },
        {
          userId: 1,
          id: 2,
          title: 'Album: The Sequel'
        }
      ]
});

const result = await getFirstAlbumTitle();
expect(result).toEqual('My First Album')
})
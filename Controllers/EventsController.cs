using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace DebaserApiReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {

        [HttpGet("[action]")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Events()
        {
            return Content("");
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> GetEvents(SearchOptions SearchOptions)
        {

            //  Build Api Url
            string from = StripDateTimeString(SearchOptions.From);
            string to = StripDateTimeString(SearchOptions.To);
            string venue = SearchOptions.Venue;
            string url = "http://www.debaser.se/api/?method=getevents&format=json";

            url += $"&from={from}&to={to}&venue={venue}";

            using (var client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync(url);

                if (response.IsSuccessStatusCode)
                {
                    string jsondata = await response.Content.ReadAsStringAsync();
                    if (jsondata != "")
                    {
                        return Content(jsondata, "application/json");
                    }
                    else
                    {
                        return StatusCode(404);
                    }

                }
                else
                {
                    return Content("Handle Error");
                }
            }
        }

        private string StripDateTimeString(string date)
        {
            return date.Replace("-", "");

        }
    }

    public class Event
    {
        public int EventId { get; set; }
    }

    public class SearchOptions
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Venue { get; set; }
    }
}
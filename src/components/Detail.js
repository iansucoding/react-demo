import React from 'react';

/*
備註:
  1 .產生 google map icon base64 的網站 : https://icons8.com/icon/32215/google-maps
  2. this is a stateless component
*/

const Detail = (props) => {
  const detail = props.location.state.detail;
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={'https://cloud.culture.tw' + detail.imageUrl}
          alt="Card image cap"
        />
        <div className="card-block">
          <h4 className="card-title">{detail.actName}</h4>
          <p className="card-text">{detail.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {detail.cityName}
            {detail.address}
            <a href={`https://www.google.com/maps/?q=${detail.longitude},${detail.latitude}`} target="_blank">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQWSURBVFhH7dZ7TFNXHAdw/tI/1USNiVuYr5Ggy9RSqVpbmMKqqJE6qDhjTNTERA3CNl+Y6FQ0JjpfGQpifOHYsqozy2KUpxpDixflUVpAwYEiJbzsUFFeP+85Pafe23NaWuj8R7/JNym9he8n5xZK0EeXcrV6lE2r+M6qUSaj2iLClj/Ufj2SXP5weTx79libJizDplV2iwW3dlu1ytM16uljyMv/31RGKqeKo/VuCF7rLepZoeTbPGdc5srg8emGxPGnDdv8reqQfq+wIPwFZ9xT66u0itFkmk3wKcMX4g/u+CzdAIPpkbXf8Ea91qoJO0Xm2aCTkQ7or++Ge40W6Op5C886WyDblg/TL66XIWhDTsaBJXIWM2hWz4RLM6fimucqmOtiu2sXKEYQgjwiaDsdWHPjEPT09cKrnjdQ0FAK5iYbfhz/914Gg7pyVwwzhjA7QibCT186uzNkEhclnpKeEOShoOCMBGjsbIX2rv9AnZ3oGv3qwjoZQtrEJB0zhE6FYmizxOfcX4f+JBCCPBT0rXEboBwtMeKxaefXQpY119X9piwGtOmHhcyQryCxmwlBHgpafC0Fg1JNl/FY+OWN+Gua+/ZqBhS7ZwkzhG4Puk0UkyI+Llazt6xKq9QRgjwUNOXsavx+qWprgEmZq1yj0cat0NvfB1cf3ZVhUCemxYMpWsWMIRQ6FVQeRrxdLTW6ycMJQR7pm/qg+Td8GtXtT/FJodvX2uXAoKXXdjEg1J+TopjBgWrVhu0g82ykoM/TV2BIZ/drDENpee2AjXknGAjqjHNx8MgcAXUJ4dxhXsWPkHJLaOgwMs9GCqJFt2+J+J6a/+ePMOHM97JrtBhTEglgmwdvcudCdRQfIK1lvqpPPJ1pZJofHmigSjG09oxoLkLav/Yl15JZz/EXxMO8tMRCaUkuVGzZwIWgomsncrKKyKzn+APiY/QYc18wg3AnH6wx7Gcbek64UxBYEA/TW5MAdvHj5cFDAYNQS9OOMSD0HLoWMJAnjKPtCXR0dEBTc9N7VHERVMa+/0ip1C/EzwUMxMM0FBvA+rgWY2ilqLLDB1wg9BhDAwHiYZ6YDLBs37+wNPUFlNe2uaHsGCUU5oItQvy3RKxQkBcYkDeMJsWB6w1VGb8Yl2KGBPIFMxCqYmcylG9PGjrIHwwtD/X05j9Qln1haCA+ZoVXDK0T1S5DPZf+9vkLGszJuJd3Uo3Nz10on0GBwNByUXYnyidQ1EV9KoMxxw8KQ4tRda0yVIP9GWQWGgUy6znG29FX5Zi4IWFonagWGepKWX4OmfWcX/MWzXFUaPqdmOUBwdAiVFlds/OEmhv7j5h+V5FZ70m7pVP9ccuQE/PLdUGRWlgUyOqO3xPOmW/n+Iz5lE/xK0FB7wDbdjIpkXO+PQAAAABJRU5ErkJggg==" />
            </a>
          </li>
          <li className="list-group-item">{detail.travellinginfo}</li>
          <li className="list-group-item">
            {detail.startTime} ~
            {detail.endTime}
          </li>
          <li className="list-group-item">
            <a href={detail.website}>{detail.website}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Detail;


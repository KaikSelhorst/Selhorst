interface Project {
  homepage: string;
  html_url: string;
  description: string;
}

function isProject(project: unknown, keys: Array<string>): project is Project {
  if (!project || typeof project !== "object") return false;
  if (keys.filter((key) => key in project).length !== keys.length) return false;
  return true;
}

export default async function (project: string) {
  const URL = `https://api.github.com/repos/KaikSelhorst/${project}`;

  const { data } = await useFetch(URL);

  if (!isProject(data.value, ["homepage", "html_url", "description"])) {
    return { homepage: "/" };
  }

  if (!data.value.homepage)
    return {
      homepage: data.value.html_url,
      description: data.value.description,
    };
  else
    return {
      homepage: data.value.homepage,
      description: data.value.description,
    };
}

import { RouteRecordRaw, RouteComponent } from "vue-router";

export async function extractChildrenComponents(routes: RouteRecordRaw[], parentPath: string): Promise<RouteComponent[]> {
  const parent = routes.find(r => r.path === parentPath);
  if (parent == null) {
    console.warn(`extractChildrenMeta(): no such parentPath '${parentPath}' in routes: `, routes);
    return [];
  }
  console.log("===== parent ====\n", parent);

  if (parent.children == null) {
    console.warn(`extractChildrenMeta(): no children of '${parentPath}': `, parent);
    return []
  }

  const lazyComponents = parent.children.flatMap(c => {
    if (c.path == '') return [];
    if (typeof c.component === 'function') {
      return (c.component as () => Promise<RouteComponent>)();
    }
    console.warn('route component is not a function:', c.component);
    return [];
  });

  return await Promise.all(lazyComponents);
}

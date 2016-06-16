export default [
    { "id": "1", "label": "Dashboard", "icon": "md-view-dashboard", "route": "index" },
    { "id": "99", "label": "系统管理", "icon": "md-settings"/*, "route": "/customer"*/ },
    { "id": "2", "label": "客户管理", "icon": "md-accounts" },
    { "id": "99-1", "label": "用户管理", "parentId": "99", "route": "system.user" },
    { "id": "99-2", "label": "角色管理", "parentId": "99", "route": "system.role" }
];

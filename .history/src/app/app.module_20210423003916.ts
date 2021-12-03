import { NgModule,LOCALE_ID} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ConfirmPopupModule } from "primeng/confirmpopup";
// PrimeNG Components for demos
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

// Application Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';

import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppConfigComponent } from './app.config.component';
import { AppRightPanelComponent } from './app.rightpanel.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
// Demo pages
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
// Demo services
import { CountryService } from './demo/service/countryservice';
import { EventService } from './demo/service/eventservice';
import { NodeService } from './demo/service/nodeservice';
import { CustomerService } from './demo/service/customerservice';
import { PhotoService } from './demo/service/photoservice';
import { ProductService } from './demo/service/productservice';
import { IconService } from './demo/service/iconservice';
// Application services
import { BreadcrumbService } from './breadcrumb.service';
import { MenuService } from './app.menu.service';
import { AppCodeModule } from './app.code.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { FormClientComponent } from './client/form-client/form-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { FormCommandeComponent } from './commande/form-commande/form-commande.component';
import { ListCommandeComponent } from './commande/list-commande/list-commande.component';

import { ArticleService } from './article/article.service';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ToolbarComponent } from './article/toolbar/toolbar.component';

import { ListFournisseurComponent } from './parametre/fournisseur/list-fournisseur/list-fournisseur.component';
import { CreateDepotComponent } from './parametre/depot/create-depot/create-depot.component';
import { ListDepotComponent } from './parametre/depot/list-depot/list-depot.component';
import { CreatFournisseurComponent } from './parametre/fournisseur/creat-fournisseur/creat-fournisseur.component';
import { CreateAgentComponent } from './parametre/agent/create-agent/create-agent.component';
import { ListAgentComponent } from './parametre/agent/list-agent/list-agent.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CreateTransporteurComponent } from './parametre/transporteur/create-transporteur/create-transporteur.component';
import { ListTransporteurComponent } from './parametre/transporteur/list-transporteur/list-transporteur.component';
import { ToolbarCommandeComponent } from './commande/toolBar/toolbar-commande/toolbar-commande.component';
import { EntreStockComponent } from './stock/entrée-stock/entrée-stock.component';
import { TransferInterDepotComponent } from './stock/interDepot/transfer-inter-depot/transfer-inter-depot.component';
import { PdfFactureComponent } from './commande/divers/pdf-facture/pdf-facture.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NgForm } from '@angular/forms';
import { CategoryComponent } from './parametre/category/category.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { SortieStockComponent } from './stock/sortie-stock/sortie-stock.component';
import { PdfStockComponent } from './stock/diver/pdf-stock/pdf-stock.component';
import { ListEntreStockComponent } from './stock/list-entre-stock/list-entre-stock.component';
import { ListSortieStockComponent } from './stock/list-sortie-stock/list-sortie-stock.component';
import { ListTransferInterDepotComponent } from './stock/list-transfer-inter-depot/list-transfer-inter-depot.component';
import { DepotTransformPipe } from './pipe/depot-transform.pipe';
import { FournisseursTransformPipe } from './pipe/fournisseurs-transform.pipe';
import { CategorieTransformPipe } from './pipe/categorie-transform.pipe';
import { UpdateCommandeComponent } from './commande/update-commande/update-commande.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { AuthService } from './Auth/auth.service';
import { TokenService } from './Auth/token.service';
import { AuthGardService } from './Auth/auth-gard.service';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import { RendementComponent } from './parametre/rendement/rendement.component';
import { InventaireComponent } from './stock/inventaire/inventaire.component'
import { HttpInterceptorService } from './Auth/http-interceptor.service';

//C:\new\devCom\src\app\Auth\auth.interceptor.ts
@NgModule({
    imports: [
        // NgForm,
        ConfirmPopupModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputMaskModule,
        InputNumberModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        SelectButtonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        DynamicDialogModule,
        KeyFilterModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppRightPanelComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        DashboardDemoComponent,
        ListArticleComponent,
        FormClientComponent,
        ListClientComponent,
        FormCommandeComponent,
        ListCommandeComponent,

        CreateArticleComponent,
        ToolbarComponent,

        ListFournisseurComponent,
        CreateDepotComponent,
        CreatFournisseurComponent,
        CreateAgentComponent,
        ListAgentComponent,
        ListDepotComponent,
        CreateTransporteurComponent,
        ListTransporteurComponent,
        ToolbarCommandeComponent,
        EntreStockComponent,
        TransferInterDepotComponent,
        PdfFactureComponent,
        CategoryComponent,
        RegisterComponent,
        LoginComponent,
        SortieStockComponent,
        PdfStockComponent,
        ListEntreStockComponent,
        ListSortieStockComponent,
        ListTransferInterDepotComponent,
        DepotTransformPipe,
        FournisseursTransformPipe,
        CategorieTransformPipe,
        UpdateCommandeComponent,
        UpdateArticleComponent,
        MenusDemoComponent,
        RendementComponent,
        InventaireComponent,

    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, BreadcrumbService, ArticleService,
        AuthService,
        TokenService,
        AuthGardService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true, }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-secondary mb-4 border-b border-gray-100 pb-2">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-600 leading-relaxed">{children}</p>;
}

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
              ← Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-4">
              Política de Privacidad
            </h1>
            <p className="mt-3 text-gray-500 text-sm">
              Última actualización: 2022 · Viaweb S.A.S. · CUIT 30-71739553-7
            </p>
          </div>

          <div className="space-y-10">
            <Section title="1. INTRODUCCIÓN">
              <P>
                1.1 La presente Política de Privacidad (en adelante la &ldquo;Política de Privacidad&rdquo;) se integra con los Términos y Condiciones disponibles en www.viaweb.net.ar/terminos-de-uso y se aplicarán a los Usuarios del Sitio, estén o no debidamente registrados.
              </P>
              <P>
                1.2 La Empresa podrá modificar la Política de Privacidad en cualquier momento. Las nuevas versiones serán notificadas mediante: (i) publicación en www.viaweb.net.ar/politicas-de-privacidad, y/o (ii) por mensaje de correo electrónico dirigido al Usuario.
              </P>
              <P>
                1.3 El Usuario acepta que será dado por notificado de cualquier modificación a la Política de Privacidad una vez que la Empresa hubiera publicado las mismas, y que la continuación en el uso de los Servicios se considerará como aceptación de dichas modificaciones.
              </P>
            </Section>

            <Section title="2. RECOLECCIÓN DE INFORMACIÓN DE LOS USUARIOS">
              <P>
                2.1 El Usuario reconoce y acepta que la Empresa pueda recolectar información al momento de registrarse en el Sitio, tales como su nombre, apellido y correo electrónico, como así también de aquellas personas que escriban a contacto@viaweb.net.ar o que completen nuestras encuestas en el Sitio (en adelante los &ldquo;Datos&rdquo;). Los Datos serán almacenados en una base de datos de propiedad de la Empresa y serán tratados en forma confidencial.
              </P>
              <P>
                2.2 La Empresa no almacenará ni recopilará la información y datos de los medios de pago de los Usuarios, como ser números de tarjetas de crédito o cuentas bancarias. Dicha información será almacenada por Gateways de pago externos provistos por otras compañías, no teniendo la Empresa acceso a la misma.
              </P>
            </Section>

            <Section title="3. FINALIDAD DE LOS DATOS">
              <P>
                3.1 Los Datos suministrados por el Usuario serán utilizados con la siguiente finalidad:
              </P>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                <li>Identificación del Usuario</li>
                <li>Facturación y cobro del servicio contratado</li>
                <li>Posibilidad de dar acceso al Servicio</li>
                <li>Contar con un teléfono o dirección de correo electrónico para contactarse con el Usuario</li>
                <li>Envío de información promocional de productos o servicios de la Empresa, a través de Newsletters. El Usuario podrá solicitar ser eliminado de dichas listas en cualquier momento.</li>
              </ul>
              <P>
                3.2 La información que provea el Usuario podrá ser utilizada por la Empresa para el intercambio de datos entre clientes del Usuario y otros Usuarios a los fines de brindar los Servicios con mayor eficacia.
              </P>
              <P>
                3.3 Como parte del proceso de venta a través de la Tienda, los Usuarios recibirán información de sus clientes. Al registrarse y aceptar los Términos y Condiciones, los Usuarios prestan su consentimiento expreso para que dicha información sea utilizada únicamente con el fin de ofrecer sus productos o servicios.
              </P>
              <P>
                3.4 La Empresa podrá compartir la información con otras empresas de servicios a los fines de mejorar la calidad de los servicios. La Empresa empeñará sus mejores esfuerzos en que la privacidad de la información sea respetada.
              </P>
              <P>
                3.5 La Empresa utilizará los Datos provistos por el Usuario y no los divulgará salvo que sea solicitada por tribunales u organismos estatales nacionales o internacionales que así lo requieran.
              </P>
              <P>
                3.6 La Empresa no estará obligada a retener la información durante ningún plazo establecido y dispondrá la eliminación de la misma cuando lo juzgue conveniente.
              </P>
              <P>
                3.7 El Sitio podrá contener enlaces a otros sitios de internet que no sean propiedad de la Empresa. La Empresa no será responsable por el actuar de dichos sitios, a los cuales no se aplicará la presente Política de Privacidad.
              </P>
              <P>
                3.8 La Empresa es propietaria de todas las bases de datos y dispositivos de almacenamiento. Sin embargo, la Empresa no es dueña de la información que los Usuarios almacenan en el Sitio; los Usuarios tienen todos los derechos sobre dicha información.
              </P>
            </Section>

            <Section title="4. MENORES DE EDAD">
              <P>
                4.1 El Sitio y/o los Servicios están permitidos sólo a quienes tengan edad legal para contratar. Los menores de 18 años no tienen permitido el ingreso al Sitio ni el suministro de ningún dato personal u otro tipo de información.
              </P>
            </Section>

            <Section title="5. CONFIDENCIALIDAD Y SEGURIDAD DE LA INFORMACIÓN">
              <P>
                5.1 La Empresa ha adoptado medidas de seguridad razonables para proteger la información de los Usuarios e impedir el acceso no autorizado a sus datos. La información recolectada será mantenida de manera estrictamente confidencial. El acceso a los datos personales está restringido a aquellos empleados, contratistas y representantes de la Empresa que necesitan conocer tales datos para operar, desarrollar o mejorar los Servicios.
              </P>
              <P>
                5.2 El software utilizado por la Empresa para proteger los datos es protocolo SSL con claves de 256 bits para encriptar las comunicaciones y encriptación bcrypt para almacenar las contraseñas en la base de datos.
              </P>
            </Section>

            <Section title="6. CESIÓN DE LOS DATOS">
              <P>
                La Empresa no venderá, alquilará ni compartirá los Datos de los Usuarios salvo aquellos casos expresamente previstos en las Políticas de Privacidad. No obstante ello, el Usuario presta su expresa conformidad para que la Empresa transfiera total o parcialmente los datos del Usuario a cualquiera de sus sociedades controladas, controlantes y/o vinculadas.
              </P>
            </Section>

            <Section title="7. COOKIES">
              <P>
                7.1 El Usuario reconoce y acepta que el Sitio podrá utilizar cookies para brindar un servicio más completo, recordando sus preferencias. La información que recopile la Empresa podrá incluir el comportamiento de navegación, dirección IP, logs, y otros tipos de información. Sin embargo, la Empresa no recolectará información personal identificable de manera directa usando cookies o tags.
              </P>
              <P>
                7.2 La mayoría de los navegadores están configurados para aceptar cookies, pero los Usuarios podrán reconfigurar su navegador para rechazarlas. Sin embargo, si las cookies están inhabilitadas, es posible que algunas características y servicios no funcionen de manera adecuada.
              </P>
              <P>
                7.3 Los Usuarios podrán optar por que su navegador no sea identificado por los Servicios, acudiendo a la sección de ayuda de su navegador.
              </P>
            </Section>

            <Section title="8. DERECHO AL ACCESO, CANCELACIÓN Y RECTIFICACIÓN DE LOS DATOS">
              <P>
                8.1 Los usuarios tendrán derecho a hacer uso responsable de su cuenta. En cualquier momento, el Usuario podrá solicitar la baja como Usuario y la eliminación de su cuenta e información de la base de datos de la Empresa, como así también acceder y actualizar sus datos personales. Para Usuarios residentes en Argentina, el titular de los datos personales tiene la facultad de ejercer el derecho de acceso en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto. La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
              </P>
              <P>
                8.2 El Usuario deberá enviar su Solicitud mediante correo electrónico con el asunto &ldquo;Acceso a Datos Personales&rdquo; a contacto@viaweb.net.ar. La Empresa podrá requerir que el Usuario se identifique y que precise los datos personales a los cuales desea acceder, rectificar o remover.
              </P>
            </Section>

            <Section title="9. CONTACTO">
              <P>
                9.1 En caso que el Usuario tenga alguna duda acerca de la Política de Privacidad, deberá ponerse en contacto con la Empresa vía correo electrónico a contacto@viaweb.net.ar. VIAWEB S.A.S., C.U.I.T. N° 30-71739553-7, con domicilio en Av. Roca 1884, Local 1, General Roca, Río Negro, Argentina.
              </P>
            </Section>
          </div>

          <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              ¿Tenés preguntas sobre esta política?{' '}
              <a href="mailto:contacto@viaweb.net.ar" className="text-primary font-medium hover:underline">
                Contactanos
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

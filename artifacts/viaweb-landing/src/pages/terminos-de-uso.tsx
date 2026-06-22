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

export default function TerminosDeUso() {
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
              Términos de Uso
            </h1>
            <p className="mt-3 text-gray-500 text-sm">
              Última actualización: 2022 · Viaweb S.A.S. · CUIT 30-71739553-7
            </p>
          </div>

          <div className="space-y-10">
            <Section title="1. ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES">
              <P>
                1.1 Los presentes términos y condiciones (en adelante los &ldquo;Términos y Condiciones&rdquo;) tienen carácter vinculante y obligatorio. Los mismos son aplicados a la utilización de los servicios (en adelante los &ldquo;Servicios&rdquo;) ofrecidos o puestos a disposición de los usuarios de internet por VIAWEB, con domicilio en Av. Roca 1884, Local 1, General Roca, Río Negro, Argentina (en adelante la &ldquo;Empresa&rdquo;), a través del sitio de internet www.viaweb.net.ar (en adelante &ldquo;Viaweb&rdquo; o el &ldquo;Sitio&rdquo;).
              </P>
              <P>
                1.2 La utilización de los Servicios atribuye la condición de usuario del Sitio (en adelante el «Usuario») e implica la aceptación expresa, plena y sin reservas, de todas y cada una de las cláusulas de los Términos y Condiciones en la versión publicada por la Empresa en el momento mismo en que el Usuario utilice los Servicios. En caso de no estar de acuerdo con los Términos y Condiciones deberá abstenerse de utilizar los Servicios.
              </P>
              <P>
                1.3 La utilización de los Servicios se encuentra sometida a todos los avisos, reglamentos de uso, instrucciones, políticas de privacidad, términos y condiciones complementarias, presentes o que en el futuro pueda publicar la Empresa en el sitio www.viaweb.net.ar.
              </P>
              <P>
                1.4 La Empresa podrá modificar los Términos y Condiciones en cualquier momento, notificando dichas modificaciones mediante: (i) publicación de la última versión actualizada y vigente en www.viaweb.net.ar/terminos-de-uso, y/o (ii) por mensaje de correo electrónico dirigido al Usuario.
              </P>
            </Section>

            <Section title="2. REGISTRACIÓN">
              <P>
                2.1 Los Servicios de la Empresa son de acceso restringido; sólo podrán acceder aquellos Usuarios que se registren completando todos los campos obligatorios del formulario de registración (en adelante el &ldquo;Formulario&rdquo;), con datos auténticos y actuales.
              </P>
              <P>
                2.2 Al completar el Formulario, el Usuario acepta proveer información verdadera, cierta, correcta, actualizada y completa (en adelante los &ldquo;Datos de Registro&rdquo;). En caso que el Usuario provea información falsa o incompleta, la Empresa tendrá el derecho de suspender o terminar la posibilidad del Usuario de utilizar los Servicios.
              </P>
              <P>
                2.3 Una vez completado el Formulario se le informará al Usuario la aceptación y el registro de su cuenta (en adelante la &ldquo;Cuenta&rdquo;) vía correo electrónico.
              </P>
              <P>
                2.4 El Usuario deberá tener capacidad legal para contratar y no encontrarse bajo ningún impedimento legal o de hecho para contratar.
              </P>
              <P>
                2.5 El Usuario se obliga a preservar la confidencialidad de su contraseña y será responsable por el acceso a los Servicios y las operaciones que se realicen con su Cuenta.
              </P>
              <P>
                2.6 El Usuario se obliga a notificar inmediatamente a la Empresa cualquier uso no autorizado o robo de su contraseña o cualquier otra violación a la seguridad.
              </P>
              <P>
                2.7 La Empresa podrá, a su exclusivo arbitrio, dar de baja temporal o permanentemente las Cuentas de aquellos Usuarios que violen los Términos y Condiciones y/o la Política de Privacidad.
              </P>
            </Section>

            <Section title="3. UTILIZACIÓN DE LOS SERVICIOS">
              <P>
                3.1 Una vez registrado en el Sitio, el Usuario podrá hacer uso de los Servicios, según el abono o plan seleccionado, consistente en:
              </P>
              <P>
                <strong>Tienda Virtual:</strong> Dar de alta una tienda virtual con capacidad de poner a disposición del público la venta de productos o servicios sin necesidad de contratar un servicio de hosting, en la medida que el contenido se ajuste a los presentes Términos y Condiciones.
              </P>
              <P>
                <strong>Panel de Administración:</strong> El Usuario podrá administrar sus productos, cargar y modificar fotografías, descripciones y precios a través de un panel de administración.
              </P>
              <P>
                <strong>Sistema de &ldquo;Carrito de Compras&rdquo;:</strong> Sistema que permite a los visitantes seleccionar los productos de su interés e informar en forma detallada todos los pasos necesarios para formalizar la compra.
              </P>
              <P>
                <strong>Aceptación de pagos:</strong> La Empresa otorga la posibilidad de aceptar pagos a través de distintos medios de pago habilitados. La Empresa no tiene ninguna intervención en el procesamiento de pagos ni acceso a datos de titulares de tarjetas de crédito.
              </P>
              <P>
                <strong>Servicio de envío:</strong> La Tienda podrá contar con un servicio de envío prestado por terceros. El Usuario acepta que la Empresa no es responsable por demoras o errores en el envío.
              </P>
            </Section>

            <Section title="4. PRECIO Y PAGO DEL SERVICIO">
              <P>
                4.1 El precio por la utilización del Servicio seleccionado son aquellos precios vigentes y actualizados informados en el Sitio. Los precios podrán ser modificados en cualquier momento y serán comunicados en forma previa a su entrada en vigencia.
              </P>
              <P>
                4.2 Cualquier pago online por el Servicio se realizará a través de Gateways de pago externos o por transferencias bancarias. La Empresa no se responsabiliza por inconvenientes, daños o pérdidas que puedan ocurrir durante el proceso de pago.
              </P>
              <P>
                4.3 El Usuario deberá pagar el precio en los plazos y forma detallados en el Sitio. La mora se producirá por el mero vencimiento del plazo, facultando a la Empresa a dar de baja la cuenta del Usuario.
              </P>
              <P>
                4.4 Una vez abonado el Servicio, la Empresa emitirá la factura correspondiente. Las facturas se emiten el último día del mes en el que se realiza el pago y se pueden visualizar en el administrador de la tienda entre el 1 y el 5 día del mes siguiente. Se realizan facturas C por defecto; para requerir factura A, el usuario debe ser Responsable Inscripto y registrar sus datos en el administrador.
              </P>
            </Section>

            <Section title="5. OBLIGACIONES Y DEBERES DEL USUARIO">
              <P>
                5.1 El Usuario se compromete a utilizar los Servicios de conformidad a la ley aplicable, estos Términos y Condiciones, la Política de Privacidad, así como con la moral, buenas costumbres y el orden público.
              </P>
              <P>
                5.2 En especial, el Usuario se obliga a abstenerse de realizar cualquiera de los siguientes actos:
              </P>
              <P>
                <strong>Queda prohibido:</strong> Utilizar los Servicios para violar cualquier ley aplicable; transmitir información que viole leyes o regulaciones; acceder a los Servicios utilizando un nombre falso o inexistente; o enviar material que el Usuario no tenga derecho a transmitir conforme a las leyes.
              </P>
              <P>
                <strong>Queda prohibido:</strong> Violar o alterar los sistemas de autenticación, verificación de identidad y seguridad de los Servicios; intentar acceder a datos o cuentas sin autorización; o efectuar cualquier tipo de monitoreo que implique la intercepción de información no destinada al Usuario.
              </P>
              <P>
                <strong>Queda prohibido:</strong> Reproducir, duplicar, copiar, vender, revender o explotar, total o parcialmente el Servicio y/o su contenido sin el consentimiento expreso y por escrito de la Empresa.
              </P>
              <P>
                <strong>Queda prohibido:</strong> Remover la leyenda «Crea tu Tienda Online con Viaweb», o leyenda equivalente que figure en el diseño o plantilla escogida por el Usuario.
              </P>
            </Section>

            <Section title="6. LIMITACIÓN DE RESPONSABILIDAD POR LOS SERVICIOS">
              <P>
                6.1 La Empresa no garantiza la disponibilidad y continuidad del funcionamiento de los Servicios, ni garantiza la utilidad de los Servicios para la realización de ninguna actividad en particular. La Empresa excluye cualquier responsabilidad por los daños originados en forma directa, indirecta o remota, por la interrupción o falta de disponibilidad de los Servicios.
              </P>
              <P>
                6.2 El Usuario reconoce y acepta que la Empresa no participa ni interviene en el contenido publicado por el Usuario en la Tienda. El Usuario garantiza que dicho contenido es de su propiedad y/o cuenta con las autorizaciones y licencias necesarias.
              </P>
              <P>
                6.3 El Usuario declara y acepta que al publicar contenido en su cuenta, otros usuarios de Internet pueden verla, autorizando a la Empresa a mostrar dichos contenidos en Internet y almacenarlos en sus bases de datos.
              </P>
              <P>
                6.4 El Usuario será el único responsable de la información brindada en la Tienda y del cumplimiento de las obligaciones asumidas, tales como la calidad, funcionamiento, propiedad, entrega y garantía de los productos o servicios promocionados.
              </P>
              <P>
                6.5 En la medida máxima permitida por las leyes aplicables, la Empresa no estará obligada a realizar reembolsos y/o indemnizaciones al Usuario y terceras personas, ni asume garantía alguna por la información y/u obligaciones asumidas por el Usuario en la Tienda.
              </P>
            </Section>

            <Section title="7. PROPIEDAD INTELECTUAL. DERECHOS RESERVADOS">
              <P>
                7.1 Todos los derechos del sitio web referido están reservados y pertenecen a la Empresa.
              </P>
              <P>
                7.2 El contenido del Sitio, así como la marca Viaweb, el software, la base de datos y los diseños en general son propiedad de la Empresa y se encuentran protegidos por la legislación nacional e internacional vigente sobre la propiedad intelectual.
              </P>
              <P>
                7.3 La reproducción total o parcial sin autorización de la Empresa y/o el uso indebido de los contenidos presentes está totalmente prohibida.
              </P>
            </Section>

            <Section title="8. NOTIFICACIONES Y CANCELACIÓN DE LA CUENTA">
              <P>
                8.1 Para realizar notificaciones referidas al Sitio y/o Servicio, como así también la cancelación sin costo alguno de la cuenta y Servicio, el Usuario tendrá que dirigirse por escrito al correo electrónico contacto@viaweb.net.ar o a su domicilio legal antes mencionado.
              </P>
            </Section>

            <Section title="9. JURISDICCIÓN Y LEGISLACIÓN APLICABLE">
              <P>
                9.1 Todos los ítems de estos Términos y Condiciones están regidos por las leyes vigentes en la República Argentina. En Argentina: VIAWEB S.A.S., C.U.I.T. N° 30-71739553-7, con domicilio en Av. Roca 1884, Local 1, General Roca, Río Negro, Argentina.
              </P>
            </Section>
          </div>

          <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              ¿Tenés preguntas sobre estos términos?{' '}
              <a
                href="mailto:contacto@viaweb.net.ar"
                className="text-primary font-medium hover:underline"
              >
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
